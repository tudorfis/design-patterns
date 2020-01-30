import { Component } from "./Component";
import { Shape } from "./Shape";

export class Group implements Component {
    private components: Component[] = [];

    addComponent(component: Component): void {
        this.components.push(component);
    }

    render(): void {
        this.components.forEach(component => {
            component.render();
        });
    }

    move(): void {
        this.components.forEach(component => {
            component.move();
        });
    }
}