import { WaitingList } from "../entity/WaitingList.entity.js";

class WaitingListService {
  async createWaitingList(status) {
    return await WaitingList.create({
      status,
    });
  }

  async getAllWaitingUsers() {
    return await WaitingList.findAll();
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

  async deleteWaitingList(id) {
    return await WaitingList.destroy({
      where: {
        id: id
      }
    })
  }
}

export { WaitingListService };
