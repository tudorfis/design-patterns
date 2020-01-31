
export class Message {
    constructor(
        private content: string
    ) { }
    
    getContent(): string {
        return this.content;
    }
}