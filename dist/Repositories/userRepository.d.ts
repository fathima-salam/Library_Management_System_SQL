import { User } from '../Models/users';
export declare class UserRepository {
    findUser(): Promise<User[]>;
    addUser(user: User): Promise<void>;
    editUser(user: User): Promise<void>;
    deleteUser(id: string): Promise<void>;
}
//# sourceMappingURL=userRepository.d.ts.map