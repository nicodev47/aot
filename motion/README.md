# Video hero (motion graphics)

Animazione in canvas deterministica (`anim.js`), renderizzata frame per frame con Chromium e codificata con ffmpeg.

```bash
cd motion && npm install
node render.mjs stills   # anteprime in stills/
node render.mjs full landscape   # hero-new.mp4 (1920x1080, 32 s)
node render.mjs full portrait    # hero-portrait.mp4 (1080x1350, per mobile)
```

Poi copia i file in `public/` come `hero.mp4` e `hero-portrait.mp4`. Colore accent, testi e tempi sono in cima/in fondo a `anim.js`.
