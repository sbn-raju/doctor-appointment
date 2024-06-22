import { Router } from "express";
import { verifyOneTimePasswordRegisterController, sendOneTimePasswordRegisterController } from "../controllers/auth.controller.js"; 


const authRoute = Router();



authRoute.route("/register/verify-Details/otp").post(sendOneTimePasswordRegisterController)
authRoute.route("/register/verify-Details/verify").post(verifyOneTimePasswordRegisterController);


export default authRoute