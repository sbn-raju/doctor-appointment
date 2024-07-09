import { Router } from "express"
import {getAllDoctor} from "../controllers/doctorAuth.controllers.js"


const doctorRoute = Router()



// User Routes
doctorRoute.route("/get-doctors").get(getAllDoctor) //Correct calling Check




export default doctorRoute
