import { Router } from "express";
import { adminAuthLoginController, adminAuthLogoutController, adminAuthRegistetController } from "../controllers/adminAuth.controllers.js";
import { adminAuth } from "../helpers/validator.js";

const authAdminRoute = Router();



authAdminRoute.route("/login").post(adminAuth, adminAuthLoginController);
authAdminRoute.route("/register").post(adminAuthRegistetController);
authAdminRoute.route("/logout").post(adminAuthLogoutController);



export default authAdminRoute