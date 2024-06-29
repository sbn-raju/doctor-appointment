const bookSlots = async(req,res,next)=>{
    const{user_id, purpose_of_visit, date, time_slot, doctor_id, payment_details} = req.body;
    const bookSlotsQuery = "INSERT INTO user_appointment_details (user_id, purpose_of_visit, date, time_slot, doctor_id, payment_details) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *";
    const bookSlotsValue = [user_id, purpose_of_visit, date, time_slot, doctor_id, payment_details];
    try {
        
    } catch (error) {
        
    }
}