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
