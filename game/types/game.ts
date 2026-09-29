export type SectionScene =
  | "about"
  | "projects"
  | "skills"
  | "experience"
  | "education"
  | "contact";

export type GameScene = "outside" | "house" | SectionScene;

export type Direction = "down" | "up" | "left" | "right";
