export class GameLoop {
  private running = false;
  private animationFrameId: number | null = null;
  private lastTime = 0;

  start(update: (deltaTime: number) => void): void {
    if (this.running) return;

    this.running = true;
    this.lastTime = performance.now();

    const loop = (currentTime: number) => {
      if (!this.running) return;

      const deltaTime = Math.min(0.05, (currentTime - this.lastTime) / 1000);
      this.lastTime = currentTime;

      update(deltaTime);
      this.animationFrameId = requestAnimationFrame(loop);
    };

    this.animationFrameId = requestAnimationFrame(loop);
  }

  stop(): void {
    this.running = false;

    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }
}
