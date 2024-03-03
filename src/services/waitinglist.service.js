import { WaitingList } from "../entity/WaitingList.entity.js";

class WaitingListService {
    //adiciona item lista de espera
  async addToWaitingList(userId, therapistId, reason) {
    return await WaitingList.create({
      userId: userId,
      therapistId: therapistId,
      reason: reason
    });
  }

  // mostra a lista de espera
  async listWaitingList() {
    return await WaitingList.findAll();
  }

  async getWaitingListById(waitingListId) {
    return await WaitingList.findByPk(waitingListId);
  }
  
// atualiza a lista de espera
  async updateWaitingList(waitingListId, therapistId, reason) {
    const waitingListItem = await WaitingList.findByPk(waitingListId);
    if (!waitingListItem) {
      throw new Error("Item na lista de espera não encontrado.");
    }

    return await waitingListItem.update({
      therapistId: therapistId || waitingListItem.therapistId,
      reason: reason || waitingListItem.reason
    });
  }

  //remove item da lista de esepera
  async removeFromWaitingList(waitingListId) {
    const waitingListItem = await WaitingList.findByPk(waitingListId);
    if (!waitingListItem) {
      throw new Error("Item na lista de espera não encontrado.");
    }

    await waitingListItem.destroy();
  }
}

export { WaitingListService };
