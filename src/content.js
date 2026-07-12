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
  linkedin: 'https://www.linkedin.com/in/cristoffer-bohorquez',
  resume: '/resume.pdf',
  resumeFilename: 'Cristoffer_Bohorquez_Software_Engineer.pdf',
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
    tag: 'Data Platform · ML',
    title: 'VGC Champions Vault',
    hook: 'Three data pipelines. One 90-second window.',
    body: 'A competitive HUD for Pokémon Champions: screenshot an opponent’s team preview and OCR turns it into a live threat matrix with real damage math — inside the 90-second prep window. Three self-updating pipelines (daily usage stats, monthly ladder data, weekly tournament sheets via GitHub Actions) feed spread distributions, checks-and-counters evidence, and k-means archetype clustering over 6,900+ real tournament teams. One codebase ships as an installable PWA and a CI-built Android APK.',
    tech: ['React', 'TypeScript', 'tesseract.js', 'k-means', 'GitHub Actions', 'Capacitor', 'PWA'],
    image: art.threadsDark, fallback: 'linear-gradient(135deg,#0b0e14,#123a3a)',
    video: '/vault.mp4',
    links: [
      { label: 'GitHub', href: 'https://github.com/Cristofferb7/VGC-Champions-Vault' },
      { label: 'Live App', href: 'https://champions-analyzer.vercel.app' },
    ],
    span: 12,
  },
  {
    tag: 'Data Engineering',
    title: 'Federated Analytics API',
    hook: 'One query. Two worlds.',
    body: 'A six-endpoint analytics API against a live enterprise IBM watsonx.data cluster. Federated Presto SQL joins hot operational data in Cassandra with cold historical archives in Iceberg — in a single query. Spec-driven from requirements docs to code, with OpenAPI contract tests and custom TLS bearer-token clients, built via AI-agent pair programming.',
    tech: ['FastAPI', 'Presto', 'Cassandra', 'Iceberg', 'watsonx.data', 'OpenAPI'],
    image: art.threadsDark, fallback: 'linear-gradient(135deg,#0b0b0f,#1c1c26)',
    video: '/pulse.mp4',
    hasCaseStudy: true,
    links: [
      { label: 'GitHub', href: 'https://github.com/Cristofferb7/wxd-spec-coding-dashboard' },
      { label: 'Live Demo', href: 'https://wxd-spec-coding-dashboard.vercel.app' },
    ],
    span: 12,
  },
  {
    tag: 'PWA · Offline-first',
    title: 'PrepHub',
    hook: 'Started 2023. Rebuilt after the 2026 quakes.',
    body: 'An offline-first, Spanish-first earthquake-preparedness PWA for Venezuela, rebuilt from scratch after the June 2026 twin earthquakes. A family builds its 72-hour kit and reunification plan in one 20-minute session — then keeps it forever with no internet: full service-worker precache, IndexedDB, WhatsApp/print/QR sharing, and a black-screen emergency mode. No backend, no accounts, ~120 KB first load for old low-end Androids.',
    tech: ['React', 'TypeScript', 'Vite', 'Workbox', 'Dexie / IndexedDB', 'Web Share API'],
    image: art.threadsDark, fallback: 'linear-gradient(135deg,#0b1220,#7a4a00)',
    video: '/prephub.mp4',
    links: [
      { label: 'GitHub', href: 'https://github.com/Cristofferb7/prephub-v2' },
      { label: 'Live App', href: 'https://prephub-delta.vercel.app' },
    ],
    span: 12,
  },
  {
    tag: 'AI · 72-hour build',
    title: 'AI Fighter Matchup',
    hook: 'Zero to production in 72 hours.',
    body: 'A full-stack AI application — backend, frontend, user auth, persistent database — architected solo, with zero senior guidance. The Gemini 1.5 Flash agent runs custom system instructions that enforce structured JSON output, making the AI a reliable API citizen instead of a chat toy.',
    tech: ['FastAPI', 'React', 'Gemini 1.5 Flash', 'PostgreSQL'],
    image: art.silkRed, fallback: 'linear-gradient(135deg,#2a0509,#7a0f1c)',
    links: [
      { label: 'GitHub', href: 'https://github.com/Cristofferb7/ai_fighter_matchup' },
      { label: 'Watch Demo', href: 'https://www.youtube.com/watch?v=IoQhgGu-tB8' },
    ],
    span: 7,
  },
  {
    tag: 'AI Vision',
    title: 'Who’s That Pokémon',
    hook: 'Real-time AI vision. Live on Vercel.',
    body: 'An AI-powered image identification app: Gemini API classification streaming into a Next.js + TypeScript frontend, deployed and live. Point, shoot, identified.',
    tech: ['Next.js', 'TypeScript', 'Gemini API', 'Vercel'],
    image: art.glassStack, fallback: 'linear-gradient(135deg,#15151b,#3a3a46)',
    video: '/wtp.mp4',
    links: [
      { label: 'GitHub', href: 'https://github.com/Cristofferb7/Whos-That-Pokemonv2' },
      { label: 'Live Demo', href: 'https://whos-that-pokemonv2.vercel.app' },
    ],
    span: 5,
  },
  {
    tag: 'Mobile · Social',
    title: 'MeetMatch',
    hook: 'Events worth leaving the house for.',
    body: 'A mobile social app that matches people through real-world events — browse local happenings via the Ticketmaster API, RSVP, match, and chat. Events, matches, and conversations in one native-feeling flow.',
    tech: ['React Native', 'Ticketmaster API', 'Node.js'],
    image: art.sphere, fallback: 'linear-gradient(135deg,#1b0f2a,#3d1a52)',
    video: '/meetmatch.mp4',
    links: [],
    span: 5,
  },
  {
    tag: 'Meta · This site',
    title: 'This Portfolio',
    hook: 'The résumé that renders itself.',
    body: 'Apple-store minimalism fused with Spider-Man motifs: a procedural GLSL spider-web hero with pointer-ripple physics, scroll-telling, magnetic buttons, and a silk cursor trail. Spec-driven and AI-agent pair-programmed with Claude — designed, built, and shipped in days.',
    tech: ['React 18', 'Vite', 'React Three Fiber', 'GLSL', 'Framer Motion', 'Claude'],
    image: art.silkRed, fallback: 'linear-gradient(135deg,#2a0509,#7a0f1c)',
    links: [{ label: 'GitHub', href: 'https://github.com/Cristofferb7/portfolio' }],
    span: 7,
  },
];

