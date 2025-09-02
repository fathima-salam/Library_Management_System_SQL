import { Request, Response } from "express";
import { OrderService } from "../Services/orderService";

export class orderController{
    private service: OrderService;

    constructor() {
        this.service = new OrderService();
    }

    viewOrders = async (req: Request, res: Response) => {
        try {
            const { orders, users, books } = await this.service.getAllOrders();
            res.render("borrowing", { orders, users, books });
        } catch (error) {
            console.error("View orders error:", error);
            res.render("borrowing", { orders: [], users: [], books: [] });
        }
    };

    addOrder = async (req: Request, res: Response) => {
        try {
            await this.service.createOrder(req.body);
            res.redirect("/orders");
        } catch (error) {
            console.error("Add order error:", error);
            res.status(500).json({ error: "Failed to create order" });
        }
    };

    editOrder = async (req: Request, res: Response) => {
        try {
            await this.service.updateOrder(req.body);
            res.redirect("/orders");
        } catch (error) {
            console.error("Edit order error:", error);
            res.status(500).json({ error: "Failed to update order" });
        }
    };
}