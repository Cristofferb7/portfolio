import { useRef } from 'react';
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useVelocity, useTransform, useReducedMotion } from 'framer-motion';
import { marquee } from '../content.js';

/**
 * Velocity-reactive marquee — drifts at a base speed, then surges when you
 * fling the page. Scroll velocity is springed so the surge decays naturally.
 */
export default function Marquee() {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const trackRef = useRef(null);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { stiffness: 60, damping: 18, mass: 0.3 });
  const boost = useTransform(smooth, [-2400, 0, 2400], [-6, 0, 6]);

  useAnimationFrame((_, delta) => {
    if (reduced) return;
    const track = trackRef.current;
    if (!track) return;
    const half = track.scrollWidth / 2;
    if (!half) return;
    const move = (42 + Math.abs(boost.get()) * 30) * (delta / 1000);
    let next = x.get() - move;
    if (next <= -half) next += half;
    x.set(next);
  });

  return (
    <div className="marquee" aria-hidden="true">
      <motion.div ref={trackRef} className="marquee-track" style={reduced ? {} : { x, animation: 'none' }}>
        {[...marquee, ...marquee].map((m, i) => (
          <span key={i} className="marquee-item">
            {m} <span style={{ color: 'var(--red)' }}>·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
