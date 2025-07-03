import { Reader } from "../models/Reader";
import { Copy } from "../models/Copy";

// окремий сервіс для позичання книги читачу borrow(reader: Reader, copy: Copy).

export class BorrowService {
    public borrow(reader: Reader, copy: Copy): boolean {
        if (copy.isCopyAvailable()) {
        copy.borrow();
        reader.borrowCopy(copy);
        return true;
        }
        return false;
    }

    public returnBook(reader: Reader, copy: Copy): void {
        copy.returnBook();
        reader.returnCopy(copy);
    }
}
