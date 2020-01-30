import { Segment } from "./Segment";
import { AudioFilter } from "./AudioFilter";

export class FactSegment extends Segment {
    applyFilter(filter: AudioFilter): void {
        filter.applyFact(this);
    }
}