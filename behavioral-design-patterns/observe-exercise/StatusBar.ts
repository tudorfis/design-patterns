import { Stock } from "./Stock";
import { StockObserver } from "./StockObserver";

export class StatusBar implements StockObserver {
    private _stocks: Stock[] = [];

    addStock(stock: Stock): void {
        this._stocks.push(stock);
        stock.addObserver(this);
    }

    show(): void {
        console.log('===== STATUSBAR =====');
        this._stocks.forEach((stock: Stock) => {
            console.log(stock.toString());
        });
        console.log('======================');
    }
    
    priceChanged(): void {
        console.log("Price Changed - Refreshing StatusBar");
        this.show();
    }
}
