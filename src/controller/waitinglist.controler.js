import { WaitingListService } from "../services/waitinglist.service.js";

class WaitingListController extends WaitingListService {
  constructor() {
    super();
  }

  async addToWaitingList(request, response) {
    try {
      const { userId, therapistId, reason } = request.body;
      const newItem = await super.addToWaitingList(userId, therapistId, reason);
      response.status(201).json({
        message: "User added to waiting list successfully",
        results: [newItem],
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
      const waitingList = await super.listWaitingList();
      response.status(200).json({
        results: waitingList,
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
      const { id } = request.params.id;
      const waitingListItem = await super.getWaitingListById({
        where: {
          id,
        },
      });
      response.status(200).json({
        results: waitingListItem,
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
      const { id } = request.params.id;
      const { status } = request.body;
      response.status(200).json({
        message: "Waiting list item updated successfully",
        results: await super.updateWaitingList(id, status),
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
      const { id } = request.params.id;
      response.status(200).json({
        message: "Waiting list item removed successfully",
        results: await super.removeFromWaitingList(id),
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
