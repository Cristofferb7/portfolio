import { motion, AnimatePresence } from 'framer-motion';
import { caseStudy } from '../content.js';

/** Architecture mini-diagram: Presto federating Cassandra (hot) + Iceberg (cold). */
function ArchDiagram() {
  const { engine, hot, cold } = caseStudy.arch;
  return (
    <div className="cs-arch" role="img" aria-label="Architecture: Presto federates Cassandra and Iceberg">
      <div className="cs-node cs-node-engine">
        <strong>{engine.name}</strong>
        <span>{engine.desc}</span>
      </div>
      <svg className="cs-arch-links" viewBox="0 0 300 60" aria-hidden="true" preserveAspectRatio="none">
        <path d="M150 4 L60 56" stroke="rgba(225,29,46,0.55)" strokeWidth="1.5" fill="none" />
        <path d="M150 4 L240 56" stroke="rgba(225,29,46,0.55)" strokeWidth="1.5" fill="none" />
        <circle cx="150" cy="4" r="3" fill="#e11d2e" />
        <circle cx="60" cy="56" r="3" fill="#e11d2e" />
        <circle cx="240" cy="56" r="3" fill="#e11d2e" />
      </svg>
      <div className="cs-arch-row">
        <div className="cs-node">
          <strong>{hot.name}</strong>
          <span>{hot.desc}</span>
        </div>
        <div className="cs-node">
          <strong>{cold.name}</strong>
          <span>{cold.desc}</span>
        </div>
      </div>
    </div>
  );
}

/** Expandable case-study panel for the Federated Analytics card. */
export default function CaseStudy({ open }) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          className="cs-panel"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="cs-inner">
            <p className="eyebrow">{caseStudy.eyebrow}</p>
            <h3 className="cs-title">{caseStudy.title}</h3>
            <p className="cs-overview">{caseStudy.overview}</p>

            <div className="cs-grid">
              <div className="cs-col">
                <h4 className="cs-h">Architecture</h4>
                <ArchDiagram />
                <h4 className="cs-h">The federated query</h4>
                <pre className="cs-sql"><code>{caseStudy.sql}</code></pre>
                <p className="cs-caption">{caseStudy.sqlCaption}</p>
              </div>
              <div className="cs-col">
                <h4 className="cs-h">Spec-driven workflow</h4>
                <ol className="cs-steps">
                  {caseStudy.steps.map((s) => (
                    <li key={s.n}>
                      <span className="cs-step-n">{s.n}</span>
                      <div>
                        <strong>{s.title}</strong>
                        <p>{s.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <h4 className="cs-h">The hard parts</h4>
                <ul className="cs-hard">
                  {caseStudy.hardParts.map((h) => (
                    <li key={h.title}>
                      <strong>{h.title}</strong>
                      <p>{h.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
