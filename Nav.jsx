import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SpiderMark } from '../icons.jsx';

const sections = [
  { label: 'Work', id: 'work' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
];

export default function Nav() {
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
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" aria-label="Home" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <SpiderMark size={24} color="#1d1d1f" />
          <span style={{ fontWeight: 650, fontSize: 15, letterSpacing: '-0.02em' }}>
            Cristoffer Bohorquez
          </span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 34 }}>
          <div className="nav-links">
            {sections.map((s) => (
              <button key={s.id} className="nav-link" onClick={() => goTo(s.id)}>
                {s.label}
              </button>
            ))}
            <Link to="/guide" className="nav-link" style={{ padding: 0 }}>
              Guide
            </Link>
          </div>
          <a className="nav-cta" href="mailto:cristofferbohorquez@gmail.com">
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}
