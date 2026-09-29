export class Camera {
  x = 0;
  y = 0;
  zoom = 1;

  readonly minZoom = 0.75;
  readonly maxZoom = 1.75;
  readonly zoomStep = 0.1;

  update(
    targetX: number,
    targetY: number,
    viewportWidth: number,
    viewportHeight: number,
    worldWidth: number,
    worldHeight: number
  ): void {
    const worldViewportWidth = viewportWidth / this.zoom;
    const worldViewportHeight = viewportHeight / this.zoom;

    const desiredX = targetX - worldViewportWidth / 2;
    const desiredY = targetY - worldViewportHeight / 2;

    const maxX = Math.max(0, worldWidth - worldViewportWidth);
    const maxY = Math.max(0, worldHeight - worldViewportHeight);

    this.x = Math.max(0, Math.min(desiredX, maxX));
    this.y = Math.max(0, Math.min(desiredY, maxY));
  }

  zoomIn(): void {
    this.zoom = Math.min(this.maxZoom, Number((this.zoom + this.zoomStep).toFixed(2)));
  }

  zoomOut(): void {
    this.zoom = Math.max(this.minZoom, Number((this.zoom - this.zoomStep).toFixed(2)));
  }

  resetZoom(): void {
    this.zoom = 1;
  }
}
