import {Router} from "express"
import { appointmentMasterCreate, getCountOfCompletedAppointments, getCountOfAppointment, setCompleteAppointment, getCompletedAppointments, appointmentSlotMasterGetSlots, appointmentSlotPerDate, emptySlots, getUserAppointments } from "../controllers/appointment.controller.js"
import { emptySlotsValidator } from "../helpers/validator.js";
import { authentication, adminAuthentication } from "../middlewares/authentication.js";
import { adminAutho } from "../middlewares/authorzation.js";

const appointmentRoute = Router()


appointmentRoute.route("/get/slots").post(appointmentSlotMasterGetSlots);//user Auth
appointmentRoute.route("/get/appointments").get(getUserAppointments)//user auth
appointmentRoute.route("/empty-slots").post(emptySlotsValidator, emptySlots)//user auth


appointmentRoute.route("/create/slot").post(adminAuthentication,adminAutho, appointmentMasterCreate);//admin auth
appointmentRoute.route("/get/dateSlots").get(adminAuthentication, adminAutho, appointmentSlotPerDate)//admin auth
appointmentRoute.route("/set-complete").put(adminAuthentication, adminAutho, setCompleteAppointment);//admin auth
appointmentRoute.route("/get-completed").get(adminAuthentication, adminAutho, getCompletedAppointments);//admin auth
appointmentRoute.route("/count/completed").get(adminAuthentication,adminAutho, getCountOfCompletedAppointments)//admin auth
appointmentRoute.route("/count/not/completed").get(adminAuthentication, adminAutho, getCountOfAppointment);//admin auth




export default appointmentRoute