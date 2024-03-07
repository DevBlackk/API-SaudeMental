import { Therapist } from "../entity/Therapist.entity.js";

class TherapistService {
  async createTherapist(name, phone, licenseNumber, medicalSpecialty) {
    return await Therapist.create({
      name,
      phone,
      licenseNumber,
      medicalSpecialty,
    });
  }

  async getAllTherapists() {
    return await Therapist.findAll();
  }

  async updateTherapist(id, name, phone, licenseNumber, medicalSpecialty) {
    return await Therapist.update(
      {
        name,
        phone,
        licenseNumber,
        medicalSpecialty,
      },
      {
        where: {
          id,
        },
      }
    );
  }

  async deleteTherapist(id) {
    return await Therapist.destroy({
      where: {
        id,
      },
    });
  }
}

export { TherapistService };
