import { StockObserver } from "./StockObserver";

export class StockSubject {
    private observers: StockObserver[] = [];

    addObserver(observer: StockObserver): void {
        this.observers.push(observer);
    }

    notifyObservers(): void {
        this.observers.forEach(observer => {
            observer.priceChanged();
        })
    }
}