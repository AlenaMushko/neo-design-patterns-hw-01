// зберігає ім’я та список написаних книг.
export class Author {
    constructor(name) {
        this.books = [];
        this.name = name;
    }
    getName() {
        return this.name;
    }
    addBook(book) {
        if (!this.books.includes(book)) {
            this.books.push(book);
        }
    }
}
