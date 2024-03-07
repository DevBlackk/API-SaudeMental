import { Router } from 'express';
import { AppointmentController } from '../controller/appointment.controller.js';

const appointmentRouter = Router();
const appointmentController = new AppointmentController();

appointmentRouter.post('/', appointmentController.createAppointment);
appointmentRouter.get('/', appointmentController.listAppointments);
appointmentRouter.put('/:id', appointmentController.updateAppointment);
appointmentRouter.delete('/:id', appointmentController.deleteAppointment);

export { appointmentRouter };