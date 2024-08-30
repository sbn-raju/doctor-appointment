import { Router } from "express";
import { adminAuthLoginController, adminAuthLogoutController, adminAuthRegistetController, fetchUserDetailsController, verifyAdmin } from "../controllers/adminAuth.controllers.js";
import { adminAuth } from "../helpers/validator.js";
import { adminAuthentication } from "../middlewares/authentication.js";

const authAdminRoute = Router();



authAdminRoute.route("/login").post(adminAuthLoginController);
authAdminRoute.route("/register").post(adminAuthRegistetController);
authAdminRoute.route("/logout").post(adminAuthLogoutController);
authAdminRoute.route("/verify").post(adminAuthentication, verifyAdmin);
authAdminRoute.route("/user/details").get(adminAuthentication, fetchUserDetailsController);




export default authAdminRoute