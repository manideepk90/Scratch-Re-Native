import { generateRandomColor, generateUniqueId } from "@/utils/utils";
import Sprite from "./Sprite";
import { getRandomNumber } from "./randomNess";

interface ActionType {
  name: string;
  size?: number;
  width?: number;
  height?: number;
  id?: string;
  color?: string;
  x?: number;
  y?: number;
}

class Action {
  private name: string;
  private size: number;
  private width: number;
  private height: number;
  private id: string;
  private color: string;
  private x: number = 0;
  private y: number = 0;
  private zIndex: number = 2;

  private functions: any = [];
  constructor({
    name,
    size = 100,
    width = 250,
    height = 200,
    x = 0,
    y = 0,
    id,
    color,
  }: ActionType) {
    this.name = name;
    this.size = size;
    this.width = width;
    this.height = height;
    this.color = color || generateRandomColor();
    this.id = id || generateUniqueId();
    this.x = x;
    this.y = y;
  }

  public getName(): string {
    return this.name;
  }

  public getSize(): number {
    return this.size;
  }

  public getWidth(): number {
    return this.width;
  }

  public getHeight(): number {
    return this.height;
  }

  public getColor(): string {
    return this.color;
  }

  public getId(): string {
    return this.id;
  }

  public getX(): number {
    return this.x;
  }

  public getY(): number {
    return this.y;
  }

  public getZIndex(): number {
    return this.zIndex;
  }

  public setZIndex(zIndex: number): void {
    this.zIndex = zIndex + 2;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setSize(size: number): void {
    this.size = size;
  }

  public setWidth(width: number): void {
    this.width = width;
  }

  public setHeight(height: number): void {
    this.height = height;
  }
  public setId(id: string): void {
    this.id = id;
  }

  public setColor(color: string): void {
    this.color = color;
  }

  public setX(x: number): void {
    this.x = x;
  }

  public setY(y: number): void {
    this.y = y;
  }

  public toJSON(): string {
    return JSON.stringify({
      name: this.name,
      size: this.size,
      width: this.width,
      height: this.height,
      id: this.id,
      color: this.color,
      x: this.x,
      y: this.y,
    });
  }
  setMethods(methods: any) {
    this.functions = methods;
  }

  public addFunction(func: any): void {
    this.functions.push({
      ...func,
      id: generateUniqueId(),
      getRandomNumber: getRandomNumber,
    });
  }

  public removeFunction(func: any): void {
    this.functions = this.functions.filter((f: any) => f !== func);
  }

  public getMethods(): any {
    return this.functions;
  }

  public runAction(sprite: Sprite): void {
    this.functions.forEach((func: any) => func.callback(sprite, func));
  }

  public static fromJSON(json: string): Action {
    const obj = JSON.parse(json);
    return new Action({
      name: obj.name,
      size: obj.size,
      width: obj.width,
      height: obj.height,
      id: obj.id,
      color: obj.color,
      x: obj.x,
      y: obj.y,
    });
  }
}

export default Action;
