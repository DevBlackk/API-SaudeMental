import { Review } from "../entity/Review.entity.js";

class ReviewService {
  async getAllReviews() {
    return await Review.findAll();
  }

  async createReview(rating, comment) {
    return await Review.create({
      rating,
      comment,
    });
  }

  async updateReview(id, rating, comment) {
    return await Review.update(
      {
        rating,
        comment,
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
