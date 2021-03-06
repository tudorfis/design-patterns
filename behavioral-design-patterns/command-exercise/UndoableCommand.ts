import { Command } from "./Command";

export interface UndoableCommand extends Command {
    undo(): void
}