import Action from "./Action";

interface SpriteProps {
  name: string;
  icon?: any;
}

class Sprite {
  name: string;
  icon: any;
  size: number = 100;
  actions: Action[] = [];

  constructor(sprite: SpriteProps) {
    this.name = sprite.name;
    this.icon = sprite.icon;
  }

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  setIcon(icon: any) {
    this.icon = icon;
  }

  getIcon() {
    return this.icon;
  }

  setSize(size: number) {
    this.size = size;
  }

  getSize() {
    return this.size;
  }

  addActions(action: Action) {
    this.actions.push(action);
  }

  deleteActions(index: number) {
    if (index >= 0 && index < this.actions.length) {
      this.actions.splice(index, 1);
    }
  }

  runAction(index: number) {
    // if (index >= 0 && index < this.actions.length) {
    //   const action = this.actions[index];
    // //   action.execute();
    // } else {
    //   console.error("Action index out of bounds");
    // }
  }
}

export default Sprite;
