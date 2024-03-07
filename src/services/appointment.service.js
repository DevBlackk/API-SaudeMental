import { Appointment } from "../entity/Appointment.entity.js";

class AppointmentService {
  async getAllAppointments() {
    return await Appointment.findAll();
  }

  async createAppointment(date, hour) {
    return await Appointment.create({
      date,
      hour,
    });
  }

  async updateAppointment(id, date, hour) {
    return await Appointment.update(
      {
        date,
        hour,
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

export { AppointmentService };
