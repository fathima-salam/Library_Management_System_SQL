import { UserRepository } from "../Repositories/userRepository";
import { User } from "../Models/users";

export class UserServices {
    private repo: UserRepository;

    constructor() {
        this.repo = new UserRepository();
    }

    async getUser(): Promise<User[]> {
        return await this.repo.findUser();
    }

    async addUser(userData: any): Promise<void> {
        const user = new User(
            userData.userId,   
            userData.name,
            userData.email,
            parseInt(userData.age),
            userData.joinedDate ? new Date(userData.joinedDate) : new Date()
        );
        return await this.repo.addUser(user);
    }

    async editUser(userData: any): Promise<void> {
        const user = new User(
            userData.userId,
            userData.name,
            userData.email,
            parseInt(userData.age), 
            userData.joinedDate ? new Date(userData.joinedDate) : new Date()
        );
        return await this.repo.editUser(user);
    }

    async deleteUser(id: string): Promise<void> {
        return await this.repo.deleteUser((id));
    }
}