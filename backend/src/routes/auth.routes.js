import { Router } from "express";
import { verifyOneTimePasswordRegisterController, sendOneTimePasswordRegisterController, userLogoutController, refreshAccessToken, verifyUser } from "../controllers/auth.controller.js"; 
import { userAuthentication } from "../middlewares/authentication.js";


const authRoute = Router();



authRoute.route("/register/verify-Details/otp").post(sendOneTimePasswordRegisterController);

authRoute.route("/register/verify-Details/verify").post(verifyOneTimePasswordRegisterController);

authRoute.route("/logout").post(userAuthentication, userLogoutController);

authRoute.route("/refresh-token").post(refreshAccessToken);

authRoute.route("/verify/user").post(userAuthentication, verifyUser);


export default authRoute