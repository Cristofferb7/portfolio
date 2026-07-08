/**
 * content.js — single source of truth for all site copy.
 * Résumé rewritten for confidence, creativity, and velocity.
 */

export const identity = {
  name: 'Cristoffer Bohorquez',
  role: 'Full-Stack Developer & AI Agent Engineer',
  location: 'Brooklyn, NY',
  email: 'cristofferbohorquez@gmail.com',
  github: 'https://github.com/cristofferb7',
  tagline: 'Builds that stick.',
  sub: 'Full-stack developer and AI-agent engineer. Computer Science @ UCF — 4.0. I ship intelligent products end to end: federated data planes, agentic backends, and frontends with a pulse.',
};

export const stats = [
  { n: 4.0, decimals: 1, suffix: '', label: 'GPA — B.S.E. Computer Science, UCF. Dean’s List 2023.' },
  { n: 80, suffix: '%', label: 'Faster deal turnaround from a pricing-logic engine I built at Verizon.' },
  { n: 72, suffix: 'hrs', label: 'From empty repo to production AI app — auth, DB, agent, frontend.' },
  { n: 3, suffix: '', label: 'Human languages. Spanish, English, Portuguese — plus a dozen computed ones.' },
];

export const lineup = [
  {
    icon: 'agent',
    title: 'AI Agent Engineering',
    body: 'Spec-driven agentic development with Claude. System-instruction design that forces structured, reliable JSON out of LLMs.',
  },
  {
    icon: 'stack',
    title: 'Full-Stack Architecture',
    body: 'FastAPI, Node, Next.js. Auth, persistence, contracts, deployment — the whole vertical, owned end to end.',
  },
  {
    icon: 'front',
    title: 'Frontend Craft',
    body: 'React and TypeScript with taste. Data-dense dashboards for thousands of enterprise users at Wazuh.',
  },
  {
    icon: 'data',
    title: 'Federated Data',
    body: 'Presto SQL joining hot Cassandra against cold Iceberg in one query, on a live IBM watsonx.data cluster.',
  },
  {
    icon: 'systems',
    title: 'Systems & Languages',
    body: 'Java, C, C++, Python, TypeScript. Data structures to computer organization — fundamentals, not just frameworks.',
  },
  {
    icon: 'velocity',
    title: 'Developer Velocity',
    body: 'CI/CD pipelines, Docker, code review discipline, and OpenAPI contract tests. Fast because it’s rigorous.',
  },
];

/** AI-generated imagery (Higgsfield · nano-banana). Hosted on Higgsfield's CDN. */
export const art = {
  silkRed: 'https://d8j0ntlcm91z4.cloudfront.net/user_3GCb6b3dtgaqdSlf74q2RIa1hu3/hf_20260708_044025_de918197-0617-4e39-9992-82555c1e47bb_min.webp',
  threadsDark: 'https://d8j0ntlcm91z4.cloudfront.net/user_3GCb6b3dtgaqdSlf74q2RIa1hu3/hf_20260708_044036_2a3902cb-a140-46ff-8fdb-20cfd6d5cb18_min.webp',
  glassStack: 'https://d8j0ntlcm91z4.cloudfront.net/user_3GCb6b3dtgaqdSlf74q2RIa1hu3/hf_20260708_044039_ffed5ca4-1b7e-4db0-bd19-deef88ead99f_min.webp',
  sphere: 'https://d8j0ntlcm91z4.cloudfront.net/user_3GCb6b3dtgaqdSlf74q2RIa1hu3/hf_20260708_044041_84666886-da41-4290-b46b-62320a442eed_min.webp',
};

