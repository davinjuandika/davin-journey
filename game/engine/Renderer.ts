import { TILE_SIZE } from "../engine/worldConstants";
import {
  outsideMap,
  houseBounds,
  trees,
  farmField,
  farmCrops,
  roadLamps,
  rocks,
} from "../maps/outside";
import { HOUSE_WORLD, roomDoors, roomInteractiveSpots } from "../maps/house";
import type { GameScene, SectionScene } from "../types/game";

export class Renderer {
  private grassImage = new Image();
  private pathImage = new Image();
  private waterImage = new Image();
  private farmImage = new Image();
  private treeImage = new Image();
  private treeSmallImage = new Image();
  private chestImage = new Image();
  private lampImage = new Image();
  private rock1Image = new Image();
  private rock2Image = new Image();
  private wheatImage = new Image();
  private fenceHorizontalImage = new Image();
  private fenceVerticalImage = new Image();
  private fenceCornerImage = new Image();

  private loaded = false;

  constructor() {
    // Core terrain from Cute Fantasy Assets.
    this.grassImage.src = "/sprites/tilesets/grass.png";
    this.pathImage.src = "/sprites/tilesets/path.png";
    this.waterImage.src = "/sprites/tilesets/water.png";
    this.farmImage.src = "/sprites/tilesets/farmland.png";

    // Outdoor decoration from Cute Fantasy Assets.
    this.treeImage.src = "/sprites/objects/oak_tree.png";
    this.treeSmallImage.src = "/sprites/objects/oak_tree_small.png";
    this.chestImage.src = "/sprites/objects/chest.png";
    this.lampImage.src = "/sprites/objects/lamp.png";
    this.rock1Image.src = "/sprites/objects/rock_1.png";
    this.rock2Image.src = "/sprites/objects/rock_2.png";
    this.wheatImage.src = "/sprites/objects/wheat.png";
    this.fenceHorizontalImage.src = "/sprites/objects/fence_horizontal.png";
    this.fenceVerticalImage.src = "/sprites/objects/fence_vertical.png";
    this.fenceCornerImage.src = "/sprites/objects/fence_corner.png";
  }

  async load(): Promise<void> {
    const images = [
      this.grassImage,
      this.pathImage,
      this.waterImage,
      this.farmImage,
      this.treeImage,
      this.treeSmallImage,
      this.chestImage,
      this.lampImage,
      this.rock1Image,
      this.rock2Image,
      this.wheatImage,
      this.fenceHorizontalImage,
      this.fenceVerticalImage,
      this.fenceCornerImage,
    ];

    await Promise.all(images.map((image) => this.waitForImage(image)));
    this.loaded = true;
  }

  drawOutside(ctx: CanvasRenderingContext2D, cameraX: number, cameraY: number): void {
    ctx.imageSmoothingEnabled = false;

    // Clear the full world area first.
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, 2560, 1600);

    if (!this.loaded) return;

    const startCol = Math.max(0, Math.floor((cameraX - 32) / TILE_SIZE));
    const endCol = Math.min(
      outsideMap[0].length,
      Math.ceil((cameraX + ctx.canvas.width) / TILE_SIZE) + 1,
    );
    const startRow = Math.max(0, Math.floor((cameraY - 32) / TILE_SIZE));
    const endRow = Math.min(
      outsideMap.length,
      Math.ceil((cameraY + ctx.canvas.height) / TILE_SIZE) + 1,
    );

    // Base terrain.
    for (let row = startRow; row < endRow; row++) {
      for (let col = startCol; col < endCol; col++) {
        const tile = outsideMap[row][col];
        const x = col * TILE_SIZE;
        const y = row * TILE_SIZE;

        if (tile === 2) {
          ctx.drawImage(this.pathImage, x, y, TILE_SIZE, TILE_SIZE);
        } else if (tile === 3) {
          ctx.drawImage(this.waterImage, x, y, TILE_SIZE, TILE_SIZE);
        } else {
          ctx.drawImage(this.grassImage, x, y, TILE_SIZE, TILE_SIZE);
        }
      }
    }

    // Wheat farm.
    this.drawFarm(ctx);

    // Trees.
    for (const tree of trees) {
      ctx.drawImage(this.treeImage, tree.x, tree.y, tree.width, tree.height);
    }

