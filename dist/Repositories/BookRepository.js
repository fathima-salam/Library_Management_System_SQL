"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepository = void 0;
const db_1 = __importDefault(require("../Config/db"));
const book_1 = require("../Models/book");
class BookRepository {
    async findAll() {
        const [Books] = await db_1.default.execute("SELECT * FROM books");
        return Books.map((x) => {
            return new book_1.Book(x.book_id, x.title, x.author, x.published_year, x.quantity);
        });
    }
    async add(book) {
        await db_1.default.execute('INSERT INTO Books (book_id, title, author, published_year, quantity)  VALUES(?,?,?,?,?)', [book.bookId, book.title, book.author, book.publishedYear, book.quantity]);
    }
    async update(book) {
        await db_1.default.execute('UPDATE Books SET title = ? , author=?, published_year=?, quantity=? WHERE book_id = ?', [book.title, book.author, book.publishedYear, book.quantity, book.bookId]);
    }
    async delete(id) {
        await db_1.default.execute('Delete From Books where book_id = ?', [id]);
    }
}
exports.BookRepository = BookRepository;
//# sourceMappingURL=BookRepository.js.map