// реалізує AbstractBook, додає поле url.
import { AbstractBook } from "./AbstractBook";
export class EBook extends AbstractBook {
    constructor(title, year, author, url) {
        super(title, year);
        this.author = author;
        this.url = url;
        this.author.addBook(this);
    }
    getAuthor() {
        return this.author;
    }
    getUrl() {
        return this.url;
    }
    getDescription() {
        return `${this.title} (${this.year}) by ${this.author.getName()}, URL: ${this.url}`;
    }
}
