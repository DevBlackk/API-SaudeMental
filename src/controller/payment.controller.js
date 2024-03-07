import { Payment } from "../entity/Payment.entity.js";

class PaymentController {
  async listPayment(req, res) {
    res.status(200).json({
      results: await Payment.findAll(),
      error: false,
    });
  }

  async createPayment(req, res) {
    try {
      const { amount, method } = req.params;

      res.status(201).json({
        message: "Payment created successfully",
        results: await Payment.create({
          amount,
          method,
        }),
        error: false,
      });
    } catch (error) {
      res.status(401).json({
        message: error.message,
        error: true,
      });
    }
  }
  async updatePayment(req, res) {
    try {
      const id = req.params.id;
      const { amount, method } = req.body;

      const updatedRowsCount = await Payment.update(
        {
          amount,
          method,
        },
        {
          where: { id },
        }
      );

      if (updatedRowsCount === 0) {
        throw new Error("Payment not found");
      }

      res.status(200).json({
        message: "Payment updated successfully",
        results: [],
        error: false,
      });
    } catch (error) {
      res.status(401).json({ message: error.message, error: true });
    }
  }

  async deletePayment(req, res) {
    try {
      const { id } = req.params;

      const deletedRowCount = await Payment.destroy({
        where: { id },
      });

      if (deletedRowCount === 0) {
        throw new Error("Payment not found");
      }

      res.status(200).json({
        message: "Payment deleted successfully",
        results: [],
        error: false,
      });
    } catch (error) {
      res.status(401).json({ message: error.message, error: true });
    }
  }
}

export { PaymentController };
