import { Router  } from 'express';
import { TherapistController } from '../controller/therapist.controller.js';

const therapistRouter = Router();

const therapistController = new TherapistController(); 

// therapistRouter.post('/create', therapistController.createTherapist());
// therapistRouter.get('/list', therapistController.listTherapists());
// therapistRouter.put('/update/:id', therapistController.updateTherapist());
// therapistRouter.delete('/delete/:id', therapistController.deleteTherapist());

therapistRouter.post('/create', therapistController.createTherapist.bind(therapistController));
therapistRouter.get('/list', therapistController.listTherapists.bind(therapistController));
therapistRouter.put('/update/:id', therapistController.updateTherapist.bind(therapistController));
therapistRouter.delete('/delete/:id', therapistController.deleteTherapist.bind(therapistController));

export { therapistRouter };

