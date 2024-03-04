import { Router } from 'express';
import { ReviewController } from '../controllers/review.controller.js';

const reviewRouter = Router();
const reviewController = new ReviewController();

reviewRouter.post('/create', reviewController.createReview.bind(reviewController));
reviewRouter.get('/list', reviewController.listReviews.bind(reviewController));
reviewRouter.put('/update/:id', reviewController.updateReview.bind(reviewController));
reviewRouter.delete('/delete/:id', reviewController.deleteReview.bind(reviewController));

export { reviewRouter };