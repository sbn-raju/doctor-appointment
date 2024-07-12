import {Router} from "express"
import {paymentController, getPaymentsDetailsForUser} from "../controllers/payment.controllers.js"


const paymentRoute = Router();


paymentRoute.route("/payment").post(paymentController);
paymentRoute.route("/user-payments").post(getPaymentsDetailsForUser);

export default paymentRoute