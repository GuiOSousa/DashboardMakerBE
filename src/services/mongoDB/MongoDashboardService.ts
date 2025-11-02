import { ObjectId } from "mongodb";
import IEnvironment from "../../environment/IEnvironment";
import IDashboardRepository from "../../repositories/IDashboardRepository";
import IDashboardService from "../IDashboardService";

export default class MongoDashboardService implements IDashboardService {
    environment: IEnvironment;
    repository: IDashboardRepository;

    constructor(environment: IEnvironment) {
        this.environment = environment
        this.repository = this.environment.dashboardRepository
    }

    async getAll(filters: any): Promise<any> {
        if (typeof(filters.id) === "string") {
            return this.getById(filters.id)
        }

        return await this.repository.getAll(filters)
    }

    async getById(id: string): Promise<any> {
        const dashboardId = new ObjectId(id)
        return await this.repository.getById(dashboardId)
    }

    async create(data: any): Promise<any> {
        const result = await this.repository.create(data)
        const id = result.insertedId
        return id
    }

    async update(data: any): Promise<any> {
        const id = data.id
        if(!id) { throw new Error("O ID é um campo obrigatório.") }
        
        const dashboard = await this.getById(id)
        if (!dashboard) { throw new Error("Dashboard não encontrado") }

        return await this.repository.update(id, data)
    }

    async delete(id: string): Promise<any> {
        const dashboardId = new ObjectId(id)
        return await this.repository.delete(dashboardId)
    }
}