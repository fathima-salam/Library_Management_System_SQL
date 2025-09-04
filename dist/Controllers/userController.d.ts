import { Request, Response } from "express";
export declare class userController {
    private service;
    constructor();
    viewUsers: (req: Request, res: Response) => Promise<void>;
    addUser: (req: Request, res: Response) => Promise<void>;
    editUser: (req: Request, res: Response) => Promise<void>;
    deleteUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=userController.d.ts.map