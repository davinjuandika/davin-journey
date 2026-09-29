import { TILE_SIZE } from "../engine/worldConstants";
import { outsideMap, houseBounds, trees } from "../maps/outside";
import { HOUSE_WORLD, roomDoors, roomInteractiveSpots } from "../maps/house";
import type { GameScene, SectionScene } from "../types/game";

export class Renderer {
  private grassImage = new Image();
  private grassLoaded = false;

  constructor() {
    this.grassImage.src = "/sprites/tilesets/grass.png";
  }

  async load(): Promise<void> {
    if (this.grassImage.complete && this.grassImage.naturalWidth > 0) {
      this.grassLoaded = true;
      return;
    }

    await new Promise<void>((resolve, reject) => {
      this.grassImage.onload = () => {
        this.grassLoaded = true;
        resolve();
      };
      this.grassImage.onerror = () => reject(new Error("Could not load /sprites/tilesets/grass.png"));
    });
  }

  drawOutside(ctx: CanvasRenderingContext2D, cameraX: number, cameraY: number): void {
    ctx.fillStyle = "#8fce64";
    ctx.fillRect(0, 0, 2560, 1600);

    ctx.imageSmoothingEnabled = false;
    if (this.grassLoaded) {
      const startCol = Math.max(0, Math.floor((cameraX - 32) / TILE_SIZE));
      const endCol = Math.min(outsideMap[0].length, Math.ceil((cameraX + ctx.canvas.width) / TILE_SIZE));
      const startRow = Math.max(0, Math.floor((cameraY - 32) / TILE_SIZE));
      const endRow = Math.min(outsideMap.length, Math.ceil((cameraY + ctx.canvas.height) / TILE_SIZE));

      for (let row = startRow; row < endRow; row++) {
        for (let col = startCol; col < endCol; col++) {
          if (outsideMap[row][col] !== 1) continue;
          ctx.drawImage(this.grassImage, col * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        }
      }
    }

    // Main paths create a clear route from the bottom approach to the front door.
    ctx.fillStyle = "#dbc187";
    ctx.fillRect(0, 760, 2560, 96);
    ctx.fillRect(houseBounds.x + houseBounds.width / 2 - 58, 856, 116, 744 - 856 + 744);

    // Small garden pond on the left, deliberately away from the house entrance.
    ctx.fillStyle = "#74b8cf";
    ctx.fillRect(160, 430, 390, 230);
    ctx.fillStyle = "#5b9eb5";
    for (let y = 460; y < 625; y += 38) {
      ctx.fillRect(190, y, 90, 7);
      ctx.fillRect(325, y + 10, 118, 7);
    }

    // Garden marker stones.
    ctx.fillStyle = "#b8aa89";
    ctx.fillRect(630, 890, 46, 28);
    ctx.fillRect(700, 900, 36, 24);
    ctx.fillRect(1820, 790, 46, 28);

    for (const tree of trees) this.drawTree(ctx, tree.x, tree.y, tree.width);
    this.drawHouseExterior(ctx);
  }

  drawHouseInterior(ctx: CanvasRenderingContext2D): void {
    const { width: w, height: h } = HOUSE_WORLD;

    // Warm wood floor.
    ctx.fillStyle = "#b78659";
    ctx.fillRect(0, 0, w, h);

    for (let y = 80; y < h - 34; y += 38) {
      ctx.fillStyle = y % 76 === 4 ? "#c49363" : "#ad7d52";
      ctx.fillRect(34, y, w - 68, 30);
    }

    // Outer walls and top beam.
    ctx.fillStyle = "#5d443b";
    ctx.fillRect(0, 0, w, 78);
    ctx.fillRect(0, 0, 34, h);
    ctx.fillRect(w - 34, 0, 34, h);
    ctx.fillRect(0, h - 34, w, 34);

    // Central carpet / gathering area.
    ctx.fillStyle = "#5c4b60";
    ctx.fillRect(315, 250, 650, 220);
    ctx.fillStyle = "#856979";
    ctx.fillRect(333, 268, 614, 184);

    // Decorative central table.
    ctx.fillStyle = "#6c4736";
    ctx.fillRect(545, 300, 190, 90);
    ctx.fillStyle = "#9c6d4f";
    ctx.fillRect(532, 286, 216, 16);
    ctx.fillStyle = "#d7b36f";
    ctx.fillRect(585, 336, 110, 10);

    for (const door of roomDoors) {
      this.drawDoor(ctx, door.x, door.y, door.width, door.height, door.label);
    }

    this.drawExitDoor(ctx, w / 2 - 52, h - 92, 104, 58, "EXIT");

    ctx.textAlign = "center";
    ctx.font = "31px Determination, monospace";
    ctx.fillStyle = "#fff0c9";
    ctx.fillText("DAVIN'S HOUSE", w / 2, 52);
    ctx.font = "14px Determination, monospace";
    ctx.fillStyle = "#d1c7b2";
    // ctx.fillText("Choose a room to explore", w / 2, 102);
    ctx.textAlign = "start";
  }

  drawSectionRoom(ctx: CanvasRenderingContext2D, scene: GameScene): void {
    const { width: w, height: h } = HOUSE_WORLD;
    ctx.fillStyle = "#b78659";
    ctx.fillRect(0, 0, w, h);

    for (let y = 74; y < h - 34; y += 38) {
      ctx.fillStyle = y % 76 === 10 ? "#c49363" : "#ad7d52";
      ctx.fillRect(34, y, w - 68, 30);
    }

    ctx.fillStyle = "#5d443b";
    ctx.fillRect(0, 0, w, 74);
    ctx.fillRect(0, 0, 34, h);
    ctx.fillRect(w - 34, 0, 34, h);
    ctx.fillRect(0, h - 34, w, 34);

    const titles: Record<SectionScene, string> = {
      about: "ABOUT ME",
      projects: "PROJECT ARCHIVE",
      skills: "SKILL LIBRARY",
      experience: "EXPERIENCE LOG",
      education: "EDUCATION",
      contact: "CONTACT",
    };

    // Header plate.
    ctx.fillStyle = "#56455b";
    ctx.fillRect(170, 104, w - 340, 56);
    ctx.textAlign = "center";
    ctx.fillStyle = "#fff3d4";
    ctx.font = "30px Determination, monospace";
    ctx.fillText(titles[scene], w / 2, 140);

    // Room-specific visual anchor.
    ctx.fillStyle = "#856979";
    ctx.fillRect(310, 195, 660, 350);
    ctx.fillStyle = "#5c4b60";
    ctx.fillRect(330, 215, 620, 310);

    const spots = roomInteractiveSpots(scene as SectionScene);
    for (const spot of spots) {
      if (scene === "projects") this.drawProjectDesk(ctx, spot.x, spot.y, spot.icon);
      else this.drawInteractiveDesk(ctx, spot.x, spot.y, spot.icon);
    }

    this.drawExitDoor(ctx, w / 2 - 52, h - 92, 104, 58, "BACK");
    ctx.textAlign = "start";
  }

  private drawHouseExterior(ctx: CanvasRenderingContext2D): void {
    const x = houseBounds.x;
    const y = houseBounds.y;
    const w = houseBounds.width;
    const h = houseBounds.height;

    // Shadow.
    ctx.fillStyle = "rgba(0,0,0,.20)";
    ctx.fillRect(x + 32, y + h - 4, w - 64, 28);

    // House body.
    ctx.fillStyle = "#e7d1ab";
    ctx.fillRect(x, y + 90, w, h - 90);

    // Roof.
    ctx.fillStyle = "#75433b";
    ctx.fillRect(x - 24, y + 34, w + 48, 120);
    ctx.fillStyle = "#914d45";
    for (let i = 0; i < w + 20; i += 32) {
      ctx.fillRect(x - 12 + i, y + 48, 18, 82);
    }

    // Roof trim.
    ctx.fillStyle = "#533833";
    ctx.fillRect(x - 30, y + 30, w + 60, 14);

    this.drawWindow(ctx, x + 92, y + 168);
    this.drawWindow(ctx, x + w - 186, y + 168);

    // Front porch.
    ctx.fillStyle = "#a87755";
    ctx.fillRect(x + 210, y + h - 125, w - 420, 22);

    const doorX = houseBounds.x + houseBounds.width / 2 - 46;
    const doorY = houseBounds.y + houseBounds.height - 110;
    this.drawExitDoor(ctx, doorX, doorY, 92, 110, "ENTER");

    ctx.textAlign = "center";
    ctx.font = "25px Determination, monospace";
    ctx.fillStyle = "#fff5d8";
    ctx.fillText("DAVIN'S HOUSE", x + w / 2, y + h + 40);
    ctx.font = "13px Determination, monospace";
    ctx.fillStyle = "#f1e4ca";
    ctx.fillText("A small place for a growing developer", x + w / 2, y + h + 62);
    ctx.textAlign = "start";
  }

  private drawProjectDesk(ctx: CanvasRenderingContext2D, x: number, y: number, icon: string): void {
    // Desk
    ctx.fillStyle = "#704936";
    ctx.fillRect(x, y + 42, 240, 78);
    ctx.fillStyle = "#a37252";
    ctx.fillRect(x - 8, y + 28, 256, 18);

    // Monitor.
    ctx.fillStyle = "#2f2c2b";
    ctx.fillRect(x + 72, y - 10, 96, 62);
    ctx.fillStyle = "#6d8790";
    ctx.fillRect(x + 82, y, 76, 42);
    ctx.fillStyle = "#9ac08b";
    ctx.fillRect(x + 92, y + 9, 56, 7);
    ctx.fillRect(x + 92, y + 21, 42, 6);
    ctx.fillStyle = "#2f2c2b";
    ctx.fillRect(x + 108, y + 52, 24, 12);

    // Book / project plaque.
    ctx.fillStyle = "#f8edd3";
    ctx.fillRect(x + 48, y + 84, 144, 30);
    ctx.fillStyle = "#5a4652";
    ctx.font = "16px Determination, monospace";
    ctx.textAlign = "center";
    ctx.fillText(icon, x + 120, y + 105);
    ctx.textAlign = "start";
  }

  private drawInteractiveDesk(ctx: CanvasRenderingContext2D, x: number, y: number, icon: string): void {
    // Large desk.
    ctx.fillStyle = "#704936";
    ctx.fillRect(x, y + 68, 360, 98);
    ctx.fillStyle = "#a37252";
    ctx.fillRect(x - 10, y + 50, 380, 20);

    // Object sitting on the desk.
    ctx.fillStyle = "#f8edd3";
    ctx.fillRect(x + 130, y - 8, 100, 72);
    ctx.fillStyle = "#302d2c";
    ctx.fillRect(x + 146, y + 6, 68, 42);
    ctx.fillStyle = "#8ab3b7";
    ctx.fillRect(x + 158, y + 16, 44, 8);
    ctx.fillStyle = "#e8d39b";
    ctx.fillRect(x + 158, y + 30, 30, 7);

    ctx.textAlign = "center";
    ctx.font = "17px Determination, monospace";
    ctx.fillStyle = "#fff0c8";
    ctx.fillText(icon, x + 180, y + 149);
    ctx.textAlign = "start";
  }

  private drawDoor(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, label: string): void {
    // Dark frame.
    ctx.fillStyle = "#3d302c";
    ctx.fillRect(x - 8, y - 8, width + 16, height + 16);

    // Door.
    ctx.fillStyle = "#67483c";
    ctx.fillRect(x, y, width, height);
    ctx.fillStyle = "#98684e";
    ctx.fillRect(x + 12, y + 12, width - 24, height - 24);

    // Handle and panel lines.
    ctx.fillStyle = "#d7bd7b";
    ctx.fillRect(x + width - 28, y + height / 2, 10, 10);
    ctx.fillStyle = "#7b503f";
    ctx.fillRect(x + 20, y + 26, width - 40, 4);
    ctx.fillRect(x + 20, y + height - 30, width - 40, 4);

    // Sign above door, keeping labels away from sprite art.
    const signWidth = Math.max(width + 18, label.length * 13);
    const signX = x + width / 2 - signWidth / 2;
    const signY = y - 34;
    ctx.fillStyle = "#56455b";
    ctx.fillRect(signX, signY, signWidth, 26);
    ctx.textAlign = "center";
    ctx.font = "15px Determination, monospace";
    ctx.fillStyle = "#fff3d4";
    ctx.fillText(label, x + width / 2, signY + 19);
    ctx.textAlign = "start";
  }

  private drawExitDoor(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, label: string): void {
    ctx.fillStyle = "#3d302c";
    ctx.fillRect(x - 8, y - 8, width + 16, height + 16);
    ctx.fillStyle = "#68483d";
    ctx.fillRect(x, y, width, height);
    ctx.fillStyle = "#9b6a4d";
    ctx.fillRect(x + 12, y + 12, width - 24, height - 22);
    ctx.fillStyle = "#d8ba78";
    ctx.fillRect(x + width - 24, y + height / 2, 8, 8);
    ctx.textAlign = "center";
    ctx.font = "16px Determination, monospace";
    ctx.fillStyle = "#fff5db";
    ctx.fillText(label, x + width / 2, y + height + 22);
    ctx.textAlign = "start";
  }

  private drawWindow(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    ctx.fillStyle = "#705048";
    ctx.fillRect(x, y, 94, 76);
    ctx.fillStyle = "#8bc5d3";
    ctx.fillRect(x + 9, y + 9, 76, 58);
    ctx.fillStyle = "#efe6c7";
    ctx.fillRect(x + 43, y + 9, 8, 58);
    ctx.fillRect(x + 9, y + 34, 76, 8);
  }

  private drawTree(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {
    const s = Math.max(8, Math.round(size / 6));
    ctx.fillStyle = "#765039";
    ctx.fillRect(x + s * 2, y + s * 3, s * 2, s * 3);
    ctx.fillStyle = "#2f7040";
    ctx.fillRect(x + s, y + s, s * 4, s * 4);
    ctx.fillRect(x, y + s * 2, s * 6, s * 2);
    ctx.fillRect(x + s * 2, y, s * 2, s * 6);
    ctx.fillStyle = "#4c9650";
    ctx.fillRect(x + s * 2, y + s, s, s);
    ctx.fillRect(x + s * 4, y + s * 2, s, s);
  }
}
