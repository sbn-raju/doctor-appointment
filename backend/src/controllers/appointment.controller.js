    import ErrorHandler from "../helpers/errorHelpers.js"
    import slotCalculator from "../helpers/slotCalculator.js"
    import slotCreator from "../helpers/slotMaker.js"
    import { pool } from "../database/connect.db.js"
    import { validationResult } from "express-validator";



    const appointmentMasterCreate = async(req,res,next)=>{
        const{admin_id} = req.user;
        try {
            let slots_no = 0
            const{doctor_id, date, start_time, end_time, time_duration} = req.body
            const created_by = admin_id
            const updated_by = admin_id
            if(!(doctor_id || date || start_time || end_time || time_duration || created_by || updated_by)){
                return next (new ErrorHandler(false, "Please Provide all the Fields", 302));
            }
            const slot_duration = parseInt(time_duration);
            slots_no = await slotCalculator(start_time, end_time, slot_duration)

            const appointmentMasterCreateQuery = "INSERT INTO appointment_master (doctor_id, date, start_time, end_time, time_duration, slots_no, created_by, updated_by) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *"
            const appointmentMasterCreateValue = [doctor_id, date, start_time, end_time, slot_duration, slots_no, created_by, updated_by]
        

            try {
                const appointmentMasterCreateResults = await pool.query(appointmentMasterCreateQuery, appointmentMasterCreateValue);
                if(appointmentMasterCreateResults.rowCount != 0){
                    let id = appointmentMasterCreateResults.rows[0].id
                    if(await slotCreator(start_time, slot_duration, slots_no,id, created_by, updated_by)){
                        return res.status(200).json({
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



    const getUserAppointments = async(req,res,next)=>{
        const getUserAppointmentsQuery = "SELECT user_appointment_details.purpose_of_visit, user_appointment_details.date, user_appointment_details.mobile_no, user_appointment_details.p_name,user_appointment_details.doctor_id, user_appointment_details.time_slot, doctor_master.name, appointment_slot_master.slot_start_time FROM user_appointment_details JOIN doctor_master ON user_appointment_details.doctor_id = doctor_master.id JOIN appointment_slot_master ON user_appointment_details.time_slot = appointment_slot_master.id ORDER BY user_appointment_details.created_at DESC"
        try {
            const getUserAppointmentsResults = await pool.query(getUserAppointmentsQuery);
            if(getUserAppointmentsResults.rowCount!=0){
                return res.status(200).json({
                    success:true,
                    message:"All the data",
                    data:getUserAppointmentsResults.rows
                })
            }
            else{
                return next(new ErrorHandler(false, "No Slots Found", 402))
            }
        } catch (error) {
            return next(new ErrorHandler(false, `${error}`, 402))
        }
    }



    const setCompleteAppointment = async(req,res,next)=>{
        const {id} = req.query
        if(!id){
            return res.status(302).json({
                success:false,
                message:"Please select the user to mark completed"
            })
        }
        const setCompleteAppointmentQuery = "UPDATE user_appointment_details SET iscompleted = $1 WHERE user_id = $2 RETURNING iscompleted";
        const setCompleteAppointmentValue = [1, id];
        try {
            const setCompleteAppointmentresults = await pool.query(setCompleteAppointmentQuery,setCompleteAppointmentValue);
            if(setCompleteAppointmentresults.rowCount!=0){
            return res.status(200).json({
                success:true,
                message:"Successfully marked as completed"
            })
            }
            else{
                return res.status(302).json({
                    success:true,
                    message:"Id not found for the user"
                })
            }
        } catch (error) {
            return next(new ErrorHandler(false, `${error}`, 402))
        }


    }


    const getCompletedAppointments = async(req,res)=>{
        const completeQuery = "SELECT user_appointment_details.purpose_of_visit, user_appointment_details.date, user_appointment_details.mobile_no ,user_appointment_details.iscompleted, user_appointment_details.p_name,user_appointment_details.doctor_id, user_appointment_details.time_slot, doctor_master.name, appointment_slot_master.slot_start_time FROM user_appointment_details JOIN doctor_master ON user_appointment_details.doctor_id = doctor_master.id JOIN appointment_slot_master ON user_appointment_details.time_slot = appointment_slot_master.id WHERE user_appointment_details.iscompleted = $1 ORDER BY user_appointment_details.created_at DESC"
        const isCompleted = 1;
        const completeValues = [isCompleted];
        try {
            const completedAppointmentRes = await pool.query(completeQuery, completeValues);
        if(completedAppointmentRes.rowCount!=0){
            return res.status(200).json({
                success:true,
                message:"Completed Appointments",
                data:completedAppointmentRes.rows
            })
        }
            
        } catch (error) {
            return res.status(500).json({
                success:false,
                message:`Error Occured : ${error}`,
            })
            
        }
    }



    const getCountOfCompletedAppointments = async(req,res)=>{
        const getCountQuery = "SELECT COUNT(*) FROM user_appointment_details WHERE iscompleted = $1"
        const getCountValue = [1];
        try {
            const getCount = await pool.query(getCountQuery, getCountValue);
            if(getCount.rowCount!=0){
                return res.status(200).json({
                    success:true,
                    data:getCount.rows[0]
                })
            }
        } catch (error) {
            return res.status(500).json({
                success:false,
                message:`Error Occured : ${error}`,
            })

        } 
    }



    const getCountOfAppointment = async(req,res)=>{
        const getCountQuery = "SELECT COUNT(*) FROM user_appointment_details WHERE iscompleted IS NUll"
        try {
            const getCount = await pool.query(getCountQuery);
            if(getCount.rowCount!=0){
                return res.status(200).json({
                    success:true,
                    data:getCount.rows[0]
                })
            }
        } catch (error) {
            return res.status(500).json({
                success:false,
                message:`Error Occured : ${error}`,
            })
        } 
    }




    export{
        appointmentMasterCreate,
        appointmentSlotMasterGetSlots,
        appointmentSlotPerDate,
        emptySlots,
        getUserAppointments,
        setCompleteAppointment,
        getCompletedAppointments,
        getCountOfCompletedAppointments,
        getCountOfAppointment
    }