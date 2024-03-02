
class PaymentController {
    async updatePayment(req, res) {
      try {
        const id = req.params.id;
        const { amount, method, date, appointmentId } = req.body;
  
        const updatedRowsCount = await Payment.update(
          {
            amount,
            method,
            date,
            appointmentId,
          },
          {
            where: { id },
          }
        );
  
        if (updatedRowsCount === 0) {
          throw new Error('Payment not found');
        }
  
        res.status(200).json({message: 'Payment updated successfully',
          results: [],
          error: false,
        });
      } catch (error) {
        res.status(401).json({message: error.message, error: true,});
      }
    }
  
    async deletePayment(req, res) {
      try {
        const { id } = req.params;
  
        const deletedRowCount = await Payment.destroy({
          where: { id },
        });
  
        if (deletedRowCount === 0) {
          throw new Error('Payment not found');
        }
  
        res.status(200).json({message: 'Payment deleted successfully', results: [], error: false,
        });
      } catch (error) {
        res.status(401).json({message: error.message, error: true,});
      }
    }
  }
  
  export default PaymentController;