import { Client } from "../entity/Client.entity.js";


class ClientService {
  async createClient(name, phone, document) {
    return await Client.create({
      name,
      phone,
      document
    });
  }

  async getAllClients() {
    return await Client.findAll();
  }

  async updateClient(id, name, phone, document) {
    return await Client.update(
      {
        name,
        phone,
        document
      },
      {
        where: {
          id,
        },
      }
    );
  }

  async deleteClient(id) {
    return await Client.destroy({
      where: {
        id,
      },
    });
  }
}

export { ClientService };
