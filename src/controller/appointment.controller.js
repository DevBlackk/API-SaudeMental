import { AppointmentService } from "../services/appointment.service.js";

class AppointmentController extends AppointmentService {
  constructor() {
    super();
  }

  async createAppointment(req, res) {
    try {
      const { date, time, status, userId, therapistId } = req.body;
      res.status(201).json({
        message: 'Appointment created successfully',
        results: await super.createAppointment(date, time, status, userId, therapistId),
        error: false,
      });
    } catch (error) {
      res.status(401).json({ message: error.message, error: true });
    }
  }

  async listAppointments(req, res) {
    try {
      res.status(200).json({
        results: await super.getAllAppointments(),
        error: false,
      });
    } catch (error) {
      res.status(401).json({ message: error.message, error: true });
    }
  }

  async updateAppointment(req, res) {
    try {
      const id = req.params.id;
      const { date, time, status, userId, therapistId } = req.body;

      const [updatedRowsCount] = await super.updateAppointment(id, date, time, status, userId, therapistId);

      if (updatedRowsCount === 0) {
        throw new Error('Appointment not found');
      }

      res.status(200).json({
        message: 'Appointment updated successfully',
        results: [],
        error: false,
      });
    } catch (error) {
      res.status(401).json({ message: error.message, error: true });
    }
  }

  async deleteAppointment(req, res) {
    try {
      const { id } = req.params;

      const deletedRowCount = await super.deleteAppointment(id);

      if (deletedRowCount === 0) {
        throw new Error('Appointment not found');
      }

      res.status(200).json({
        message: 'Appointment deleted successfully',
        results: [],
        error: false,
      });
    } catch (error) {
      res.status(401).json({ message: error.message, error: true });
    }
  }
}

export { AppointmentController };