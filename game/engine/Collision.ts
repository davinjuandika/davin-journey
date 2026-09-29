export type Box = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export function overlaps(a: Box, b: Box): boolean {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

export function moveWithCollisions(
  current: Box,
  dx: number,
  dy: number,
  solids: Box[]
): { x: number; y: number } {
  let nextX = current.x + dx;
  let nextY = current.y + dy;

  const horizontal = { ...current, x: nextX };
  if (solids.some((solid) => overlaps(horizontal, solid))) {
    nextX = current.x;
  }

  const vertical = { ...current, y: nextY };
  if (solids.some((solid) => overlaps(vertical, solid))) {
    nextY = current.y;
  }

  return { x: nextX, y: nextY };
}