/** Case study — Federated Analytics API (IBM watsonx.data workshop). */
export const caseStudy = {
  eyebrow: 'Case study',
  title: 'Inside the build',
  overview:
    'Built in a 3-hour IBM watsonx.data workshop against a live, shared enterprise cluster. Spec-driven with an AI agent: requirements doc → design + OpenAPI contract → code → tests — every endpoint traces back to a REQ-ID, and tests assert what the spec says, not what the code happens to return.',
  arch: {
    engine: { name: 'Presto', desc: 'Federated SQL engine — one query, both stores' },
    hot: { name: 'Cassandra', desc: 'Hot · operational. Current state, live orders, single-row ops' },
    cold: { name: 'Iceberg', desc: 'Cold · archival. Order history, daily rollups, monthly LTV' },
  },
  sql: `SELECT c.customer_id, COUNT(o.order_id) AS recent_orders
FROM cassandra.ecommerce.customers c
LEFT JOIN iceberg_data.ecommerce_reference.orders_archive o
  ON o.customer_id = c.customer_id
WHERE o.order_date >= DATE '2025-01-01'
GROUP BY c.customer_id
ORDER BY recent_orders DESC
LIMIT 10`,
  sqlCaption:
    'The central trick: one Presto statement joining hot customer records in Cassandra against the cold order archive in Iceberg — no ETL, no sync job.',
  steps: [
    { n: '01', title: 'Requirements', body: 'Read the real Cassandra & Iceberg DDL, then write 5–7 concrete, testable REQs. No table gets referenced unless it exists in the schema files.' },
    { n: '02', title: 'Design + contract', body: 'Data-flow design and an OpenAPI spec — every REQ-ID covered by at least one endpoint, with response examples.' },
    { n: '03', title: 'Build + test', body: 'Task list → FastAPI code → contract tests. Tests assert the spec. Run, fix, demo an endpoint end-to-end.' },
    { n: '04', title: 'Expand', body: 'Add a new REQ and propagate it through the whole chain: requirements → contract → tasks → code → tests → UI.' },
  ],
  hardParts: [
    { title: 'Bearer-token auth, no SDK', body: 'Two-step flow: mint a token from the Software Hub API, then POST SQL to Presto over TLS and poll nextUri until FINISHED — with a hand-rolled HTTP client.' },
    { title: 'Cassandra behind a TLS route', body: 'The driver discovers internal pod IPs and stalls ~15s per unreachable node. Fixed with a custom EndPointFactory that collapses every discovered node back to the single :443 route.' },
    { title: 'Federation performance', body: 'A shared Presto coordinator punishes sloppy SQL — partition filters and explicit JOIN conditions are spec-level requirements, not afterthoughts.' },
  ],
};

