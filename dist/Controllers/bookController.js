"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookController = void 0;
const BookServices_1 = require("../Services/BookServices");
class bookController {
    constructor() {
        this.viewbook = async (req, res) => {
            try {
                const books = await this.service.getBooks();
                res.render('books', { books: books });
            }
            catch (error) {
                res.render('books', { books: [] });
            }
        };
        this.addbook = async (req, res) => {
            try {
                await this.service.addBook(req.body);
                res.redirect('/books');
            }
            catch (error) {
                console.error(error);
                res.send("Error adding book");
            }
        };
        this.editbook = async (req, res) => {
            try {
                await this.service.editBook({ ...req.body, bookId: req.params.id });
                res.redirect('/books');
            }
            catch (error) {
                console.error('Edit book error:', error);
                res.status(500).json({ error: 'Failed to update book' });
            }
        };
        this.deletebook = async (req, res) => {
            try {
                await this.service.deleteBook(Number(req.params.id));
                res.redirect('/books');
            }
            catch (error) {
                console.error('Delete book error:', error);
                res.status(500).json({ error: 'Failed to update book' });
            }
        };
        this.service = new BookServices_1.BookService();
    }
}
exports.bookController = bookController;
//# sourceMappingURL=bookController.js.map