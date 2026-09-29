export class Input {
  private keys = new Set<string>();

  private handleKeyDown = (event: KeyboardEvent) => {
    const key = event.key.toLowerCase();

    if (["w", "a", "s", "d", "arrowup", "arrowdown", "arrowleft", "arrowright", "e", "escape", "+", "=", "-", "_", "0"].includes(key)) {
      event.preventDefault();
    }

    this.keys.add(key);
  };

  private handleKeyUp = (event: KeyboardEvent) => {
    this.keys.delete(event.key.toLowerCase());
  };

  constructor() {
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("keyup", this.handleKeyUp);
  }

  isDown(key: string): boolean {
    return this.keys.has(key.toLowerCase());
  }

  consume(key: string): boolean {
    const normalized = key.toLowerCase();
    if (!this.keys.has(normalized)) return false;

    this.keys.delete(normalized);
    return true;
  }

  destroy(): void {
    window.removeEventListener("keydown", this.handleKeyDown);
    window.removeEventListener("keyup", this.handleKeyUp);
    this.keys.clear();
  }
}
