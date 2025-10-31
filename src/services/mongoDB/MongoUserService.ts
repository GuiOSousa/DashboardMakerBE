import IEnvironment from "../../environment/IEnvironment";
import IUserRepository from "../../repositories/IUserRepository";
import IUserService from "../IUserService";

export default class MongoUserService implements IUserService {
    environment: IEnvironment;
    repository: IUserRepository;

    constructor(environment: IEnvironment) {
        this.environment = environment
        this.repository = this.environment.userRepository
    }

    async getAll(): Promise<any> {
        return await this.repository.getAll()
    }

    async create(data: any): Promise<any> {
        return await this.repository.create(data)
    }
    delete(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
}