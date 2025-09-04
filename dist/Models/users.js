"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(user_id, name, email, age, joined_date) {
        this.user_id = user_id;
        this.name = name;
        this.email = email;
        this.age = age;
        this.joined_date = joined_date;
    }
    isAdult() {
        return this.age >= 18;
    }
}
exports.User = User;
//# sourceMappingURL=users.js.map