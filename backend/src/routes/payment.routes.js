import {Router} from "express"
import {paymentController, getPaymentsDetailsForUser, getPayments} from "../controllers/payment.controllers.js"


const paymentRoute = Router();


paymentRoute.route("/payment").post(paymentController);

paymentRoute.route("/user-payments").post(getPaymentsDetailsForUser);

paymentRoute.route("/admin/payments").get(getPayments);



export default paymentRoute