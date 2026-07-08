import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import { WebCorner } from '../icons.jsx';

const steps = [
  {
    n: '01',
    title: 'The 3D web — React Three Fiber',
    copy: 'The hero web is not an image. It is a procedural BufferGeometry: 18 radial spokes with per-spoke angle jitter, plus 9 concentric "capture spiral" rings whose midpoints sag 3.5% toward center to fake catenary physics. Rendered as lineSegments with a single draw call, it breathes via a sine-scaled transform and leans toward your cursor with lerped rotation (a 0.04 smoothing factor) inside useFrame — that\'s the spider-sense parallax.',
  },
  {
    n: '02',
    title: 'Cinematic reveals — Framer Motion',
    copy: 'Every section uses a shared <Reveal> component: opacity 0 → 1 and a 36px vertical rise on a custom cubic-bezier(0.22, 1, 0.36, 1) — the same "ease out expo" family Apple leans on. whileInView with viewport={{ once: true, margin: "-80px" }} triggers the animation just before elements enter, so motion is always felt, never waited on. Hero children stagger 120ms apart.',
  },
  {
    n: '03',
    title: 'The red thread — scroll physics',
    copy: 'The progress bar at the top is Framer Motion\'s useScroll piped through useSpring (stiffness 90, damping 24), so it stretches like an elastic web strand instead of tracking scroll linearly. Small physical touches like this read as "expensive" without a single asset.',
  },
  {
    n: '04',
    title: 'Apple-style restraint',
    copy: 'The system: one accent red (#e11d2e), near-black ink (#1d1d1f) on near-white paper (#fbfbfd), 12-column feature grid, oversized -0.045em-tracked display type, and a glass nav (backdrop-filter: saturate(180%) blur(20px)). Spider-Man lives in the details — dew drops on the web, a dangling spider above the contact CTA, mask eyes in the skills header — never in the layout.',
  },
  {
    n: '05',
    title: 'Zero-dependency iconography',
    copy: 'Every icon is a hand-written inline SVG in one icons.jsx module — tech marks, the CB spider monogram, web corners, the animated scroll mouse (pure SMIL, no JS). Inline SVG means perfect crispness at any DPI, themeable via currentColor, and zero network requests.',
  },
];

const prompts = [
  {
    title: '1 · Hero web — macro photography plate',
    text: `Generate a 4K (3840×2160) ultra-photorealistic macro photograph of a spider web at dawn, shot on a 100mm macro lens at f/2.8. The web spans the right third of frame against a seamless, near-white studio background (#fbfbfd) with soft graduated falloff. Silk strands must be razor-sharp with visible micro-texture; 6–8 dew droplets refract a faint crimson accent light (#e11d2e). Lighting: large soft key at 45° camera-left, subtle rim light from behind to halo the strands. Mood: premium, minimal, Apple-product-page cleanliness. No spider, no leaves, no background detail, no text, no watermark. Composition must leave the left two-thirds as clean negative space for headline typography.`,
  },
  {
    title: '2 · Feature card — cinematic skyline swing',
    text: `Generate a 4K cinematic wide shot of the Brooklyn/Manhattan skyline at blue hour from a rooftop POV, anamorphic 2.39:1 crop centered in a 16:9 frame. A single, elegant strand of spider silk arcs across the upper-right corner, catching a red neon reflection (#e11d2e) — the only warm accent in a cool blue-graphite palette (#0b0b0f to #2b3a8f). Photorealistic, shot-on-ALEXA look: gentle halation, fine film grain, deep shadows with lifted blacks. No people, no logos, no visible Spider-Man character, no text. The bottom 40% must stay dark and low-detail so white UI text remains legible over it.`,
  },
  {
    title: '3 · Skills section — carbon-weave texture',
    text: `Generate a 4K seamless-tileable dark texture: matte carbon-black surface (#0b0b0f) embossed with an ultra-subtle hexagonal spider-web lattice, raised 1–2% in luminance, visible only at glancing light. A single diagonal light sweep crosses at 30°, and one intersection node glows faint crimson (#e11d2e) at 15% opacity. Style reference: Apple Pro product pages — restrained, tactile, engineered. Must tile seamlessly on both axes. No characters, no dust, no scratches, no text, no vignette.`,
  },
  {
    title: '4 · Project thumbnail — tech noir workstation',
    text: `Generate a 4K photorealistic still-life: a minimal developer workstation on a walnut desk at night — laptop showing an out-of-focus code editor with red syntax accents (#e11d2e), ceramic mug, small red-and-blue enamel spider pin resting beside the trackpad as the only explicit motif. Shallow depth of field (85mm f/1.8), moody split lighting: cool window light camera-left, warm desk lamp camera-right. Color grade: graphite shadows, clean whites, one red accent. Composition on rule-of-thirds with the pin at the lower-right power point. No faces, no brand logos, no text overlays.`,
  },
  {
    title: '5 · Guide header — silk-thread typography plate',
    text: `Generate a 4K studio photograph of the single word "GUIDE" formed from taut, photorealistic spider-silk threads suspended between two invisible anchor points, against a pure #fbfbfd background. The silk letterforms are thin, geometric, sans-serif in skeleton — think Apple SF Pro Display Light drawn in thread — with tiny dew highlights and one thread deliberately snapped and curling away on the final letter. Lighting: high-key, shadowless, product-photography style with 5% soft drop shadow directly below the letters. Crimson (#e11d2e) reflected only in the dew. No spider, no web mesh, no texture in the background, no watermark.`,
  },
];

function PromptCard({ p }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(p.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* clipboard unavailable */ }
  };
  return (
    <Reveal className="prompt-card">
      <div className="prompt-head">
        <h4>{p.title}</h4>
        <button className="copy-btn" onClick={copy}>{copied ? 'Copied ✓' : 'Copy'}</button>
      </div>
      <div className="prompt-body">{p.text}</div>
    </Reveal>
  );
}

export default function Guide() {
  return (
    <main>
      <section className="guide-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <WebCorner style={{ top: 0, left: 0, transform: 'rotate(180deg) scaleX(-1)' }} />
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">/guide</p>
            <h1 className="display-xl" style={{ margin: '14px 0 18px' }}>
              How this site{' '}
              <span className="serif-accent" style={{ color: 'var(--red)' }}>swings.</span>
            </h1>
            <p className="lede" style={{ maxWidth: 640 }}>
              The full technical breakdown — how the animations work, why they feel physical,
              and the exact process used to build this site with Claude, so you can do the same.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: '20px 0 80px' }}>
        <div className="wrap">
          {steps.map((s) => (
            <Reveal key={s.n} className="guide-step">
              <span className="guide-step-num">{s.n}</span>
              <div>
                <h3>{s.title}</h3>
                <p className="body-copy">{s.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Asset pipeline</p>
            <h2 className="display-lg" style={{ color: '#f5f5f7', margin: '14px 0 12px' }}>
              5 engineered prompts for Gemini Advanced
            </h2>
            <p className="lede" style={{ maxWidth: 640, marginBottom: 48 }}>
              Copy these into Gemini Advanced to generate 4K Spider-Man-flavored assets that
              drop straight into this design system. Each prompt locks palette, composition,
              lighting, and negative space so the output matches the site.
            </p>
          </Reveal>
          {prompts.map((p) => (
            <PromptCard key={p.title} p={p} />
          ))}
          <Reveal>
            <p className="footnote" style={{ color: '#86868b', marginTop: 20 }}>
              Swap tip: replace any feature-card background by changing its <span className="mono">img</span> URL
              in <span className="mono">src/components/Features.jsx</span> — the scrim gradient keeps text legible
              with any image.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
