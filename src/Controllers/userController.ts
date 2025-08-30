import {Request ,Response} from "express";
import connection from "../Config/db";

export class userController{
    viewUsers =async (req: Request,res : Response)=>{
        try {
            const [users] = await connection.execute('SELECT * FROM users');
            res.render('user', { users: users });
        } catch (error) {
            res.render('user', { users: [] });
        }
    }
    addUser = async (req: Request, res: Response) => {
    try {
        const { userId, name, email, age } = req.body;
        
        // Validation
        if (!userId || !name || !email || !age) {
            return res.status(400).send("All fields are required");
        }
        
        // Insert without joined_date - let database set it automatically
        const query = `INSERT INTO users (user_id, name, email, age) VALUES (?, ?, ?, ?)`;
        await connection.execute(query, [userId, name, email, parseInt(age)]);
        
        res.redirect('/users');
    } catch (error) {
        console.error('Error adding user:', error);
        
        res.status(500).send("Error adding user");
    }
};
    editUser = async (req: Request, res: Response) => {
    try {
        const { originalUserId } = req.body;
        const { name, email, age, joinedDate } = req.body;
        
        // Validation
        if (!name || !email || !age) {
            return res.status(400).send("Name, email, and age are required");
        }
        
        // Update user (including joined_date from edit form)
        const query = `UPDATE users SET name = ?, email = ?, age = ?, joined_date = ? WHERE user_id = ?`;
        const [result] = await connection.execute(query, [name, email, parseInt(age), joinedDate, originalUserId]);
        
        res.redirect('/users');
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).send("Error updating user");
    }
};
    deleteUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId || req.params.id;
        
        if (!userId) {
            return res.status(400).send("User ID is required");
        }
        
        const query = `DELETE FROM users WHERE user_id = ?`;
        const [result] = await connection.execute(query, [userId]);
        
        
        res.redirect('/users');
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send("Error deleting user");
    }
};
}