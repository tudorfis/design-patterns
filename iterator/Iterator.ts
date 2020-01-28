
export interface Iterator<T> {
    hasNext(): boolean;
    current(): T;
    increment(): void;
}

// example
// while (collection.getIterator().hasNext()) {
//     doSomethingWith(collection.getIterator().current());
//     collection.getIterator().increment();
// }