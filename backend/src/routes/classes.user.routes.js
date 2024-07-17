import { Router } from "express"
import {
  setClassBooking,
  getClassesBooked,
} from "../controllers/classes.user.controller.js"
import paymentVerification from "../middlewares/paymentVerification.js"
import { classBookingValidator } from "../helpers/validator.js"
import {userAuthentication} from "../middlewares/authentication.js"


const classUserRoute = Router()



// User Routes
classUserRoute.route("/user/setClass_booking").post(userAuthentication, paymentVerification, classBookingValidator, setClassBooking) //Correct calling Check

classUserRoute.route("/user/classes/booked").post(userAuthentication, getClassesBooked) //Correct calling Check




export default classUserRoute
