import { Order } from "../Models/orders";
export declare class OrderService {
    private repo;
    constructor();
    getAllOrders(): Promise<{
        orders: Order[];
        users: any[];
        books: any[];
    }>;
    createOrder(data: any): Promise<void>;
    updateOrder(data: any): Promise<void>;
}
//# sourceMappingURL=orderService.d.ts.map