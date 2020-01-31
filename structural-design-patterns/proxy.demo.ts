import { Library } from "./proxy-demo/Library";
import { LoggingEbookProxy } from "./proxy-demo/LoggingEbookProxy";

const library = new Library();
const fileNames: string[] = ['a','b','c'];

fileNames.forEach(fileName => {
    library.add(new LoggingEbookProxy(fileName));
});

library.openEbook("a");
library.openEbook("b");