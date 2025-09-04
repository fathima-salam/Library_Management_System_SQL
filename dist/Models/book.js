"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(bookId, title, author, publishedYear, quantity) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
        this.quantity = quantity;
    }
    isAvailable() {
        return this.quantity > 0;
    }
    borrow() {
        if (this.quantity > 0)
            this.quantity--;
    }
    returnBook() {
        this.quantity++;
    }
}
exports.Book = Book;
//# sourceMappingURL=book.js.map