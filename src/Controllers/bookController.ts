import {Request ,Response} from "express";
import { BookService } from "../Services/BookServices";
import { assert } from "console";

export class bookController{
    private service : BookService;

    constructor(){
        this.service = new BookService();
    }

    viewbook = async (req: Request,res : Response)=>{
        try {
        const books = await this.service.getBooks();
        res.render('books', { books: books });
    } catch (error) {
        res.render('books', { books: [] });
    }
    }
    addbook =async (req: Request,res : Response)=>{
        try {
            await this.service.addBook(req.body);
            res.redirect('/books');

        } catch (error) {
            console.error(error);
            res.send("Error adding book");
        }
    }
    editbook = async (req: Request, res: Response) => {
    try {
        await this.service.editBook({...req.body,bookId : req.params.id});
        res.redirect('/books');
    } catch (error) {
        console.error('Edit book error:', error);
        res.status(500).json({ error: 'Failed to update book' });
    }
}
    deletebook =async (req: Request,res : Response)=>{
        try {
            await this.service.deleteBook(Number(req.params.id))
            res.redirect('/books');
        } catch (error) {
            console.error('Delete book error:', error);
            res.status(500).json({ error: 'Failed to update book' });
        }
    }
}