import { Router } from "express";
import { autoLoginUser, userProfileDetails, userProfileUpdate } from "../controllers/profile.user.controllers.js"
import { authentication } from "../middlewares/authentication.js";


const authUserRoute = Router();

authUserRoute.route("/autoLogin").post(autoLoginUser);


authUserRoute.route("/update/details").put(authentication, userProfileUpdate);
authUserRoute.route("/get/details").get(authentication, userProfileDetails);


export default authUserRoute