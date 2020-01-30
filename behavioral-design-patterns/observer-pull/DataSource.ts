import { Subject } from "./Subject";

export class DataSource<T> extends Subject {
    private value: T;

    getValue(): T {
        return this.value;
    }

    setValue(value: T) {
        this.value = value;
        this.notifyObservers();
    };
}