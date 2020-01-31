import { CellContext } from "./CellContext";

export class Cell {
    private content: string;

    constructor(
        private readonly row: number,
        private readonly column: number,
        private context: CellContext
    ){}

    setContent(content: string): void {
        this.content = content;
    }

    getContext(): CellContext {
        return this.context;
    }

    setContext(context: CellContext): void {
        this.context = context;
    }

    render(): void {
        console.log(`(${this.row}, ${this.column}): ${this.content} [${this.context.getFontFamily()}]`);
    }
}