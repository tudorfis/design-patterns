import { RemoteControl } from "./RemoteControl";
import { Device } from "./Device";

export class AdvancedRemoteControl extends RemoteControl {
    constructor(
        protected device: Device
    ) { 
        super(device);
    }

    setChannel(number: number): void {
        this.device.setChannel(number);
    }
}