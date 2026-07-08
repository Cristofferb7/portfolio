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
    const ctx = canvas.getContext('2d');
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

    const onMove = (e) => {
      pts.push({ x: e.clientX, y: e.clientY, t: performance.now() });
      if (pts.length > 26) pts.shift();
    };
    window.addEventListener('pointermove', onMove, { passive: true });

    const tick = () => {
      const now = performance.now();
      pts = pts.filter((p) => now - p.t < 450);
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
          // slight sag between samples — silk, not laser
          const mx = (a.x + b.x) / 2;
          const my = (a.y + b.y) / 2 + 2.5;
          ctx.quadraticCurveTo(mx, my, b.x, b.y);
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
