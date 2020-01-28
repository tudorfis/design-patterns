import { ProductCollection } from "./iterator/ProductCollection";

let productCollection = new ProductCollection();
productCollection.addProduct("cheese");
productCollection.addProduct("mouse");
productCollection.addProduct("cat");

productCollection.createIteratorForward();
while (productCollection.getIterator().hasNext()) {
    console.log(`ITERATOR FORWARD: product is ${productCollection.getIterator().current()}`);
    productCollection.getIterator().increment();
}

console.log('========================');

productCollection.addProduct("sex");
productCollection.addProduct("camera");

productCollection.createIteratorBackwards();
while (productCollection.getIterator().hasNext()) {
    console.log(`ITERATOR BACKWARDS: product is ${productCollection.getIterator().current()}`);
    productCollection.getIterator().increment();
}

console.log('========================');

productCollection.createIteratorForward();
while (productCollection.getIterator().hasNext()) {
    console.log(`ITERATOR FORWARD: product is ${productCollection.getIterator().current()}`);
    productCollection.getIterator().increment();
}

// Exercise

// In the Exercises project, look at the iterator/ProductCollection class.
// This class only allows us to add a product to a collection.

// Once we add a bunch of products to a collection, there is no way to iterate
// that collection and print the products. Implement this feature using the iterator pattern.  