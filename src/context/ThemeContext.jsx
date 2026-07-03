import { createContext, useContext, useState, useEffect } from "react";

// -- Theme Definitions ----------------------------------------------------------
export const THEMES = [
  {
    id: "blue",
    label: "Ocean Blue",
    color: "#2563eb",
    gradient: "linear-gradient(135deg,#2563eb,#60a5fa)",
  },
  {
    id: "purple",
    label: "Royal Purple",
    color: "#7c3aed",
    gradient: "linear-gradient(135deg,#7c3aed,#a78bfa)",
  },
  {
    id: "emerald",
    label: "Emerald",
    color: "#059669",
    gradient: "linear-gradient(135deg,#059669,#34d399)",
  },
  {
    id: "rose",
    label: "Rose",
    color: "#e11d48",
    gradient: "linear-gradient(135deg,#e11d48,#fb7185)",
  },
  {
    id: "amber",
    label: "Amber",
    color: "#d97706",
    gradient: "linear-gradient(135deg,#d97706,#fbbf24)",
  },
];

// -- Context --------------------------------------------------------------------
const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "blue";
  });

  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("portfolio-dark");
    if (saved !== null) return saved === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Apply theme & dark mode to <html>
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", themeId);
    root.setAttribute("data-dark", dark ? "true" : "false");
    localStorage.setItem("portfolio-theme", themeId);
    localStorage.setItem("portfolio-dark", dark);
  }, [themeId, dark]);

  const toggleDark = () => setDark((d) => !d);

  return (
    <ThemeContext.Provider value={{ themeId, setThemeId, dark, toggleDark, THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
