import { promises } from 'dns';
import connection from '../Config/db';
import { Book } from '../Models/book';

export class BookRepository{
    async findAll(): Promise<Book[]>{
        const [Books]: any = await connection.execute("SELECT * FROM books");
        return Books.map((x: any)=>{
            return new Book(x.book_id, x.title, x.author, x.published_year, x.quantity);
        })
    }
    async add(book : Book):Promise<void>{
        await connection.execute('INSERT INTO Books (book_id, title, author, published_year, quantity)  VALUES(?,?,?,?,?)',[book.bookId,book.title, book.author,book.publishedYear,book.quantity])
    }
    async update(book : Book):Promise<void>{
        await connection.execute('UPDATE Books SET title = ? , author=?, published_year=?, quantity=? WHERE book_id = ?',[book.title, book.author, book.publishedYear, book.quantity , book.bookId])
    }
    async delete (id : number): Promise<void>{
        await connection.execute('Delete From Books where book_id = ?',[id])
    }
}