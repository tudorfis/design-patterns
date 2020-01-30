import { Operation } from "./Operation";
import { HeadingNode } from "./HeadingNode";
import { AnchorNode } from "./AnchorNode";

export class HighlightOperation implements Operation {
    applyHeading(heading: HeadingNode) {
        console.log("highlight-heading");
    }
    
    applyAnchor(anchor: AnchorNode) {
        console.log("highlight-anchor");
    }
}