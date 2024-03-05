import bcrypt from "bcrypt";
import { UserService } from "../services/user.service.js";

class UserController extends UserService {
  constructor() {
    super();
  }

  async createUser(request, response) {
    try {
      const { name, email, password, phone, accountType } = request.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      response.status(201).json({
        message: "User created successfully",
        results: [
          await super.newUser(name, email, hashedPassword, phone, accountType),
        ],
        error: false,
      });
    } catch (error) {
      response.status(401).json({
        message: error.message,
        error: true,
      });
    }
  }

  async loginUser(request, response) {
    try {
      const { email, password } = request.body;
      const user = await super.validationUser(email);
      if (!user) throw new Error("User not found");
      if (await bcrypt.compare(password, user.password)) {
        response.json({
          message: "Login successfully",
          token: await super.generatorToken(email, password),
          error: false,
        });
      } else {
        throw new Error("User or password invalid");
      }
    } catch (error) {
      response.json({
        message: error.message,
        error: true,
      });
    }
  }

  async listUsers(request, response, next) {
    try {
      response.status(200).json({
        results: await super.getAllUsers(),
        error: false,
      });
    } catch (error) {
      response.status(401).json({
        message: error.message,
        error: true,
      });
    }
  }

  async updateUser(request, response) {
    try {
      const id = request.params.id;
      console.log(id)
      const { name, email, password, phone } = request.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const oldUser = await super.oldUser(id);
      await super.updateUser(id, name, email, hashedPassword, phone, oldUser)
      response.status(200).json({
        message: "User update successfully",
        results: [],
        error: false,
      });
    } catch (error) {
      response.status(401).json({
        message: error.message,
        error: true,
      });
    }
  }

  async deleteUser(request, response) {
    try {
      const { id } = request.params;
      response.status(200).json({
        message: "User delete successfully",
        results: await super.deleteUser(id),
        error: false,
      });
    } catch (error) {
      response.status(401).json({
        message: error.message,
        error: true,
      });
    }
  }
}

export { UserController };
