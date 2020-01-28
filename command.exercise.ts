import { VideoEditor } from "./command-exercise/VideoEditor";
import { History } from "./command-exercise/History";
import { SetTextCommand } from "./command-exercise/SetTextCommand";
import { SetContrastCommand } from "./command-exercise/SetContrastCommand";
import { UndoCommand } from "./command-exercise/UndoCommand";

let videoEditor = new VideoEditor();
let history = new History();
console.log(`STARTING: ${videoEditor}`);

let setTextCommand = new SetTextCommand("Video title", videoEditor, history);
setTextCommand.execute();
console.log(`TEXT: ${videoEditor}`);

let setContrastCommand = new SetContrastCommand(1, videoEditor, history);
setContrastCommand.execute();
console.log(`CONTRAST: ${videoEditor}`);

let undoCommand = new UndoCommand(history);
undoCommand.execute();
console.log(`UNDO: ${videoEditor}`);

undoCommand.execute();
console.log(`UNDO: ${videoEditor}`);

undoCommand.execute();
console.log(`UNDO: ${videoEditor}`);

// Exercise 

// In the Exercises project, look at the command/VideoEditor class. This class represents the operations we can perform on a 
// video, such as adding a label to it or changing its contrast. 

// We need to allow the user to undo any changes he/she makes to 
// a video.  What pattern would you use to implement this feature?
// The memento or the command pattern? Why?  Write the 
// necessary code to implement the undo feature.  