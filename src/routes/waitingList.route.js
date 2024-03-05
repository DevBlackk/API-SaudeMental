import { Router } from "express";
import { WaitingListController } from "../controller/waitingList.controller.js";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticate.js"; 
const routes = Router(); 

const waitingList = new WaitingListController(); 



// Rota para adicionar um novo item à lista de espera
routes.post('/', ensureAuthenticated, waitingList.addToWaitingList);

// Rota para listar todos os itens na lista de espera
routes.get('/', ensureAuthenticated, waitingList.listWaitingList);

// Rota para obter detalhes de um item específico na lista de espera
routes.get('/:id', ensureAuthenticated, waitingList.getWaitingListById);

// Rota para atualizar um item na lista de espera
routes.put('/:id', ensureAuthenticated, waitingList.updateWaitingList);

// Rota para remover um item da lista de espera
routes.delete('/:id', ensureAuthenticated, waitingList.removeFromWaitingList);

export { routes };
