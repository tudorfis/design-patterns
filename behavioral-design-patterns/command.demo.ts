import { Button } from "./command-demo/fx/Button";
import { AddCustomerCommand } from "./command-demo/AddCustomerCommand";
import { OpenNewFileCommand } from "./command-demo/OpenNewFileCommand";
import { BlackAndWhiteCommand } from "./command-demo/BlackAndWhiteCommand";
import { CompositeCommand } from "./command-demo/CompositeCommand";

let button1 = new Button(new AddCustomerCommand());
button1.click();

let button2 = new Button(new OpenNewFileCommand());
button2.click();

let button3 = new Button(new BlackAndWhiteCommand());
button3.click();

console.log('===========================');

let compositeCommand = new CompositeCommand();
compositeCommand.add(new OpenNewFileCommand());
compositeCommand.add(new BlackAndWhiteCommand());
compositeCommand.add(new AddCustomerCommand());
compositeCommand.execute()

// Exercise

// Build a quick framework that supports the button with click using the command pattern
// Have a few commands to execute for each button on click
// Also create a composite command to store multiple commands that can be execute at once
// Similar to photoshop actions