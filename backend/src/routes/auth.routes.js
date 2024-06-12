import { Router } from "express";
import { loginController, personalDetailsRegisterController } from "../controllers/auth.controller.js"; 


const authRoute = Router();


authRoute.route("/login").post(loginController);
authRoute.route("/register/personalDetails").post(personalDetailsRegisterController);



export default authRoute