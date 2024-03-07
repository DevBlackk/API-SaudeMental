import { Router  } from 'express';
import { ClientController } from '../controller/client.controller.js';

const clientRouter = Router();

const clientController = new ClientController(); 

clientRouter.post('/', clientController.createClient);
clientRouter.get('/', clientController.listClient);
clientRouter.put('/:id', clientController.updateClient);
clientRouter.delete('/:id', clientController.deleteClient);

export { clientRouter };
