import { User } from "../entity/User.entity.js";
import { compare } from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

class UserService {
  async getAllUsers() {
    return await User.findAll();
  }

  async newUser(name, email, hashedPassword, phone, accountType) {
    return await User.create({
      name: name,
      email: email,
      password: hashedPassword,
      phone: phone,
      accountType: accountType,
    });
  }

  async validationUser(email) {
    return await User.findOne({
      where: {
        email: email,
      },
    });
  }

  async oldUser(id) {
    return await User.findByPk(id);
  }

  async updateUser(id, name, email, hashedPassword, phone, oldUser) {
    return await User.update(
      {
        name: name || oldUser.name,
        email: email || oldUser.email,
        password: hashedPassword || oldUser.password,
        phone: phone || oldUser.phone,
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
        id: id,
      },
    });
  }

  async generatorToken(email, password) {
    const userAlreadyExist = await User.findOne({
      where: {
        email,
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
