import { useState, useEffect } from "react";
import { navLinks } from "../config/portfolio";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 60);
      const pos = window.scrollY + 140;
      let cur = "home";
      document.querySelectorAll("section[id]").forEach((s) => {
        if (pos >= s.offsetTop && pos < s.offsetTop + s.offsetHeight) cur = s.id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const close = () => {
    setOpen(false);
    document.body.style.overflow = "";
  };

  const toggle = () => {
    const next = !open;
    setOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        {/* Logo */}
        <a href="#home" className="logo" onClick={close}>
          <span className="la">N</span>J
        </a>

        {/* Nav links */}
        <nav className={`nav-drawer${open ? " open" : ""}`} aria-label="Main navigation">
          <ul className="nav-links">
            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`nav-link${active === item.toLowerCase() ? " active" : ""}`}
                  onClick={close}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right actions */}
        <div className="nav-right">
          <a href="#contact" className="btn btn-p btn-sm" onClick={close}>
            Hire Me
          </a>
          <button
            className={`burger${open ? " open" : ""}`}
            onClick={toggle}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="bbar" />
            <span className="bbar" />
            <span className="bbar" />
          </button>
        </div>
      </div>
    </header>
  );
}
