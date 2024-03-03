
import { WaitingListService } from "../services/waitinglist.service.js";

class WaitingListController extends WaitingListService {
  constructor() {
    super();
  }

  async addToWaitingList(request, response) {
    try {
      const { userId, therapistId, reason } = request.body;
      response.status(201).json({
        message: "User added to waiting list successfully",
        results: [
          await super.addToWaitingList(userId, therapistId, reason),
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

  async listWaitingList(request, response) {
    try {
      response.status(200).json({
        results: await super.listWaitingList(),
        error: false,
      });
    } catch (error) {
      response.status(401).json({
        message: error.message,
        error: true,
      });
    }
  }

  async getWaitingListById(request, response) {
    try {
      const waitingListId = request.params.id;
      response.status(200).json({
        results: await super.getWaitingListById(waitingListId),
        error: false,
      });
    } catch (error) {
      response.status(401).json({
        message: error.message,
        error: true,
      });
    }
  }

  async updateWaitingList(request, response) {
    try {
      const waitingListId = request.params.id;
      const { therapistId, reason } = request.body;
      await super.updateWaitingList(waitingListId, therapistId, reason);
      response.status(200).json({
        message: "Waiting list item updated successfully",
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

  async removeFromWaitingList(request, response) {
    try {
      const waitingListId = request.params.id;
      await super.removeFromWaitingList(waitingListId);
      response.status(200).json({
        message: "Waiting list item removed successfully",
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
}

export { WaitingListController };
