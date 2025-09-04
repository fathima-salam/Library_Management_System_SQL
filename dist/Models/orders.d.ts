export declare class Order {
    borrow_id: number;
    user_id: string;
    book_id: number;
    borrow_date: Date;
    return_date?: (Date | null) | undefined;
    user_name?: string | undefined;
    book_title?: string | undefined;
    book_author?: string | undefined;
    constructor(borrow_id: number, user_id: string, book_id: number, borrow_date: Date, return_date?: (Date | null) | undefined, user_name?: string | undefined, book_title?: string | undefined, book_author?: string | undefined);
}
//# sourceMappingURL=orders.d.ts.map