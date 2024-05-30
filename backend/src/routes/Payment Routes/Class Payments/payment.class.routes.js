import {Router} from "express"

import { classPaymentOrderInit } from "../../../controllers/Payments Controllers/Class Payment Controller/payment.class.controllers.js"


const classPaymentRoute = Router()
classPaymentRoute.route("/user/payments").post(classPaymentOrderInit);


export default classPaymentRoute