import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Reveal from './Reveal.jsx';
import { experience, education, stats } from '../content.js';
import Counter from './Counter.jsx';

export default function Experience() {
  const tlRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: tlRef, offset: ['start 0.75', 'end 0.6'] });
  const threadScale = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });

  return (
    <section id="experience" className="section section-grey" aria-label="Experience">
      <div className="wrap">
        <div className="stats-band">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="stat">
              <span className="stat-n">
                <Counter to={s.n} decimals={s.decimals || 0} suffix={s.suffix} />
              </span>
              <span className="stat-label">{s.label}</span>
            </Reveal>
          ))}
        </div>

        <Reveal className="section-head">
          <p className="eyebrow">Experience</p>
          <h2 className="display-lg" style={{ marginTop: 14 }}>
            Where I’ve been <span className="serif-accent">swinging.</span>
          </h2>
        </Reveal>

        <div className="timeline" ref={tlRef}>
          <motion.div className="timeline-thread" style={{ scaleY: threadScale }} />
          {experience.map((job, i) => (
            <Reveal key={job.role} delay={i * 0.06} className="tl-item">
              <span className="tl-dot" />
              <h3>{job.role}</h3>
              <p className="tl-meta">
                {job.company} · {job.period}
              </p>
              <p className="body-copy">{job.body}</p>
            </Reveal>
          ))}
        </div>

        <div className="edu-grid">
          {education.map((e, i) => (
            <Reveal key={e.credential} delay={i * 0.08}>
              <div className="edu-card">
                <h4>{e.school}</h4>
                <p className="cred">{e.credential}</p>
                <p>{e.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
