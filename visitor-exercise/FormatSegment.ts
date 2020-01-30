import { Segment } from "./Segment";
import { AudioFilter } from "./AudioFilter";

export class FormatSegment extends Segment {
    applyFilter(filter: AudioFilter): void {
        filter.applyFormat(this);
    }
}