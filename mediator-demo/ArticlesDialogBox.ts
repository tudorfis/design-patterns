import { DialogBox } from "./DialogBox";
import { UIControl } from "./UIControl";
import { ListBox } from "./ListBox";
import { TextBox } from "./TextBox";
import { Button } from "./Button";

export class ArticlesDialogBox implements DialogBox {
    private articlesListBox = new ListBox(this);
    private titleTextBox = new TextBox(this);
    private saveButton = new Button(this);

    simluateUserInteraction(): void {
        this.articlesListBox.setSelection("Article 1");
        this.titleTextBox.setContent("");
        this.titleTextBox.setContent("Article 2");

        console.log("TextBox " + this.titleTextBox.getContent());
        console.log("Button " + this.saveButton.isEnabled());
    }

    changed(control: UIControl): void {
        if (control === this.articlesListBox) 
            this.articleSelected();
        else if (control === this.titleTextBox)
            this.titleChanged();
    }

    private articleSelected(): void {
        this.titleTextBox.setContent(this.articlesListBox.getSelection());
        this.saveButton.setEnabled(true);
    }

    private titleChanged(): void {
        const content = this.titleTextBox.getContent();
        const isEmpty =  (content === null || content === '');
        this.saveButton.setEnabled(!isEmpty);
    }
}