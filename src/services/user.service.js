import { User } from "../entity/User.entity.js";
import { compare } from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

class UserService {
  async getAllUsers() {
    return await User.findAll({
      attributes: {
        exclude: ["password"]
      }
    });
  }

  async newUser(username, hashedPassword, accountType) {
    return await User.create({
      username,
      password: hashedPassword,
      accountType,
    });
  }

  async validationUser(username) {
    return await User.findOne({
      where: {
        username
      },
    });
  }

  async oldUser(id) {
    return await User.findByPk(id);
  }

  async updateUser(id, username, hashedPassword, oldUser) {
    return await User.update(
      {
        username: username || oldUser.username,
        password: hashedPassword || oldUser.password,
      },
      {
        where: {
          id: id,
        },
      }
    );
  }

  async deleteUser(id) {
    return await User.destroy({
      where: {
        id
      },
    });
  }

  async generatorToken(username, password) {
    const userAlreadyExist = await User.findOne({
      where: {
        username,
      },
    });
    if (!userAlreadyExist) {
      throw new Error("User or password incorrect.");
    }
    const passwordMatch = await compare(password, userAlreadyExist.password);
    if (!passwordMatch) {
      throw new Error("User or password incorrect.");
    }
    const token = jsonwebtoken.sign({}, "34aa582c-d6d0-4a4f-9472-6702c5dbd2ec", {
      subject: userAlreadyExist.id,
      expiresIn: "20s",
    });

    return { token };
  }
}

export { UserService };
