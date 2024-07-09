import {Router} from "express"
import { appointmentMasterCreate, appointmentSlotMasterGetSlots, appointmentSlotPerDate, emptySlots } from "../controllers/appointment.controller.js"
import { emptySlotsValidator } from "../helpers/validator.js";
import { authentication } from "../middlewares/authentication.js";
import { adminAutho } from "../middlewares/authorzation.js";

const appointmentRoute = Router()


appointmentRoute.route("/create/slot").post(authentication, adminAutho, appointmentMasterCreate);

appointmentRoute.route("/get/slots").post( appointmentSlotMasterGetSlots);

appointmentRoute.route("/get/dateSlots").get(authentication, adminAutho, appointmentSlotPerDate)

appointmentRoute.route("/empty-slots").post(authentication, adminAutho, emptySlotsValidator, emptySlots)



export default appointmentRoute