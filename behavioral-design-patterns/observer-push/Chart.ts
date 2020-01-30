import { Observer } from "./Observer";

export class Chart implements Observer<number> {
    update(value: number): void {
        console.log(`Chart got updated with this number ${value}`);
        
    }
     
}