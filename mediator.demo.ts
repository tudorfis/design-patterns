import { ArticlesDialogBox } from "./mediator-demo/ArticlesDialogBox";

let dialog = new ArticlesDialogBox();
dialog.simluateUserInteraction();

// Exercise
// Create framework of components and make the ability for them to comunicate their states in real time
// Use the mediator pattern to handle all the communications between a Button, TextBox, ListBox