import { Book } from "../Models/book";
export declare class BookService {
    private repo;
    constructor();
    getBooks(): Promise<Book[]>;
    addBook(bookData: any): Promise<void>;
    editBook(bookData: any): Promise<void>;
    deleteBook(id: number): Promise<void>;
}
//# sourceMappingURL=BookServices.d.ts.map