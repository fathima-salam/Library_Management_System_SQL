"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
class loginController {
    constructor() {
        this.login = async (req, res) => {
            res.render('login', { errors: {}, msg: '' });
        };
        this.postlogin = async (req, res) => {
            try {
                const { usernames, password_entered } = req.body;
                const username = "admin@123";
                const password = "admin@1234";
                const errors = {};
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
            }
            catch (error) {
                console.error("Login error:", error);
                return res.render("login", { errors: {}, msg: "Something went wrong" });
            }
        };
    }
}
exports.loginController = loginController;
//# sourceMappingURL=loginController.js.map