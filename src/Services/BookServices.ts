import { deepStrictEqual } from "assert";
import { Book } from "../Models/book";
import { BookRepository } from "../Repositories/BookRepository";

export class BookService {
    private repo : BookRepository;

    constructor(){
        this.repo = new BookRepository();
    }
    async getBooks(): Promise <Book[]> {
        return await this.repo.findAll();
    }
    async addBook(bookData :any): Promise<void>{
        const book = new Book(
            bookData.bookId,
            bookData.title,
            bookData.author,
            Number(bookData.publishedYear),
            Number(bookData.quantity)
        );
        return await this.repo.add(book);
    }
    async editBook(bookData: any): Promise<void>{
        const book = new Book(
            bookData.bookId,
            bookData.title,
            bookData.author,
            bookData.publishedYear,
            bookData.quantity
        )
        return await this.repo.update(book);
    }
    async deleteBook(id : number): Promise<void>{
        return await this.repo.delete(id);
    }
} 