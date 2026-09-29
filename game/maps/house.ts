import type { SectionScene } from "../types/game";

export const HOUSE_WORLD = {
  width: 1280,
  height: 720,
};

export type Door = {
  id: string;
  scene: SectionScene;
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

export type InteractiveSpot = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  icon: string;
};

const DOOR_W = 170;
const DOOR_H = 138;
const LEFT_X = 105;
const CENTER_X = 555;
const RIGHT_X = 1005;
const TOP_Y = 124;
const BOTTOM_Y = 392;

export const roomDoors: Door[] = [
  { id: "about", scene: "about", label: "ABOUT ME", x: LEFT_X, y: TOP_Y, width: DOOR_W, height: DOOR_H },
  { id: "projects", scene: "projects", label: "PROJECTS", x: CENTER_X, y: TOP_Y, width: DOOR_W, height: DOOR_H },
  { id: "skills", scene: "skills", label: "SKILLS", x: RIGHT_X, y: TOP_Y, width: DOOR_W, height: DOOR_H },
  { id: "experience", scene: "experience", label: "EXPERIENCE", x: LEFT_X, y: BOTTOM_Y, width: DOOR_W, height: DOOR_H },
  { id: "education", scene: "education", label: "EDUCATION", x: CENTER_X, y: BOTTOM_Y, width: DOOR_W, height: DOOR_H },
  { id: "contact", scene: "contact", label: "CONTACT", x: RIGHT_X, y: BOTTOM_Y, width: DOOR_W, height: DOOR_H },
];

export const houseExitSpot = {
  x: HOUSE_WORLD.width / 2 - 90,
  y: HOUSE_WORLD.height - 72,
  width: 180,
  height: 48,
};

export const roomSpawnPoints: Record<SectionScene, { x: number; y: number }> = {
  about: { x: HOUSE_WORLD.width / 2 - 24, y: 535 },
  projects: { x: HOUSE_WORLD.width / 2 - 24, y: 535 },
  skills: { x: HOUSE_WORLD.width / 2 - 24, y: 535 },
  experience: { x: HOUSE_WORLD.width / 2 - 24, y: 535 },
  education: { x: HOUSE_WORLD.width / 2 - 24, y: 535 },
  contact: { x: HOUSE_WORLD.width / 2 - 24, y: 535 },
};

export const roomReturnPoints: Record<SectionScene, { x: number; y: number }> = {
  about: { x: LEFT_X + DOOR_W / 2, y: TOP_Y + DOOR_H + 22 },
  projects: { x: CENTER_X + DOOR_W / 2, y: TOP_Y + DOOR_H + 22 },
  skills: { x: RIGHT_X + DOOR_W / 2, y: TOP_Y + DOOR_H + 22 },
  experience: { x: LEFT_X + DOOR_W / 2, y: BOTTOM_Y + DOOR_H + 22 },
  education: { x: CENTER_X + DOOR_W / 2, y: BOTTOM_Y + DOOR_H + 22 },
  contact: { x: RIGHT_X + DOOR_W / 2, y: BOTTOM_Y + DOOR_H + 22 },
};

export const roomInteractiveSpots = (scene: SectionScene): InteractiveSpot[] => {
  if (scene === "projects") {
    return [
      { id: "project-0", x: 120, y: 205, width: 240, height: 150, label: "OPEN PROJECT 1", icon: "SpoJedy" },
      { id: "project-1", x: 520, y: 205, width: 240, height: 150, label: "OPEN PROJECT 2", icon: "Picverse" },
      { id: "project-2", x: 920, y: 205, width: 240, height: 150, label: "OPEN PROJECT 3", icon: "ChiMatcha" },
      { id: "project-3", x: 520, y: 410, width: 240, height: 150, label: "OPEN PROJECT 4", icon: "To be continued" },
    ];
  }

  const map: Record<SectionScene, { label: string; icon: string }> = {
    about: { label: "OPEN NOTEBOOK", icon: "BOOK" },
    skills: { label: "READ SKILL BOOK", icon: "BOOK" },
    experience: { label: "OPEN LOGBOOK", icon: "LOG" },
    education: { label: "MY EDUCATION", icon: "EDUCATION" },
    contact: { label: "USE COMPUTER", icon: "PC" },
    projects: { label: "OPEN PROJECT", icon: "BOOK" },
  };

  const item = map[scene];

  if (!item) return [];

  return [
    {
      id: `${scene}-desk`,
      x: 460,
      y: 240,
      width: 360,
      height: 190,
      label: item.label,
      icon: item.icon,
    },
  ];
};

export function houseSolids(): { x: number; y: number; width: number; height: number }[] {
  return [
    { x: 0, y: 0, width: HOUSE_WORLD.width, height: 78 },
    { x: 0, y: 0, width: 34, height: HOUSE_WORLD.height },
    { x: HOUSE_WORLD.width - 34, y: 0, width: 34, height: HOUSE_WORLD.height },
    { x: 0, y: HOUSE_WORLD.height - 34, width: HOUSE_WORLD.width, height: 34 },
  ];
}

export function roomSolids() {
  return houseSolids();
}
