// окремий сервіс для позичання книги читачу borrow(reader: Reader, copy: Copy).
export class BorrowService {
    borrow(reader, copy) {
        if (copy.isCopyAvailable()) {
            copy.borrow();
            reader.borrowCopy(copy);
            return true;
        }
        return false;
    }
    returnBook(reader, copy) {
        copy.returnBook();
        reader.returnCopy(copy);
    }
}
