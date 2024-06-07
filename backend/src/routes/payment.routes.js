import {Router} from "express"

import { classPaymentOrderInit } from "../controllers/payment.controller.js"


const classPaymentRoute = Router()
classPaymentRoute.route("/user/payments").post(classPaymentOrderInit);


export default classPaymentRoute