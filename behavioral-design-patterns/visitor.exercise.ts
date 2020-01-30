import { WavFile } from "./visitor-exercise/WavFile";
import { NoiseReductionFilter } from "./visitor-exercise/NoiseReductionFilter";
import { ReverbFilter } from "./visitor-exercise/ReverbFilter";
import { NormalizeFilter } from "./visitor-exercise/NormalizeFilter";

const wavFile = WavFile.read("myfile.wav");
wavFile.applyFilterOnAllSegments(new NoiseReductionFilter());
wavFile.applyFilterOnAllSegments(new ReverbFilter());
wavFile.applyFilterOnAllSegments(new NormalizeFilter());

// Exercise

// We’re going to build an audio editor for editing wave (.wav) files.
// We’re planning to ship this application with a bunch of standard filters that users can
// apply on their audio files, such as:

// -Noise reduction
// -Reverb
// -Normalize

// We want other developers to be able to create new filters in the form of plugins
// that can be imported into our application.  

// Look at visitor/WavFile class.  
// -What are the problems with this implementation?
// -Can the visitor pattern solve these problems? Why?
// -Refactor the code and apply the visitor pattern.