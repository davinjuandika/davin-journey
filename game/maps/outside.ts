export type Rect = {
  x: number;
  y: number;
  width: number;
  height: number;
  label?: string;
  kind?: "solid" | "house" | "tree" | "farm" | "rock";
};

export const OUTSIDE_WORLD = {
  width: 2560,
  height: 1600,
};

export const TILE_COLS = Math.ceil(OUTSIDE_WORLD.width / 16);
export const TILE_ROWS = Math.ceil(OUTSIDE_WORLD.height / 16);

// Tile IDs:
// 1 = grass
// 2 = path
// 3 = water
export const outsideMap: number[][] = Array.from(
  { length: TILE_ROWS },
  () => Array(TILE_COLS).fill(1),
);

// Main road from the south toward the house.
for (let col = 0; col < TILE_COLS; col++) {
  for (let row = 45; row < TILE_ROWS; row++) {
    if (Math.abs(col - 80) <= 2) outsideMap[row][col] = 2;
  }
}

// Short crossroad in front of the house.
for (let row = 47; row < 53; row++) {
  for (let col = 25; col < 135; col++) {
    outsideMap[row][col] = 2;
  }
}

// Farm access path, connecting the road to the farm gate.
for (let row = 67; row < 71; row++) {
  for (let col = 66; col <= 79; col++) {
    outsideMap[row][col] = 2;
  }
}

// Small pond on the western side.
for (let row = 25; row < 41; row++) {
  for (let col = 10; col < 34; col++) {
    outsideMap[row][col] = 3;
  }
}

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

// Wheat field placed directly in front of the house, slightly to the west
// so the main road stays open.
export const farmField: Rect = {
  x: 680,
  y: 960,
  width: 384,
  height: 240,
  kind: "farm",
};

// The opening on the east side is the farm gate.
export const farmGate = {
  x: 1048,
  y: 1072,
  width: 16,
  height: 64,
};

export const farmCrops = Array.from({ length: 32 }, (_, index) => {
  const col = index % 8;
  const row = Math.floor(index / 8);

  return {
    x: farmField.x + 20 + col * 46,
    y: farmField.y + 24 + row * 52,
  };
});

export const roadLamps = [
  { x: 1184, y: 900 },
  { x: 1352, y: 900 },
  { x: 1184, y: 1140 },
  { x: 1352, y: 1140 },
  { x: 1184, y: 1380 },
  { x: 1352, y: 1380 },
];

export const rocks = [
  { x: 468, y: 1008, variant: 1 },
  { x: 560, y: 1260, variant: 2 },
  { x: 1120, y: 1248, variant: 1 },
  { x: 1490, y: 1040, variant: 2 },
  { x: 1540, y: 1340, variant: 1 },
  { x: 420, y: 1400, variant: 2 },
];

export const trees: Rect[] = [
  { x: 80, y: 115, width: 64, height: 80, kind: "tree" },
  { x: 295, y: 165, width: 64, height: 80, kind: "tree" },
  { x: 690, y: 120, width: 64, height: 80, kind: "tree" },
  { x: 1830, y: 120, width: 64, height: 80, kind: "tree" },
  { x: 2130, y: 185, width: 64, height: 80, kind: "tree" },
  { x: 2290, y: 485, width: 64, height: 80, kind: "tree" },
  { x: 100, y: 1110, width: 64, height: 80, kind: "tree" },
  { x: 390, y: 1290, width: 64, height: 80, kind: "tree" },
  { x: 1830, y: 1175, width: 64, height: 80, kind: "tree" },
  { x: 2150, y: 1320, width: 64, height: 80, kind: "tree" },
  { x: 1500, y: 185, width: 64, height: 80, kind: "tree" },
];

export function farmFenceSolids(): Rect[] {
  const x = farmField.x;
  const y = farmField.y;
  const w = farmField.width;
  const h = farmField.height;

  return [
    { x, y: y - 16, width: w, height: 16, kind: "solid" },
    { x, y: y + h, width: w, height: 16, kind: "solid" },
    { x: x - 16, y: y - 16, width: 16, height: h + 32, kind: "solid" },
    {
      x: x + w - 16,
      y: y - 16,
      width: 16,
      height: farmGate.y - (y - 16),
      kind: "solid",
    },
    {
      x: x + w - 16,
      y: farmGate.y + farmGate.height,
      width: 16,
      height: y + h + 16 - (farmGate.y + farmGate.height),
      kind: "solid",
    },
  ];
}

export function outsideSolids(): Rect[] {
  const x = houseBounds.x;
  const y = houseBounds.y;
  const w = houseBounds.width;
  const h = houseBounds.height;
  const doorW = houseDoor.width;

  const rockSolids: Rect[] = rocks.map((rock) => ({
    x: rock.x + 4,
    y: rock.y + 10,
    width: 24,
    height: 18,
    kind: "solid",
  }));

  return [
    ...trees,
    ...farmFenceSolids(),
    ...rockSolids,
    { x, y, width: w, height: 30, kind: "solid" },
    { x, y, width: 30, height: h, kind: "solid" },
    { x: x + w - 30, y, width: 30, height: h, kind: "solid" },
    {
      x,
      y: y + h - 30,
      width: (w - doorW) / 2 - 8,
      height: 30,
      kind: "solid",
    },
    {
      x: x + w / 2 + doorW / 2 + 8,
      y: y + h - 30,
      width: (w - doorW) / 2 - 8,
      height: 30,
      kind: "solid",
    },
  ];
}
