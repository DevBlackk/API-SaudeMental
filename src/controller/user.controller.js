import { User } from "../entity/User.entity.js";
import bcrypt from "bcrypt"

class UserController {
  //CRUD Simples

  //Criar usuário
  async createUser(request, response) {
    try {
      const { name, email, password, phone, accountType } = request.body;
      const hashedPassword = await bcrypt.hash(password, 10) 
      const newUser = await User.create({
        name: name,
        email: email,
        password: hashedPassword,
        phone: phone,
        accountType: accountType,
      });
      response.status(201).json({
        message: "User created successfully",
        results: [newUser],
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
      const { email, password } = request.body
      const user = await User.findOne({
        where: {
          email: email,
        }
      })
      if (!user) throw new Error("User not found")
      if (await bcrypt.compare(password, user.password)) {
        response.json({
          message: "Login successfully",
          error: false
        });
      } else {
        throw new Error("User or password invalid")
      }
    } catch (error) {
      response.json({
        message: error.message,
        error: true
      });
    }
  }

  //read
  async listUsers(request, response) {
    try {
      const listUser = await User.findAll()
      response.status(200).json({
        results: listUser,
        error: false
      })
    } catch (error) {
      response.status(401).json({
        message: error.message,
        error: true,
      });
    }
  }

  //update
  async updateUser(request, response) {
    try {
      const id = request.params.id
      const { name, email, password, phone } = request.body;
      const hashedPassword = await bcrypt.hash(password, 10) 
      const oldUser = await User.findByPk(id)
      const userUpdated = await User.update({
        name: name || oldUser.name,
        email: email || oldUser.email,
        password: hashedPassword || oldUser.password,
        phone: phone || oldUser.phone
      }, {
        where: {
          id: id
        }
      })
      response.status(200).json({
        message: "User update successfully",
        results: [userUpdated],
        error: false
      })
    } catch (error) {
      response.status(401).json({
        message: error.message,
        error: true
      })
    }
  }

  //delete
  async deleteUser(request, response) {
    try {
      const { id } = request.params
      const userDelete = await User.destroy({
        where: {
          id: id
        }
      })
      response.status(200).json({
        message: "User delete successfully",
        results: userDelete,
        error: false 
      })
    } catch (error) {
      response.status(401).json({
        message: error.message,
        error: true
      })
    }
  }
}

export { UserController };
