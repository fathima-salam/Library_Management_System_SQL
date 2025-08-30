import {Request ,Response} from "express";
import connection from "../Config/db";
import { assert } from "console";

export class bookController{
    viewbook = async (req: Request,res : Response)=>{
        try {
        const [books] = await connection.execute('SELECT * FROM books');
        res.render('books', { books: books });
    } catch (error) {
        res.render('books', { books: [] });
    }
    }
    addbook =async (req: Request,res : Response)=>{
        try {
            const { bookId , title, author, publishedYear, quantity } = req.body;

            const query = `
                INSERT INTO Books (book_id, title, author, published_year, quantity)
                VALUES (?, ?, ?, ?, ?)
            `;

            await connection.execute(query, [bookId, title, author, publishedYear, quantity]);
            res.redirect('/books');

        } catch (error) {
            console.error(error);
            res.send("Error adding book");
        }
    }
    editbook = async (req: Request, res: Response) => {
    try {
        const book_id = req.params.id;
        const { title, author, publishedYear, quantity, originalBookId } = req.body;
        
        // Debug: Log the received data
        console.log('Received data:', { title, author, publishedYear, quantity, originalBookId, book_id });
        
        // Validate required fields
        if (!title || !author || !publishedYear || quantity === undefined) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        
        const actualBookId = originalBookId || book_id;
        
        const query = `
            UPDATE Books
            SET title = ?, author = ?, published_year = ?, quantity = ?
            WHERE book_id = ?
        `;
        
        await connection.execute(query, [title, author, publishedYear, parseInt(quantity), actualBookId]);
        res.redirect('/books');
    } catch (error) {
        console.error('Edit book error:', error);
        res.status(500).json({ error: 'Failed to update book' });
    }
}
    deletebook =async (req: Request,res : Response)=>{
        try {
            let book_id = req.params.id;
            if(book_id){
                let query = `DELETE FROM Books WHERE book_id = ?`;
                await connection.execute(query,[book_id])
            };
            res.redirect('/books');
        } catch (error) {
            console.error('Delete book error:', error);
            res.status(500).json({ error: 'Failed to update book' });
        }
    }
}