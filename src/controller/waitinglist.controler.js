import { WaitingListService } from "../services/waitinglist.service.js";

class WaitingListController extends WaitingListService {
  constructor() {
    super();
  }

  async createWaitingList(req, res) {
    try {
      const { status } = req.body;

      res.status(201).json({
        message: "User on the waiting list",
        results: await super.createWaitingList(status),
        error: false,
      });
    } catch (error) {
      res.status(401).json({
        message: error.message,
        error: true,
      });
    }
  }

  async listUser(req, res) {
    try {
      res.status(201).json({
        results: await super.getAllWaitingUsers(),
        error: false,
      });
    } catch (error) {
      res.status(401).json({
        message: error.message,
        error: true,
      });
    }
  }

  async updateWaitingList(req, res) {
    try {
      const id = req.params.id;
      const { status } = req.body;

      res.status(201).json({
        message: "Updated waiting list",
        results: await super.updateWaitingList(id, status),
        error: false,
      });
    } catch (error) {
      res.status(401).json({
        message: message.error,
        error: true,
      });
    }
  }

  async deleteWaitingList(req, res) {
    try {
      const id = req.params.id;
      console.log(id)
      res.status(200).json({
        message: "Waiting delete successfully",
        results: await super.deleteWaitingList(id),
        error: false,
      });
    } catch (error) {
      res.status(401).json({
        message: error.message,
        error: true,
      });
    }
  }
}

export { WaitingListController };
