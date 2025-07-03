// має унікальний id, ім’я та список позичених копій.
export class Reader {
    constructor(id, name) {
        this.borrowedCopies = [];
        this.id = id;
        this.name = name;
    }
    borrowCopy(copy) {
        this.borrowedCopies.push(copy);
    }
    returnCopy(copy) {
        const index = this.borrowedCopies.indexOf(copy);
        if (index !== -1) {
            copy.returnBook();
            this.borrowedCopies.splice(index, 1);
        }
        else {
            throw new Error("This copy was not borrowed by the reader.");
        }
    }
}
