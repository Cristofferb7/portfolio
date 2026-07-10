import { useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { projects } from '../content.js';
import { ArrowUpRight } from '../icons.jsx';

/** Apple "The latest." feature cards with pointer-tracked 3D tilt + media parallax. */
function FeatureCard({ p, delay }) {
  const ref = useRef(null);
  const media = useRef(null);
  const reduced = useReducedMotion();

  const onMove = (e) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1100px) rotateY(${nx * 4.5}deg) rotateX(${-ny * 4.5}deg)`;
    if (media.current) {
      media.current.style.transform = `scale(1.06) translate(${-nx * 12}px, ${-ny * 12}px)`;
    }
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) {
      el.style.transition = 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)';
      el.style.transform = 'perspective(1100px) rotateY(0deg) rotateX(0deg)';
      setTimeout(() => el && (el.style.transition = ''), 700);
    }
    if (media.current) media.current.style.transform = '';
  };

  return (
    <Reveal delay={delay} className={`feature-card span-${p.span}`} style={{ display: 'flex' }}>
      <article
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', flex: 1, borderRadius: 'inherit', overflow: 'hidden', position: 'relative', isolation: 'isolate' }}
      >
        {p.video && !reduced ? (
          <video
            ref={media}
            className="feature-media feature-media-video"
            src={p.video}
            poster={p.image}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
        ) : (
          <div
            ref={media}
            className="feature-media"
            style={{ backgroundImage: `url(${p.image})${p.fallback ? `, ${p.fallback}` : ''}` }}
          />
        )}
        <div className="feature-scrim" />
        <div className="feature-body">
          <span className="feature-tag">{p.tag}</span>
          <span className="feature-hook">{p.hook}</span>
          <h3>{p.title}</h3>
          <p>{p.body}</p>
          <div className="tech-pills">
            {p.tech.map((t) => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>
          {p.links.length > 0 && (
            <div className="feature-links">
              {p.links.map((l) => (
                <a key={l.label} className="feature-link" href={l.href} target="_blank" rel="noreferrer">
                  {l.label} <ArrowUpRight />
                </a>
              ))}
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="work" className="section" aria-label="Projects">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">The latest</p>
          <h2 className="display-lg" style={{ marginTop: 14 }}>
            Take a look at what’s new, <span className="serif-accent">right now.</span>
          </h2>
        </Reveal>
        <div className="feature-grid">
          {projects.map((p, i) => (
            <FeatureCard key={p.title} p={p} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
