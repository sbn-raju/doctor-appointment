import { Router } from "express";
import { bookSlots, getAppointmentDetails} from "../controllers/appointment.user.controllers.js";
import { appointmentBookingValidator } from "../helpers/validator.js";
import paymentVerification from "../middlewares/paymentVerification.js";

const userAppointment = Router();


userAppointment.route("/bookSlots").post(appointmentBookingValidator, paymentVerification, bookSlots);
userAppointment.route("/get-appointment").post(getAppointmentDetails);


export default userAppointment