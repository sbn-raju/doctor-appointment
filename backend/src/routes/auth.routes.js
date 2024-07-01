import { Router } from "express";
import { verifyOneTimePasswordRegisterController, sendOneTimePasswordRegisterController, userLogoutController } from "../controllers/auth.controller.js"; 


const authRoute = Router();



authRoute.route("/register/verify-Details/otp").post(sendOneTimePasswordRegisterController)
authRoute.route("/register/verify-Details/verify").post(verifyOneTimePasswordRegisterController);
authRoute.route("/logout").post(userLogoutController);


export default authRoute