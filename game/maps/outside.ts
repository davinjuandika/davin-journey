export type Rect = {
  x: number;
  y: number;
  width: number;
  height: number;
  label?: string;
  kind?: "solid" | "house" | "tree";
};

export const OUTSIDE_WORLD = {
  width: 2560,
  height: 1600,
};

export const TILE_COLS = Math.ceil(OUTSIDE_WORLD.width / 16);
export const TILE_ROWS = Math.ceil(OUTSIDE_WORLD.height / 16);

export const outsideMap: number[][] = Array.from(
  { length: TILE_ROWS },
  () => Array(TILE_COLS).fill(1),
);

export const houseBounds: Rect = {
  x: OUTSIDE_WORLD.width / 2 - 360,
  y: 430,
  width: 720,
  height: 448,
  kind: "house",
};

export const houseDoor = {
  x: houseBounds.x + houseBounds.width / 2 - 38,
  y: houseBounds.y + houseBounds.height - 28,
  width: 76,
  height: 36,
};

export const trees: Rect[] = [
  { x: 170, y: 150, width: 96, height: 96, kind: "tree" },
  { x: 390, y: 170, width: 96, height: 96, kind: "tree" },
  { x: 690, y: 130, width: 96, height: 96, kind: "tree" },
  { x: 1880, y: 150, width: 96, height: 96, kind: "tree" },
  { x: 2140, y: 220, width: 96, height: 96, kind: "tree" },
  { x: 2240, y: 520, width: 96, height: 96, kind: "tree" },
  { x: 250, y: 1130, width: 96, height: 96, kind: "tree" },
  { x: 560, y: 1280, width: 96, height: 96, kind: "tree" },
  { x: 1900, y: 1190, width: 96, height: 96, kind: "tree" },
  { x: 2170, y: 1330, width: 96, height: 96, kind: "tree" },
];

export function outsideSolids(): Rect[] {
  const x = houseBounds.x;
  const y = houseBounds.y;
  const w = houseBounds.width;
  const h = houseBounds.height;
  const doorW = houseDoor.width;

  return [
    ...trees,
    { x, y, width: w, height: 30 },
    { x, y, width: 30, height: h },
    { x: x + w - 30, y, width: 30, height: h },
    { x, y: y + h - 30, width: (w - doorW) / 2 - 8, height: 30 },
    {
      x: x + w / 2 + doorW / 2 + 8,
      y: y + h - 30,
      width: (w - doorW) / 2 - 8,
      height: 30,
    },
  ];
}
