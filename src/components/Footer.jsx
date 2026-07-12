import Reveal from './Reveal.jsx';
import { Magnetic } from './Reveal.jsx';
import { identity } from '../content.js';
import { SpiderMark } from '../icons.jsx';
import { openResume } from './ResumeModal.jsx';

export default function Footer() {
  return (
    <>
      <section className="section" aria-label="Contact">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <Reveal>
            <p className="eyebrow" style={{ justifyContent: 'center' }}>Contact</p>
            <h2 className="display-xl" style={{ marginTop: 16 }}>
              Let’s build something<br />
              <span className="serif-accent" style={{ color: 'var(--red)' }}>amazing.</span>
            </h2>
            <p className="lede" style={{ maxWidth: 520, margin: '22px auto 0' }}>
              Internships, collaborations, ambitious ideas — my inbox is open and my response time is friendly-neighborhood fast.
            </p>
            <div style={{ marginTop: 38, display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Magnetic>
                <a className="btn-primary" href={`mailto:${identity.email}`}>
                  {identity.email}
                </a>
              </Magnetic>
              <Magnetic strength={0.22}>
                <a className="btn-ghost" href={identity.github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              </Magnetic>
              <Magnetic strength={0.22}>
                <a className="btn-ghost" href={identity.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn ↗
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
      <footer className="footer">
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 18 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 9, fontWeight: 650, fontSize: 14 }}>
              <SpiderMark size={18} /> {identity.name}
            </span>
            <nav className="footer-links" aria-label="Footer">
              <a className="footer-link" href={identity.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="footer-link" href={identity.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="footer-link" href={`mailto:${identity.email}`}>Email</a>
              <button className="footer-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }} onClick={openResume}>
                Résumé
              </button>
            </nav>
          </div>
          <p className="footnote">
            © {new Date().getFullYear()} {identity.name}. Designed and engineered in Brooklyn — with great power and a 4.0 GPA.
            Built with React, Vite, React Three Fiber & Framer Motion.
          </p>
        </div>
      </footer>
    </>
  );
}
