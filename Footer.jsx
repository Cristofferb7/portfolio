import { Link, useLocation, useNavigate } from 'react-router-dom';
import Reveal from './Reveal.jsx';
import { DanglingSpider, GitHubMark, MailIcon, SpiderMark } from '../icons.jsx';

export default function Footer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const goTo = (id) => {
    if (pathname !== '/') {
      navigate('/');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 80);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      {/* Contact CTA */}
      <section className="section" id="contact" style={{ textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)' }}>
          <DanglingSpider height={110} />
        </div>
        <div className="wrap">
          <Reveal>
            <h2 className="display-xl" style={{ margin: '60px 0 18px' }}>
              Your friendly neighborhood{' '}
              <span className="serif-accent" style={{ color: 'var(--red)' }}>developer.</span>
            </h2>
            <p className="lede" style={{ maxWidth: 520, margin: '0 auto 40px' }}>
              Open to full-stack roles and ambitious projects. Brooklyn-based, remote-ready.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a className="btn-primary" href="mailto:cristofferbohorquez@gmail.com">
                <MailIcon size={17} color="#fff" /> cristofferbohorquez@gmail.com
              </a>
              <a className="btn-ghost" href="https://github.com/cristofferb7" target="_blank" rel="noreferrer">
                <GitHubMark size={17} /> github.com/cristofferb7
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 18 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 650, fontSize: 14 }}>
              <SpiderMark size={20} /> Cristoffer Bohorquez
            </span>
            <div className="footer-links">
              <button className="footer-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => goTo('work')}>Work</button>
              <button className="footer-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => goTo('experience')}>Experience</button>
              <button className="footer-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => goTo('skills')}>Skills</button>
              <Link className="footer-link" to="/guide">Guide</Link>
              <a className="footer-link" href="https://github.com/cristofferb7" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
          <p className="footnote">
            Designed and engineered with React, React Three Fiber & Framer Motion.
            Built in collaboration with Claude (Anthropic). Every icon on this site is a
            hand-written inline SVG — no icon libraries were harmed.
            <br />© {new Date().getFullYear()} Cristoffer Bohorquez. With great power comes great responsibility.
          </p>
        </div>
      </footer>
    </>
  );
}
