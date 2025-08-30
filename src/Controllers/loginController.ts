import { Request, Response } from "express";
import { ResponseType } from "undici-types";


export class loginController {
    login = async (req: Request, res: Response) => {
        res.render('login', { errors: {}, msg: '' });
    }

    postlogin = async (req: Request, res: Response) => {
        try {
            const { usernames, password_entered } = req.body;

            const username: string = "admin@123";
            const password: string = "admin@1234";

            const errors: any = {};

            if (!usernames || usernames.trim() === '') {
                errors.username = "Username is required";
            }
            if (!password_entered || password_entered.trim() === '') {
                errors.password = "Password is required";
            }

            if (Object.keys(errors).length > 0) {
                return res.render("login", { errors, msg: '' });
            }

            if (usernames !== username || password_entered !== password) {
                return res.render("login", { errors: {}, msg: "Invalid Credentials" });
            }

            return res.render("home", { msg: "Welcome!" });

        } catch (error) {
            console.error("Login error:", error);
            return res.render("login", { errors: {}, msg: "Something went wrong" });
        }
    };
}
 

