import {Router} from "express"
import { appointmentMasterCreate,setCompleteAppointment, appointmentSlotMasterGetSlots, appointmentSlotPerDate, emptySlots, getUserAppointments } from "../controllers/appointment.controller.js"
import { emptySlotsValidator } from "../helpers/validator.js";
import { authentication } from "../middlewares/authentication.js";
import { adminAutho } from "../middlewares/authorzation.js";

const appointmentRoute = Router()


appointmentRoute.route("/create/slot").post(appointmentMasterCreate);

appointmentRoute.route("/get/slots").post(appointmentSlotMasterGetSlots);

appointmentRoute.route("/get/dateSlots").get(authentication, adminAutho, appointmentSlotPerDate)

appointmentRoute.route("/empty-slots").post(authentication, adminAutho, emptySlotsValidator, emptySlots)

appointmentRoute.route("/get/appointments").get(getUserAppointments),


appointmentRoute.route("/set-complete").put(setCompleteAppointment);




export default appointmentRoute