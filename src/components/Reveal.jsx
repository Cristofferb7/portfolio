import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

/** Scroll-reveal wrapper: rise + blur-in with Apple-style easing. */
export default function Reveal({ children, delay = 0, y = 28, once = true, className, style }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: '-8% 0px' });
  const reduced = useReducedMotion();

  if (reduced) return <div className={className} style={style}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y, filter: 'blur(6px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Magnetic wrapper — element leans toward the cursor like it's caught in a web. */
export function Magnetic({ children, strength = 0.32 }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const onMove = (e) => {
    const el = ref.current;
    if (!el || reduced) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
    el.style.transform = 'translate(0, 0)';
    setTimeout(() => el && (el.style.transition = ''), 500);
  };

  return (
    <span
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ display: 'inline-block', willChange: 'transform' }}
    >
      {children}
    </span>
  );
}
