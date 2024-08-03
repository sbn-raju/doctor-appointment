import { Router } from "express"
import {getAllDoctor, setDoctor, loginDoctor} from "../controllers/doctorAuth.controllers.js"


const doctorRoute = Router()



// User Routes
doctorRoute.route("/get-doctors").get(getAllDoctor) //Correct calling Check
doctorRoute.route("/set-doctors").post(setDoctor)
doctorRoute.route("/set-doctors/auth").post(loginDoctor)



export default doctorRoute
