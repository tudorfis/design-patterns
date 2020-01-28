import { Command } from "./Command";

export class Button {
    private label: string;

    public getLabel(): string {
        return this.label;
    }

    public setLabel(label: string): void {
        this.label = label;
    }

    constructor(
        private command: Command
    ) { }

    click(): void {
        this.command.execute();
    }
}