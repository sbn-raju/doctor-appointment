import { Router } from "express";
import { bookSlots} from "../controllers/appointment.user.controllers.js";
import { appointmentBookingValidator } from "../helpers/validator.js";

const userAppointment = Router();


userAppointment.route("/bookSlots").post(appointmentBookingValidator, bookSlots);



export default userAppointment