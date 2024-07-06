import { generateUniqueId } from "@/utils/utils";
import Action from "./Action";

interface SpriteProps {
  name: string;
  icon?: any;
  id?: string;
  size?: number;
  actions?: Action[];
}

class Sprite {
  private name: string;
  private icon: any;
  private size: number;
  private actions: Action[] = [];
  private id: string;
  private x = 0;
  private y = 0;
  private direction = 0;
  constructor(sprite: SpriteProps) {
    this.name = sprite.name;
    this.icon = sprite.icon;
    this.size = sprite?.size || 50;
    this.addAction(new Action({ name: "action-1" }));
    this.addAction(new Action({ name: "action-2" }));
    this.id = sprite.id || generateUniqueId();
  }

  // Getters
  getName(): string {
    return this.name;
  }

  getId(): string {
    return this.id;
  }

  getIcon(): any {
    return this.icon;
  }

  getSize(): number {
    return this.size;
  }

  getActions(): Action[] {
    return [...this.actions];
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }

  getDirection(): number {
    return this.direction;
  }
  getSprite(): Sprite {
    return new Sprite({
      name: this.name,
      icon: this.icon,
      size: this.size,
      actions: this.actions,
      id: this.id,
    });
  }

  // Setters
  setName(name: string) {
    this.name = name;
    return this;
  }
  setX(x: number) {
    this.x = x;
    return this;
  }
  setY(y: number) {
    this.y = y;
    return this;
  }
  setDirection(direction: number) {
    this.direction = direction;
    return this;
  }

  setNewId() {
    this.id = generateUniqueId();
    return this;
  }

  setIcon(icon: any) {
    this.icon = icon;
    return this;
  }

  setActions(actions: Action[]) {
    this.actions = actions;
    return this;
  }

  setSize(size: number) {
    if (size >= 0) {
      this.size = size;
      return this;
    } else {
      console.error("Size must be positive");
    }
  }

  addAction(action: Action) {
    action.setName(`action-${this.actions.length + 1}`);
    if (this.actions.length !== 0) {
      action.setX(action.getX() + 20);
      action.setY(action.getY() + 10);
    }
    this.actions.push(action);
    return this;
  }
}

export default Sprite;
