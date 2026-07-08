import { motion } from 'framer-motion';
import WebScene from '../three/WebScene.jsx';
import { ScrollMouse, Thwip } from '../icons.jsx';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const rise = {
  hidden: { opacity: 0, y: 42 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <header className="hero">
      <WebScene />
      <motion.div
        className="wrap hero-content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={rise} className="eyebrow" style={{ marginBottom: 22 }}>
          <Thwip size={22} /> Full-Stack Developer · MERN
        </motion.p>
        <motion.h1 variants={rise} className="display-xxl">
          Cristoffer
          <br />
          Bohorquez<span style={{ color: 'var(--red)' }}>.</span>
        </motion.h1>
        <motion.p
          variants={rise}
          className="lede"
          style={{ maxWidth: 640, margin: '30px 0 40px' }}
        >
          I build web applications with{' '}
          <em className="serif-accent">great power</em> — and take{' '}
          <em className="serif-accent">great responsibility</em> for every pixel.
          React, Node, and AI-assisted engineering from Brooklyn, NY.
        </motion.p>
        <motion.div variants={rise} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <a className="btn-primary" href="#work">
            See the work
          </a>
          <a className="btn-ghost" href="https://github.com/cristofferb7" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        className="hero-scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <ScrollMouse />
        <span>Swing down</span>
      </motion.div>
    </header>
  );
}
