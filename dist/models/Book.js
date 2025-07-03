import { AbstractBook } from "./AbstractBook";
// реалізує AbstractBook, містить назву, рік, автора.
export class Book extends AbstractBook {
    constructor(title, year, author) {
        super(title, year);
        this.author = author;
        this.author.addBook(this);
    }
    getAuthor() {
        return this.author;
    }
    getDescription() {
        return `${this.title} (${this.year}) by ${this.author.getName()}`;
    }
}
