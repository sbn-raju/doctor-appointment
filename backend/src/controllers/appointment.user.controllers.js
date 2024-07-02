import { pool } from "../database/connect.db.js";
import ErrorHandler from "../helpers/errorHelpers.js";
import {validationResult} from "express-validator";

const bookSlots = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ 
            success:false,
            errors: errors.array() 
        });
    }
    const{user_id, purpose_of_visit, date, time_slot, doctor_id, payment_details} = req.body;
    if(!(user_id || purpose_of_visit || date || time_slot || doctor_id || payment_details)){
        return next(new ErrorHandler("Provide all the required fields"))
    }
    const bookSlotsQuery = "INSERT INTO user_appointment_details (user_id, purpose_of_visit, date, time_slot, doctor_id, payment_details) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *";
    const bookSlotsValue = [user_id, purpose_of_visit, date, time_slot, doctor_id, payment_details];
    try {
        const bookSlotsResults = await pool.query(bookSlotsQuery, bookSlotsValue);
        if(bookSlotsResults.rowCount!=0){
            const updateAppointmentSlotMasterQuery = "UPDATE appointment_slot_master SET booked_by_user_id = $1 WHERE id = $2"
            const updateAppointmentSlotMasterValues = [user_id, time_slot]
            try{
                const updateAppointmentSlotMasterResults = await pool.query(updateAppointmentSlotMasterQuery, updateAppointmentSlotMasterValues);
                if(updateAppointmentSlotMasterResults.rowCount!=0){
                    return res.status(200).json({
                        success:true,
                        message:"Data Saved in Database Successfully",
                        data:bookSlotsResults.rows[0]
                    })
                }

            } catch(error){
                return next(new ErrorHandler(false, `Data for the appointment ${error}`, 402))
            }
        }
        else{
            return next(new ErrorHandler(false, "Data is not Saved in the Database", 402))
        }
    } catch (error) {
        return next(new ErrorHandler(false, `Data is not Saved in the Database due to ${error}`, 402))

    }
}






export {
    bookSlots
}