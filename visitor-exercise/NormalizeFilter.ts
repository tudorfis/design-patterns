import { AudioFilter } from "./AudioFilter";
import { FactSegment } from "./FactSegment";
import { FormatSegment } from "./FormatSegment";

export class NormalizeFilter implements AudioFilter {
    applyFormat(segment: FormatSegment) {
        console.log("Normalize on format segment");
    }    
    
    applyFact(segment: FactSegment) {
        console.log("Normalize on fact segment");
    }
}
