import type { Request, Response } from 'express';
import IEnvironment from "../../environment/IEnvironment";
import IDashboardService from "../../services/IDashboardService";
import IDashboardController from "../IDashboardController";
import { stringify } from 'querystring';

export default class MongoDashboardController implements IDashboardController {
    environment: IEnvironment;
    service: IDashboardService;

    constructor(envrionment: IEnvironment) {
        this.environment = envrionment
        this.service = this.environment.dashboardService
    }

    async get(req: Request, res: Response): Promise<any> {
	    try {
            const { id } = req.query;

            if (id && typeof id === "string") {
                const data = await this.service.getById(id);
                return res.status(201).json(data);
            }

            const data = await this.service.getAll();
            return res.status(201).json(data);
	    } catch (err) {
		    return res.status(400).json(err);
	    }
    }

    async create(req: Request, res: Response): Promise<any> {
        try {
            const id = await this.service.create(req.body)
            return res.status(201).json(id)
        } catch (err) {
            return res.status(400).json(err);
        }
    }

    async update(req: Request, res: Response): Promise<any> {
        try {
            const result = await this.service.update(req.body)
            return res.status(201).json(result)
        } catch (err) {
            return res.status(400).json(err)
        }
    }

    delete(req: Request, res: Response): Promise<any> {
        throw new Error("Method not implemented.");
    }
}