import { CellContextFactory } from "./CellContextFactory";
import { Cell } from "./Cell";
import { CellContext } from "./CellContext";

const MAX_ROWS: number = 3;
const MAX_COLS: number = 3;

export class Spreadsheet {
    // private cells: Cell[][] = new Cell[MAX_ROWS][MAX_COLS];
    private cells: Cell[][] = [
        [new Cell(0, 0, null), new Cell(0, 1, null), new Cell(0, 2, null)],
        [new Cell(1, 0, null), new Cell(1, 1, null), new Cell(1, 2, null)],
        [new Cell(2, 0, null), new Cell(2, 1, null), new Cell(2, 2, null)]
    ];

    constructor(
        private contextFactory: CellContextFactory
    ) {
        this.generateCells();
    }

    public getContext(row: number, col: number) {
        this.ensureCellExists(row, col);
        return this.cells[row][col].getContext();
    }

    public setContent(row: number, col: number, content: string): void {
        this.ensureCellExists(row, col);

        this.cells[row][col].setContent(content);
    }

    // We could have a similar method font setting the fontSize or isBold
    // for a given cell. I've omitted that here.
    public setFontFamily(row: number, col: number, fontFamily: string): void {
        this.ensureCellExists(row, col);

        var cell = this.cells[row][col];
        var currentContext = cell.getContext();
        var context = this.contextFactory.getContext(fontFamily, currentContext.getFontSize(), currentContext.isBold());
        this.cells[row][col].setContext(context);
    }

    private ensureCellExists(row: number, col: number): void {
        if (row < 0 || row >= MAX_ROWS)
            console.log('error illegal argument exception')

        if (col < 0 || col >= MAX_COLS)
            console.log('error illegal argument exception')
    }

    generateCells(): void {
        for (var row = 0; row < MAX_ROWS; row++)
            for (var col = 0; col < MAX_COLS; col++)
                this.cells[row][col] = new Cell(row, col, this.getDefaultContext());
    }

    private getDefaultContext(): CellContext {
        // In a real app, these values should not be hardcoded here.
        // They should be read from a configuration file.
        return new CellContext("Times New Roman", 12, false);
    }

    render(): void {
        for (var row = 0; row < MAX_ROWS; row++)
            for (var col = 0; col < MAX_COLS; col++)
                this.cells[row][col].render();
    }
}