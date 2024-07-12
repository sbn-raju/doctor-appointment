import {Router} from "express"
import { appointmentMasterCreate, appointmentSlotMasterGetSlots, appointmentSlotPerDate, emptySlots, getUserAppointments } from "../controllers/appointment.controller.js"
import { emptySlotsValidator } from "../helpers/validator.js";
import { authentication } from "../middlewares/authentication.js";
import { adminAutho } from "../middlewares/authorzation.js";

const appointmentRoute = Router()


appointmentRoute.route("/create/slot").post(authentication, adminAutho, appointmentMasterCreate);

appointmentRoute.route("/get/slots").post( appointmentSlotMasterGetSlots);

appointmentRoute.route("/get/dateSlots").get(authentication, adminAutho, appointmentSlotPerDate)

appointmentRoute.route("/empty-slots").post(authentication, adminAutho, emptySlotsValidator, emptySlots)

appointmentRoute.route("/get/appointments").get(getUserAppointments)




export default appointmentRoute