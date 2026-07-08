import Reveal from './Reveal.jsx';
import {
  IconReact, IconNode, IconSQL, IconAI, IconCloud, IconTS,
} from '../icons.jsx';

const ink = '#1d1d1f';

const lineup = [
  { icon: <IconReact ink={ink} />, title: 'Web Apps', copy: 'React front ends with motion design, 3D, and obsessive polish.' },
  { icon: <IconNode ink={ink} />, title: 'APIs', copy: 'Node/Express and FastAPI services with clean OpenAPI contracts.' },
  { icon: <IconAI ink={ink} />, title: 'AI Agents', copy: 'Gemini & Claude integrations with structured, reliable outputs.' },
  { icon: <IconSQL ink={ink} />, title: 'Data Platforms', copy: 'Federated Presto SQL across Cassandra, Iceberg, and Postgres.' },
  { icon: <IconTS ink={ink} />, title: 'Typed Systems', copy: 'TypeScript end to end — fewer bugs, faster refactors.' },
  { icon: <IconCloud ink={ink} />, title: 'Ship & Scale', copy: 'CI/CD pipelines, Docker, Vercel — code that actually ships.' },
];

export default function Lineup() {
  return (
    <section className="section" style={{ paddingBottom: 40 }}>
      <div className="wrap">
        <Reveal style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 34 }}>
          <h2 className="display-lg">
            The lineup.{' '}
            <span style={{ color: 'var(--muted)' }}>What I build, right now.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="lineup-row">
            {lineup.map((c) => (
              <div className="lineup-card" key={c.title}>
                <div className="card-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.copy}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
