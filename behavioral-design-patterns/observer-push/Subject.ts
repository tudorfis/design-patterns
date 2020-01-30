import { Observer } from "./Observer";

// Observable
export class Subject<T> {
    private _observers: Observer<T>[] = [];

    addObserver(observer: Observer<T>) {
        this._observers.push(observer);
    }

    removeObserver(observer: Observer<T>) {
        this._observers.splice(this._observers.indexOf(observer), 1);
    }

    notifyObservers(value: T) {
        this._observers.forEach((observer: Observer<T>) => {
            observer.update(value);
        });
    }
}