import { NotificationService } from "./facade-demo/NotificationService";

const target = 'tudorfis';
NotificationService.send('Salut', target);
NotificationService.send('Ce mai faci ?', target);

// Exercise 

// Create a facade for a notification service that handles a new connection
// Creates a token, the message, and sends it successfully
// Our goal is to be able to easily access this facade