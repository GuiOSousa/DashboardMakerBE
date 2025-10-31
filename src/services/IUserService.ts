import IEnvironment from "../environment/IEnvironment"
import IUserRepository from "../repositories/IUserRepository"

export default interface IUserService {
    environment: IEnvironment
    repository: IUserRepository

    getAll(): Promise<any>
    create(data: any): Promise<any>
    delete(id: string): Promise<any>
}