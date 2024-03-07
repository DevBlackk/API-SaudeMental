import { TherapistService } from "../services/therapist.service.js";

class TherapistController extends TherapistService {
  constructor() {
    super();
  }

  async createTherapist(req, res) {
    try {
      const { name, phone, licenseNumber, medicalSpecialty } = req.body;

      res.status(201).json({
        message: "Therapist created successfully",
        results: await super.createTherapist(
          name,
          phone,
          licenseNumber,
          medicalSpecialty
        ),
        error: false,
      });
    } catch (error) {
      res.status(401).json({
        message: error.message,
        error: true,
      });
    }
  }

  async listTherapists(req, res) {
    try {
      res.status(200).json({
        results: await super.getAllTherapists(),
        error: false,
      });
    } catch (error) {
      res.status(401).json({
        message: error.message,
        error: true,
      });
    }
  }

  async updateTherapist(req, res) {
    try {
      const id = req.params.id;
      const { name, phone, licenseNumber, medicalSpecialty } = req.body;

      await super.updateTherapist(
        id,
        name, 
        phone,
        licenseNumber,
        medicalSpecialty
      );

      if (updatedRowsCount === 0) {
        throw new Error("Therapist not found");
      }

      res.status(200).json({
        message: "Therapist updated successfully",
        results: updatedRowsCount,
        error: false,
      });
    } catch (error) {
      res.status(401).json({
        message: error.message,
        error: true,
      });
    }
  }

  async deleteTherapist(req, res) {
    try {
      const { id } = req.params;
      res.status(200).json({
        message: "Therapist deleted successfully",
        results: await super.deleteTherapist(id),
        error: false,
      });
    } catch (error) {
      res.status(401).json({ 
        message: error.message, 
        error: true 
      });
    }
  }
}

export { TherapistController };
