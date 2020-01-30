import { HtmlNode } from "./HtmlNode";
import { Operation } from "./Operation";

export class HtmlDocument {
    private nodes: HtmlNode[] = [];

    add(node: HtmlNode): void {
        this.nodes.push(node);
    }

    execute(operation: Operation): void {
        this.nodes.forEach((node: HtmlNode) => {
            node.execute(operation);
        })
    }
}