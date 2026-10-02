export type Project = {
  title: string;
  description: string;
  stack: string;
  github: string;
  demo?: string;
};

export const profile = {
  name: "Davin Juandika",
  role: "Computer Science Student",
  university: "BINUS University",
  tagline: "Building things, learning by making them.",
  gpa: "3.06",
  email: "your-email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://www.linkedin.com/in/yourusername/",
};

export const projects: Project[] = [
  {
    title: "PORTO RPG Portfolio",
    description:
      "An interactive pixel RPG portfolio where visitors explore a world to discover my work.",
    stack: "Next.js · TypeScript · Canvas",
    github: "https://github.com/yourusername/porto-rpg-portfolio",
  },
  {
    title: "Picverse",
    description:
      "A desktop-first creative image platform created as an HCI project.",
    stack: "HTML · CSS · JavaScript · HCI",
    github: "https://github.com/yourusername/picverse",
  },
  {
    title: "Game Design Project",
    description:
      "A university game design project focused on interaction, systems, and player experience.",
    stack: "Game Design · UI · Prototyping",
    github: "https://github.com/yourusername/game-design-project",
  },
  {
    title: "RLC Circuit Simulation",
    description:
      "A computational physics project visualizing an RLC circuit response from simulation data.",
    stack: "Python · Numerical Methods · Visualization",
    github: "https://github.com/yourusername/rlc-simulation",
  },
];

export const skills = [
  "Java",
  "C / C++",
  "TypeScript",
  "JavaScript",
  "HTML / CSS",
  "React / Next.js",
  "Git / GitHub",
  "UI / UX",
  "Game Design",
];

export const experience = [
  {
    title: "Student Projects",
    body: "Course projects across software engineering, HCI, game design, multimedia, and XR.",
  },
  {
    title: "Team Collaboration",
    body: "Collaborative coursework with documentation, presentations, prototyping, and implementation.",
  },
  {
    title: "Next Mission",
    body: "Prepare for internship experience and keep building a stronger software portfolio.",
  },
];
