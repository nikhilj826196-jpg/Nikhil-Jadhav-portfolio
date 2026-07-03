import { personal, highlights, social } from "../config/portfolio";

export default function About() {
  return (
    <section id="about" className="about-sec sec-alt anim">
      <div className="container">
        {/* Section header */}
        <div className="sec-head text-c anim fade-up about-title">
          <span className="sec-tag">About Me</span>
          <h2 className="sec-title">Passion Meets Code</h2>
          <div className="accent-bar" />
        </div>

        <div className="about-grid">
          {/* ─── LEFT: Photo ─── */}
          <div className="about-photo-col anim fade-l">
            <div className="about-frame">
              {/* Decorative offset shadow */}
              <div className="frame-shadow" aria-hidden="true" />
              <img
                src={personal.photo}
                alt={personal.name}
                className="about-img"
                loading="lazy"
              />
              {/* Floating experience badge */}
              <div className="exp-badge">
                <span className="exp-icon"><i className="fa-solid fa-code" /></span>
                <span className="exp-text">Full Stack<br/>Developer</span>
              </div>
              {/* Floating tech badge */}
              <div className="tech-badge">
                <i className="fa-brands fa-react spin-icon" />
                <span>React JS</span>
              </div>
            </div>
          </div>

          {/* ─── RIGHT: Content ─── */}
          <div className="about-content">
            <p className="about-label anim fade-r d1">Who I Am</p>
            <h3 className="about-heading anim fade-r d2">
              A Developer Who Cares <br />
              About <span className="text-grad">Every Pixel</span>
            </h3>
            <div className="about-divider anim fade-r d2" />
            <p className="about-p anim fade-r d3">{personal.bio1}</p>
            <p className="about-p anim fade-r d3">{personal.bio2}</p>

            {/* Highlights */}
            <div className="about-hl anim fade-r d4">
              {highlights.map((h) => (
                <div className="hl-card" key={h.title}>
                  <div className="hl-icon">
                    <i className={h.icon} aria-hidden="true" />
                  </div>
                  <div>
                    <h4>{h.title}</h4>
                    <p>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Row */}
            <div className="about-cta anim fade-r d5">
              <a href={personal.resume} download className="btn btn-p">
                <i className="fa-solid fa-download" aria-hidden="true" />
                Download CV
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-o"
              >
                <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-o"
              >
                <i className="fa-brands fa-github" aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
