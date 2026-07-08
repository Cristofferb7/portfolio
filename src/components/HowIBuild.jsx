import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal.jsx';

/**
 * HowIBuild — Apple-style pinned scroll-telling.
 * The left panel stays stuck while the three process steps scroll past;
 * the panel's SVG scene morphs to match the active step.
 */

const steps = [
  {
    num: '01',
    title: 'Spec first.',
    body: 'Requirements and design docs before a single line of code. Spec-driven development with AI agents means the architecture is argued about while it’s still cheap to change.',
  },
  {
    num: '02',
    title: 'Contract-tested.',
    body: 'OpenAPI contracts, typed clients, structured-output guarantees from LLMs. Every seam between systems is a promise — and promises get tested.',
  },
  {
    num: '03',
    title: 'Ship, then sharpen.',
    body: 'CI/CD from day one, deploys measured in hours. Production is the only environment whose opinion matters — get there fast, then iterate with discipline.',
  },
];

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  show: (i) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 1.1, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.3, delay: i * 0.12 } },
  }),
};

function VizSpec() {
  return (
    <motion.g initial="hidden" animate="show" exit={{ opacity: 0, transition: { duration: 0.25 } }}>
      <motion.rect x="70" y="52" width="100" height="136" rx="10" fill="none" stroke="#1d1d1f" strokeWidth="2.5" variants={draw} custom={0} />
      {[0, 1, 2, 3].map((i) => (
        <motion.line key={i} x1="86" y1={84 + i * 22} x2={i === 3 ? 122 : 154} y2={84 + i * 22} stroke={i === 0 ? '#e11d2e' : '#c7c7cc'} strokeWidth="3" strokeLinecap="round" variants={draw} custom={i + 1} />
      ))}
      <motion.path d="M150 168 l8 8 14 -18" fill="none" stroke="#e11d2e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" variants={draw} custom={5} />
    </motion.g>
  );
}

function VizContract() {
  const nodes = [
    [60, 70], [180, 70], [60, 170], [180, 170], [120, 120],
  ];
  const links = [
    [0, 4], [1, 4], [2, 4], [3, 4], [0, 1], [2, 3],
  ];
  return (
    <motion.g initial="hidden" animate="show" exit={{ opacity: 0, transition: { duration: 0.25 } }}>
      {links.map(([a, b], i) => (
        <motion.line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="#c7c7cc" strokeWidth="2" variants={draw} custom={i} />
      ))}
      {nodes.map(([x, y], i) => (
        <motion.circle key={i} cx={x} cy={y} r={i === 4 ? 11 : 7} fill={i === 4 ? '#e11d2e' : '#1d1d1f'} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1, transition: { delay: 0.5 + i * 0.08, type: 'spring', stiffness: 300, damping: 18 } }} style={{ transformOrigin: `${x}px ${y}px` }} />
      ))}
    </motion.g>
  );
}

function VizShip() {
  return (
    <motion.g initial="hidden" animate="show" exit={{ opacity: 0, transition: { duration: 0.25 } }}>
      <motion.path d="M50 180 L90 140 L120 156 L190 70" fill="none" stroke="#1d1d1f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" variants={draw} custom={0} />
      <motion.path d="M162 70 h28 v28" fill="none" stroke="#e11d2e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" variants={draw} custom={2} />
      {[90, 120].map((x, i) => (
        <motion.circle key={x} cx={x} cy={i === 0 ? 140 : 156} r="5.5" fill="#e11d2e" initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.7 + i * 0.15, type: 'spring', stiffness: 300, damping: 15 } }} style={{ transformOrigin: `${x}px ${i === 0 ? 140 : 156}px` }} />
      ))}
      <motion.line x1="50" y1="196" x2="190" y2="196" stroke="#e8e8ed" strokeWidth="2" variants={draw} custom={1} />
    </motion.g>
  );
}

const vizes = [VizSpec, VizContract, VizShip];

export default function HowIBuild() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(Number(e.target.dataset.idx));
          }
        });
      },
      { rootMargin: '-42% 0px -42% 0px' }
    );
    stepRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const Viz = vizes[active];

  return (
    <section id="process" className="section how" aria-label="How I build">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Process</p>
          <h2 className="display-lg" style={{ marginTop: 14 }}>
            How I build.
          </h2>
        </Reveal>
        <div className="how-track">
          <div className="how-sticky">
            <div className="how-viz">
              <svg viewBox="0 0 240 240" width="100%" height="100%" aria-hidden="true">
                <AnimatePresence mode="wait">
                  <motion.g
                    key={active}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.22 } }}
                  >
                    <Viz />
                  </motion.g>
                </AnimatePresence>
              </svg>
            </div>
          </div>
          <div className="how-steps">
            {steps.map((s, i) => (
              <div
                key={s.num}
                ref={(el) => (stepRefs.current[i] = el)}
                data-idx={i}
                className={`how-step${active === i ? ' active' : ''}`}
              >
                <span className="how-step-num">{s.num}</span>
                <h3>{s.title}</h3>
                <p className="body-copy">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
