// містить посилання на книгу та прапорець isAvailable.
export class Copy {
    constructor(book) {
        this.isAvailable = true;
        this.book = book;
    }
    getBook() {
        return this.book;
    }
    isCopyAvailable() {
        return this.isAvailable;
    }
    borrow() {
        if (this.isAvailable) {
            this.isAvailable = false;
            return true;
        }
        else {
            throw new Error("This copy is not available for borrowing.");
        }
    }
    returnBook() {
        this.isAvailable = true;
    }
}
