import { Request, Response } from "express";
export declare class bookController {
    private service;
    constructor();
    viewbook: (req: Request, res: Response) => Promise<void>;
    addbook: (req: Request, res: Response) => Promise<void>;
    editbook: (req: Request, res: Response) => Promise<void>;
    deletebook: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=bookController.d.ts.map