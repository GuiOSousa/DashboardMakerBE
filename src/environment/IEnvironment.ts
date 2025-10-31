import IDashboardController from "../controllers/IDashboardController";
import IUserController from "../controllers/IUserController";
import IDashboardRepository from "../repositories/IDashboardRepository";
import IUserRepository from "../repositories/IUserRepository";
import IDashboardService from "../services/IDashboardService";
import IUserService from "../services/IUserService";

export default interface IEnvironment {
    userRepository: IUserRepository
    userService: IUserService
    userController: IUserController

    dashboardRepository: IDashboardRepository
    dashboardService: IDashboardService
    dashboardController: IDashboardController
}