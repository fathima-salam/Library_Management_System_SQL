"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const userRepository_1 = require("../Repositories/userRepository");
const users_1 = require("../Models/users");
class UserServices {
    constructor() {
        this.repo = new userRepository_1.UserRepository();
    }
    async getUser() {
        return await this.repo.findUser();
    }
    async addUser(userData) {
        const user = new users_1.User(userData.userId, userData.name, userData.email, parseInt(userData.age), userData.joinedDate ? new Date(userData.joinedDate) : new Date());
        return await this.repo.addUser(user);
    }
    async editUser(userData) {
        const user = new users_1.User(userData.userId, userData.name, userData.email, parseInt(userData.age), userData.joinedDate ? new Date(userData.joinedDate) : new Date());
        return await this.repo.editUser(user);
    }
    async deleteUser(id) {
        return await this.repo.deleteUser((id));
    }
}
exports.UserServices = UserServices;
//# sourceMappingURL=UserServices.js.map