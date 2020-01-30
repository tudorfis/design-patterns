import { Observer } from "./Observer";

// Observable
export class Subject {
    private _observers: Observer[] = [];

    addObserver(observer: Observer) {
        this._observers.push(observer);
    }

    removeObserver(observer: Observer) {
        this._observers.splice(this._observers.indexOf(observer), 1);
    }

    notifyObservers() {
        this._observers.forEach((observer: Observer) => {
            observer.update();
        });
    }
}