export const experience = [
  {
    company: 'Verizon',
    role: 'Sales Engineer',
    period: 'May 2025 — Present · Orlando, FL',
    body: 'The technical translator for a 24-store region. Live device demos and real-time troubleshooting on customer calls; system-log forensics and internal-API work that bridge operations and engineering when integrations and billing go sideways. Leads district-wide GenAI enablement — training teams on Gemini, prompt engineering, and NotebookLM to automate workflows.',
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
  { icon: 'sys', title: 'Java · C · C++ · C#', body: 'Memory models, pointers, and OOP — the fundamentals under everything.' },
  { icon: 'ai', title: 'AI & GenAI', body: 'Claude agentic/spec-driven development, Gemini prompt & system-instruction engineering, NotebookLM.' },
  { icon: 'web', title: 'Web Platform', body: 'Next.js, Vite, HTML/CSS, PWAs — the full MERN stack, deployed on Vercel.' },
  { icon: 'motion', title: 'Motion & 3D', body: 'Framer Motion, React Three Fiber, Three.js, GLSL shaders. This site is the demo.' },
  { icon: 'db', title: 'SQL & Federation', body: 'PostgreSQL, MySQL, and federated Presto SQL across live enterprise clusters.' },
  { icon: 'nosql', title: 'NoSQL & Big Data', body: 'Cassandra, Iceberg, MongoDB, OpenSearch — hot and cold data on IBM watsonx.data.' },
  { icon: 'api', title: 'APIs & Contracts', body: 'REST, GraphQL, OpenAPI contract tests, third-party integrations (Gemini, Ticketmaster).' },
  { icon: 'ops', title: 'DevOps & Tooling', body: 'CI/CD pipelines, Docker, Git/GitHub, Vercel — iterative deployments with review discipline.' },
  { icon: 'agile', title: 'Agile Delivery', body: 'Scrum ceremonies, code reviews, cross-functional sprints with engineering and product.' },
  { icon: 'auto', title: 'Automation & Analytics', body: 'Logic-based Excel engines, KPI dashboards, workflow automation that cut turnaround 80%.' },
];

export const marquee = [
  'React', 'TypeScript', 'FastAPI', 'Presto', 'Cassandra', 'Iceberg',
  'PostgreSQL', 'Gemini', 'Claude', 'Next.js', 'Node.js', 'Docker',
  'GraphQL', 'Python', 'Java', 'C++', 'React Native', 'MongoDB',
  'Three.js', 'Framer Motion', 'MySQL', 'Vite',
];
