import { Router } from 'express';
import { AppointmentController } from '../controller/appointment.controller.js';

const appointmentRouter = Router();
const appointmentController = new AppointmentController();

appointmentRouter.post('/create', appointmentController.createAppointment);
appointmentRouter.get('/list', appointmentController.listAppointments);
appointmentRouter.put('/update/:id', appointmentController.updateAppointment);
appointmentRouter.delete('/delete/:id', appointmentController.deleteAppointment);

export { appointmentRouter };