import { Router  } from 'express';
import { TherapistController } from '../controller/therapist.controller.js';

const therapistRouter = Router();

const therapistController = new TherapistController(); 

therapistRouter.post('/create', therapistController.createTherapist);
therapistRouter.get('/list', therapistController.listTherapists);
therapistRouter.put('/update/:id', therapistController.updateTherapist);
therapistRouter.delete('/delete/:id', therapistController.deleteTherapist);

export { therapistRouter };

