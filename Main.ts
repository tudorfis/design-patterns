import { DataSource } from './observer/DataSource';

class Main {
    constructor(
        private _name: string
    ) {

    }
    
    get name() {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }
}

const main = new Main("Tudor");
console.log(main.name);
