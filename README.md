# Cristoffer Bohorquez — Portfolio

> A premium, Apple-inspired portfolio with a friendly neighborhood twist.
> React · React Three Fiber · Framer Motion. Zero icon libraries, zero placeholder assets.

**Live:** [portfolio-three-red-18.vercel.app](https://portfolio-three-red-18.vercel.app) · **Guide:** [/guide](https://portfolio-three-red-18.vercel.app/guide) explains every animation technique on the site.

---

## The concept

Apple Store minimalism — massive typography, generous whitespace, glass navigation, restrained color — woven with subtle Spider-Man motifs: a procedurally generated 3D web in the hero, a spider that patrols it, dew drops glowing crimson, a scroll progress bar that stretches like an elastic silk strand, and a spider dangling above the contact section. The theme lives in the details, never in the layout.

## Technical highlights

| Technique | Where | How |
|---|---|---|
| Procedural 3D spider web | `src/three/WebScene.jsx` | Raw `BufferGeometry` line segments — 18 jittered radial spokes + 9 sagging spiral rings (fake catenary), one draw call |
| Spider-sense parallax | `WebScene.jsx` | Web lerps toward the pointer inside `useFrame` (0.04 smoothing) |
| Cinematic scroll reveals | `src/components/Reveal.jsx` | Framer Motion `whileInView`, custom `cubic-bezier(0.22, 1, 0.36, 1)`, −80px viewport margin so motion triggers just before entry |
| Elastic scroll thread | `src/App.jsx` | `useScroll` → `useSpring` (stiffness 90, damping 24) |
| Hand-written SVG system | `src/icons.jsx` | Every icon, monogram, and motif is inline SVG — crisp at any DPI, themeable via props, zero requests |
| Apple design language | `src/index.css` | `#1d1d1f` ink on `#fbfbfd` paper, one accent red `#e11d2e`, 12-col feature grid, `backdrop-filter` glass nav, −0.045em display tracking |

## Stack

- **React 18** + **Vite 5**
- **React Three Fiber** (three.js) for the 3D hero
- **Framer Motion** for scroll choreography and physics
- **React Router** for `/` and `/guide`
- Photography: high-resolution Unsplash sources; everything else is code

## Run it

```bash
npm install
npm run dev      # local dev
npm run build    # production build → dist/
```

## Deploy

Ships to Vercel as a static Vite build. `vercel.json` rewrites all routes to `index.html` so `/guide` deep-links work.

## Structure

```
src/
├── App.jsx              # routes + scroll-thread progress
├── icons.jsx            # the entire SVG design system
├── index.css            # design tokens & layout
├── three/WebScene.jsx   # procedural 3D web, spider, dew, motes
├── components/          # Nav, Hero, Lineup, Features, Experience, Skills, Footer, Reveal
└── pages/               # Home, Guide (animation docs + Gemini 4K asset prompts)
```

---

Built by **Cristoffer Bohorquez** ([github.com/cristofferb7](https://github.com/cristofferb7)) in collaboration with **Claude** (Anthropic), start to finish — design system, 3D scene, animation choreography, and copy.

*With great power comes great responsibility.*
