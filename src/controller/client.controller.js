import { ClientService } from "../services/client.service.js";

class ClientController extends ClientService {
  constructor() {
    super();
  }

  async createClient(req, res) {
    try {
      const { name, phone, document } = req.body;

      res.status(201).json({
        message: "Client created successfully",
        results: await super.createClient(
          name,
          phone,
          document
        ),
        error: false,
      });
    } catch (error) {
      res.status(401).json({
        message: error.message,
        error: true,
      });
    }
  }

  async listClient(req, res) {
    try {
      res.status(200).json({
        results: await super.getAllClients(),
        error: false,
      });
    } catch (error) {
      res.status(401).json({
        message: error.message,
        error: true,
      });
    }
  }

  async updateClient(req, res) {
    try {
      const id = req.params.id;
      const { name, phone, document } = req.body;

      const [updatedRowsCount] = await super.updateClient(
        id,
        name, 
        phone,
        document
      );

      if (updatedRowsCount === 0) {
        throw new Error("Client not found");
      }

      res.status(200).json({
        message: "Client updated successfully",
        results: updatedRowsCount,
        error: false,
      });
    } catch (error) {
      res.status(401).json({
        message: error.message,
        error: true,
      });
    }
  }

  async deleteClient(req, res) {
    try {
      const { id } = req.params;
      res.status(200).json({
        message: "Client deleted successfully",
        results: await super.deleteClient(id),
        error: false,
      });
    } catch (error) {
      res.status(401).json({ 
        message: error.message, 
        error: true 
      });
    }
  }
}

export { ClientController };
