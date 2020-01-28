import { ChatClient } from "./strategy-exercise/ChatClient";
import { AESEncryption } from "./strategy-exercise/AESEncryption";

let chatClient = new ChatClient(new AESEncryption());
chatClient.send('Hello world');

// Exercise

// In the Exercises project, look at the strategy/ChatClient class. This class uses an encryption 
// algorithm to encrypt a message before sending it out.  

// What are the problems in this implementation? Refactor the code using the strategy pattern. 
// What are the benefits of the new implementation?  