import { Command } from "./fx/Command";

export class BlackAndWhiteCommand implements Command {
    execute(): void {
        console.log('Executing B&W command...');
        
    }
}