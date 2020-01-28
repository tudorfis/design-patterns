import { ChatWindow } from './template-method-exercise/ChatWindow';

let window = new ChatWindow();
window.close();

// Exercise

// In the Exercises project, look at the template/Window class. This class represents a window in a GUI framework.
// Application developers can use this framework to build desktop applications.  The Window class has a method for

// closing a window. Certain windows may need to execute some code before or after a window is closed.  
// We cannot hardcode this behaviour in the Window class because the code that needs to be executed 
// is different from one window to another.  Use the template method pattern to solve this problem.  