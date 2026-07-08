import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

/**
 * SpiderCameo — a tiny spider rappels down from the top of the viewport
 * on a silk thread when you cross the mid-point of the page, dangles for
 * a beat (with a shy little wave), then zips back up. Once per visit.
 */
export default function SpiderCameo() {
  const [show, setShow] = useState(false);
  const [done, setDone] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || done) return;
    const onScroll = () => {
      const p = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (p > 0.45 && !done) {
        setShow(true);
        setDone(true);
        setTimeout(() => setShow(false), 4600);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [done, reduced]);

  if (reduced) return null;

  return (
    <div className="spider-cameo">
      <AnimatePresence>
        {show && (
          <motion.svg
            width="60"
            height="240"
            viewBox="0 0 60 240"
            initial={{ y: -240 }}
            animate={{ y: 0, transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] } }}
            exit={{ y: -260, transition: { duration: 0.9, ease: [0.55, 0, 0.55, 0.2] } }}
          >
            {/* silk thread */}
            <line x1="30" y1="0" x2="30" y2="188" stroke="#b8b8bf" strokeWidth="1.2" />
            {/* dangling spider — gentle pendulum on the group */}
            <motion.g
              animate={{ rotate: [0, 4.5, -4.5, 2.5, 0] }}
              transition={{ duration: 3.6, ease: 'easeInOut', delay: 1.5 }}
              style={{ originX: '30px', originY: '0px' }}
            >
              <circle cx="30" cy="196" r="8.5" fill="#e11d2e" />
              <circle cx="30" cy="185" r="5" fill="#1d1d1f" />
              {[...Array(8)].map((_, i) => {
                const side = i < 4 ? 1 : -1;
                const k = i % 4;
                return (
                  <motion.line
                    key={i}
                    x1={30}
                    y1={192 + k * 2.4}
                    x2={30 + side * (13 - k * 1.4)}
                    y2={185 + k * 5.2}
                    stroke="#1d1d1f"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    animate={i === 3 ? { rotate: [0, 18, 0, 18, 0] } : {}}
                    transition={{ delay: 2.1, duration: 1.2 }}
                    style={{ originX: '30px', originY: '194px' }}
                  />
                );
              })}
            </motion.g>
          </motion.svg>
        )}
      </AnimatePresence>
    </div>
  );
}
