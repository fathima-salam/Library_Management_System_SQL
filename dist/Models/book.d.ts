export declare class Book {
    bookId: number;
    title: string;
    author: string;
    publishedYear: number;
    quantity: number;
    constructor(bookId: number, title: string, author: string, publishedYear: number, quantity: number);
    isAvailable(): boolean;
    borrow(): void;
    returnBook(): void;
}
//# sourceMappingURL=book.d.ts.map