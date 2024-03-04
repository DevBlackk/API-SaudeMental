import { ReviewService } from "../services/review.service.js";

class ReviewController extends ReviewService {
  constructor() {
    super();
  }

  async createReview(req, res) {
    try {
      const { rating, comment, userId, therapistId } = req.body;
      res.status(201).json({
        message: 'Review created successfully',
        results: await super.createReview(rating, comment, userId, therapistId),
        error: false,
      });
    } catch (error) {
      res.status(401).json({ message: error.message, error: true });
    }
  }

  async listReviews(req, res) {
    try {
      res.status(200).json({
        results: await super.getAllReviews(),
        error: false,
      });
    } catch (error) {
      res.status(401).json({ message: error.message, error: true });
    }
  }

  async updateReview(req, res) {
    try {
      const id = req.params.id;
      const { rating, comment, userId, therapistId } = req.body;

      const [updatedRowsCount] = await super.updateReview(id, rating, comment, userId, therapistId);

      if (updatedRowsCount === 0) {
        throw new Error('Review not found');
      }

      res.status(200).json({
        message: 'Review updated successfully',
        results: [],
        error: false,
      });
    } catch (error) {
      res.status(401).json({ message: error.message, error: true });
    }
  }

  async deleteReview(req, res) {
    try {
      const { id } = req.params;

      const deletedRowCount = await super.deleteReview(id);

      if (deletedRowCount === 0) {
        throw new Error('Review not found');
      }

      res.status(200).json({
        message: 'Review deleted successfully',
        results: [],
        error: false,
      });
    } catch (error) {
      res.status(401).json({ message: error.message, error: true });
    }
  }
}

export { ReviewController };