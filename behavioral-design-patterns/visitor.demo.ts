import { HtmlDocument } from "./visitor-demo/HtmlDocument";
import { AnchorNode } from "./visitor-demo/AnchorNode";
import { HeadingNode } from "./visitor-demo/HeadingNode";
import { HighlightOperation } from "./visitor-demo/HighlightOperation";
import { PlainTextOperation } from "./visitor-demo/PlainTextOperation";

console.log('==============================');

const htmlDocument = new HtmlDocument();
htmlDocument.add(new HeadingNode());
htmlDocument.add(new AnchorNode());
htmlDocument.add(new AnchorNode());
htmlDocument.add(new AnchorNode());
htmlDocument.execute(new HighlightOperation());

console.log('==============================');

htmlDocument.add(new HeadingNode());
htmlDocument.add(new HeadingNode());
htmlDocument.execute(new PlainTextOperation());

// Exercise

// Add multiple operations by a visitor pattern for certain nodes in an html document
// Have them be able to do certain operation for each node by using the open close principle