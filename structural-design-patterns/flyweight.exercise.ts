import { CellContextFactory } from "./flyweight-exercise/CellContextFactory";
import { Spreadsheet } from "./flyweight-exercise/Spreadsheet";

const contextFactory = new CellContextFactory();
const sheet = new Spreadsheet(contextFactory);

sheet.setContent(0, 0, "Hello");
sheet.setContent(0, 1, "World");
sheet.setContent(0, 2, "Arial");
sheet.setFontFamily(0, 0, 'Comic Sans Serif');
sheet.setFontFamily(0, 1, 'Comic Sans Serif');
sheet.setFontFamily(0, 2, 'Arial');
sheet.render();

console.log(`sheet.getContext(0, 0) === sheet.getContext(0, 1) : ${sheet.getContext(0, 0) === sheet.getContext(0, 1)}`);
console.log(`sheet.getContext(1, 0) === sheet.getContext(1, 1) : ${sheet.getContext(1, 0) === sheet.getContext(1, 1)}`);

// Exercise 

// We’re going to build a spreadsheet application like Excel or Numbers. Classes in the flyweight package show 
// our current implementation of Celland SpreadSheet concepts. If you run the code in the Demo class, you’ll see a 3x3 spreadsheet printed on the console. 

// Note that the font of the first cell is different from the font of other cells. So, a user can set various formatting attributes such as font name, 
// font size, bold, etc for each cell individually. The problem with the current implementation is that each cell is storing its font family, font size 
// and bold characteristics. What if many cells share the same formatting attributes? Storing these attributes for every cell would be a waste of memory.

// While this is not a big deal in a small spreadsheet, it may cause our application to crash if we have a spreadsheet with 100,000+ rows of data. 
// Use the flyweight pattern to solve this problem. 