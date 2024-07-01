import {Router} from "express"
import { appointmentMasterCreate, appointmentSlotMasterGetSlots, appointmentSlotPerDate } from "../controllers/appointment.controller.js"

const appointmentRoute = Router()


appointmentRoute.route("/create/slot").post(appointmentMasterCreate);

appointmentRoute.route("/get/slots").get(appointmentSlotMasterGetSlots);

appointmentRoute.route("/get/dateSlots").get(appointmentSlotPerDate)



export default appointmentRoute