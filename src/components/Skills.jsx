import Reveal from './Reveal.jsx';
import {
  IconReact, IconNode, IconMongo, IconExpress,
  IconPython, IconSQL, IconAI, IconTS, MaskEyes,
} from '../icons.jsx';

const skills = [
  { icon: <IconReact />, name: 'React & React Native', copy: 'Component architecture, hooks, R3F, motion design in production.' },
  { icon: <IconNode />, name: 'Node.js', copy: 'REST & GraphQL APIs, auth flows, CI/CD pipelines.' },
  { icon: <IconMongo />, name: 'MongoDB & NoSQL', copy: 'Plus Cassandra and Iceberg on enterprise clusters.' },
  { icon: <IconExpress />, name: 'Express', copy: 'The E in MERN — middleware, routing, API contracts.' },
  { icon: <IconPython />, name: 'Python', copy: 'FastAPI and Django services; federated Presto SQL.' },
  { icon: <IconSQL />, name: 'SQL', copy: 'MySQL, PostgreSQL, Presto. Queries that join hot and cold data.' },
  { icon: <IconTS />, name: 'TypeScript', copy: 'Typed contracts front to back. Java, C, and C++ too.' },
  { icon: <IconAI />, name: 'AI Engineering', copy: 'Claude agentic workflows, Gemini system instructions, prompt engineering.' },
];

export default function Skills() {
  return (
    <section className="section section-dark" id="skills" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="wrap">
        <Reveal style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 56 }}>
          <div>
            <p className="eyebrow">Spider-sense</p>
            <h2 className="display-xl" style={{ margin: '14px 0 12px', color: '#f5f5f7' }}>
              A sense for{' '}
              <span className="serif-accent" style={{ color: 'var(--red)' }}>every stack.</span>
            </h2>
            <p className="lede" style={{ maxWidth: 520 }}>
              MERN at the core. Data engineering and AI at the edges. Fluent in Spanish, English, and Portuguese — and in shipping.
            </p>
          </div>
          <MaskEyes width={120} />
        </Reveal>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.045} className="skill-cell">
              {s.icon}
              <h4 style={{ color: '#f5f5f7' }}>{s.name}</h4>
              <p>{s.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
