import { ListBox } from "./ListBox";
import { TextBox } from "./TextBox";
import { Button } from "./Button";
import { EventHandler } from "./EventHandler";

export class ArticlesDialogBox {
    private articlesListBox = new ListBox();
    private titleTextBox = new TextBox();
    private saveButton = new Button();

    constructor() {
        this.articlesListBox.addEventHandler((<EventHandler>{
            update: () => {
                this.titleTextBox.setContent(this.articlesListBox.getSelection());
                this.saveButton.setEnabled(true);
            }
        }));

        this.articlesListBox.addEventHandler(<EventHandler>{
            update: () => { console.log('articlesListBox CHANGED'); }
        });

        this.titleTextBox.addEventHandler(<EventHandler>{
            update: () => {
                const content = this.titleTextBox.getContent();
                const isEmpty =  (content === null || content === '');
                this.saveButton.setEnabled(!isEmpty);
            }
        });
    }

    simluateUserInteraction(): void {
        this.articlesListBox.setSelection("Article 1");
        this.titleTextBox.setContent("");
        this.titleTextBox.setContent("Article 2");

        console.log("ListBox " + this.articlesListBox.getSelection());
        console.log("TextBox " + this.titleTextBox.getContent());
        console.log("Button " + this.saveButton.isEnabled());

        this.articlesListBox.setSelection("Article 3");
    }

}