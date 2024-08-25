import { Router } from "express";
import { getMessageReminder, removeMessageNotify, sendMessageReminder, sendWhatsAppMessageController } from "../controllers/messages.controllers.js";
import { adminAuthentication } from "../middlewares/authentication.js";
import { adminAutho } from "../middlewares/authorzation.js";




const messageRoute = Router();

messageRoute.route("/setMessage").post(sendMessageReminder);
messageRoute.route("/terminateMessage").delete(removeMessageNotify)
messageRoute.route("/getMessage").get(getMessageReminder);
messageRoute.route("/send/Message").post(sendWhatsAppMessageController);



export default messageRoute