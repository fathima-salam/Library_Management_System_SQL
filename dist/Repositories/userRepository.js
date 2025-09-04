"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const users_1 = require("../Models/users");
const db_1 = __importDefault(require("../Config/db"));
class UserRepository {
    async findUser() {
        const [rows] = await db_1.default.execute("SELECT * FROM Users");
        return rows.map((x) => new users_1.User(x.user_id, x.name, x.email, x.age, x.joined_date));
    }
    async addUser(user) {
        await db_1.default.execute("INSERT INTO Users (user_id, name, email, age, joined_date) VALUES (?, ?, ?, ?, ?)", [user.user_id, user.name, user.email, user.age, user.joined_date]);
    }
    async editUser(user) {
        await db_1.default.execute("UPDATE Users SET name=?, email=?, age=?, joined_date=? WHERE user_id=?", [user.name, user.email, user.age, user.joined_date, user.user_id]);
    }
    async deleteUser(id) {
        await db_1.default.execute("DELETE FROM Users WHERE user_id=?", [id]);
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=userRepository.js.map