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

//     try{

//         const results = await Promise.all(
//             messages.map(({to, date, time}) => 
//                 authClientWithNumber.messages.create({
//                     from: configDotenv.Twilio_Whatsapp_Message_Service_SID,
//                     to: `whatsapp:+91${to}`,
//                     contentSid: configDotenv.Twilio_Appointment_Alert_Template,
//                     contentVariables: JSON.stringify({
//                         1: date,
//                         2: time,
//                         3: "https://youtu.be/b_vVeDxrbDo?feature=shared"
//                     })
//                 })
//             )
//         )

//         console.log("Message sent successfully")
//         res.status(200).json({
//             success: true,
//             message: "Sent successfully"
//         })
//     } catch(e){
//   console.error(e)
//     }
}









export default sendAppointmentAlertMessage