import { RemoteControl } from "./bridge-demo/RemoteControl";
import { SonyTV } from "./bridge-demo/SonyTV";
import { AdvancedRemoteControl } from "./bridge-demo/AdvancedRemoteControl";
import { MovieRemoteControl } from "./bridge-demo/MovieRemoteControl";
import { PanasonicTV } from "./bridge-demo/PanasonicTV";

const remoteControl = new RemoteControl(new SonyTV());
remoteControl.turnOn();
remoteControl.turnOff();

const advancedRemoteControl = new AdvancedRemoteControl(new SonyTV());
remoteControl.turnOn();
advancedRemoteControl.setChannel(1);

const movieRemoteControl = new MovieRemoteControl(new PanasonicTV());
movieRemoteControl.turnOn();
movieRemoteControl.setMovie('Spider-man 1');

// Exercise

// implement a different types of remote controls for different tv's
// we can have a simple remote control, an advanced remote control, a movie remote control, a netflix etc
// we can also have different tv implementations of each received command from different remote controls
// using the bridge pattern implement this.