import { personal, social, stats } from "../config/portfolio";

const SOCIALS = [
  { key: "whatsapp",  icon: "fa-brands fa-whatsapp",    cls: "soc-wa", label: "WhatsApp",  href: social.whatsapp  },
  { key: "instagram", icon: "fa-brands fa-instagram",   cls: "soc-ig", label: "Instagram", href: social.instagram },
  { key: "linkedin",  icon: "fa-brands fa-linkedin-in", cls: "soc-li", label: "LinkedIn",  href: social.linkedin  },
  { key: "github",    icon: "fa-brands fa-github",      cls: "soc-gh", label: "GitHub",    href: social.github    },
];

export default function Hero() {
  return (
    <section id="home" className="hero-sec">
      {/* Animated background */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hblob hblob-1" />
        <div className="hblob hblob-2" />
        <div className="hblob hblob-3" />
        <div className="hero-dots" />
      </div>

      <div className="container hero-grid">
        {/* ─── LEFT COLUMN ─── */}
        <div className="hero-left">
          {/* Status badge */}
          <div className="status-badge">
            <span className="status-dot" />
            {personal.available ? "Available for Opportunities" : "Currently Unavailable"}
          </div>

          <h1 className="hero-h1">
            Hi, I&apos;m{" "}
            <span className="text-grad">{personal.name}</span>
          </h1>

          <p className="hero-role">
            {personal.role}
            <span className="role-sep"> | </span>
            {personal.roleAlt}
          </p>

          <p className="hero-p">{personal.tagline}</p>

          {/* CTA Buttons */}
          <div className="hero-btns">
            <a href="#projects" className="btn btn-p">
              <i className="fa-solid fa-rocket" aria-hidden="true" />
              View Projects
            </a>
            <a href={personal.resume} download className="btn btn-o">
              <i className="fa-solid fa-download" aria-hidden="true" />
              Download CV
            </a>
            <a href="#contact" className="btn btn-ghost">
              <i className="fa-solid fa-paper-plane" aria-hidden="true" />
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            {SOCIALS.map(({ key, icon, cls, label, href }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`hsoc ${cls}`}
                aria-label={label}
              >
                <i className={icon} aria-hidden="true" />
              </a>
            ))}
          </div>

          {/* Quick stats */}
          <div className="hero-chips">
            {stats.map((s) => (
              <div key={s.label} className="hero-chip">
                <span className="chip-val">{s.value}</span>
                <span className="chip-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── RIGHT COLUMN ─── */}
        <div className="hero-right">
          {/* Portrait photo card */}
          <div className="portrait-card" aria-label={`${personal.name} — ${personal.role}`}>
            <div className="portrait-glow" aria-hidden="true" />
            <div className="portrait-frame">
              <img
                src={personal.photo}
                alt={`${personal.name} — ${personal.role}`}
                className="portrait-img"
                loading="eager"
              />
            </div>
          </div>

          {/* Code terminal */}
          <div className="code-terminal">
            <div className="ct-bar">
              <span className="ct-dot ct-red" />
              <span className="ct-dot ct-yellow" />
              <span className="ct-dot ct-green" />
              <span className="ct-file">developer.js</span>
            </div>
            <div className="ct-body">
              <pre className="ct-code">
                <span className="tc">{"// Nikhil Jadhav — Developer\n"}</span>
                <span className="tk">const </span>
                <span className="tv">nikhil</span>
                {" = {\n"}
                {"  "}
                <span className="tp">name</span>
                {": "}
                <span className="ts">&apos;Nikhil Jadhav&apos;</span>
                {",\n  "}
                <span className="tp">role</span>
                {": "}
                <span className="ts">&apos;Full Stack Developer&apos;</span>
                {",\n  "}
                <span className="tp">stack</span>
                {": ["}
                <span className="ts">&apos;React&apos;</span>
                {", "}
                <span className="ts">&apos;JS&apos;</span>
                {", "}
                <span className="ts">&apos;Node&apos;</span>
                {"],\n  "}
                <span className="tp">passion</span>
                {": "}
                <span className="ts">&apos;Clean UI/UX&apos;</span>
                {",\n};\n\n"}
                <span className="tk">function </span>
                <span className="tf">greet</span>
                {"() {\n  "}
                <span className="tv">console</span>
                {"."}
                <span className="tf">log</span>
                {"("}
                <span className="ts">&apos;Let&#39;s build together! 🚀&apos;</span>
                {");\n}"}
              </pre>
              <span className="ct-cursor" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
