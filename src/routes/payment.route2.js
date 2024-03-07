import { Router } from "express"
import { PaymentController } from "../controller/payment.controller.js";

const paymentRoute = Router()

const paymentController = new PaymentController()

paymentRoute.get("/", paymentController.listPayment)
paymentRoute.post("/", paymentController.createPayment)
paymentRoute.delete("/:id", paymentController.deletePayment)
paymentRoute.put("/:id", paymentController.updatePayment)

export { paymentRoute }