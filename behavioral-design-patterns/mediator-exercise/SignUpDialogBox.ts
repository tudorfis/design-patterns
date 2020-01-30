import { DialogBox } from "./framework/DialogBox";
import { TextBox } from "./framework/TextBox";
import { CheckBox } from "./framework/CheckBox";
import { Button } from "./framework/Button";
import { EventHandler } from "./framework/EventHandler";

export class SignUpDialogBox extends DialogBox {
    private usernameControl = new TextBox();
    private passwordControl = new TextBox();
    private agreeToTermsControl = new CheckBox();
    private signUpControl = new Button();

    private _isFormValid(): boolean {
        return !this.usernameControl.isEmpty() && !this.passwordControl.isEmpty() && this.agreeToTermsControl.isChecked();
    }
    private _controlChanged: EventHandler = {
        handle: () => {
            this.signUpControl.setEnabled(
                this._isFormValid()
            );
        }
    }

    constructor() {
        super();
        this.usernameControl.attachEventHandler(this._controlChanged);
        this.passwordControl.attachEventHandler(this._controlChanged);
        this.agreeToTermsControl.attachEventHandler(this._controlChanged);
    }

    simulateUXBehaviour() {
        console.log("SIGNUP BUTTON ENABLED : " + this.signUpControl.isEnabled());
        this.usernameControl.setText("todorescu");
        this.passwordControl.setText("123456");
        this.agreeToTermsControl.setChecked(true);

        console.log("SIGNUP BUTTON ENABLED : " + this.signUpControl.isEnabled());
        this.agreeToTermsControl.setChecked(false);
        console.log("SIGNUP BUTTON ENABLED : " + this.signUpControl.isEnabled());
    }
}