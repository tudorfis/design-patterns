import { Command } from './fx/Command';

export class AddCustomerCommand implements Command {
    execute(): void {
        console.log('Executing Add customer command...');
    }
}