    // Smaller trees as filler.
    ctx.drawImage(this.treeSmallImage, 1550, 1180, 96, 48);
    ctx.drawImage(this.treeSmallImage, 1750, 1360, 96, 48);

    // Rock decorations around the path and farm.
    for (const rock of rocks) {
      const image = rock.variant === 2 ? this.rock2Image : this.rock1Image;
      ctx.drawImage(image, rock.x, rock.y, 32, 32);
    }

    // Lamps lining the road.
    for (const lamp of roadLamps) {
      ctx.drawImage(this.lampImage, lamp.x, lamp.y, 32, 64);
    }

    // A couple of tiny decorative chests act as landmarks.
    ctx.drawImage(this.chestImage, 630, 900, 32, 32);
    ctx.drawImage(this.chestImage, 1780, 910, 32, 32);

    // Temporary house placeholder until the final house asset is chosen.
    this.drawHouseExterior(ctx);
  }

  private drawFarm(ctx: CanvasRenderingContext2D): void {
    const x = farmField.x;
    const y = farmField.y;
    const w = farmField.width;
    const h = farmField.height;

    // Continuous soil base behind the individual farm tiles.
    ctx.fillStyle = "#a7744d";
    ctx.fillRect(x, y, w, h);

    // FarmLand_Tile is 48x48.
    for (let py = y; py < y + h; py += 48) {
      for (let px = x; px < x + w; px += 48) {
        ctx.drawImage(this.farmImage, px, py, 48, 48);
      }
    }

    // Wheat rows.
    for (const crop of farmCrops) {
      ctx.drawImage(this.wheatImage, crop.x, crop.y, 24, 24);
    }

    this.drawFarmFence(ctx, x, y, w, h);
  }

  private drawFarmFence(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
  ): void {
    const fenceYTop = y - 16;
    const fenceYBottom = y + h;
    const fenceXLeft = x - 16;
    const fenceXRight = x + w - 16;

    // Corners.
    ctx.drawImage(this.fenceCornerImage, fenceXLeft, fenceYTop, 32, 32);
    ctx.drawImage(this.fenceCornerImage, x + w - 16, fenceYTop, 32, 32);
    ctx.drawImage(this.fenceCornerImage, fenceXLeft, y + h - 16, 32, 32);
    ctx.drawImage(this.fenceCornerImage, x + w - 16, y + h - 16, 32, 32);

    // Horizontal rails.
    for (let px = x + 16; px < x + w - 16; px += 32) {
      ctx.drawImage(this.fenceHorizontalImage, px, fenceYTop, 32, 16);
      ctx.drawImage(this.fenceHorizontalImage, px, fenceYBottom, 32, 16);
    }

    // Vertical rails with a gate opening on the east side.
    for (let py = y + 16; py < y + h - 16; py += 32) {
      if (py < 1072 || py >= 1136) {
        ctx.drawImage(this.fenceVerticalImage, fenceXLeft, py, 16, 32);
        ctx.drawImage(this.fenceVerticalImage, fenceXRight, py, 16, 32);
      } else {
        ctx.drawImage(this.fenceVerticalImage, fenceXLeft, py, 16, 32);
      }
    }

    // Small gateposts emphasize the opening.
    ctx.drawImage(this.fenceVerticalImage, fenceXRight, 1040, 16, 32);
    ctx.drawImage(this.fenceVerticalImage, fenceXRight, 1136, 16, 32);
  }

  drawHouseInterior(ctx: CanvasRenderingContext2D): void {
    const { width: w, height: h } = HOUSE_WORLD;

    ctx.fillStyle = "#b78659";
    ctx.fillRect(0, 0, w, h);

    for (let y = 80; y < h - 34; y += 38) {
      ctx.fillStyle = y % 76 === 4 ? "#c49363" : "#ad7d52";
      ctx.fillRect(34, y, w - 68, 30);
    }

    ctx.fillStyle = "#5d443b";
    ctx.fillRect(0, 0, w, 78);
    ctx.fillRect(0, 0, 34, h);
    ctx.fillRect(w - 34, 0, 34, h);
    ctx.fillRect(0, h - 34, w, 34);

    ctx.fillStyle = "#5c4b60";
    ctx.fillRect(315, 250, 650, 220);
    ctx.fillStyle = "#856979";
    ctx.fillRect(333, 268, 614, 184);

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
    ctx.fillText("Choose a room to explore", w / 2, 102);
    ctx.textAlign = "start";
  }

  drawSectionRoom(ctx: CanvasRenderingContext2D, scene: SectionScene): void {
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

    ctx.fillStyle = "#56455b";
    ctx.fillRect(170, 104, w - 340, 56);
    ctx.textAlign = "center";
    ctx.fillStyle = "#fff3d4";
    ctx.font = "30px Determination, monospace";
    ctx.fillText(titles[scene], w / 2, 140);

    ctx.fillStyle = "#856979";
    ctx.fillRect(310, 195, 660, 350);
    ctx.fillStyle = "#5c4b60";
    ctx.fillRect(330, 215, 620, 310);

    const spots = roomInteractiveSpots(scene);
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

    ctx.fillStyle = "rgba(0,0,0,.20)";
    ctx.fillRect(x + 32, y + h - 4, w - 64, 28);

    ctx.fillStyle = "#e7d1ab";
    ctx.fillRect(x, y + 90, w, h - 90);

    ctx.fillStyle = "#75433b";
    ctx.fillRect(x - 24, y + 34, w + 48, 120);
    ctx.fillStyle = "#914d45";
    for (let i = 0; i < w + 20; i += 32) {
      ctx.fillRect(x - 12 + i, y + 48, 18, 82);
    }

    ctx.fillStyle = "#533833";
    ctx.fillRect(x - 30, y + 30, w + 60, 14);

    this.drawWindow(ctx, x + 92, y + 168);
    this.drawWindow(ctx, x + w - 186, y + 168);

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
    ctx.fillStyle = "#704936";
    ctx.fillRect(x, y + 42, 240, 78);
    ctx.fillStyle = "#a37252";
    ctx.fillRect(x - 8, y + 28, 256, 18);

    ctx.fillStyle = "#2f2c2b";
    ctx.fillRect(x + 72, y - 10, 96, 62);
    ctx.fillStyle = "#6d8790";
    ctx.fillRect(x + 82, y, 76, 42);
    ctx.fillStyle = "#9ac08b";
    ctx.fillRect(x + 92, y + 9, 56, 7);
    ctx.fillRect(x + 92, y + 21, 42, 6);
    ctx.fillStyle = "#2f2c2b";
    ctx.fillRect(x + 108, y + 52, 24, 12);

    ctx.fillStyle = "#f8edd3";
    ctx.fillRect(x + 48, y + 84, 144, 30);
    ctx.fillStyle = "#5a4652";
    ctx.font = "16px Determination, monospace";
    ctx.textAlign = "center";
    ctx.fillText(icon, x + 120, y + 105);
    ctx.textAlign = "start";
  }

  private drawInteractiveDesk(ctx: CanvasRenderingContext2D, x: number, y: number, icon: string): void {
    ctx.fillStyle = "#704936";
    ctx.fillRect(x, y + 68, 360, 98);
    ctx.fillStyle = "#a37252";
    ctx.fillRect(x - 10, y + 50, 380, 20);

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
    ctx.fillStyle = "#3d302c";
    ctx.fillRect(x - 8, y - 8, width + 16, height + 16);
    ctx.fillStyle = "#67483c";
    ctx.fillRect(x, y, width, height);
    ctx.fillStyle = "#98684e";
    ctx.fillRect(x + 12, y + 12, width - 24, height - 24);
    ctx.fillStyle = "#d7bd7b";
    ctx.fillRect(x + width - 28, y + height / 2, 10, 10);
    ctx.fillStyle = "#7b503f";
    ctx.fillRect(x + 20, y + 26, width - 40, 4);
    ctx.fillRect(x + 20, y + height - 30, width - 40, 4);

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

  private waitForImage(image: HTMLImageElement): Promise<void> {
    if (image.complete && image.naturalWidth > 0) return Promise.resolve();

    return new Promise<void>((resolve, reject) => {
      image.onload = () => resolve();
      image.onerror = () => reject(new Error(`Could not load image: ${image.src}`));
    });
  }
}
