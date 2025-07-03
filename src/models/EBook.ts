// реалізує AbstractBook, додає поле url.

import {AbstractBook} from "./AbstractBook";
import {Author} from "./Author";

export class EBook extends AbstractBook {
    private author: Author;
    private url: string;

    constructor(title: string, year: number, author: Author, url: string) {
        super(title, year);
        this.author = author;
        this.url = url;
        this.author.addBook(this);
    }

    public getAuthor(): Author {
        return this.author;
    }

    public getUrl(): string {
        return this.url;
    }

    public getDescription(): string {
        return `${this.title} (${this.year}) by ${this.author.getName()}, URL: ${this.url}`;
    }

}
