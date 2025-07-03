import { Copy } from "./Copy";
// має унікальний id, ім’я та список позичених копій.

export class Reader {
    private id: string;
    private name: string;
    private borrowedCopies: Copy[] = [];

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    public borrowCopy(copy: Copy): void {
       this.borrowedCopies.push(copy);
    }

    public returnCopy(copy: Copy): void {
        const index = this.borrowedCopies.indexOf(copy);
        if (index !== -1) {
            copy.returnBook();
            this.borrowedCopies.splice(index, 1);
        } else {
            throw new Error("This copy was not borrowed by the reader.");
        }
    }
}
