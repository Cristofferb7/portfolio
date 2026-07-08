import { lazy, Suspense, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

// three.js is ~219KB gzip — keep it off the critical path
const HeroScene = lazy(() => import('../three/HeroScene.jsx'));
import { Magnetic } from './Reveal.jsx';
import { identity } from '../content.js';
import { ArrowDown } from '../icons.jsx';

/** Per-word blur-in headline, Apple keynote style. */
function StaggeredTitle({ text, className }) {
  const reduced = useReducedMotion();
  const words = text.split(' ');
  if (reduced) return <h1 className={className}>{text}</h1>;
  return (
    <h1 className={className} aria-label={text}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="hero-word"
          aria-hidden="true"
          initial={{ opacity: 0, y: 46, filter: 'blur(10px)', rotateX: 24 }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)', rotateX: 0 }}
          transition={{ duration: 1.05, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {w}
          {i < words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </h1>
  );
}

export default function Hero({ scrollProgressRef }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // feed scroll progress to the 3D scene without re-rendering it
  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      if (scrollProgressRef) scrollProgressRef.current = v;
    });
  }, [scrollYProgress, scrollProgressRef]);

  return (
    <section ref={ref} className="hero" aria-label="Introduction">
      <Suspense fallback={null}>
        <HeroScene scrollRef={scrollProgressRef} />
      </Suspense>
      <motion.div className="wrap hero-content" style={{ y: contentY, opacity: contentOpacity }}>
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          {identity.name} · {identity.location}
        </motion.p>
        <StaggeredTitle text={identity.tagline} className="display-xxl" />
        <motion.p
          className="lede"
          style={{ maxWidth: 640, marginTop: 26 }}
          initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          {identity.sub}
        </motion.p>
        <motion.div
          style={{ display: 'flex', gap: 16, marginTop: 40, flexWrap: 'wrap' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.82, ease: [0.22, 1, 0.36, 1] }}
        >
          <Magnetic>
            <button
              className="btn-primary"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See the work
            </button>
          </Magnetic>
          <Magnetic strength={0.22}>
            <a className="btn-ghost" href={identity.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 1 }}
      >
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown />
        </motion.span>
        Scroll
      </motion.div>
    </section>
  );
}
