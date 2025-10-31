import type { Request, Response } from 'express';

import IEnvironment from "../environment/IEnvironment";
import IUserService from "../services/IUserService";

export default interface IUserController {
    environment: IEnvironment
    service: IUserService

    getAll(req: Request, res: Response): Promise<any>
    create(req: Request, res: Response): Promise<any>
    delete(req: Request, res: Response): Promise<any>
}