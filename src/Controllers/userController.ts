import { Request, Response } from "express";
import { UserServices } from "../Services/UserServices";

export class userController {
    private service: UserServices;

    constructor() {
        this.service = new UserServices();
    }

    viewUsers = async (req: Request, res: Response) => {
        try {
            const users = await this.service.getUser();
            res.render("user", { users });
        } catch (error) {
            console.error("Error fetching users:", error);
            res.render("user", { users: [] });
        }
    };

    addUser = async (req: Request, res: Response) => {
    try {
        console.log('Request body:', req.body);
        console.log('Request method:', req.method);
        await this.service.addUser(req.body);
        res.redirect("/users");
    } catch (error) {
        console.error("Error adding user:", error);
    }
};

   editUser = async (req: Request, res: Response) => {
    try {
        await this.service.editUser({...req.body,user_id : req.params.id});
        res.redirect('/users');
    } catch (error) {
        console.error('Edit book error:', error);
        res.status(500).json({ error: 'Failed to update book' });
    }
}

    deleteUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        if (!userId) {
            return res.status(400).send("User ID is required");
        }
        
        console.log('Delete request - User ID:', userId);
        await this.service.deleteUser(userId);
        console.log('User deleted successfully');
        res.redirect("/users");
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).send("Error deleting user");
    }
};
}