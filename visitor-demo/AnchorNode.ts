import { HtmlNode } from "./HtmlNode";
import { Operation } from "./Operation";

export class AnchorNode implements HtmlNode {
    execute(operation: Operation) {
        operation.applyAnchor(this);
    }
}  