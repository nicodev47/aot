# Video hero (motion graphics)

Animazione in canvas deterministica (`anim.js`), renderizzata frame per frame con Chromium e codificata con ffmpeg.

```bash
cd motion && npm install
node render.mjs stills   # anteprime in stills/
node render.mjs full     # genera hero-new.mp4 (1080p, 30 fps, 32 s)
```

Poi copia `hero-new.mp4` in `public/hero.mp4`. Colore accent, testi e tempi sono in cima/in fondo a `anim.js`.
