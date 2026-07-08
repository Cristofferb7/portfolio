import Reveal from './Reveal.jsx';
import Marquee from './Marquee.jsx';
import { skills } from '../content.js';
import { skillIcons } from '../icons.jsx';

export default function Skills() {
  return (
    <>
      <section id="skills" className="section section-dark" aria-label="Skills">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">Skills</p>
            <h2 className="display-lg" style={{ marginTop: 14, color: '#f5f5f7' }}>
              The toolkit. <span className="serif-accent" style={{ color: '#a1a1a6' }}>Sticky by design.</span>
            </h2>
          </Reveal>
          <div className="skills-grid">
            {skills.map((s, i) => {
              const Icon = skillIcons[s.icon];
              return (
                <Reveal key={s.title} delay={i * 0.06}>
                  <div className="skill-cell">
                    <Icon />
                    <h4>{s.title}</h4>
                    <p>{s.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <Marquee />
    </>
  );
}
