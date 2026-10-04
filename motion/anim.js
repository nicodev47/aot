// Eclipse Trading Club - hero motion graphics. Deterministic: window.render(t) draws frame at time t (seconds).
const W = 1920, H = 1080, DUR = 32;
const ACC = '#FF5C00';
const cv = document.getElementById('c');
cv.width = W; cv.height = H;
const ctx = cv.getContext('2d');

const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const prog = (t, a, b) => clamp((t - a) / (b - a));
const eo = x => 1 - Math.pow(1 - x, 3);
const eio = x => (x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
const eob = x => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2); };
const lerp = (a, b, t) => a + (b - a) * t;

function rng(seed) {
  return () => {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---------- drawing helpers ----------
function txt(s, x, y, o = {}) {
  const { size = 40, weight = 400, color = '#fff', align = 'left', alpha = 1, ls = 0, base = 'alphabetic' } = o;
  ctx.save();
  ctx.globalAlpha *= alpha;
  ctx.font = `${weight} ${size}px Inter`;
  ctx.fillStyle = color;
  ctx.textAlign = align;
  ctx.textBaseline = base;
  ctx.letterSpacing = ls + 'px';
  ctx.fillText(s, x, y);
  ctx.restore();
}
function measure(s, size, weight) {
  ctx.save(); ctx.font = `${weight} ${size}px Inter`; ctx.letterSpacing = '0px';
  const w = ctx.measureText(s).width; ctx.restore(); return w;
}
function rr(x, y, w, h, r) {
  ctx.beginPath(); ctx.roundRect(x, y, w, h, r);
}
function card(x, y, w, h, o = {}) {
  ctx.save();
  rr(x, y, w, h, o.r ?? 28);
  ctx.fillStyle = o.fill ?? 'rgba(255,255,255,.04)'; ctx.fill();
  ctx.lineWidth = 2; ctx.strokeStyle = o.stroke ?? 'rgba(255,255,255,.10)'; ctx.stroke();
  ctx.restore();
}
function glow(x, y, r, color, a) {
  const g = ctx.createRadialGradient(x, y, 0, x, y, r);
  g.addColorStop(0, color.replace('A', a)); g.addColorStop(1, color.replace('A', 0));
  ctx.fillStyle = g; ctx.fillRect(x - r, y - r, r * 2, r * 2);
}
function logo(x, y, r) {
  ctx.save();
  ctx.fillStyle = ACC; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#060606'; ctx.beginPath(); ctx.arc(x + r * .32, y - r * .22, r * .86, 0, Math.PI * 2); ctx.fill();
  ctx.restore();
}

// ---------- background ----------
function background(t) {
  ctx.fillStyle = '#060606'; ctx.fillRect(0, 0, W, H);
  ctx.save();
  const gx = 1500 + Math.sin(t * .35) * 180, gy = 380 + Math.cos(t * .28) * 140;
  glow(gx, gy, 760, 'rgba(255,92,0,A)', .16);
  glow(300 + Math.cos(t * .3) * 120, 900, 620, 'rgba(255,92,0,A)', .07);
  ctx.strokeStyle = 'rgba(255,255,255,.035)'; ctx.lineWidth = 1;
  const off = (t * 10) % 90;
  ctx.beginPath();
  for (let x = -off; x < W; x += 90) { ctx.moveTo(x, 0); ctx.lineTo(x, H); }
  for (let y = 0; y < H; y += 90) { ctx.moveTo(0, y); ctx.lineTo(W, y); }
  ctx.stroke();
  const v = ctx.createRadialGradient(W / 2, H / 2, H * .45, W / 2, H / 2, H * 1.05);
  v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(1, 'rgba(0,0,0,.65)');
  ctx.fillStyle = v; ctx.fillRect(0, 0, W, H);
  ctx.restore();
}

// ---------- candles ----------
function buildCandles(n, seed, drift, vol, start = 100) {
  const r = rng(seed); const out = []; let p = start;
  for (let i = 0; i < n; i++) {
    const o = p; const c = o + (r() - .5) * vol + drift;
    const h = Math.max(o, c) + r() * vol * .55, l = Math.min(o, c) - r() * vol * .55;
    out.push({ o, h, l, c }); p = c;
  }
  return out;
}
function drawCandles(cs, x, y, w, h, progress, lo, hi, o = {}) {
  const n = cs.length, step = w / n, bw = step * .56;
  const sy = v => y + h - ((v - lo) / (hi - lo)) * h;
  const shown = progress * n;
  for (let i = 0; i < n; i++) {
    const k = clamp(shown - i); if (k <= 0) continue;
    const c = cs[i], up = c.c >= c.o;
    const cx = x + step * i + step / 2;
    ctx.save(); ctx.globalAlpha *= (o.alpha ?? 1) * clamp(k * 2);
    const col = up ? '#ffffff' : '#6d6d74';
    ctx.strokeStyle = col; ctx.fillStyle = col; ctx.lineWidth = Math.max(2, bw * .12);
    const hh = lerp(c.o, c.h, 1), ll = lerp(c.o, c.l, 1);
    const cc = lerp(c.o, c.c, eo(k));
    ctx.beginPath(); ctx.moveTo(cx, sy(hh * k + c.o * (1 - k))); ctx.lineTo(cx, sy(ll * k + c.o * (1 - k))); ctx.stroke();
    const top = sy(Math.max(c.o, cc)), bot = sy(Math.min(c.o, cc));
    ctx.fillRect(cx - bw / 2, top, bw, Math.max(3, bot - top));
    ctx.restore();
  }
  return { sy, step };
}

// ---------- scene scaffolding ----------
const LX = 140;
function label(num, name, lt) {
  const a = eo(prog(lt, .15, .7));
  ctx.save(); ctx.globalAlpha *= a;
  ctx.fillStyle = ACC; ctx.fillRect(LX, 318, 56 * a, 4);
  txt(`${num}  ${name}`, LX + 76, 328, { size: 24, weight: 700, color: ACC, ls: 4 });
  ctx.restore();
}
function title(lines, lt, y0 = 430) {
  lines.forEach((ln, i) => {
    const a = eo(prog(lt, .3 + i * .18, .9 + i * .18));
    ctx.save(); ctx.globalAlpha *= a; ctx.translate(0, (1 - a) * 36);
    let x = LX;
    ln.forEach(part => {
      const [s, accent] = Array.isArray(part) ? part : [part, false];
      txt(s, x, y0 + i * 92, { size: 80, weight: 700, color: accent ? ACC : '#fff' });
      x += measure(s, 80, 700);
    });
    ctx.restore();
  });
}

// ---------- scenes ----------
const hookC = buildCandles(70, 7, .55, 7, 40);
function sHook(lt) {
  const lo = Math.min(...hookC.map(c => c.l)) - 4, hi = Math.max(...hookC.map(c => c.h)) + 4;
  ctx.save(); ctx.globalAlpha *= .22;
  drawCandles(hookC, 80, 700, W - 160, 300, prog(lt, .1, 3.0), lo, hi);
  ctx.restore();
  const lines = [['Costruisci', 'un', 'processo'], ['che', 'sai', 'riconoscere,'], ['eseguire', 'e', 'replicare.']];
  let wi = 0;
  lines.forEach((ws, li) => {
    const full = ws.join(' ');
    const total = measure(full, 92, 700);
    let x = W / 2 - total / 2;
    ws.forEach(w => {
      const a = eo(prog(lt, .25 + wi * .11, .8 + wi * .11));
      ctx.save(); ctx.globalAlpha *= a; ctx.translate(0, (1 - a) * 34);
      txt(w, x, 480 + li * 112, { size: 92, weight: 700, color: w === 'replicare.' ? ACC : '#fff' });
      ctx.restore();
      x += measure(w + ' ', 92, 700); wi++;
    });
  });
}

const lessons = ['I concetti principali', 'Esempi pratici', 'Modelli d’ingresso', 'Sessioni di backtest'];
function sCourse(lt) {
  label('01', 'IL CORSO', lt);
  title([['Corso completo'], [['step-by-step', true]]], lt);
  const x = 1000, y = 220, w = 780, h = 600;
  const a = eo(prog(lt, .2, .8));
  ctx.save(); ctx.globalAlpha *= a; ctx.translate((1 - a) * 60, 0);
  card(x, y, w, h);
  const bar = prog(lt, 1.0, 4.3);
  txt('PROGRAMMA', x + 48, y + 74, { size: 22, weight: 700, color: '#8a8a92', ls: 4 });
  txt(Math.round(bar * 100) + '%', x + w - 48, y + 76, { size: 34, weight: 700, color: ACC, align: 'right' });
  lessons.forEach((s, i) => {
    const t0 = .7 + i * .8, ra = eo(prog(lt, t0, t0 + .5));
    const ry = y + 130 + i * 98;
    ctx.save(); ctx.globalAlpha *= ra; ctx.translate((1 - ra) * 50, 0);
    card(x + 36, ry, w - 72, 80, { r: 20, fill: 'rgba(255,255,255,.035)', stroke: 'rgba(255,255,255,.07)' });
    const ck = eob(prog(lt, t0 + .5, t0 + .9));
    ctx.beginPath(); ctx.arc(x + 88, ry + 40, 22, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255,255,255,.25)'; ctx.lineWidth = 3; ctx.stroke();
    if (ck > 0) {
      ctx.fillStyle = ACC; ctx.beginPath(); ctx.arc(x + 88, ry + 40, 22 * clamp(ck, 0, 1.1), 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#fff'; ctx.lineWidth = 4; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      const k = prog(lt, t0 + .6, t0 + .9);
      ctx.beginPath(); ctx.moveTo(x + 78, ry + 41);
      if (k < .5) ctx.lineTo(lerp(x + 78, x + 85, k * 2), lerp(ry + 41, ry + 48, k * 2));
      else { ctx.lineTo(x + 85, ry + 48); ctx.lineTo(lerp(x + 85, x + 99, (k - .5) * 2), lerp(ry + 48, ry + 33, (k - .5) * 2)); }
      ctx.stroke();
    }
    txt(s, x + 136, ry + 51, { size: 32, weight: 400 });
    txt('0' + (i + 1), x + w - 84, ry + 50, { size: 24, weight: 700, color: '#5d5d65', align: 'right' });
    ctx.restore();
  });
  const bx = x + 48, bw = w - 96, by = y + h - 56;
  rr(bx, by, bw, 12, 6); ctx.fillStyle = 'rgba(255,255,255,.08)'; ctx.fill();
  rr(bx, by, Math.max(12, bw * bar), 12, 6); ctx.fillStyle = ACC; ctx.fill();
  ctx.restore();
}

// Trade setup chart
const pre = buildCandles(30, 21, -.05, 5, 100);
const entryP = pre[29].c;
const slP = Math.min(...pre.slice(21).map(c => c.l)) - 1.2;
const tpP = entryP + (entryP - slP) * 2.2;
const post = (() => {
  const r = rng(5), out = []; let p = entryP;
  for (let i = 0; i < 13; i++) {
    const target = lerp(entryP, tpP + 0.5, eio((i + 1) / 13));
    const c = target + (r() - .5) * (entryP - slP) * .28; const o = p;
    out.push({ o, h: Math.max(o, c) + r() * 1.6, l: Math.min(o, c) - r() * 1.6, c }); p = c;
  }
  return out;
})();
post[12].c = tpP; post[12].h = Math.max(post[12].h, tpP + .3);
const setupC = pre.concat(post);
function sSetup(lt) {
  label('02', 'MODELLI D’INGRESSO', lt);
  title([['Modelli d’ingresso'], [['e schematiche', true]]], lt);
  const x = 980, y = 200, w = 810, h = 620;
  const a = eo(prog(lt, .2, .8));
  ctx.save(); ctx.globalAlpha *= a; ctx.translate((1 - a) * 60, 0);
  card(x, y, w, h);
  const px = x + 36, pw = w - 72, py = y + 110, ph = h - 160;
  txt('NASDAQ', x + 40, y + 62, { size: 22, weight: 700, color: '#8a8a92', ls: 4 });
  const lo = slP - 3, hi = tpP + 4;
  const sy0 = v => py + ph - ((v - lo) / (hi - lo)) * ph;
  const step = pw / setupC.length;
  const pre_p = prog(lt, .5, 2.4);
  const post_p = prog(lt, 4.1, 5.6);
  drawCandles(pre, px, py, step * 30, ph, pre_p, lo, hi);
  // zones start at candle 29
  const zx = px + step * 29.5, zw = px + pw - zx;
  const zEntry = eo(prog(lt, 2.6, 3.1));
  const zSl = eo(prog(lt, 3.1, 3.6));
  const zTp = eo(prog(lt, 3.5, 4.1));
  if (zTp > 0) {
    const t0 = sy0(tpP), e0 = sy0(entryP);
    ctx.fillStyle = 'rgba(255,92,0,.16)'; ctx.fillRect(zx, e0 - (e0 - t0) * zTp, zw, (e0 - t0) * zTp);
    ctx.strokeStyle = ACC; ctx.lineWidth = 2; ctx.setLineDash([10, 8]);
    ctx.beginPath(); ctx.moveTo(zx, t0); ctx.lineTo(zx + zw * zTp, t0); ctx.stroke(); ctx.setLineDash([]);
    txt('TAKE PROFIT', zx + zw - 12, t0 + 32, { size: 20, weight: 700, color: ACC, align: 'right', ls: 2, alpha: zTp });
  }
  if (zSl > 0) {
    const s0 = sy0(slP), e0 = sy0(entryP);
    ctx.fillStyle = 'rgba(255,255,255,.07)'; ctx.fillRect(zx, e0, zw, (s0 - e0) * zSl);
    ctx.strokeStyle = 'rgba(255,255,255,.55)'; ctx.lineWidth = 2; ctx.setLineDash([10, 8]);
    ctx.beginPath(); ctx.moveTo(zx, s0); ctx.lineTo(zx + zw * zSl, s0); ctx.stroke(); ctx.setLineDash([]);
    txt('STOP LOSS', zx + zw - 12, s0 - 14, { size: 20, weight: 700, color: '#bdbdc4', align: 'right', ls: 2, alpha: zSl });
  }
  if (zEntry > 0) {
    const e0 = sy0(entryP);
    ctx.strokeStyle = '#fff'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(zx - 20, e0); ctx.lineTo(zx - 20 + (zw + 20) * zEntry, e0); ctx.stroke();
    ctx.save(); ctx.globalAlpha *= zEntry;
    rr(zx - 20, e0 - 18, 96, 36, 10); ctx.fillStyle = '#fff'; ctx.fill();
    txt('ENTRY', zx + 28, e0 + 7, { size: 19, weight: 700, color: '#060606', align: 'center', ls: 2 });
    ctx.restore();
  }
  // post candles drawn with offset
  ctx.save();
  const cs2 = post; const n2 = cs2.length;
  const stepPx = step, bw = stepPx * .56;
  for (let i = 0; i < n2; i++) {
    const k = clamp(post_p * n2 - i); if (k <= 0) continue;
    const c = cs2[i], up = c.c >= c.o, cx = px + step * (30 + i) + step / 2;
    ctx.globalAlpha = a * clamp(k * 2);
    ctx.strokeStyle = ctx.fillStyle = up ? '#fff' : '#6d6d74'; ctx.lineWidth = Math.max(2, bw * .12);
    ctx.beginPath(); ctx.moveTo(cx, sy0(c.h)); ctx.lineTo(cx, sy0(c.l)); ctx.stroke();
    const cc = lerp(c.o, c.c, eo(k));
    const top = sy0(Math.max(c.o, cc)), bot = sy0(Math.min(c.o, cc));
    ctx.fillRect(cx - bw / 2, top, bw, Math.max(3, bot - top));
  }
  ctx.restore();
  const b = eob(prog(lt, 5.5, 6.0));
  if (b > 0 && lt < 99) {
    const bx = px + pw - 120, by = sy0(tpP) + 70;
    ctx.save(); ctx.translate(bx, by); ctx.scale(b, b);
    rr(-70, -26, 140, 52, 26); ctx.fillStyle = ACC; ctx.fill();
    txt('+2.2R', 0, 8, { size: 28, weight: 700, color: '#fff', align: 'center' });
    ctx.restore();
  }
  ctx.restore();
}

function sSession(lt) {
  label('03', 'SESSIONI GIORNALIERE', lt);
  title([['Ogni giorno'], [['in diretta', true]]], lt);
  const cx = 1390, cy = 520, R = 240;
  const a = eo(prog(lt, .2, .8));
  ctx.save(); ctx.globalAlpha *= a; ctx.translate((1 - a) * 60, 0);
  const p = eio(prog(lt, .8, 4.2));
  glow(cx, cy, 420, 'rgba(255,92,0,A)', .10 + .08 * p);
  ctx.lineWidth = 18; ctx.lineCap = 'round';
  ctx.strokeStyle = 'rgba(255,255,255,.08)';
  ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.stroke();
  ctx.strokeStyle = ACC;
  ctx.beginPath(); ctx.arc(cx, cy, R, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * p); ctx.stroke();
  for (let i = 0; i < 40; i++) {
    const ang = -Math.PI / 2 + (i / 40) * Math.PI * 2, lit = i / 40 <= p;
    ctx.strokeStyle = lit ? 'rgba(255,255,255,.7)' : 'rgba(255,255,255,.14)'; ctx.lineWidth = 3; ctx.lineCap = 'butt';
    ctx.beginPath(); ctx.moveTo(cx + Math.cos(ang) * (R + 30), cy + Math.sin(ang) * (R + 30));
    ctx.lineTo(cx + Math.cos(ang) * (R + 44), cy + Math.sin(ang) * (R + 44)); ctx.stroke();
  }
  const mins = 15 * 60 + 30 + Math.round(40 * p);
  const hh = Math.floor(mins / 60), mm = mins % 60;
  txt(`${hh}:${String(mm).padStart(2, '0')}`, cx, cy + 36, { size: 140, weight: 700, align: 'center' });
  txt('APERTURA NASDAQ', cx, cy + 96, { size: 24, weight: 700, color: '#8a8a92', align: 'center', ls: 5 });
  // live badge
  const pulse = .5 + .5 * Math.sin(lt * 6);
  rr(cx - 82, cy - 150, 164, 46, 23); ctx.fillStyle = 'rgba(255,92,0,.14)'; ctx.fill();
  ctx.strokeStyle = 'rgba(255,92,0,.6)'; ctx.lineWidth = 2; ctx.stroke();
  ctx.fillStyle = ACC; ctx.globalAlpha *= (.55 + .45 * pulse); ctx.beginPath(); ctx.arc(cx - 46, cy - 127, 7, 0, Math.PI * 2); ctx.fill();
  ctx.globalAlpha = 1 * a;
  txt('LIVE', cx - 22, cy - 119, { size: 24, weight: 700, color: ACC, ls: 4 });
  ctx.restore();
}

const bubbles = [
  { side: 'l', t: 'Qualcuno ha visto il setup sul Nasdaq?' },
  { side: 'r', t: 'Sì: entrata in zona e stop sotto il minimo.' },
  { side: 'l', t: 'Chiaro! Lo rivediamo nella sessione?' },
  { side: 'r', t: 'Certo, lo analizziamo insieme in diretta.' },
];
function sCommunity(lt) {
  label('04', 'COMMUNITY', lt);
  title([['Community privata'], [['e supporto', true]]], lt);
  const x = 1000, w = 780;
  bubbles.forEach((b, i) => {
    const t0 = .8 + i * .85, k = eob(prog(lt, t0, t0 + .45));
    if (k <= 0) return;
    const size = 28, tw = measure(b.t, size, 400), bw = tw + 64, bh = 72;
    const y = 230 + i * 104;
    const bx = b.side === 'l' ? x + 84 : x + w - 84 - bw;
    ctx.save(); ctx.globalAlpha *= clamp(k); ctx.translate(b.side === 'l' ? -(1 - k) * 40 : (1 - k) * 40, 0);
    const ax = b.side === 'l' ? x + 36 : x + w - 36;
    ctx.fillStyle = b.side === 'l' ? '#2a2a30' : ACC; ctx.beginPath(); ctx.arc(ax, y + 36, 28, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = b.side === 'l' ? '#55555d' : '#fff'; ctx.beginPath(); ctx.arc(ax, y + 28, 9, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(ax, y + 54, 16, Math.PI, 0); ctx.fill();
    rr(bx, y, bw, bh, 36);
    ctx.fillStyle = b.side === 'l' ? 'rgba(255,255,255,.07)' : 'rgba(255,92,0,.2)'; ctx.fill();
    ctx.strokeStyle = b.side === 'l' ? 'rgba(255,255,255,.12)' : 'rgba(255,92,0,.55)'; ctx.lineWidth = 2; ctx.stroke();
    txt(b.t, bx + 32, y + 46, { size, weight: 400 });
    ctx.restore();
  });
  const ka = eo(prog(lt, 3.5, 4.2)), cnt = Math.round(350 * eo(prog(lt, 3.5, 4.7)));
  ctx.save(); ctx.globalAlpha *= ka; ctx.translate(0, (1 - ka) * 30);
  card(x, 690, w, 130, { r: 28 });
  txt(cnt + '+', x + 48, 782, { size: 84, weight: 700, color: ACC });
  txt('studenti nella', x + 300, 756, { size: 30, weight: 400, color: '#d0d0d5' });
  txt('community privata', x + 300, 796, { size: 30, weight: 400, color: '#d0d0d5' });
  ctx.restore();
}

const steps = [
  ['Call conoscitiva', 'Definiamo insieme livello e obiettivi'],
  ['Percorso su misura', 'Costruito sulla tua esperienza'],
  ['Affiancamento one-to-one', 'Seguito personalmente'],
  ['Il tuo primo payout', 'Il traguardo del percorso'],
];
function sMentor(lt) {
  label('05', 'MENTORSHIP', lt);
  title([['Mentorship'], [['one-to-one', true]]], lt);
  const nx = 1060, y0 = 270, gap = 150;
  const a = eo(prog(lt, .2, .8));
  ctx.save(); ctx.globalAlpha *= a;
  const total = prog(lt, .9, 4.2);
  ctx.strokeStyle = 'rgba(255,255,255,.12)'; ctx.lineWidth = 6; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(nx, y0); ctx.lineTo(nx, y0 + gap * 3); ctx.stroke();
  ctx.strokeStyle = ACC;
  ctx.beginPath(); ctx.moveTo(nx, y0); ctx.lineTo(nx, y0 + gap * 3 * total); ctx.stroke();
  steps.forEach((s, i) => {
    const reach = i / 3, k = eob(prog(total, reach - .02, reach + .1 + (i === 0 ? .1 : 0)));
    const y = y0 + gap * i, last = i === 3;
    const kk = i === 0 ? eob(prog(lt, .6, 1.1)) : k;
    if (kk > 0 && last) glow(nx, y, 160, 'rgba(255,92,0,A)', .35 * clamp(kk));
    ctx.fillStyle = '#060606'; ctx.beginPath(); ctx.arc(nx, y, last ? 36 : 28, 0, Math.PI * 2); ctx.fill();
    ctx.lineWidth = 5; ctx.strokeStyle = kk > 0 ? ACC : 'rgba(255,255,255,.2)'; ctx.stroke();
    if (kk > 0) { ctx.fillStyle = ACC; ctx.beginPath(); ctx.arc(nx, y, (last ? 22 : 14) * clamp(kk, 0, 1.15), 0, Math.PI * 2); ctx.fill(); }
    const ta = eo(prog(kk, .2, 1));
    ctx.save(); ctx.globalAlpha *= ta; ctx.translate((1 - ta) * 30, 0);
    txt(s[0], nx + 76, y + 2, { size: last ? 44 : 38, weight: 700, color: last ? ACC : '#fff' });
    txt(s[1], nx + 76, y + 42, { size: 26, weight: 400, color: '#9b9ba2' });
    ctx.restore();
  });
  ctx.restore();
}

function sCTA(lt) {
  const a = eo(prog(lt, .1, .8));
  ctx.save(); ctx.globalAlpha *= a;
  glow(W / 2, 520, 700, 'rgba(255,92,0,A)', .16);
  logo(W / 2, 250, 52 * eob(prog(lt, .1, .8)));
  txt('ECLIPSE TRADING CLUB', W / 2, 360, { size: 26, weight: 700, color: '#9b9ba2', align: 'center', ls: 6 });
  const t = eo(prog(lt, .4, 1.1));
  ctx.save(); ctx.globalAlpha *= t; ctx.translate(0, (1 - t) * 30);
  txt('Entra nella Community', W / 2, 500, { size: 104, weight: 700, align: 'center' });
  ctx.restore();
  const p2 = eo(prog(lt, .8, 1.5));
  ctx.save(); ctx.globalAlpha *= p2;
  txt('45€ / mese · Nessun vincolo', W / 2, 590, { size: 44, weight: 400, color: '#d0d0d5', align: 'center' });
  ctx.restore();
  const bb = eob(prog(lt, 1.1, 1.7)), pulse = .5 + .5 * Math.sin(lt * 4);
  ctx.save(); ctx.translate(W / 2, 710); ctx.scale(bb, bb);
  ctx.shadowColor = 'rgba(255,92,0,' + (.35 + .3 * pulse) + ')'; ctx.shadowBlur = 40 + 30 * pulse;
  rr(-260, -48, 520, 96, 48); ctx.fillStyle = ACC; ctx.fill();
  ctx.shadowBlur = 0;
  txt('Partecipa ora', 0, 14, { size: 40, weight: 700, align: 'center' });
  ctx.restore();
  txt('Solo a scopo educativo. Il trading comporta rischi, anche di perdita del capitale.', W / 2, 935, { size: 22, weight: 400, color: '#6f6f77', align: 'center', alpha: eo(prog(lt, 1.6, 2.2)) });
  ctx.restore();
}

const scenes = [
  { s: 0, e: 3.5, f: sHook, cap: 'Un metodo chiaro e ripetibile, dalla teoria all’esecuzione.' },
  { s: 3.5, e: 8.5, f: sCourse, cap: 'Dai concetti principali agli esempi pratici e al backtest.' },
  { s: 8.5, e: 13.5, f: sSetup, cap: 'Modelli d’ingresso e schematiche per eseguire con regole precise.' },
  { s: 13.5, e: 18.5, f: sSession, cap: 'Ogni giorno in diretta sull’apertura del Nasdaq, dalle 15:30.' },
  { s: 18.5, e: 23.5, f: sCommunity, cap: 'Una community privata con materiali, chat e supporto.' },
  { s: 23.5, e: 28.5, f: sMentor, cap: 'In alternativa, un percorso one-to-one fino al tuo primo payout.' },
  { s: 28.5, e: 32, f: sCTA, cap: 'Tutto in un unico accesso mensile, senza vincoli.' },
];

function render(t) {
  background(t);
  // top progress line
  ctx.fillStyle = 'rgba(255,255,255,.06)'; ctx.fillRect(0, 0, W, 4);
  ctx.fillStyle = ACC; ctx.fillRect(0, 0, W * t / DUR, 4);
  // brand
  if (t > .2 && t < 28.3) {
    const a = eo(prog(t, .2, .9)) * (1 - prog(t, 27.9, 28.3));
    ctx.save(); ctx.globalAlpha = a;
    logo(LX + 16, 92, 16);
    txt('ECLIPSE TRADING CLUB', LX + 52, 100, { size: 22, weight: 700, ls: 4 });
    ctx.restore();
  }
  for (const sc of scenes) {
    if (t < sc.s || t >= sc.e) continue;
    const lt = t - sc.s, d = sc.e - sc.s;
    const fin = prog(lt, 0, .35), fout = 1 - prog(lt, d - .35, d);
    ctx.save(); ctx.globalAlpha = (sc.s === 0 ? 1 : fin) * (sc.e === DUR ? 1 : fout);
    sc.f(lt);
    ctx.restore();
    const ca = prog(lt, .6, 1.0) * (1 - prog(lt, d - .45, d - .15));
    if (ca > 0) {
      ctx.save(); ctx.globalAlpha = ca; ctx.translate(0, (1 - ca) * 10);
      ctx.shadowColor = 'rgba(0,0,0,.85)'; ctx.shadowBlur = 14;
      txt(sc.cap, W / 2, 1010, { size: 40, weight: 400, align: 'center' });
      ctx.restore();
    }
  }
  // loop fade
  if (t > DUR - .3) { ctx.fillStyle = `rgba(6,6,6,${prog(t, DUR - .3, DUR)})`; ctx.fillRect(0, 0, W, H); }
}
window.render = render;
window.DUR = DUR;
