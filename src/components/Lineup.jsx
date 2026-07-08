import { useRef } from 'react';
import Reveal from './Reveal.jsx';
import { lineup } from '../content.js';
import { lineupIcons } from '../icons.jsx';

/**
 * Apple-store style horizontal capability rail.
 * Cursor-tracked glow per card + physical drag-to-scroll with momentum.
 */
export default function Lineup() {
  const rowRef = useRef(null);
  const drag = useRef({ down: false, startX: 0, scrollLeft: 0, vel: 0, lastX: 0, raf: 0 });

  const onMove = (e) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  const onPointerDown = (e) => {
    const row = rowRef.current;
    if (!row) return;
    cancelAnimationFrame(drag.current.raf);
    drag.current = { ...drag.current, down: true, startX: e.clientX, scrollLeft: row.scrollLeft, lastX: e.clientX, vel: 0 };
  };
  const onPointerMove = (e) => {
    const row = rowRef.current;
    const d = drag.current;
    if (!row || !d.down) return;
    row.scrollLeft = d.scrollLeft - (e.clientX - d.startX);
    d.vel = d.lastX - e.clientX;
    d.lastX = e.clientX;
  };
  const endDrag = () => {
    const row = rowRef.current;
    const d = drag.current;
    if (!row || !d.down) return;
    d.down = false;
    // momentum glide
    const glide = () => {
      if (Math.abs(d.vel) < 0.4) return;
      row.scrollLeft += d.vel;
      d.vel *= 0.94;
      d.raf = requestAnimationFrame(glide);
    };
    glide();
  };

  return (
    <section id="capabilities" className="section section-grey" aria-label="Capabilities">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">The lineup</p>
          <h2 className="display-lg" style={{ marginTop: 14 }}>
            Which Cristoffer is right for you?
          </h2>
          <p className="lede" style={{ marginTop: 14, maxWidth: 560 }}>
            All of them, ideally. They ship as a bundle.
          </p>
        </Reveal>
      </div>
      <div className="wrap">
        <div
          ref={rowRef}
          className="lineup-row"
          role="list"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
        >
          {lineup.map((item, i) => {
            const Icon = lineupIcons[item.icon];
            return (
              <Reveal
                key={item.title}
                delay={i * 0.07}
                className="lineup-item"
                style={{ flex: '0 0 300px', display: 'flex' }}
              >
                <div className="lineup-card" role="listitem" onPointerMove={onMove} style={{ flex: 1 }}>
                  <div className="card-icon">
                    <Icon />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
