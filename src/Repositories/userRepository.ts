import { User } from '../Models/users';
import connection from '../Config/db';

export class UserRepository {
    async findUser(): Promise<User[]> {
        const [rows]: any = await connection.execute("SELECT * FROM Users");
        return rows.map(
            (x: any) =>
                new User(x.user_id, x.name, x.email, x.age, x.joined_date)
        );
    }

    async addUser(user: User): Promise<void> {
        await connection.execute(
            "INSERT INTO Users (user_id, name, email, age, joined_date) VALUES (?, ?, ?, ?, ?)",
            [user.user_id, user.name, user.email, user.age, user.joined_date]
        );
    }

    async editUser(user: User): Promise<void> {
        await connection.execute(
            "UPDATE Users SET name=?, email=?, age=?, joined_date=? WHERE user_id=?",
            [user.name, user.email, user.age, user.joined_date, user.user_id]
        );
    }
    async deleteUser(id: string): Promise<void> {
        await connection.execute("DELETE FROM Users WHERE user_id=?", [id]);
    }
}