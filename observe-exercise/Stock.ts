import { StockSubject } from "./StockSubject";

export class Stock extends StockSubject {
    constructor(
        private _name: string,
        private _symbol: string,
        private _price: number
    ) { 
        super();
    }

    getPrice(): number {
        return this._price;
    }

    setPrice(price: number): void {
        this._price = price;
        this.notifyObservers();
    }

    toString(): string {
        return `${this._name} Stock {symbol=${this._symbol}, price=${this._price}}`;
    }
}