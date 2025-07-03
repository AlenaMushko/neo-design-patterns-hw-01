import { Book } from "./Book";
import { EBook } from "./EBook";
// надає методи для:
//     додавання книг, авторів, копій, читачів
// отримання вільних копій
// пошуку книг за автором
export class Library {
    constructor() {
        this.books = [];
        this.copies = [];
        this.authors = [];
        this.readers = [];
    }
    addBook(book) {
        if (!this.books.includes(book)) {
            this.books.push(book);
        }
    }
    addAuthor(author) {
        if (!this.authors.includes(author)) {
            this.authors.push(author);
        }
    }
    addCopy(copy) {
        if (!this.copies.includes(copy)) {
            this.copies.push(copy);
        }
    }
    addReader(reader) {
        if (!this.readers.includes(reader)) {
            this.readers.push(reader);
        }
    }
    findBooksByAuthor(authorName) {
        return this.books.filter(book => (book instanceof Book || book instanceof EBook) &&
            book.getAuthor().getName() === authorName);
    }
}
