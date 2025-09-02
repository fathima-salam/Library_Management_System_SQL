export class Book{
    constructor(
        public bookId : number,
        public title : string,
        public author : string,
        public publishedYear : number,
        public quantity :  number
    ) {}

    isAvailable() : boolean{
        return this.quantity > 0;
    }
    borrow() : void {
        if(this.quantity > 0) this.quantity--;
    }
    returnBook() : void{
        this.quantity++;
    }
}