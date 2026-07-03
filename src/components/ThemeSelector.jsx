import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeSelector() {
  const { themeId, setThemeId, dark, toggleDark, THEMES } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="theme-selector" id="theme-selector">
      {/* Dark mode toggle */}
      <button
        className="theme-toggle dark-toggle"
        onClick={toggleDark}
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        title={dark ? "Light mode" : "Dark mode"}
        id="dark-mode-toggle"
      >
        <span className="toggle-track">
          <span className="toggle-thumb" />
        </span>
        <span className="toggle-icon">
          {dark ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </span>
      </button>

      {/* Color theme picker */}
      <div className="theme-palette-wrap">
        <button
          className={`theme-toggle palette-btn${open ? " active" : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Choose colour theme"
          aria-expanded={open}
          title="Choose theme"
          id="theme-palette-btn"
        >
          <span className="palette-dot" style={{ background: THEMES.find((t) => t.id === themeId)?.color }} />
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="chevron-icon">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>

        {open && (
          <>
            <div className="palette-backdrop" onClick={() => setOpen(false)} />
            <div className="palette-dropdown" role="listbox" aria-label="Colour themes">
              <p className="palette-label">Choose Theme</p>
              <div className="palette-grid">
                {THEMES.map((t) => (
                  <button
                    key={t.id}
                    className={`swatch${themeId === t.id ? " selected" : ""}`}
                    style={{ background: t.gradient }}
                    onClick={() => { setThemeId(t.id); setOpen(false); }}
                    aria-label={t.label}
                    title={t.label}
                    id={`theme-swatch-${t.id}`}
                    role="option"
                    aria-selected={themeId === t.id}
                  >
                    {themeId === t.id && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
