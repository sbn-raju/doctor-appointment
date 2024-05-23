import { Router } from "express";
import { loginController } from "../controllers/auth.controllers.js";


const authRoute = Router();
authRoute.route("/login",loginController)


export default authRoute