# Cristoffer Bohorquez — Portfolio v2

A clean, Spider-Man-themed personal portfolio. Live at [cristofferbohorquez.dev](https://cristofferbohorquez.dev).

## Stack

- **React 18 + Vite** — single-page SPA with an in-page résumé modal (`/resume.pdf`)
- **React Three Fiber + Three.js** — procedural 3D spider-web hero with a custom GLSL silk-shimmer shader, pointer-ripple physics, and scroll-linked recession (lazy-loaded off the critical path)
- **Framer Motion** — per-word hero stagger, sticky scroll-telling, velocity-reactive marquee, spring counters, magnetic buttons
- **Custom canvas/SVG** — spider cameo, all icons inline

## Assets

Project-card imagery generated with Higgsfield (nano-banana), hosted on Higgsfield's CDN.

## Develop

```bash
npm install
npm run dev
```

## Deploy

Push to `main` — Vercel builds `vite build` and serves `dist` with an SPA rewrite (`vercel.json`).
