import { WaitingList } from "../entity/WaitingList.entity.js";

class WaitingListService {
  async addToWaitingList(therapistId, reason) {
    return await WaitingList.create({
      therapistId: therapistId,
      reason: reason,
    });
  }

  async listWaitingList() {
    return await WaitingList.findAll();
  }

  async getWaitingListById(id) {
    return await WaitingList.findByPk({
      where: {
        id,
      },
    });
  }

  async updateWaitingList(id, status) {
    return await WaitingList.update(
      {
        status,
      },
      {
        where: {
          id,
        },
      }
    );
  }

  async removeFromWaitingList(id) {
    return await WaitingList.destroy({
      where: {
        id,
      },
    });
  }
}

export { WaitingListService };
