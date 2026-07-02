import { useState, useEffect } from "react";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [progress, setProgress] = useState(0);
  const [showBtt, setShowBtt] = useState(false);

  useScrollAnimation();

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const sp = el.scrollTop || document.body.scrollTop;
      const h = el.scrollHeight - el.clientHeight;
      setProgress(h > 0 ? (sp / h) * 100 : 0);
      setShowBtt(sp > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
      />

      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />

      {/* Back-to-top button */}
      <button
        className={`btt${showBtt ? " show" : ""}`}
        onClick={scrollTop}
        aria-label="Back to top"
      >
        <i className="fa-solid fa-arrow-up" />
      </button>
    </>
  );
}
