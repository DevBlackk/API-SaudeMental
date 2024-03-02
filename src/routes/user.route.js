import { Router } from "express";
import { UserController } from "../controller/user.controller.js";

const routes = Router()

const user = new UserController

routes.post('/', user.createUser)
routes.post('/login', user.loginUser)
routes.get('/', user.listUsers)
routes.put('/:id', user.updateUser)
routes.delete('/:id', user.deleteUser)

export { routes }