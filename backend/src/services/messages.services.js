import {authClientWithNumber, verify_sid} from "./twilio.services.js"
import { configDotenv } from "dotenv";

async function sendAppointmentAlertMessage(to,date,time){ 
    try {
        const message = await authClientWithNumber.messages.create({
            from:process.env.TWILIO_WHATSAPP_MESSAGE_SERVICE_SID,
            to: `whatsapp:+91${to}`,
            contentSid: process.env.TWILIO_APPOINTMENT_ALERT_TEMPLATE,
            contentVariables: JSON.stringify({
                1:`${date}`,
                2:`${time}`,
                3:"https://youtu.be/b_vVeDxrbDo?feature=shared"
            })
        })
        console.log(message)
        return true
    } catch (error) {
        console.error(error)
        return false
    }

}

async function sendOTPMessage(to, otp){
    try {
        const message = await authClientWithNumber.messages.create({
            from:process.env.TWILIO_WHATSAPP_MESSAGE_SERVICE_SID,
            to: `whatsapp:+91${to}`,
            contentSid: process.env.TWILIO_OTP_TEMPLATE,
            contentVariables: JSON.stringify({
                1:`${otp}`,
            })
        })
        console.log(message)
        return true
    } catch (error) {
        console.error(error)
        return false
    }
}







export {
    sendAppointmentAlertMessage,
    sendOTPMessage
}