import { projects } from "../config/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="projects-sec sec-alt">
      <div className="container">
        <div className="sec-head text-c anim fade-up">
          <span className="sec-tag">My Work</span>
          <h2 className="sec-title">Featured Projects</h2>
          <div className="accent-bar" />
        </div>

        <div className="proj-grid">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`proj-card anim fade-up d${Math.min(i + 1, 4)}`}
            >
              {/* Visual banner */}
              <div className="proj-banner" style={{ background: p.gradient }}>
                <div className="proj-pattern" aria-hidden="true" />
                <i className={`fa-solid ${p.icon} proj-icon`} aria-hidden="true" />
                <span className="proj-label">{p.label}</span>
                <div className="proj-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="proj-tag">{t}</span>
                  ))}
                </div>
              </div>

              {/* Card body */}
              <div className="proj-body">
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-desc">{p.description}</p>

                <div className="proj-actions">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-btn proj-btn-p"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                    Live Demo
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-btn proj-btn-s"
                  >
                    <i className="fa-brands fa-github" aria-hidden="true" />
                    Source
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
