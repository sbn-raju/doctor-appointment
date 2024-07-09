import {check} from "express-validator";

const appointmentBookingValidator = [
    check("user_id","Login before booking Appointment").not().isEmpty().isNumeric(),
    check("purpose_of_visit","Purpose of visit is empty").not().isEmpty().isString(),
    check("date", "Date is not selected").not().isEmpty().isDate(),
    check("time_slot","Time Slot is not selected").not().isEmpty().isNumeric(),
    check("doctor_id","Please select Doctor of your choice").not().isEmpty().isNumeric(),
    check("payment_details","Payment is Not Recived").not().isEmpty().isNumeric()
]


const emptySlotsValidator = [
    check("date","Date is Required").not().isEmpty().isDate(),
    check("doctor_id","Please select Doctor of your choice").not().isEmpty().isNumeric()
]

const setClassValidator = [
    check("class_date", "Date is not selected").not().isEmpty().isDate(),
    check("class_time", "Time is not set").not().isEmpty().isTime(),
    check("class_fees", "Fees is not entered").not().isEmpty().isFloat(),
]


const adminAuth = [
    check("username","Username is Required").not().isEmpty().isAlphanumeric().trim(),
    check("password","Password is Required").not().isEmpty().isString()
]

export {
    appointmentBookingValidator,
    emptySlotsValidator,
    setClassValidator,
    adminAuth
}