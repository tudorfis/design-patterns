import { HeadingNode } from "./HeadingNode";
import { AnchorNode } from "./AnchorNode";

export interface Operation {
    applyHeading(htmlNode: HeadingNode);
    applyAnchor(htmlNode: AnchorNode);
}