import { Author } from "./Author";
import {AbstractBook} from "./AbstractBook";
// реалізує AbstractBook, містить назву, рік, автора.

export class Book extends AbstractBook{
    private author: Author;

    constructor(title: string, year: number, author: Author) {
        super(title, year);
        this.author = author;
        this.author.addBook(this);
    }

    public getAuthor(): Author {
        return this.author;
    }

    public getDescription(): string {
        return `${this.title} (${this.year}) by ${this.author.getName()}`;
    }
}
