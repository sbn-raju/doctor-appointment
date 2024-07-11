import {Router} from "express"
import {paymentController} from "../controllers/payment.controllers.js"

const paymentRoute = Router();


paymentRoute.route("/payment").post(paymentController);

export default paymentRoute