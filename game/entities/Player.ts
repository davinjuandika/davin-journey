import { moveWithCollisions, type Box } from "../engine/Collision";
import { PLAYER_SPEED, PLAYER_HEIGHT, PLAYER_WIDTH } from "../engine/worldConstants";

type Direction = "down" | "up" | "left" | "right";

type InputLike = {
  isDown: (key: string) => boolean;
};

export class Player {
  x: number;
  y: number;

  width = PLAYER_WIDTH;
  height = PLAYER_HEIGHT;
  speed = PLAYER_SPEED;
  direction: Direction = "down";

  private image = new Image();
  private loaded = false;
  private animationFrame = 0;
  private animationTimer = 0;
  private moving = false;

  private readonly frameWidth = 32;
  private readonly frameHeight = 32;
  private readonly frameCount = 6;
  private readonly frameDuration = 0.10;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.image.src = "/sprites/characters/player.png";
  }

  async load(): Promise<void> {
    if (this.loaded) return;

    await new Promise<void>((resolve, reject) => {
      if (this.image.complete && this.image.naturalWidth > 0) {
        this.loaded = true;
        resolve();
        return;
      }

      this.image.onload = () => {
        this.loaded = true;
        resolve();
      };

      this.image.onerror = () => {
        reject(new Error("Could not load /sprites/characters/player.png"));
      };
    });
  }

  get box(): Box {
    return {
      x: this.x + 7,
      y: this.y + 17,
      width: 18,
      height: 13,
    };
  }

  get centerX(): number {
    return this.x + this.width / 2;
  }

  get centerY(): number {
    return this.y + this.height / 2;
  }

  update(input: InputLike, deltaTime: number, solids: Box[] = []): void {
    let dx = 0;
    let dy = 0;

    if (input.isDown("w") || input.isDown("arrowup")) {
      dy -= 1;
      this.direction = "up";
    }

    if (input.isDown("s") || input.isDown("arrowdown")) {
      dy += 1;
      this.direction = "down";
    }

    if (input.isDown("a") || input.isDown("arrowleft")) {
      dx -= 1;
      this.direction = "left";
    }

    if (input.isDown("d") || input.isDown("arrowright")) {
      dx += 1;
      this.direction = "right";
    }

    this.moving = dx !== 0 || dy !== 0;

    if (dx !== 0 && dy !== 0) {
      const length = Math.hypot(dx, dy);
      dx /= length;
      dy /= length;
    }

    const before = this.box;
    const moved = moveWithCollisions(
      before,
      dx * this.speed * deltaTime,
      dy * this.speed * deltaTime,
      solids,
    );

    this.x += moved.x - before.x;
    this.y += moved.y - before.y;

    if (this.moving) {
      this.animationTimer += deltaTime;

      while (this.animationTimer >= this.frameDuration) {
        this.animationTimer -= this.frameDuration;
        this.animationFrame = (this.animationFrame + 1) % this.frameCount;
      }
    } else {
      this.animationTimer = 0;
      this.animationFrame = 0;
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    if (!this.loaded) return;

    const row = this.getRow();
    const sourceX = this.animationFrame * this.frameWidth;
    const sourceY = row * this.frameHeight;

    ctx.imageSmoothingEnabled = false;

    const screenX = Math.round(this.x);
    const screenY = Math.round(this.y);

    if (this.direction === "left") {
      ctx.save();
      ctx.translate(screenX + this.width, screenY);
      ctx.scale(-1, 1);

      ctx.drawImage(
        this.image,
        sourceX,
        sourceY,
        this.frameWidth,
        this.frameHeight,
        0,
        0,
        this.width,
        this.height,
      );

      ctx.restore();
      return;
    }

    ctx.drawImage(
      this.image,
      sourceX,
      sourceY,
      this.frameWidth,
      this.frameHeight,
      screenX,
      screenY,
      this.width,
      this.height,
    );
  }

  private getRow(): number {
    if (!this.moving) {
      if (this.direction === "down") return 0;
      if (this.direction === "right" || this.direction === "left") return 1;
      return 2;
    }

    if (this.direction === "down") return 3;
    if (this.direction === "right" || this.direction === "left") return 4;
    return 5;
  }
}
