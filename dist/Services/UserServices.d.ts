import { User } from "../Models/users";
export declare class UserServices {
    private repo;
    constructor();
    getUser(): Promise<User[]>;
    addUser(userData: any): Promise<void>;
    editUser(userData: any): Promise<void>;
    deleteUser(id: string): Promise<void>;
}
//# sourceMappingURL=UserServices.d.ts.map