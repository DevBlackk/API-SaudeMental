import { Router } from "express";
import { UserController } from "../controller/user.controller.js";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticate.js";

const useRoutes = Router()

const user = new UserController

useRoutes.post('/', user.createUser)
useRoutes.post('/authenticate', ensureAuthenticated)
useRoutes.post('/login', user.loginUser)
useRoutes.get('/', ensureAuthenticated, user.listUsers)
useRoutes.put('/:id', user.updateUser)
useRoutes.delete('/:id', user.deleteUser)

export { useRoutes }