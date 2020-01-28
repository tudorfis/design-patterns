import { Editor } from "./memento/Editor";

let editor = new Editor({ saveHistory: true });

editor.setContent("a");
editor.setContent("b");
editor.setContent("c");
editor.setContent("d");
editor.setContent("f");

editor.undo();
console.log(editor.getContent());

editor.undo();
editor.undo();
console.log(editor.getContent());


// Exercise 
// In the Exercises project, look at the code in the memento/Document class.
// This class represents a document in a word processor like MS Word or Apple Pages.  

// Our Document class has three attributes:  
// -content
// -fontName
// -fontSize 

// We should allow the user to undo the changes to any of these attributes. 
// In the future, we may add additional attributes in this class and these 
// attributes should also be undoable.  Implement the undo feature using the memento pattern. 