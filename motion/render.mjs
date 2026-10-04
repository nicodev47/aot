import { chromium } from 'playwright-core';
import fs from 'fs';
import { spawn } from 'child_process';
const mode = process.argv[2];
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
p.on('pageerror', e => { console.error('PAGEERROR', e.message); process.exit(1); });
await p.goto('file://' + process.cwd() + '/index.html');
const fonts = { 400: 'inter-latin-400-normal.woff2', 700: 'inter-latin-700-normal.woff2' };
for (const [w, f] of Object.entries(fonts)) {
  const data = fs.readFileSync('node_modules/@fontsource/inter/files/' + f).toString('base64');
  await p.evaluate(async ([w, data]) => {
    const buf = Uint8Array.from(atob(data), c => c.charCodeAt(0)).buffer;
    const ff = new FontFace('Inter', buf, { weight: w }); await ff.load(); document.fonts.add(ff);
  }, [w, data]);
}
const grab = async t => Buffer.from((await p.evaluate(t => { window.render(t); return document.getElementById('c').toDataURL('image/png'); }, t)).split(',')[1], 'base64');
if (mode === 'stills') {
  fs.mkdirSync('stills', { recursive: true });
  for (const t of [2.4, 7.5, 12.8, 17.2, 22.3, 27.2, 31.0]) fs.writeFileSync(`stills/t${t}.png`, await grab(t));
} else {
  const ff = spawn('ffmpeg', ['-y', '-v', 'error', '-f', 'image2pipe', '-framerate', '30', '-i', '-', '-c:v', 'libx264', '-crf', '24', '-preset', 'slow', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', 'hero-new.mp4'], { stdio: ['pipe', 'inherit', 'inherit'] });
  const N = 32 * 30;
  for (let i = 0; i < N; i++) { if (!ff.stdin.write(await grab(i / 30))) await new Promise(r => ff.stdin.once('drain', r)); }
  ff.stdin.end(); await new Promise(r => ff.on('close', r));
}
await b.close();
