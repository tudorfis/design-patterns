import { CellContext } from "./CellContext";

export class CellContextFactory {
    private context: CellContext[] = [];

    getContext(fontFamily: string, fontSize: number, isBold: boolean) {
        const filterContext = this.context.filter(context => {
            return context.getFontFamily() === fontFamily 
                && context.getFontSize() === fontSize 
                && context.isBold() === isBold
        })[0];

        if (!filterContext) {
            const cellContext = new CellContext(fontFamily, fontSize, isBold);
            this.context.push(cellContext);
            return cellContext;
        }
        return filterContext;
    }
}