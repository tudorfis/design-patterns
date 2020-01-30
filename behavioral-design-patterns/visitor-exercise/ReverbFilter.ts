import { AudioFilter } from "./AudioFilter";
import { FactSegment } from "./FactSegment";
import { FormatSegment } from "./FormatSegment";

export class ReverbFilter implements AudioFilter {
    applyFormat(segment: FormatSegment) {
        console.log("Reverb on format segment");
    }    
    
    applyFact(segment: FactSegment) {
        console.log("Reverb on fact segment");
    }
}
