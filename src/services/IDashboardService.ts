import IEnvironment from "../environment/IEnvironment";
import IDashboardRepository from "../repositories/IDashboardRepository";

export default interface IDashboardService {
    environment: IEnvironment
    repository: IDashboardRepository

    getAll(filters: any): Promise<any>
    getById(id: string): Promise<any>
    create(data: any): Promise<any>
    update(data: any): Promise<any>
    delete(id: string): Promise<any>
}