"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const UserServices_1 = require("../Services/UserServices");
class userController {
    constructor() {
        this.viewUsers = async (req, res) => {
            try {
                const users = await this.service.getUser();
                res.render("user", { users });
            }
            catch (error) {
                console.error("Error fetching users:", error);
                res.render("user", { users: [] });
            }
        };
        this.addUser = async (req, res) => {
            try {
                console.log('Request body:', req.body);
                console.log('Request method:', req.method);
                await this.service.addUser(req.body);
                res.redirect("/users");
            }
            catch (error) {
                console.error("Error adding user:", error);
            }
        };
        this.editUser = async (req, res) => {
            try {
                await this.service.editUser({ ...req.body, user_id: req.params.id });
                res.redirect('/users');
            }
            catch (error) {
                console.error('Edit book error:', error);
                res.status(500).json({ error: 'Failed to update book' });
            }
        };
        this.deleteUser = async (req, res) => {
            try {
                const userId = req.params.userId;
                if (!userId) {
                    return res.status(400).send("User ID is required");
                }
                console.log('Delete request - User ID:', userId);
                await this.service.deleteUser(userId);
                console.log('User deleted successfully');
                res.redirect("/users");
            }
            catch (error) {
                console.error("Error deleting user:", error);
                res.status(500).send("Error deleting user");
            }
        };
        this.service = new UserServices_1.UserServices();
    }
}
exports.userController = userController;
//# sourceMappingURL=userController.js.map