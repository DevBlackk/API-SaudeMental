import { WaitingList } from "../entity/WaitingList.entity.js";

class WaitingListService {
  // Adiciona um item à lista de espera
  async addToWaitingList(userId, therapistId, reason) {
    try {
      return await WaitingList.create({
        userId: userId,
        therapistId: therapistId,
        reason: reason
      });
    } catch (error) {
      throw new Error("Erro ao adicionar item à lista de espera: " + error.message);
    }
  }

  // Lista todos os itens na lista de espera
  async listWaitingList() {
    try {
      return await WaitingList.findAll();
    } catch (error) {
      throw new Error("Erro ao listar itens na lista de espera: " + error.message);
    }
  }

  // Obtém um item específico na lista de espera pelo ID
  async getWaitingListById(waitingListId) {
    try {
      return await WaitingList.findByPk(waitingListId);
    } catch (error) {
      throw new Error("Erro ao obter item na lista de espera por ID: " + error.message);
    }
  }

  // Atualiza um item na lista de espera
  async updateWaitingList(waitingListId, therapistId, reason) {
    try {
      const waitingListItem = await WaitingList.findByPk(waitingListId);
      if (!waitingListItem) {
        throw new Error("Item na lista de espera não encontrado.");
      }
      
      return await waitingListItem.update({
        therapistId: therapistId || waitingListItem.therapistId,
        reason: reason || waitingListItem.reason
      });
    } catch (error) {
      throw new Error("Erro ao atualizar item na lista de espera: " + error.message);
    }
  }

  // Remove um item da lista de espera
  async removeFromWaitingList(waitingListId) {
    try {
      const waitingListItem = await WaitingList.findByPk(waitingListId);
      if (!waitingListItem) {
        throw new Error("Item na lista de espera não encontrado.");
      }

      await waitingListItem.destroy();
    } catch (error) {
      throw new Error("Erro ao remover item da lista de espera: " + error.message);
    }
  }
}

export { WaitingListService };
