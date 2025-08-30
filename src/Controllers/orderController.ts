import {Request ,Response} from "express";
import connection from "../Config/db";
import { assert } from "console";

export class orderController {
    viewOrders = async (req: Request, res: Response) => {
        try {
            const [orders] = await connection.execute(`
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

            const [users] = await connection.execute('SELECT user_id, name FROM Users ORDER BY name');
            
            const [books] = await connection.execute('SELECT book_id, title, author, quantity FROM Books WHERE quantity > 0 ORDER BY title');

            res.render('borrowing', { 
                orders: orders, 
                users: users, 
                books: books 
            });
        } catch (error) {
            console.error('View orders error:', error);
            res.render('borrowing', { 
                orders: [], 
                users: [], 
                books: [] 
            });
        }
    }

    addOrder = async (req: Request, res: Response) => {
        try {
            const { userId, bookId, borrowDate } = req.body;
                const query = `
                    INSERT INTO Borrowings (user_id, book_id, borrow_date)
                    VALUES (?, ?, ?)
                `;
                await connection.execute(query, [userId, bookId, borrowDate]);

                await connection.execute(
                    'UPDATE Books SET quantity = quantity - 1 WHERE book_id = ?',
                    [bookId]
                );
                res.redirect('/orders');

        } catch (error) {
            console.error('Add order error:', error);
            console.log(req.body);
            res.status(500).json({ error: 'Failed to create order' });
        }
    }

    // Edit existing order
    editOrder = async (req: Request, res: Response) => {
       try {
    const { borrowId, userId, bookId, borrowDate, returnDate } = req.body;

    // Convert empty returnDate to null
    const safeReturnDate = returnDate && returnDate.trim() !== "" ? returnDate : null;

    const query = `
        UPDATE Borrowings
        SET user_id = ?, book_id = ?, borrow_date = ?, return_date = ?
        WHERE borrow_id = ?
    `;

    await connection.execute(query, [
        userId,
        bookId,
        borrowDate,
        safeReturnDate,  // <- null if empty
        borrowId
    ]);

    res.redirect('/orders');
} catch (error) {
    console.error('Edit order error:', error);
    res.status(500).json({ error: 'Failed to update order' });
}
    }

    // // Return book (mark as returned)
    // returnBook = async (req: Request, res: Response) => {
    //     try {
    //         const borrowId = req.params.id;
    //         const returnDate = new Date().toISOString().split('T')[0]; // Today's date

    //         // Get current order details
    //         const [currentOrder]: any = await connection.execute(
    //             'SELECT book_id, return_date FROM Borrowings WHERE borrow_id = ?',
    //             [borrowId]
    //         );

    //         if (!currentOrder || currentOrder.length === 0) {
    //             return res.status(404).json({ error: 'Order not found' });
    //         }

    //         if (currentOrder[0].return_date) {
    //             return res.status(400).json({ error: 'Book already returned' });
    //         }

    //         const bookId = currentOrder[0].book_id;

    //         // Start transaction
    //         await connection.beginTransaction();

    //         try {
    //             // Update return date
    //             await connection.execute(
    //                 'UPDATE Borrowings SET return_date = ? WHERE borrow_id = ?',
    //                 [returnDate, borrowId]
    //             );

    //             // Increase book quantity
    //             await connection.execute(
    //                 'UPDATE Books SET quantity = quantity + 1 WHERE book_id = ?',
    //                 [bookId]
    //             );

    //             // Commit transaction
    //             await connection.commit();
    //             res.redirect('/orders');

    //         } catch (error) {
    //             // Rollback transaction on error
    //             await connection.rollback();
    //             throw error;
    //         }

    //     } catch (error) {
    //         console.error('Return book error:', error);
    //         res.status(500).json({ error: 'Failed to return book' });
    //     }
    // }
}