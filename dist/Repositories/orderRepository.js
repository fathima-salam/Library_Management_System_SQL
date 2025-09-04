"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
const db_1 = __importDefault(require("../Config/db"));
const orders_1 = require("../Models/orders");
class OrderRepository {
    async findAll() {
        const [orders] = await db_1.default.execute(`
            SELECT 
                b.borrow_id,
                b.user_id,
                b.book_id,
                b.borrow_date,
                b.return_date,
                u.name as user_name,
                bk.title as book_title,
                bk.author as book_author
            FROM Borrowings b
            LEFT JOIN Users u ON b.user_id = u.user_id
            LEFT JOIN Books bk ON b.book_id = bk.book_id
            ORDER BY b.borrow_date DESC
        `);
        return orders.map((x) => new orders_1.Order(x.borrow_id, x.user_id, x.book_id, x.borrow_date, x.return_date, x.user_name, x.book_title, x.book_author));
    }
    async add(order) {
        await db_1.default.execute("INSERT INTO Borrowings (user_id, book_id, borrow_date) VALUES (?, ?, ?)", [order.user_id, order.book_id, order.borrow_date]);
        await db_1.default.execute("UPDATE Books SET quantity = quantity - 1 WHERE book_id = ?", [order.book_id]);
    }
    async update(order) {
        await db_1.default.execute(`UPDATE Borrowings 
             SET user_id = ?, book_id = ?, borrow_date = ?, return_date = ? 
             WHERE borrow_id = ?`, [
            order.user_id,
            order.book_id,
            order.borrow_date,
            order.return_date ?? null,
            order.borrow_id
        ]);
    }
    async findUsers() {
        const [rows] = await db_1.default.execute("SELECT user_id, name FROM Users ORDER BY name");
        return rows;
    }
    async findBooksAvailable() {
        const [rows] = await db_1.default.execute("SELECT book_id, title, author, quantity FROM Books WHERE quantity > 0 ORDER BY title");
        return rows;
    }
}
exports.OrderRepository = OrderRepository;
//# sourceMappingURL=orderRepository.js.map