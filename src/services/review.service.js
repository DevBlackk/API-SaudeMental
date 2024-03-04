import { Review } from "../entity/Review.entity.js";

class ReviewService {
  async getAllReviews() {
    return await Review.findAll();
  }

  async createReview(rating, comment, userId, therapistId) {
    return await Review.create({
      rating,
      comment,
      userId,
      therapistId,
    });
  }

  async updateReview(id, rating, comment, userId, therapistId) {
    return await Review.update(
      {
        rating,
        comment,
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

  async deleteReview(id) {
    return await Review.destroy({
      where: {
        id,
      },
    });
  }
}

export { ReviewService };