"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const orderRepository_1 = require("../Repositories/orderRepository");
const orders_1 = require("../Models/orders");
class OrderService {
    constructor() {
        this.repo = new orderRepository_1.OrderRepository();
    }
    async getAllOrders() {
        const orders = await this.repo.findAll();
        const users = await this.repo.findUsers();
        const books = await this.repo.findBooksAvailable();
        return { orders, users, books };
    }
    async createOrder(data) {
        const order = new orders_1.Order(0, data.userId, parseInt(data.bookId), new Date(data.borrowDate));
        await this.repo.add(order);
    }
    async updateOrder(data) {
        const order = new orders_1.Order(parseInt(data.borrowId), data.userId, parseInt(data.bookId), new Date(data.borrowDate), data.returnDate && data.returnDate.trim() !== "" ? new Date(data.returnDate) : null);
        await this.repo.update(order);
    }
}
exports.OrderService = OrderService;
//# sourceMappingURL=orderService.js.map