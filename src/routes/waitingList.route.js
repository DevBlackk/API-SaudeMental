import { Router } from "express";
import { WaitingListController } from "../controller/waitinglist.controler.js";
const waitingListRoutes = Router(); 

const waitingList = new WaitingListController(); 




waitingListRoutes.post('/', waitingList.addToWaitingList);

waitingListRoutes.get('/', waitingList.listWaitingList);

waitingListRoutes.get('/:id', waitingList.getWaitingListById);

waitingListRoutes.put('/:id', waitingList.updateWaitingList);

waitingListRoutes.delete('/:id', waitingList.removeFromWaitingList);

export { waitingListRoutes };
