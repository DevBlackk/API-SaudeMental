import { Therapist } from "../entity/Therapist.entity";

class TherapistController {
  async createTherapist(req, res) {
    try {
      const { licenseNumber, medicalSpecialty, userId } = req.body;

      const therapist = await Therapist.create({
        licenseNumber,
        medicalSpecialty,
        userId,
      });

      res.status(201).json({message: 'Therapist created successfully', results: therapist, error: false,});
    } catch (error) {
      res.status(401).json({message: error.message, error: true,});
    }
  }

  async listTherapists(req, res) {
    try {
      const therapists = await Therapist.findAll();

      res.status(200).json({results: therapists, error: false,});
    } catch (error) {
      res.status(401).json({message: error.message, error: true,});
    }
  }

  async updateTherapist(req, res) {
    try {
      const id = req.params.id;
      const { licenseNumber, medicalSpecialty, userId } = req.body;

      const [updatedRowsCount] = await Therapist.update(
        {
          licenseNumber,
          medicalSpecialty,
          userId,
        },
        {
          where: { id },
        }
      );

      if (updatedRowsCount === 0) {
        throw new Error('Therapist not found');
      }

      res.status(200).json({message: 'Therapist updated successfully', results: [], error: false,});
    } catch (error) {
      res.status(401).json({message: error.message, error: true,});
    }
  }

  async deleteTherapist(req, res) {
    try {
      const { id } = req.params;

      const deletedRowCount = await Therapist.destroy({
        where: { id },
      });

      if (deletedRowCount === 0) {
        throw new Error('Therapist not found');
      }

      res.status(200).json({message: 'Therapist deleted successfully', results: [], error: false,
      });
    } catch (error) {
      res.status(401).json({ message: error.message, error: true,});
    }
  }
}

export { TherapistController };