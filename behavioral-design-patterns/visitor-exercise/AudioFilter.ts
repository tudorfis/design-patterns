import { FormatSegment } from "./FormatSegment";
import { FactSegment } from "./FactSegment";

export interface AudioFilter {
    applyFormat(segment: FormatSegment);
    applyFact(segment: FactSegment);
}