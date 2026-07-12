import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SpiderMark } from '../icons.jsx';
import { identity } from '../content.js';
import { openResume } from './ResumeModal.jsx';

const sections = [
  { label: 'Capabilities', id: 'capabilities' },
  { label: 'Projects', id: 'work' },
  { label: 'Process', id: 'process' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Résumé', resume: true },
];

export default function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const go = (id) => {
    setOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 60);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderLinks = () =>
    sections.map((s) =>
      s.resume ? (
        <button
          key={s.label}
          className="nav-link"
          onClick={() => {
            setOpen(false);
            openResume();
          }}
        >
          {s.label}
        </button>
      ) : (
        <button key={s.label} className="nav-link" onClick={() => go(s.id)}>
          {s.label}
        </button>
      )
    );

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <Link to="/" aria-label="Home" style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <SpiderMark />
            <span style={{ fontWeight: 650, fontSize: 15, letterSpacing: '-0.02em' }}>
              Cristoffer Bohorquez
            </span>
          </Link>
          <nav className="nav-links" aria-label="Primary">
            {renderLinks()}
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <a className="nav-cta" href={`mailto:${identity.email}`}>
              Get in touch
            </a>
            <button
              className="mobile-menu-btn"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <motion.line
                  x1="2" x2="18"
                  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
                  animate={open ? { y1: 10, y2: 10, rotate: 45 } : { y1: 6.5, y2: 6.5, rotate: 0 }}
                  style={{ originX: '10px', originY: '10px' }}
                />
                <motion.line
                  x1="2" x2="18"
                  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
                  animate={open ? { y1: 10, y2: 10, rotate: -45 } : { y1: 13.5, y2: 13.5, rotate: 0 }}
                  style={{ originX: '10px', originY: '10px' }}
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderLinks()}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
