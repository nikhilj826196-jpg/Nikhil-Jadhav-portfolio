import { personal, social, navLinks } from "../config/portfolio";

const SOCIALS = [
  { icon: "fa-brands fa-github",      href: social.github,    cls: "fsc-gh", label: "GitHub"    },
  { icon: "fa-brands fa-linkedin-in", href: social.linkedin,  cls: "fsc-li", label: "LinkedIn"  },
  { icon: "fa-brands fa-instagram",   href: social.instagram, cls: "fsc-ig", label: "Instagram" },
  { icon: "fa-brands fa-whatsapp",    href: social.whatsapp,  cls: "fsc-wa", label: "WhatsApp"  },
];

const NAV_ICONS = {
  Home: "fa-solid fa-house",
  About: "fa-solid fa-user",
  Skills: "fa-solid fa-gem",
  Projects: "fa-solid fa-code",
  Contact: "fa-solid fa-envelope",
};

const TECH_STACK = [
  { name: "React JS",   icon: "fa-brands fa-react",      cls: "ftp-react" },
  { name: "JavaScript", icon: "fa-brands fa-js",         cls: "ftp-js"    },
  { name: "Node JS",    icon: "fa-brands fa-node-js",   cls: "ftp-node"  },
  { name: "HTML5",      icon: "fa-brands fa-html5",      cls: "ftp-html5" },
  { name: "CSS3",       icon: "fa-brands fa-css3-alt",   cls: "ftp-css3"  },
  { name: "MySQL",      icon: "fa-solid fa-database",    cls: "ftp-mysql" },
  { name: "Git",        icon: "fa-brands fa-git-alt",    cls: "ftp-git"   },
];

export default function Footer() {
  return (
    <footer className="footer anim fade-up">
      {/* Subtle Animated Blue/Purple Glow Behind Footer */}
      <div className="footer-glow-1" />
      <div className="footer-glow-2" />
      <div className="footer-glow-3" />

      {/* Floating particles in background */}
      <div className="ft-particles-container">
        <div className="ft-particle" />
        <div className="ft-particle" />
        <div className="ft-particle" />
        <div className="ft-particle" />
        <div className="ft-particle" />
        <div className="ft-particle" />
        <div className="ft-particle" />
        <div className="ft-particle" />
      </div>

      <div className="container">
        <div className="footer-grid">
          {/* Left Brand col */}
          <div className="ft-brand">
            <div className="ft-logo-container">
              <a href="#home" className="ft-logo-premium">
                <span className="ft-la">N</span>
                <span className="ft-lb">J</span>
              </a>
              <div className="ft-logo-accent" />
            </div>
            <div className="ft-brand-role">Full Stack Developer</div>
            <p className="ft-tagline">
              Building modern, fast & scalable web experiences.
            </p>
            <h4 className="ft-connect-heading">Let's Connect</h4>
            <div className="ft-socials">
              {SOCIALS.map(({ icon, href, cls, label }) => (
                <a
                  key={cls}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`ft-soc-circle ${cls}`}
                  aria-label={label}
                >
                  <i className={icon} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Center Navigation col */}
          <div className="ft-col">
            <h4 className="ft-col-h">Quick Links</h4>
            <ul className="ft-nav">
              {navLinks.map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="ft-link-card">
                    <i className={`${NAV_ICONS[l] || "fa-solid fa-chevron-right"} ft-link-icon`} aria-hidden="true" />
                    <span className="ft-link-text">{l}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Tech stack & Download CV col */}
          <div className="ft-col">
            <h4 className="ft-col-h">Tech Stack</h4>
            <div className="ft-tech-container">
              {TECH_STACK.map(({ name, icon, cls }) => (
                <span key={name} className={`ft-tech-tile ${cls}`} title={name}>
                  <i className={icon} aria-hidden="true" />
                </span>
              ))}
            </div>
            <a href={personal.resume} download className="ft-premium-btn">
              <i className="fa-solid fa-download" aria-hidden="true" />
              Download CV
            </a>
          </div>
        </div>

        {/* Thin glowing divider */}
        <div className="footer-divider" />

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="ft-copy">
            &copy; 2026 Nikhil Jadhav &bull; Full Stack Developer &bull; Built with React + Vite.
          </p>
        </div>
      </div>
    </footer>
  );
}
