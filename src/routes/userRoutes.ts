import { Router } from 'express';
import MongoEnvironment from '../environment/MongoEnvironment';

const userRouter = Router();

const environment = new MongoEnvironment
const controller = environment.userController

userRouter.get('/', (req, res) => controller.getAll(req, res))
userRouter.post('/', (req, res) => controller.create(req, res))

export default userRouter;