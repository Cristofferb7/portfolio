import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * SilkTrail — a fine strand of web-silk that trails the cursor.
 * Canvas-based: stores recent pointer samples and strokes a tapering,
 * fading polyline through them. Desktop-only, honors reduced motion.
 */
export default function SilkTrail() {
  const canvasRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const canvas = canvasRef.current;
    // desynchronized: paint outside the browser's compositing queue —
    // measurably lower latency against the hardware cursor (Chrome/Edge).
    const ctx = canvas.getContext('2d', { desynchronized: true });
    let raf;
    let pts = [];
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = window.innerWidth * DPR;
      canvas.height = window.innerHeight * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    // Live pointer position, updated on every event; the head of the trail is
    // re-pinned to it every frame so the silk stays ON the cursor, not behind it.
    let cur = null;
    let pred = null; // browser-predicted future pointer position
    const MAX_PTS = 48;
    const onMove = (e) => {
      // coalesced events keep fast flicks smooth instead of dot-to-dot
      const events = e.getCoalescedEvents?.() ?? [e];
      const t = performance.now();
      for (const ev of events) pts.push({ x: ev.clientX, y: ev.clientY, t });
      if (pts.length > MAX_PTS) pts.splice(0, pts.length - MAX_PTS);
      cur = { x: e.clientX, y: e.clientY };
      // draw the head at where the cursor is ABOUT to be — this cancels out
      // the frame of latency between input and canvas paint
      const p = e.getPredictedEvents?.();
      pred = p && p.length ? { x: p[p.length - 1].clientX, y: p[p.length - 1].clientY } : null;
    };
    window.addEventListener('pointermove', onMove, { passive: true });

    const tick = () => {
      const now = performance.now();
      pts = pts.filter((p) => now - p.t < 450);
      // extend the head to the current pointer position each frame
      if (cur) {
        const last = pts[pts.length - 1];
        if (!last || last.x !== cur.x || last.y !== cur.y) {
          pts.push({ x: cur.x, y: cur.y, t: now });
          if (pts.length > MAX_PTS) pts.shift();
        }
      }
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      if (pts.length > 2) {
        for (let i = 1; i < pts.length; i++) {
          const a = pts[i - 1];
          const b = pts[i];
          const age = (now - b.t) / 450; // 0 fresh → 1 old
          const alpha = (1 - age) * 0.34;
          const width = (1 - age) * 1.6 + 0.2;
          ctx.strokeStyle = `rgba(225, 29, 46, ${alpha.toFixed(3)})`;
          ctx.lineWidth = width;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          // sag grows with age — the head is straight silk pinned to the cursor
          const mx = (a.x + b.x) / 2;
          const my = (a.y + b.y) / 2 + 2.5 * age;
          ctx.quadraticCurveTo(mx, my, b.x, b.y);
          ctx.stroke();
        }
        // head segment: straight line to the predicted pointer position,
        // full strength — this is the part that rides ON the cursor
        const head = pred ?? cur;
        const last = pts[pts.length - 1];
        if (head && last && (head.x !== last.x || head.y !== last.y)) {
          ctx.strokeStyle = 'rgba(225, 29, 46, 0.34)';
          ctx.lineWidth = 1.8;
          ctx.beginPath();
          ctx.moveTo(last.x, last.y);
          ctx.lineTo(head.x, head.y);
          ctx.stroke();
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
    };
  }, [reduced]);

  if (reduced) return null;
  return <canvas ref={canvasRef} className="silk-trail" aria-hidden="true" />;
}
