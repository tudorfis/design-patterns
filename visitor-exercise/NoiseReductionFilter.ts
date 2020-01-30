import { AudioFilter } from "./AudioFilter";
import { FactSegment } from "./FactSegment";
import { FormatSegment } from "./FormatSegment";

export class NoiseReductionFilter implements AudioFilter {
    applyFormat(segment: FormatSegment) {
        console.log("Noise reduction on format segment");
    }    
    
    applyFact(segment: FactSegment) {
        console.log("Noise reduction on fact segment");
    }
}