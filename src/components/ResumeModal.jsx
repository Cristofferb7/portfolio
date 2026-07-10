import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { identity } from '../content.js';

export const OPEN_RESUME_EVENT = 'cb:open-resume';
export const openResume = () => window.dispatchEvent(new Event(OPEN_RESUME_EVENT));

/**
 * In-page résumé viewer — Apple-sheet style modal.
 * Opens from anywhere via openResume(); embeds the PDF with
 * download / open-in-tab escape hatches (mobile PDF rendering varies).
 */
export default function ResumeModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const show = () => setOpen(true);
    window.addEventListener(OPEN_RESUME_EVENT, show);
    return () => window.removeEventListener(OPEN_RESUME_EVENT, show);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="resume-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            className="resume-sheet"
            role="dialog"
            aria-modal="true"
            aria-label="Résumé"
            initial={{ y: 48, scale: 0.975, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 32, scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="resume-sheet-head">
              <div>
                <h3>Résumé</h3>
                <p className="resume-sub">{identity.name} · Full-Stack & AI Agent Engineer</p>
              </div>
              <div className="resume-actions">
                <a
                  className="resume-btn resume-btn-primary"
                  href={identity.resume}
                  download={identity.resumeFilename}
                >
                  Download
                </a>
                <a
                  className="resume-btn"
                  href={identity.resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in tab ↗
                </a>
                <button className="resume-close" aria-label="Close résumé" onClick={() => setOpen(false)}>
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                    <path d="M2 2l10 10M12 2 2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="resume-body">
              <object data={`${identity.resume}#view=FitH`} type="application/pdf" aria-label="Résumé PDF">
                <div className="resume-fallback">
                  <p>Inline PDF preview isn’t supported on this device.</p>
                  <a className="btn-primary" href={identity.resume} target="_blank" rel="noreferrer">
                    View the résumé
                  </a>
                </div>
              </object>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
