import { Router } from "express"
import {
  getClassBooking,
  getClassBookingById,
  setClassBooking,
  putClassBooking,
  deleteClassBooking,
  getClassesBooked,
} from "../controllers/classes.user.controller.js"
import paymentVerification from "../middlewares/paymentVerification.js"
import { classBookingValidator } from "../helpers/validator.js"


const classUserRoute = Router()



// User Routes
classUserRoute.route("/user/setClass_booking").post(paymentVerification, classBookingValidator, setClassBooking) //Correct calling Check
classUserRoute.route("/user/classes/booked").post(getClassesBooked) //Correct calling Check
// Read the all classes
classUserRoute.route("/user/getClass_booking").get(getClassBooking) //Correct calling Check
// Read the class using the id
classUserRoute.route("/user/getClass_booking/:id").get(getClassBookingById) //Correct calling Check
// Update the Classes using id
classUserRoute.route("/user/putClass_booking/:id").put(putClassBooking) //Correct calling Check
// Delete the Classes using id
classUserRoute.route("/user/deleteClass_booking/:id").delete(deleteClassBooking) //Correct calling Check



export default classUserRoute
