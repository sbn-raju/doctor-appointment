import {Router} from "express"
import { appointmentMasterCreate, appointmentSlotMasterGetSlots, appointmentSlotPerDate, emptySlots } from "../controllers/appointment.controller.js"
import { emptySlotsValidator } from "../helpers/validator.js";

const appointmentRoute = Router()


appointmentRoute.route("/create/slot").post(appointmentMasterCreate);

appointmentRoute.route("/get/slots").get(appointmentSlotMasterGetSlots);

appointmentRoute.route("/get/dateSlots").get(appointmentSlotPerDate)

appointmentRoute.route("/empty-slots").post(emptySlotsValidator, emptySlots)



export default appointmentRoute