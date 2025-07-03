// зберігає ім’я та список написаних книг.

import {AbstractBook} from "./AbstractBook";

export class Author {
    private name: string;
    private books: AbstractBook[] = [];

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public addBook(book: AbstractBook): void {
        if (!this.books.includes(book)) {
        this.books.push(book);
        }
    }
}
