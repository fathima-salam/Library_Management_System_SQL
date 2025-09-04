import { Order } from "../Models/orders";
export declare class OrderRepository {
    findAll(): Promise<Order[]>;
    add(order: Order): Promise<void>;
    update(order: Order): Promise<void>;
    findUsers(): Promise<any[]>;
    findBooksAvailable(): Promise<any[]>;
}
//# sourceMappingURL=orderRepository.d.ts.map