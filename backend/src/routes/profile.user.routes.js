import { Router } from "express";
import { autoLoginUser, userProfileUpdate } from "../controllers/profile.user.controllers.js"

const authUserRoute = Router();

authUserRoute.route("/autoLogin").post(autoLoginUser);


authUserRoute.route("/update/details").put(userProfileUpdate);



export default authUserRoute