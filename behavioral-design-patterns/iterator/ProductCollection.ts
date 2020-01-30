import { Iterator } from './Iterator';

export class ProductCollection {
    private _collection: string[] = [];
    private _iterator: Iterator<string>;

    addProduct(product: string): void {
        this._collection.push(product);
    }

    createIteratorForward(): void {
        this._iterator = new ProductCollectionIteratorForward(this._collection);
    }

    createIteratorBackwards(): void {
        this._iterator = new ProductCollectionIteratorBackwards(this._collection);
    }

    getIterator(): Iterator<any> {
        return this._iterator;
    }
}

class ProductCollectionIteratorForward implements Iterator<string> {
    private collectionIndex: number = 0;

    constructor(
        private readonly collection: string[]
    ) { }

    hasNext(): boolean {
        return (this.collectionIndex < this.collection.length);
    }

    current(): string {
        return this.collection[this.collectionIndex];
    }

    increment(): void {
        this.collectionIndex++;
    }
}

class ProductCollectionIteratorBackwards implements Iterator<string> {
    private collectionIndex: number;

    constructor(
        private readonly collection: string[]
    ) { 
        this.collectionIndex = collection.length;
    }

    hasNext(): boolean {
        return (this.collectionIndex > 0);
    }

    current(): string {
        return this.collection[this.collectionIndex-1];
    }

    increment(): void {
        this.collectionIndex--;
    }
}

