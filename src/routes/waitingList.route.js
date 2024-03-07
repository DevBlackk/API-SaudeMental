import { Router } from "express";
import { WaitingListController } from "../controller/waitinglist.controler.js";
const waitingListRoutes = Router(); 

const waitingList = new WaitingListController(); 




waitingListRoutes.post('/', waitingList.createWaitingList);

waitingListRoutes.get('/', waitingList.listUser);

waitingListRoutes.put('/:id', waitingList.updateWaitingList);

waitingListRoutes.delete('/:id', waitingList.deleteWaitingList);

export { waitingListRoutes };
