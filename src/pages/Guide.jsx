import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import Footer from '../components/Footer.jsx';

/**
 * /guide — the making-of. Architecture, motion logic, asset workflow,
 * and how to replicate the whole build.
 */

const stack = [
  { k: 'React 18 + Vite', v: 'Instant dev server, tiny production bundles, zero framework tax for a content site. SPA with two routes — no SSR needed for a portfolio, so the simplest fast thing wins.' },
  { k: 'React Three Fiber + Three.js', v: 'The hero web is procedural geometry — 20 spokes, 10 spiral rings — rendered as GL line segments with a custom GLSL shader. No models, no downloads: the whole 3D scene costs ~0 network bytes.' },
  { k: 'Framer Motion', v: 'Every entrance, stagger, counter, and the pinned "How I build" panel. Springs and [0.22, 1, 0.36, 1] easing everywhere for the Apple feel.' },
  { k: 'Custom canvas + SVG', v: 'The silk cursor trail is a raw 2D-canvas polyline with age-based taper. The spider cameo, icons, and process diagrams are hand-written inline SVG — zero icon libraries.' },
  { k: 'Vercel', v: 'Static build (vite build) auto-deployed from GitHub on push to main. SPA rewrites via vercel.json.' },
];

const motionNotes = [
  { title: 'Hero headline', body: 'Per-word stagger: each word rises 46px, un-blurs from 10px, and un-rotates from 24° on the X axis — a keynote-style entrance. Delay step: 120ms.' },
  { title: 'Living web', body: 'A GLSL fragment shader drives a crimson shimmer that radiates outward along every strand (distance-from-hub attribute + time uniform). Vertices near your cursor get a gaussian Z-push with a travelling sine — touch the web and it ripples. Scroll dollies the scene away and fades it via a shared ref, so React never re-renders the canvas.' },
  { title: 'Magnetic buttons', body: 'Pointer-move translates the button toward the cursor at 0.32× displacement; on leave it springs home with a 500ms Apple ease. Pure DOM transforms — no re-renders.' },
  { title: 'Scroll-telling', body: 'The process panel is position:sticky; an IntersectionObserver with a -42% rootMargin band picks the active step, and AnimatePresence swaps SVG scenes drawn in with pathLength animations.' },
  { title: 'Details', body: 'Timeline thread scales with scroll spring. Stats count up with springs. Cards tilt in 3D perspective toward the pointer with parallax media. A spider rappels down at 45% scroll — once per visit. Everything honors prefers-reduced-motion.' },
];

const replicate = [
  { n: '1', title: 'Write the content model first', body: 'Every word on this site lives in src/content.js. Rewrite your résumé there — confident, specific, quantified — before touching a component. Design follows copy.' },
  { n: '2', title: 'Scaffold', body: 'npm create vite@latest → React. Add three, @react-three/fiber, framer-motion, react-router-dom. Set up the design tokens (:root CSS variables) as your single source of visual truth.' },
  { n: '3', title: 'Build the 3D centerpiece', body: 'Generate geometry procedurally (BufferGeometry + Float32Array) instead of loading models. Drive color/alpha with a small ShaderMaterial. Feed scroll in through a ref so the canvas never re-mounts.' },
  { n: '4', title: 'Generate assets with AI', body: 'The three project-card images were generated with Higgsfield (nano-banana model) from prompts like “ultra-minimal studio photograph, crimson silk thread, seamless white background, Apple advertising aesthetic.” (The plan called for Pinterest sourcing, but hotlinked images are brittle — generated, self-hosted assets are sharper and license-clean.)' },
  { n: '5', title: 'Iterate three times, minimum', body: 'Pass 1: typography, spacing, color. Pass 2: motion timing and 3D performance (dpr caps, passive listeners, will-change). Pass 3: full visual QA at desktop and 390px mobile, then lighthouse the build.' },
  { n: '6', title: 'Ship', body: 'Push to GitHub with Vercel git integration — every push to main deploys. vercel.json needs one SPA rewrite so /guide deep-links resolve.' },
];

export default function Guide() {
  const [copied, setCopied] = useState(false);
  const prompt = `Build me a premium single-page portfolio: Apple-store minimalism (light hero, generous whitespace, frosted-glass nav) fused with subtle Spider-Man motifs — crimson #e11d2e accents, a procedural 3D spider web hero in React Three Fiber that ripples toward the cursor, a silk cursor trail, and a spider cameo that rappels down on scroll. Stack: React 18 + Vite + Framer Motion. All copy in one content.js. Two routes: / and /guide (the making-of). Three iteration passes before shipping. Deploy to Vercel.`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <main>
      <section className="guide-hero">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">The guide</p>
            <h1 className="display-xl" style={{ marginTop: 16 }}>
              How this site<br />was <span className="serif-accent" style={{ color: 'var(--red)' }}>spun.</span>
            </h1>
            <p className="lede" style={{ maxWidth: 640, marginTop: 24 }}>
              The full technical breakdown — architecture, animation engineering, AI-generated
              assets, and a copy-pasteable workflow so you can replicate it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section-grey" style={{ paddingTop: 70 }}>
        <div className="wrap">
          <Reveal className="section-head">
            <h2 className="display-lg">Architecture.</h2>
          </Reveal>
          {stack.map((s, i) => (
            <Reveal key={s.k} delay={i * 0.05}>
              <div className="guide-step cols-wide">
                <h3 style={{ color: 'var(--red)' }}>{s.k}</h3>
                <p className="body-copy">{s.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <h2 className="display-lg">Motion engineering.</h2>
            <p className="lede" style={{ marginTop: 14, maxWidth: 620 }}>
              Nothing here is a library preset. Every animation is built from springs,
              shaders, and observers — and all of it respects prefers-reduced-motion.
            </p>
          </Reveal>
          {motionNotes.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.05}>
              <div className="guide-step cols-wide">
                <h3>{m.title}</h3>
                <p className="body-copy">{m.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <Reveal className="section-head">
            <h2 className="display-lg" style={{ color: '#f5f5f7' }}>Replicate it.</h2>
            <p className="lede" style={{ marginTop: 14, maxWidth: 620 }}>
              Six steps from blank folder to live site.
            </p>
          </Reveal>
          {replicate.map((r, i) => (
            <Reveal key={r.n} delay={i * 0.04}>
              <div className="guide-step" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                <span className="guide-step-num">{r.n}</span>
                <div>
                  <h3 style={{ color: '#f5f5f7' }}>{r.title}</h3>
                  <p className="body-copy">{r.body}</p>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.1}>
            <div className="prompt-card" style={{ marginTop: 48 }}>
              <div className="prompt-head">
                <h4>The one-prompt version</h4>
                <button className="copy-btn" onClick={copy}>
                  {copied ? 'Copied ✓' : 'Copy prompt'}
                </button>
              </div>
              <div className="prompt-body">{prompt}</div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
