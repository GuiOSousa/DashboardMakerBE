import IDashboardController from "../controllers/IDashboardController";
import IUserController from "../controllers/IUserController";
import MongoDashboardController from "../controllers/mongoDB/MongoDashboardController";
import MongoUserController from "../controllers/mongoDB/MongoUserController";
import IDashboardRepository from "../repositories/IDashboardRepository";
import IUserRepository from "../repositories/IUserRepository";
import MongoDashboardRepository from "../repositories/mongoDB/MongoDashboardRepository";
import MongoUserRepository from "../repositories/mongoDB/MongoUserRepository";
import IDashboardService from "../services/IDashboardService";
import IUserService from "../services/IUserService";
import MongoDashboardService from "../services/mongoDB/MongoDashboardService";
import MongoUserService from "../services/mongoDB/MongoUserService";
import IEnvironment from "./IEnvironment";

export default class MongoEnvironment implements IEnvironment {
    userRepository: IUserRepository;
    userService: IUserService;
    userController: IUserController;
    dashboardRepository: IDashboardRepository;
    dashboardService: IDashboardService;
    dashboardController: IDashboardController;

    constructor(){
        this.userRepository = new MongoUserRepository
        this.userService = new MongoUserService(this)
        this.userController = new MongoUserController(this)

        this.dashboardRepository = new MongoDashboardRepository
        this.dashboardService = new MongoDashboardService(this)
        this.dashboardController = new MongoDashboardController(this)

    }
}