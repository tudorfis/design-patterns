import { AudioFilter } from "./AudioFilter";

export abstract class Segment {
    abstract applyFilter(filter: AudioFilter): void;
}