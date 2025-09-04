"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(borrow_id, user_id, book_id, borrow_date, return_date, user_name, book_title, book_author) {
        this.borrow_id = borrow_id;
        this.user_id = user_id;
        this.book_id = book_id;
        this.borrow_date = borrow_date;
        this.return_date = return_date;
        this.user_name = user_name;
        this.book_title = book_title;
        this.book_author = book_author;
    }
}
exports.Order = Order;
//# sourceMappingURL=orders.js.map