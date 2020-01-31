
export class CellContext {
    constructor(
        private readonly fontFamily: string,
        private readonly fontSize: number,
        private readonly _isBold: boolean
    ) { }

    getFontFamily(): string {
        return this.fontFamily;
    }

    getFontSize(): number {
        return this.fontSize;
    }
    
    isBold(): boolean {
       return this._isBold;
    }

}