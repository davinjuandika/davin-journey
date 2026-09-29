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
  email: "juandikadavin@gmail.com",
  github: "https://github.com/davinjuandika",
  linkedin: "https://www.linkedin.com/in/davin-juandika/",
};

export const projects: Project[] = [
  {
    title: "SpoJedy",
    description:
      "SpoJeDy is a modern music streaming platform built by our development team using VueJS. It allows users to explore songs, listen to audio tracks, and watch music videos in a seamless and engaging interface. The app highlights multimedia integration and user personalization, showcasing a complete entertainment experience.",
    stack: "Vue · CSS · JavaScript · TypeScript",
    github: "https://github.com/NotReichmann/MultiMedia-SpoJedy",
  },
  {
    title: "Picverse",
    description:
      "Picverse is a website that can be use to find artwork and also can be a social media, that combine a few social media into one platform, and also can be a place to find artwork from various artists.",
    stack: "HTML · CSS · JavaScript · HCI",
    github: "https://github.com/davinjuandika/Picverse",
  },
  {
    title: "ChiMatcha",
    description:
      "ChiMatcha is a Mobile app Use specifically for people to order matcha drinks",
    stack: "Game Design · UI · Prototyping",
    github: "https://github.com/davinjuandika/ChiMatcha",
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