export const projects = [
  {
    tag: 'Data Engineering',
    title: 'Federated Analytics API',
    hook: 'One query. Two worlds.',
    body: 'A six-endpoint analytics API against a live enterprise IBM watsonx.data cluster. Federated Presto SQL joins hot operational data in Cassandra with cold historical archives in Iceberg — in a single query. Spec-driven from requirements docs to code, with OpenAPI contract tests and custom TLS bearer-token clients, built via AI-agent pair programming.',
    tech: ['FastAPI', 'Presto', 'Cassandra', 'Iceberg', 'watsonx.data', 'OpenAPI'],
    image: art.threadsDark, fallback: 'linear-gradient(135deg,#0b0b0f,#1c1c26)',
    links: [],
    span: 12,
  },
  {
    tag: 'AI · 72-hour build',
    title: 'AI Fighter Matchup',
    hook: 'Zero to production in 72 hours.',
    body: 'A full-stack AI application — backend, frontend, user auth, persistent database — architected solo, with zero senior guidance. The Gemini 1.5 Flash agent runs custom system instructions that enforce structured JSON output, making the AI a reliable API citizen instead of a chat toy.',
    tech: ['FastAPI', 'React', 'Gemini 1.5 Flash', 'PostgreSQL'],
    image: art.silkRed, fallback: 'linear-gradient(135deg,#2a0509,#7a0f1c)',
    links: [{ label: 'GitHub', href: 'https://github.com/cristofferb7' }],
    span: 7,
  },
  {
    tag: 'AI Vision',
    title: 'Who’s That Pokémon',
    hook: 'Real-time AI vision. Live on Vercel.',
    body: 'An AI-powered image identification app: Gemini API classification streaming into a Next.js + TypeScript frontend, deployed and live. Point, shoot, identified.',
    tech: ['Next.js', 'TypeScript', 'Gemini API', 'Vercel'],
    image: art.glassStack, fallback: 'linear-gradient(135deg,#15151b,#3a3a46)',
    links: [{ label: 'GitHub', href: 'https://github.com/cristofferb7' }],
    span: 5,
  },
];

export const experience = [
  {
    company: 'Verizon',
    role: 'Sales Engineer',
    period: 'May 2025 — Present · Orlando, FL',
    body: 'The technical translator for a 24-store region. Live device demos and real-time troubleshooting on customer calls; system-log forensics and internal-API work that bridge operations and engineering when integrations and billing go sideways.',
  },
  {
    company: 'Verizon',
    role: 'Business Account Manager',
    period: 'Nov 2023 — May 2025 · Orlando, FL',
    body: 'Trusted technical advisor to SMB enterprise clients — uncovering requirements, designing tailored solutions, driving adoption across multi-stakeholder organizations. Built a logic-based Excel automation engine for multi-condition pricing that cut deal turnaround by 80%.',
  },
  {
    company: 'Wazuh, Inc.',
    role: 'Front End Developer Intern',
    period: 'Jun 2023 — Sep 2023 · Orlando, FL',
    body: 'Shipped React components and OpenSearch data visualizations for a cybersecurity dashboard serving thousands of enterprise users. CI/CD deployments, code reviews, agile sprints — production discipline from day one.',
  },
];

export const education = [
  {
    school: 'University of Central Florida',
    credential: 'B.S.E. Computer Science — expected May 2027',
    detail: '4.0 GPA · Dean’s List 2023. Data Structures & Algorithms, Discrete Structures, Systems Software, OOP, Computer Organization.',
  },
  {
    school: 'University of Central Florida',
    credential: 'Full-Stack Coding Bootcamp Certificate — 2023',
    detail: '240 contact hours. MERN stack, REST APIs, GraphQL, SQL/NoSQL, agile development.',
  },
];

export const skills = [
  { icon: 'js', title: 'JavaScript / TypeScript', body: 'React, React Native, Node.js — the language of the product surface.' },
  { icon: 'py', title: 'Python', body: 'FastAPI and Django. APIs that are typed, tested, and documented.' },
  { icon: 'sys', title: 'Java · C · C++', body: 'Memory models, pointers, and OOP — the fundamentals under everything.' },
  { icon: 'ai', title: 'AI & GenAI', body: 'Claude agentic/spec-driven development, Gemini prompt & system-instruction engineering.' },
  { icon: 'db', title: 'Data Layer', body: 'PostgreSQL, MySQL, Presto, Cassandra, Iceberg, MongoDB.' },
  { icon: 'ops', title: 'Integration & Ops', body: 'REST, GraphQL, CI/CD, Docker, GitHub — plus third-party APIs in production.' },
];

export const marquee = [
  'React', 'TypeScript', 'FastAPI', 'Presto', 'Cassandra', 'Iceberg',
  'PostgreSQL', 'Gemini', 'Claude', 'Next.js', 'Node.js', 'Docker',
  'GraphQL', 'Python', 'Java', 'C++',
];
