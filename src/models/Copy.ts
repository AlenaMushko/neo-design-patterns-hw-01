// містить посилання на книгу та прапорець isAvailable.

import {AbstractBook} from "./AbstractBook";

export class Copy {
    private book: AbstractBook;
    private isAvailable: boolean = true;

    constructor(book: AbstractBook) {
        this.book = book;
    }

    public getBook(): AbstractBook {
        return this.book;
    }

    public isCopyAvailable(): boolean {
        return this.isAvailable;
    }

    public borrow(): boolean {
        if (this.isAvailable) {
            this.isAvailable = false;
            return true;
        } else {
            throw new Error("This copy is not available for borrowing.");
        }
    }

    public returnBook(): void {
        this.isAvailable = true;
    }
}
