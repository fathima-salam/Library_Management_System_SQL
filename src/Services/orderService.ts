import { OrderRepository } from "../Repositories/orderRepository";
import { Order } from "../Models/orders";

export class OrderService {
    private repo: OrderRepository;

    constructor() {
        this.repo = new OrderRepository();
    }

    async getAllOrders(): Promise<{ orders: Order[]; users: any[]; books: any[] }> {
        const orders = await this.repo.findAll();
        const users = await this.repo.findUsers();
        const books = await this.repo.findBooksAvailable();
        return { orders, users, books };
    }

    async createOrder(data: any): Promise<void> {
        const order = new Order(
            0, 
            data.userId,
            parseInt(data.bookId),
            new Date(data.borrowDate)
        );
        await this.repo.add(order);
    }

    async updateOrder(data: any): Promise<void> {
        const order = new Order(
            parseInt(data.borrowId),
            data.userId,
            parseInt(data.bookId),
            new Date(data.borrowDate),
            data.returnDate && data.returnDate.trim() !== "" ? new Date(data.returnDate) : null
        );
        await this.repo.update(order);
    }
}