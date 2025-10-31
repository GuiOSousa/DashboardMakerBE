import type { Request, Response } from 'express';

import IEnvironment from "../environment/IEnvironment";
import IDashboardService from "../services/IDashboardService";

export default interface IDashboardController {
    environment: IEnvironment
    service: IDashboardService

    get(req: Request, res: Response): Promise<any>
    create(req: Request, res: Response): Promise<any>
    update(req: Request, res: Response): Promise<any>
    delete(req: Request, res: Response): Promise<any>
}