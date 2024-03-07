import { Router  } from 'express';
import { TherapistController } from '../controller/therapist.controller.js';

const therapistRouter = Router();

const therapistController = new TherapistController(); 

therapistRouter.post('/', therapistController.createTherapist);
therapistRouter.get('/', therapistController.listTherapists);
therapistRouter.put('/:id', therapistController.updateTherapist);
therapistRouter.delete('/:id', therapistController.deleteTherapist);

export { therapistRouter };

