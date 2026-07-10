import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal.jsx';
import { lineup } from '../content.js';
import { lineupIcons } from '../icons.jsx';

const CARD_STEP = 318; // card width + gap

/**
 * Apple-store style horizontal capability rail.
 * Cursor-tracked glow per card + physical drag-to-scroll with momentum,
 * plus paddle arrows + edge fades so the scrollability is discoverable.
 */
export default function Lineup() {
  const rowRef = useRef(null);
  const drag = useRef({ down: false, startX: 0, scrollLeft: 0, vel: 0, lastX: 0, raf: 0 });
  const [edges, setEdges] = useState({ left: false, right: true });

  const syncEdges = () => {
    const row = rowRef.current;
    if (!row) return;
    const max = row.scrollWidth - row.clientWidth;
    setEdges((prev) => {
      const next = { left: row.scrollLeft > 8, right: row.scrollLeft < max - 8 };
      return prev.left === next.left && prev.right === next.right ? prev : next;
    });
  };

  useEffect(() => {
    syncEdges();
    window.addEventListener('resize', syncEdges);
    return () => window.removeEventListener('resize', syncEdges);
  }, []);

  const page = (dir) => {
    rowRef.current?.scrollBy({ left: dir * CARD_STEP, behavior: 'smooth' });
  };

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
        <Reveal className="section-head" style={{ marginBottom: 0 }}>
          <div className="lineup-head">
            <div>
              <p className="eyebrow">The lineup</p>
              <h2 className="display-lg" style={{ marginTop: 14 }}>
                Which Cristoffer is right for you?
              </h2>
              <p className="lede" style={{ marginTop: 14, maxWidth: 560 }}>
                All of them, ideally. They ship as a bundle.
              </p>
            </div>
            <div className="lineup-paddles" aria-hidden={!edges.left && !edges.right}>
              <button
                className="paddle"
                aria-label="Scroll capabilities left"
                disabled={!edges.left}
                onClick={() => page(-1)}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                className="paddle"
                aria-label="Scroll capabilities right"
                disabled={!edges.right}
                onClick={() => page(1)}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="m6 3 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
          <p className="swipe-hint" aria-hidden="true">
            Swipe to explore
            <svg width="15" height="10" viewBox="0 0 15 10" fill="none" aria-hidden="true">
              <path d="M0 5h12m0 0L8.5 1.5M12 5 8.5 8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </p>
        </Reveal>
      </div>
      <div className="wrap">
        <div className={`lineup-shell${edges.left ? ' fade-l' : ''}${edges.right ? ' fade-r' : ''}`}>
          <div
            ref={rowRef}
            className="lineup-row"
            role="list"
            tabIndex={0}
            aria-label="Capability cards — use arrow keys or swipe to scroll"
            onScroll={syncEdges}
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
      </div>
    </section>
  );
}
