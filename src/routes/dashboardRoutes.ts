import { Router } from 'express';
import MongoEnvironment from '../environment/MongoEnvironment';

const dashboardRouter = Router();

const environment = new MongoEnvironment
const controller = environment.dashboardController

dashboardRouter.get('/', (req, res) => controller.get(req, res))
dashboardRouter.post('/', (req, res) => controller.create(req, res))
dashboardRouter.put('/', (req, res) => controller.update(req, res))
dashboardRouter.delete('/:id', (req, res) => controller.delete(req, res))

export default dashboardRouter;