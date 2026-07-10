import Reveal from './Reveal.jsx';
import { archive } from '../content.js';
import { ArrowUpRight } from '../icons.jsx';

/** "More builds" — compact archive grid of everything else on GitHub. */
export default function Archive() {
  return (
    <section id="archive" className="section" aria-label="More builds">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">The archive</p>
          <h2 className="display-lg" style={{ marginTop: 14 }}>
            More builds. <span className="serif-accent">Every rep counts.</span>
          </h2>
          <p className="lede" style={{ marginTop: 14, maxWidth: 620 }}>
            APIs, CLIs, full-stack apps, and C fundamentals — the volume behind the highlights.
          </p>
        </Reveal>
        <div className="archive-grid">
          {archive.map((a, i) => (
            <Reveal key={a.title} delay={Math.min(i * 0.04, 0.3)} style={{ display: 'flex' }}>
              <a className="archive-card" href={a.href} target="_blank" rel="noreferrer">
                <div className="archive-top">
                  <h4>{a.title}</h4>
                  <ArrowUpRight />
                </div>
                <p>{a.body}</p>
                <span className="archive-tech">{a.tech}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
