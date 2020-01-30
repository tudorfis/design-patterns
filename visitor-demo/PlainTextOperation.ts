import { Operation } from "./Operation";
import { HeadingNode } from "./HeadingNode";
import { AnchorNode } from "./AnchorNode";

export class PlainTextOperation implements Operation {
    applyHeading(heading: HeadingNode) {
        console.log("plaintext-heading");
    }

    applyAnchor(anchor: AnchorNode) {
        console.log("plaintext-anchor");
    }
}