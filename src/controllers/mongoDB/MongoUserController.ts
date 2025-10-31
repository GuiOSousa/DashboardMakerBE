import { Request, Response } from "express";
import IEnvironment from "../../environment/IEnvironment";
import IUserService from "../../services/IUserService";
import IUserController from "../IUserController";

export default class MongoUserController implements IUserController {
    environment: IEnvironment;
    service: IUserService;

    constructor(environment: IEnvironment) {
        this.environment = environment
        this.service = this.environment.userService
    }

    async getAll(req: Request, res: Response): Promise<any> {
        try {
            const data = await this.service.getAll()
            return res.status(201).json(data)
            
        } catch(err) {
            return res.status(400).json(err)
        }
    }

    async create(req: Request, res: Response): Promise<any> {
        try {
            const data = await this.service.create(req.body)
            return res.status(201).json(data)
        } catch(err) {
            return res.status(400).json(err)
        }
    }
    delete(req: Request, res: Response): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
}