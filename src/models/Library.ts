import { Author } from "./Author";
import { AbstractBook } from "./AbstractBook";
import { Copy } from "./Copy";
import { Reader } from "./Reader";
import { Book } from "./Book";
import { EBook } from "./EBook";

// надає методи для:
//     додавання книг, авторів, копій, читачів
// отримання вільних копій
// пошуку книг за автором

export class Library {
    private books: AbstractBook[] = [];
    private copies: Copy[] = [];
    private authors: Author[] = [];
    private readers: Reader[] = [];

    public addBook(book: AbstractBook): void {
        if (!this.books.includes(book)) {
            this.books.push(book);
        }
    }

    public addAuthor(author: Author): void {
        if (!this.authors.includes(author)) {
            this.authors.push(author);
        }
    }

    public addCopy(copy: Copy): void {
        if (!this.copies.includes(copy)) {
            this.copies.push(copy);
        }
    }

    public addReader(reader: Reader): void {
        if (!this.readers.includes(reader)) {
            this.readers.push(reader);
        }
    }

    public findBooksByAuthor(authorName: string): AbstractBook[] {
        return this.books.filter(book =>
            (book instanceof Book || book instanceof EBook) &&
            book.getAuthor().getName() === authorName
        );
    }
}
