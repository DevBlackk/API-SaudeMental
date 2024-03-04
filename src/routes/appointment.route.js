import { Router } from 'express';
import { AppointmentController } from '../controllers/appointment.controller.js';

const appointmentRouter = Router();
const appointmentController = new AppointmentController();

appointmentRouter.post('/create', appointmentController.createAppointment.bind(appointmentController));
appointmentRouter.get('/list', appointmentController.listAppointments.bind(appointmentController));
appointmentRouter.put('/update/:id', appointmentController.updateAppointment.bind(appointmentController));
appointmentRouter.delete('/delete/:id', appointmentController.deleteAppointment.bind(appointmentController));

export { appointmentRouter };