"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const book_1 = require("../Models/book");
const BookRepository_1 = require("../Repositories/BookRepository");
class BookService {
    constructor() {
        this.repo = new BookRepository_1.BookRepository();
    }
    async getBooks() {
        return await this.repo.findAll();
    }
    async addBook(bookData) {
        const book = new book_1.Book(bookData.bookId, bookData.title, bookData.author, Number(bookData.publishedYear), Number(bookData.quantity));
        return await this.repo.add(book);
    }
    async editBook(bookData) {
        const book = new book_1.Book(bookData.bookId, bookData.title, bookData.author, bookData.publishedYear, bookData.quantity);
        return await this.repo.update(book);
    }
    async deleteBook(id) {
        return await this.repo.delete(id);
    }
}
exports.BookService = BookService;
//# sourceMappingURL=BookServices.js.map