import ErrorHandler from "../helpers/errorHelpers.js"
import slotCalculator from "../helpers/slotCalculator.js"
import slotCreator from "../helpers/slotMaker.js"
import { pool } from "../database/connect.db.js"
import { validationResult } from "express-validator";



const appointmentMasterCreate = async(req,res,next)=>{
    try {
        let slots_no = 0
        const{doctor_id, date, start_time, end_time, time_duration} = req.body
        const created_by = parseInt(req.user.admin_id)
        const updated_by = parseInt(req.user.admin_id)
        if(!(doctor_id || date || start_time || end_time || time_duration || created_by || updated_by)){
            return next (new ErrorHandler(false, "Please Provide all the Fields", 302));
        }

        slots_no = await slotCalculator(start_time, end_time, time_duration)

        const appointmentMasterCreateQuery = "INSERT INTO appointment_master (doctor_id, date, start_time, end_time, time_duration, slots_no, created_by, updated_by) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *"
        const appointmentMasterCreateValue = [doctor_id, date, start_time, end_time, time_duration, slots_no, created_by, updated_by]
    

        try {
            const appointmentMasterCreateResults = await pool.query(appointmentMasterCreateQuery, appointmentMasterCreateValue);
            if(appointmentMasterCreateResults.rowCount != 0){
                let id = appointmentMasterCreateResults.rows[0].id
                if(await slotCreator(start_time, time_duration, slots_no,id, created_by, updated_by)){
                    return res.status(302).json({
                        success:true,
                        message:"Appointment Master Create",
                        data:appointmentMasterCreateResults.rows
                    })
                }
                else{
                    const deleteAppointmentDueToError = await pool.query("DELETE FROM appointment_master WHERE id = $1",[id]);
                    return next(new ErrorHandler(false, `Appointment master not created due to Slots not created`, 500))
                }
            }
        } catch (error) {
            return next(new ErrorHandler(false, `Appointment master not created due to ${error.message}`, 409))
        }
    } catch (error) {
        return next(new ErrorHandler(false, `Internal Error Server due to ${error.message}`, 500))
    }
}





const appointmentSlotMasterGetSlots = async(req,res,next)=>{
    try {
        const { date, doctor_id } = req.body
        
        
        const getQuerySlotMaster = "SELECT * FROM appointment_slot_master WHERE appointment_id = (SELECT id FROM appointment_master WHERE date = $1 AND doctor_id = $2)"
        const getValueSlotMaster = [date, doctor_id]

        try{
            const getResults = await pool.query(getQuerySlotMaster, getValueSlotMaster)
            if(getResults.rowCount!=0){
                return res.status(200).json({
                    success:true,
                    message:"This is the Fetched Results",
                    data:getResults.rows
                })
            }
            else{
                return res.status(200).json({
                    success:true,
                    message:"Slots not avliabale"
                })
            }

        }catch(error){
            return next(new ErrorHandler(false, `Error due to the ${error.message}`, 403))
        }

    } catch (error) {
        return next(new ErrorHandler(false, `Internal server error${error.message}`, 500))
    }
}



const appointmentSlotPerDate = async(req,res,next)=>{
    try {
        const { date } = req.body
        let getResults = [];
    
        const getQuerySlotMaster = "SELECT id, doctor_id FROM appointment_master WHERE date = $1"
        const getValueSlotMaster = [date]

        try{
            const getIdOfAppointments = await pool.query(getQuerySlotMaster, getValueSlotMaster)
            getResults = getIdOfAppointments.rows
            let getAppointmentSlotMaster = []
            for(let i = 0; i < getResults.length; i++){
                const appointmentSlotMasterQuery = "SELECT * FROM appointment_slot_master WHERE appointment_id = $1"
                const appointmentSlotMastervalue = [parseInt(getResults[i].id)]
                try {
                    const getAppointment = await pool.query(appointmentSlotMasterQuery,appointmentSlotMastervalue);
                    getAppointmentSlotMaster.push({
                        doctor:getResults[i].doctor_id,
                        slots:getAppointment.rows
                    })
                } catch (error) {
                    return next(new ErrorHandler(false, `Error due to the ${error.message}`, 403))
                }
            }
            return res.status(200).json({
                success:true,
                message:"This is the Fetched Results",
                date:getAppointmentSlotMaster
            })

        }catch(error){
            return next(new ErrorHandler(false, `Error due to the ${error.message}`, 403))
        }

    } catch (error) {
        return next(new ErrorHandler(false, `Internal server error${error.message}`, 500))
    }
}

const emptySlots = async(req,res,next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            success:false,
            message:errors.array(), 
        })
    }
    const {date, doctor_id} = req.body
    if(!(date || doctor_id)){
        return next(new ErrorHandler(false, "Please Provide all the required Fields", 402))
    }
    const emptySlotsQuery = "SELECT id, slot_start_time FROM appointment_slot_master WHERE appointment_id = (SELECT id FROM appointment_master WHERE date = $1 AND doctor_id = $2) AND booked_by_user_id IS NULL"
    const emptySlotsValues = [date, doctor_id]
    try {
        const emptySlotsResults = await pool.query(emptySlotsQuery, emptySlotsValues);
        if(emptySlotsResults.rowCount!=0){
            return res.status(200).json({
                success:true,
                message:"This are the empty Slots",
                data:emptySlotsResults.rows
            })
        }
        else{
            return next(new ErrorHandler(false, "No Slots Found For the Selected Doctor or that particular Date", 402))
        }
    } catch (error) {
        return next(new ErrorHandler(false, `${error}`, 402))

    }
}

export{
    appointmentMasterCreate,
    appointmentSlotMasterGetSlots,
    appointmentSlotPerDate,
    emptySlots
}