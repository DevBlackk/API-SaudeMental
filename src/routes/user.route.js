import { Router } from "express";
import { UserController } from "../controller/user.controller.js";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticate.js";

const routes = Router()

const user = new UserController

routes.post('/', user.createUser)
routes.post('/authenticate', ensureAuthenticated)
routes.post('/login', user.loginUser)
routes.get('/', user.listUsers)
routes.put('/:id', user.updateUser)
routes.delete('/:id', user.deleteUser)

export { routes }