import { Router } from 'express';
import { ReviewController } from '../controller/review.controller.js';

const reviewRouter = Router();
const reviewController = new ReviewController();

reviewRouter.post('/create', reviewController.createReview);
reviewRouter.get('/list', reviewController.listReviews);
reviewRouter.put('/update/:id', reviewController.updateReview);
reviewRouter.delete('/delete/:id', reviewController.deleteReview);

export { reviewRouter };