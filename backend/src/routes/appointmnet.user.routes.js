import { Router } from "express";
import { bookSlots, getAppointmentDetails} from "../controllers/appointment.user.controllers.js";
import { appointmentBookingValidator } from "../helpers/validator.js";
import paymentVerification from "../middlewares/paymentVerification.js";
import {userAuthentication} from "../middlewares/authentication.js"

const userAppointment = Router();


userAppointment.route("/bookSlots").post(userAuthentication, appointmentBookingValidator, paymentVerification, bookSlots);
userAppointment.route("/get-appointment").post(userAuthentication, getAppointmentDetails);


export default userAppointment