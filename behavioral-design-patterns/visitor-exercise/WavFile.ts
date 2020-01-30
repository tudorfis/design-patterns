import { Segment } from "./Segment";
import { FormatSegment } from "./FormatSegment";
import { FactSegment } from "./FactSegment";
import { AudioFilter } from "./AudioFilter";

export class WavFile {
    private segments: Segment[] = [];

    static read(fileName: string): WavFile {
        console.log(`Reading ${fileName} ... `);
        const wavFile = new WavFile();
        wavFile.segments.push(new FormatSegment());
        wavFile.segments.push(new FactSegment());
        wavFile.segments.push(new FactSegment());
        wavFile.segments.push(new FactSegment());

        return wavFile;
    }

    applyFilterOnAllSegments(filter: AudioFilter): void {
        this.segments.forEach((segment: Segment) => {
            segment.applyFilter(filter);
        });
    }
}