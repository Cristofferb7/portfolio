import Reveal from './Reveal.jsx';
import { ArrowUpRight, GitHubMark, WebCorner } from '../icons.jsx';

const projects = [
  {
    span: 'span-12',
    tag: 'Enterprise Data · IBM watsonx.data',
    title: 'Federated Analytics API',
    copy:
      'A 6-endpoint analytics API against a live enterprise watsonx.data cluster — federated Presto SQL joining hot operational data in Cassandra with cold Iceberg archives in single queries. Spec-driven: requirements and design docs to code, OpenAPI contract tests, bearer-token auth over TLS.',
    tech: ['FastAPI', 'Presto', 'Cassandra', 'Iceberg', 'OpenAPI'],
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1800&auto=format&fit=crop',
    links: [],
  },
  {
    span: 'span-7',
    tag: 'AI · Built in 72 hours',
    title: 'AI Fighter Matchup',
    copy:
      'Full-stack AI application — backend, frontend, auth, and persistent database — architected in 72 hours with zero senior guidance. A Gemini 1.5 Flash agent with custom system instructions enforces structured JSON for reliable data exchange.',
    tech: ['FastAPI', 'React', 'Gemini 1.5', 'PostgreSQL'],
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop',
    links: [{ label: 'View on GitHub', href: 'https://github.com/Cristofferb7/ai_fighter_matchup', icon: 'gh' }],
  },
  {
    span: 'span-5',
    tag: 'AI Vision · Live on Vercel',
    title: "Who's That Pokémon",
    copy:
      'AI-powered image identification with the Gemini API for real-time classification. Built with Next.js and TypeScript, deployed and live.',
    tech: ['Next.js', 'TypeScript', 'Gemini API'],
    img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
    links: [{ label: 'GitHub', href: 'https://github.com/cristofferb7', icon: 'gh' }],
  },
];

export default function Features() {
  return (
    <section className="section" id="work" style={{ position: 'relative' }}>
      <WebCorner style={{ top: 0, right: 0, transform: 'rotate(90deg)' }} />
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">The latest</p>
          <h2 className="display-xl" style={{ margin: '14px 0 12px' }}>
            Take a look at what's new,{' '}
            <span className="serif-accent" style={{ color: 'var(--red)' }}>
              right now.
            </span>
          </h2>
          <p className="lede" style={{ maxWidth: 560, marginBottom: 56 }}>
            Selected projects — from enterprise data platforms to AI apps shipped in a weekend.
          </p>
        </Reveal>
        <div className="feature-grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className={`feature-card ${p.span}`}>
              <div className="feature-media" style={{ backgroundImage: `url(${p.img})` }} />
              <div className="feature-scrim" />
              <div className="feature-body">
                <span className="feature-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.copy}</p>
                <div className="tech-pills">
                  {p.tech.map((t) => (
                    <span className="tech-pill" key={t}>{t}</span>
                  ))}
                </div>
                {p.links.length > 0 && (
                  <div className="feature-links">
                    {p.links.map((l) => (
                      <a className="feature-link" key={l.href} href={l.href} target="_blank" rel="noreferrer">
                        {l.icon === 'gh' ? <GitHubMark size={15} /> : null}
                        {l.label}
                        <ArrowUpRight size={13} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
