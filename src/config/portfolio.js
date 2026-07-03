// ============================================================
// PORTFOLIO CONFIGURATION — Update all your info here
// ============================================================

export const personal = {
  name: "Nikhil Jadhav",
  firstName: "Nikhil",
  role: "Full Stack Developer",
  roleAlt: "React Developer",
  tagline: "Building elegant, high-performance web experiences.",
  bio1: "I am a passionate Full Stack Developer with a strong foundation in modern web technologies. I love translating complex designs into clean, performant, and interactive user experiences that make an impact.",
  bio2: "My approach focuses on writing modular, reusable code and staying current with evolving web standards — bridging the gap between aesthetics and functionality, always ensuring cross-device responsiveness.",
  photo: "/nikhil.jpg",
  resume: "/Nikhil_Jadhav_Resume.pdf",
  available: true,
};

export const social = {
  github: "https://github.com/nikhil-jadhav",
  linkedin: "https://linkedin.com/in/nikhil-jadhav",
  instagram: "https://instagram.com/96_nikhil_jadhav_patil",
  whatsapp: "https://wa.me/918261963995",
  email: "jadhavnikhil3356@gmail.com",
  phone: "+91 8261963995",
};

export const stats = [
  { value: "7+", label: "Technologies" },
  { value: "3+", label: "Projects Built" },
  { value: "100%", label: "Responsive" },
];

export const skills = [
  {
    name: "HTML5",
    icon: "fa-brands fa-html5",
    colorClass: "ico-h",
    description:
      "Semantic markup, SEO best practices, ARIA accessibility, and well-structured page layouts.",
  },
  {
    name: "CSS3",
    icon: "fa-brands fa-css3-alt",
    colorClass: "ico-c",
    description:
      "Flexbox, Grid, keyframe animations, custom properties, and fully responsive designs.",
  },
  {
    name: "JavaScript",
    icon: "fa-brands fa-js",
    colorClass: "ico-j",
    description:
      "ES6+, async/await, DOM manipulation, closures, modules, and REST API integration.",
  },
  {
    name: "React JS",
    icon: "fa-brands fa-react",
    colorClass: "ico-r",
    description:
      "Component architecture, hooks, state management, context API, and React Router.",
  },
  {
    name: "Node JS",
    icon: "fa-brands fa-node-js",
    colorClass: "ico-n",
    description:
      "Express.js, RESTful API design, middleware, server-side logic, and npm ecosystem.",
  },
  {
    name: "MySQL",
    icon: "fa-solid fa-database",
    colorClass: "ico-m",
    description:
      "Relational schema design, complex queries, joins, indexing, and database optimization.",
  },
  {
    name: "Git & GitHub",
    icon: "fa-brands fa-git-alt",
    colorClass: "ico-g",
    description:
      "Version control, branching strategies, pull requests, and collaborative development.",
  },
];

export const projects = [
  {
    title: "JK Electrical Website",
    label: "Commercial",
    description:
      "A high-performance commercial website for an electrical services vendor. Features a responsive interface showcasing services, a booking section, and customer testimonials.",
    icon: "fa-bolt-lightning",
    tags: ["React", "CSS Grid", "Node JS"],
    gradient: "linear-gradient(135deg, #1e3a5f, #2563eb)",
    demo: "https://github.com/nikhil-jadhav/jk-electrical",
    github: "https://github.com/nikhil-jadhav/jk-electrical",
  },
  {
    title: "Student Management System",
    label: "Web App",
    description:
      "An administrative system for streamlined record-keeping. Features include filtering, attendance tracking, MySQL synchronization, and student performance analytics.",
    icon: "fa-graduation-cap",
    tags: ["React", "Express", "MySQL"],
    gradient: "linear-gradient(135deg, #1a3a2a, #16a34a)",
    demo: "https://github.com/nikhil-jadhav/student-management-system",
    github: "https://github.com/nikhil-jadhav/student-management-system",
  },
  {
    title: "Portfolio Website",
    label: "Personal",
    description:
      "A modern, responsive developer portfolio built with React and Vite. Features smooth animations, interactive sections, and a premium design system.",
    icon: "fa-user-astronaut",
    tags: ["React", "Vite", "CSS3"],
    gradient: "linear-gradient(135deg, #3b0764, #7c3aed)",
    demo: "/",
    github: "https://github.com/nikhil-jadhav/portfolio",
  },
];

export const highlights = [
  {
    icon: "fa-solid fa-code",
    title: "Clean Code",
    desc: "Semantic HTML, modular CSS, and maintainable React component architecture.",
  },
  {
    icon: "fa-solid fa-mobile-screen-button",
    title: "Fully Responsive",
    desc: "Pixel-perfect layouts across all screen sizes — mobile, tablet, and desktop.",
  },
  {
    icon: "fa-solid fa-bolt",
    title: "Performance First",
    desc: "Optimized load times, minimal re-renders, and Lighthouse-friendly code.",
  },
];

export const techBadges = [
  "React JS",
  "JavaScript",
  "Node JS",
  "HTML5",
  "CSS3",
  "MySQL",
  "Git",
];

export const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];
