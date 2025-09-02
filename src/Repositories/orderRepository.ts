import connection from "../Config/db";
import { Order } from "../Models/orders";

export class OrderRepository {
    async findAll(): Promise<Order[]> {
        const [orders]: any = await connection.execute(`
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
        return orders.map((x: any) =>
            new Order(
                x.borrow_id,
                x.user_id,
                x.book_id,
                x.borrow_date,
                x.return_date,
                x.user_name,
                x.book_title,
                x.book_author
            )
        );
    }

    async add(order: Order): Promise<void> {
        await connection.execute(
            "INSERT INTO Borrowings (user_id, book_id, borrow_date) VALUES (?, ?, ?)",
            [order.user_id, order.book_id, order.borrow_date]
        );
        await connection.execute(
            "UPDATE Books SET quantity = quantity - 1 WHERE book_id = ?",
            [order.book_id]
        );
    }

    async update(order: Order): Promise<void> {
        await connection.execute(
            `UPDATE Borrowings 
             SET user_id = ?, book_id = ?, borrow_date = ?, return_date = ? 
             WHERE borrow_id = ?`,
            [
                order.user_id,
                order.book_id,
                order.borrow_date,
                order.return_date ?? null,
                order.borrow_id
            ]
        );
    }

    async findUsers(): Promise<any[]> {
        const [rows]: any = await connection.execute(
            "SELECT user_id, name FROM Users ORDER BY name"
        );
        return rows;
    }

    async findBooksAvailable(): Promise<any[]> {
        const [rows]: any = await connection.execute(
            "SELECT book_id, title, author, quantity FROM Books WHERE quantity > 0 ORDER BY title"
        );
        return rows;
    }
}