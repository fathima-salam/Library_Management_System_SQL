"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const orderService_1 = require("../Services/orderService");
class orderController {
    constructor() {
        this.viewOrders = async (req, res) => {
            try {
                const { orders, users, books } = await this.service.getAllOrders();
                res.render("borrowing", { orders, users, books });
            }
            catch (error) {
                console.error("View orders error:", error);
                res.render("borrowing", { orders: [], users: [], books: [] });
            }
        };
        this.addOrder = async (req, res) => {
            try {
                await this.service.createOrder(req.body);
                res.redirect("/orders");
            }
            catch (error) {
                console.error("Add order error:", error);
                res.status(500).json({ error: "Failed to create order" });
            }
        };
        this.editOrder = async (req, res) => {
            try {
                await this.service.updateOrder(req.body);
                res.redirect("/orders");
            }
            catch (error) {
                console.error("Edit order error:", error);
                res.status(500).json({ error: "Failed to update order" });
            }
        };
        this.service = new orderService_1.OrderService();
    }
}
exports.orderController = orderController;
//# sourceMappingURL=orderController.js.map