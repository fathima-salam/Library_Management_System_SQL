export class Order {
    constructor(
        public borrow_id: number,
        public user_id: string,
        public book_id: number,
        public borrow_date: Date,
        public return_date?: Date | null,
        public user_name?: string,   
        public book_title?: string,
        public book_author?: string
    ) {}
}