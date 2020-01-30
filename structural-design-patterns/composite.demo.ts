import { Group } from "./composite-demo/Group";
import { Shape } from "./composite-demo/Shape";

const group = new Group();
group.addComponent(new Shape());
group.addComponent(new Shape());
group.addComponent(new Shape());

group.render();
group.move();

// Exercise

// Create a method to move and render multiple shapes at once by 
// selecting and grouping them. Use the composite pattern to achieve this