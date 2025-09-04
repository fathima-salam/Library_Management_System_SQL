import { Book } from '../Models/book';
export declare class BookRepository {
    findAll(): Promise<Book[]>;
    add(book: Book): Promise<void>;
    update(book: Book): Promise<void>;
    delete(id: number): Promise<void>;
}
//# sourceMappingURL=BookRepository.d.ts.map