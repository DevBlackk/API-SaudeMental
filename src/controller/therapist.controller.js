import { Therapist } from "../entity/Therapist.entity.js";
import { TherapistService } from "../services/therapist.service.js";

class TherapistController extends TherapistService{
    constructor(){
        super();
    }

  async createTherapist(req, res) {
    try {
      const { licenseNumber, medicalSpecialty } = req.body;

      res.status(201).json({message: 'Therapist created successfully', results: await super.createTherapist(licenseNumber, medicalSpecialty), error: false,});
    } catch (error) {
      res.status(401).json({message: error.message, error: true,});
    }
  }

  async listTherapists(req, res) {
    try {
      res.status(200).json({results: await super.getAllTherapists(), error: false,});
    } catch (error) {
      res.status(401).json({message: error.message, error: true,});
    }
  }

  async updateTherapist(req, res) {
    try {
      const id = req.params.id;
      const { licenseNumber, medicalSpecialty} = req.body;

      const [updatedRowsCount] = await super.updateTherapsit(id, licenseNumber, medicalSpecialty)

      if (updatedRowsCount === 0) {
        throw new Error('Therapist not found');
      }

      res.status(200).json({message: 'Therapist updated successfully', results: await updatedRowsCount, error: false,});
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