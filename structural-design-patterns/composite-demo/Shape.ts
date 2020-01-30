import { Component } from "./Component";

export class Shape implements Component {
    render(): void {
        console.log('Rendering shape...');
    }    
    
    move(): void {
        console.log('Moving shape...');
    }
}