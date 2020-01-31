import { PointIcon } from "./PointIcon";

export class Point {
    constructor(
        private x: number,
        private y: number,
        private icon: PointIcon
    ) {}

    draw(): void {
        console.log(`${this.icon.getType()} at (${this.x}, ${this.y})`);
    }

    getIcon(){ 
        return this.icon;
    }
}