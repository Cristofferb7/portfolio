import Hero from '../components/Hero.jsx';
import Lineup from '../components/Lineup.jsx';
import Features from '../components/Features.jsx';
import Experience from '../components/Experience.jsx';
import Skills from '../components/Skills.jsx';
import { SpiderMark } from '../icons.jsx';

const marqueeItems = [
  'React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Python',
  'FastAPI', 'PostgreSQL', 'Gemini API', 'Claude', 'GraphQL', 'Docker',
];

function Marquee() {
  const row = (key) => (
    <span className="marquee-item" key={key} aria-hidden={key === 'b'}>
      {marqueeItems.map((m) => (
        <span key={m} style={{ display: 'inline-flex', alignItems: 'center', gap: 56 }}>
          {m} <SpiderMark size={13} color="#d2d2d7" />
        </span>
      ))}
    </span>
  );
  return (
    <div className="marquee">
      <div className="marquee-track">{row('a')}{row('b')}</div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Lineup />
      <Features />
      <Experience />
      <Skills />
    </main>
  );
}
