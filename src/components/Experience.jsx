import Reveal from './Reveal.jsx';

const roles = [
  {
    title: 'Sales Engineer — Verizon Wireless',
    meta: 'May 2025 – Present · Orlando, FL',
    copy:
      'Leading live customer calls to demo devices and troubleshoot in real time across a 24-store regional footprint. Resolving integration and billing discrepancies by reading system error logs and working internal APIs — the bridge between operations and engineering.',
  },
  {
    title: 'Business Account Manager — Verizon Wireless',
    meta: 'Nov 2023 – May 2025 · Orlando, FL',
    copy:
      'Trusted technical advisor to SMB enterprise clients. Built a logic-based Excel automation engine for complex multi-condition pricing workflows — cutting deal turnaround time by 80%.',
  },
  {
    title: 'Front End Developer Intern — Wazuh, Inc.',
    meta: 'Jun 2023 – Sep 2023 · Orlando, FL',
    copy:
      'Built and maintained React components for a cybersecurity dashboard serving thousands of enterprise users, integrating OpenSearch visualizations. CI/CD deployments, code reviews, agile sprints.',
  },
  {
    title: 'B.S. Computer Science — University of Central Florida',
    meta: 'Expected May 2027 · 4.0 GPA · Dean’s List',
    copy:
      'Data Structures & Algorithms, Systems Software, OOP, Computer Organization. Plus a 240-hour Full-Stack Bootcamp Certificate (MERN, REST, GraphQL, SQL/NoSQL, Agile).',
  },
];

export default function Experience() {
  return (
    <section className="section section-grey" id="experience">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Origin story</p>
          <h2 className="display-xl" style={{ margin: '14px 0 56px' }}>
            Every hero has{' '}
            <span className="serif-accent" style={{ color: 'var(--red)' }}>an origin.</span>
          </h2>
        </Reveal>
        <Reveal className="stats-band">
          {[
            { n: '4.0', label: 'GPA — UCF Computer Science' },
            { n: '80%', label: 'faster deal turnaround via Excel automation' },
            { n: '72h', label: 'to architect & ship a full-stack AI app' },
            { n: '3', label: 'languages — English, Spanish, Portuguese' },
          ].map((s) => (
            <div key={s.label} className="stat">
              <span className="stat-n">{s.n}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </Reveal>
        <div className="timeline">
          {roles.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.06} className="tl-item">
              <span className="tl-dot" />
              <h3>{r.title}</h3>
              <p className="tl-meta">{r.meta}</p>
              <p className="body-copy">{r.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
