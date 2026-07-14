import { skills } from "../config/portfolio";

/* ── Per-skill data ─────────────────────────────────────── */
const skillMeta = {
  "HTML5": {
    badges: ["Semantic", "SEO", "Accessibility"],
    level: 95,
    shortDesc: "Semantic markup, ARIA accessibility, and SEO-optimised, well-structured layouts.",
  },
  "CSS3": {
    badges: ["Flexbox", "Grid", "Animation"],
    level: 90,
    shortDesc: "Responsive layouts with Flexbox & Grid, keyframe animations, and custom properties.",
  },
  "JavaScript": {
    badges: ["ES6+", "Async/Await", "REST API"],
    level: 92,
    shortDesc: "Modern ES6+ patterns, async data fetching, DOM manipulation, and REST integration.",
  },
  "React JS": {
    badges: ["Hooks", "Context API", "Router"],
    level: 95,
    shortDesc: "Component architecture, hooks, global state with Context API, and React Router.",
  },
  "Node JS": {
    badges: ["Express", "Middleware", "JWT"],
    level: 85,
    shortDesc: "RESTful APIs with Express, JWT auth, middleware pipelines, and npm ecosystem.",
  },
  "MySQL": {
    badges: ["Joins", "Indexing", "Optimisation"],
    level: 80,
    shortDesc: "Relational schema design, complex joins, indexing strategies, and query optimisation.",
  },
  "Git & GitHub": {
    badges: ["Branching", "GitHub", "Version Control"],
    level: 90,
    shortDesc: "Branching workflows, pull requests, and collaborative version-control practices.",
  },
  "Bootstrap": {
    badges: ["Responsive", "Utility-first", "Grid"],
    level: 88,
    shortDesc: "Rapid responsive development with Bootstrap's grid system and utility classes.",
  },
  "Figma (Software)": {
    badges: ["UI/UX Design", "Prototyping", "Handoff"],
    level: 80,
    shortDesc: "Creating modern wireframes, responsive UI components, and interactive prototypes.",
  },
  "Networking": {
    badges: ["TCP/IP", "DNS & HTTP", "OSI Model"],
    level: 75,
    shortDesc: "Fundamentals of data flow, network layers, domain routing, and protocol diagnostics.",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="skills-sec">
      <div className="container">
        {/* ── Section header ── */}
        <div className="sec-head text-c anim fade-up">
          <span className="sec-tag">Expertise</span>
          <h2 className="sec-title">Technical Skills</h2>
          <div className="accent-bar" />
        </div>

        {/* ── Cards grid ── */}
        <div className="skills-grid">
          {skills.map((skill, i) => {
            const meta = skillMeta[skill.name] || {};
            const { badges = [], level = 80, shortDesc = skill.description } = meta;

            return (
              <div
                key={skill.name}
                className={`skill-card anim fade-up d${Math.min(i + 1, 6)}`}
              >
                {/* Gradient top border (hover — CSS ::before) */}

                {/* Icon + name */}
                <div className="sk-top">
                  <div className={`skill-icon ${skill.colorClass}`}>
                    <i className={skill.icon} aria-hidden="true" />
                  </div>
                  <h3 className="sk-name">{skill.name}</h3>
                </div>

                {/* Short 2-line description */}
                <p className="sk-desc">{shortDesc}</p>

                {/* Filled pill badges */}
                <div className="sk-badges">
                  {badges.map((b) => (
                    <span key={b} className="sk-badge">{b}</span>
                  ))}
                </div>

                {/* Proficiency bar */}
                <div className="sk-bar-wrap">
                  <div className="sk-bar-meta">
                    <span className="sk-bar-label">Proficiency</span>
                    <span className="sk-bar-pct">{level}%</span>
                  </div>
                  <div className="sk-bar-track">
                    <div
                      className="sk-bar-fill"
                      style={{ "--pct": `${level}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
