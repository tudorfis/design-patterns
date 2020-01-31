import { AdvancedRemoteControl } from "./AdvancedRemoteControl";
import { Device } from "./Device";

export class MovieRemoteControl extends AdvancedRemoteControl {
    constructor(
        protected device: Device
    ) {
        super(device);
    }

    setMovie(movie: string) {
        this.device.changeMovie(movie);
    }
}   