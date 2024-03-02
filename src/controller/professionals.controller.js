import { Professionals } from  "../entity/Professionals.entity";
import bcrypt from "bcrypt";
class ProfessionalController {

  async createProfessional(req, res) {
    try {
      const { name, username, office, email, password } = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);

      const professional = await Professional.create({
        name,
        username,
        office,
        email,
        password: hashedPassword,
      });

      res.status(201).json({message: 'Professional created successfully', results: professional, error: false,});
    } catch (error) {
      res.status(401).json({message: error.message, error: true,});
    }
  }

  async listProfessionals(req, res) {
    try {
      const professionals = await Professional.findAll();

      res.status(200).json({results: professionals, error: false,});
    } catch (error) {
      res.status(401).json({message: error.message, error: true,});
    }
  }

  async updateProfessional(req, res) {
    try {
      const id = req.params.id;
      const { name, username, office, email, password } = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);

      const [updatedRowsCount] = await Professional.update(
        {
          name,
          username,
          office,
          email,
          password: hashedPassword,
        },
        {
          where: { id },
        }
      );

      if (updatedRowsCount === 0) {
        throw new Error('Professional not found');
      }

      res.status(200).json({message: 'Professional updated successfully', results: [], error: false,});
    } catch (error) {
      res.status(401).json({message: error.message, error: true,});
    }
  }

  async deleteProfessional(req, res) {
    try {
      const { id } = req.params;

      const deletedRowCount = await Professional.destroy({
        where: { id },
      });

      if (deletedRowCount === 0) {
        throw new Error('Professional not found');
      }

      res.status(200).json({message: 'Professional deleted successfully', results: [], error: false,});
    } catch (error) {
      response.status(401).json({message: error.message, error: true,});
    }
  }
}

export default ProfessionalController;