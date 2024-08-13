import { Router } from "express"
import {getAllDoctor, setDoctor, loginDoctor, verifyDoctor} from "../controllers/doctorAuth.controllers.js"
import { adminAuthentication, doctorAuthentication } from "../middlewares/authentication.js"
import { adminAutho } from "../middlewares/authorzation.js"


const doctorRoute = Router()



// Admin Routes
doctorRoute.route("/get-doctors").get(adminAuthentication, adminAutho, getAllDoctor) //Correct calling Check
doctorRoute.route("/set-doctors").post(adminAuthentication, adminAutho, setDoctor)


//Doctor Login Routes
doctorRoute.route("/auth/login").post(loginDoctor);
doctorRoute.route("/verify").post(doctorAuthentication, verifyDoctor);







export default doctorRoute
