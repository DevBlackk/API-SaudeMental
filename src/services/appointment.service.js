import { Appointment } from "../entity/Appointment.entity.js";

class AppointmentService {
  async getAllAppointments() {
    return await Appointment.findAll();
  }

  async createAppointment(date, time, status, userId, therapistId) {
    return await Appointment.create({
      date,
      time,
      status,
      userId,
      therapistId,
    });
  }

  async updateAppointment(id, date, time, status, userId, therapistId) {
    return await Appointment.update(
      {
        date,
        time,
        status,
        userId,
        therapistId,
      },
      {
        where: {
          id,
        },
      }
    );
  }

  async deleteAppointment(id) {
    return await Appointment.destroy({
      where: {
        id,
      },
    });
  }
}