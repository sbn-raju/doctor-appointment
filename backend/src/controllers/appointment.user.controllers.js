import { pool } from "../database/connect.db.js"
import ErrorHandler from "../helpers/errorHelpers.js"
import { validationResult } from "express-validator"
import sendAppointmentAlertMessage from "../services/messages.services.js"

const currentDate = new Date(Date.now())
const formattedDate = currentDate.toLocaleDateString("en-GB")
const currentTime = new Date(Date.now())


const bookSlots = async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    })
  }
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    appointmentData,
  } = req.body
  const paymentDetailsQuery =
    "INSERT INTO user_payment_details (payment_amount, payment_date, payment_time, payment_status, razorpay_order_id, razorpay_payment_id, razorpay_signature) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *"
  const paymentDetailsValues = [
    500,
    formattedDate,
    currentTime,
    1,
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
  ]
  await pool.query("COMMIT")
  try {
    const paymentDetailsResults = await pool.query(
      paymentDetailsQuery,
      paymentDetailsValues
    )
    if (paymentDetailsResults.rowCount != 0) {
      const paymentDetailsId = paymentDetailsResults.rows[0].id
      const { name, choose_purpose, date, doctor_id, phone_no } =
        appointmentData.appointmentFormData
      const timeSlot = appointmentData.timeSlot
      const bookSlotsQuery =
        "INSERT INTO user_appointment_details (user_id, purpose_of_visit, date, time_slot, doctor_id, payment_details, mobile_no, p_name) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *"
      const bookSlotsValues = [
        40,
        choose_purpose,
        date,
        timeSlot,
        doctor_id,
        paymentDetailsId,
        phone_no,
        name,
      ]
      try {
        const bookSlotsResulsts = await pool.query(
          bookSlotsQuery,
          bookSlotsValues
        )
         if (bookSlotsResulsts.rowCount != 0) {
          const emptySlotsUpdate =
            "UPDATE appointment_slot_master SET booked_by_user_id = $1 WHERE id = $2"
          try {
            const emptySlotsUpdateResults = await pool.query(emptySlotsUpdate, [
              40,
              timeSlot,
            ])
            if (emptySlotsUpdateResults.rowCount != 0) {
              // const messageVerify = sendAppointmentAlertMessage(phone_no, date, timeSlot)
              // if(messageVerify.status == 'accepted'){
              //   return res.status(200).json({
              //     success: true,
              //     messgae: "Appointment Booked Successfull",
              //   })
              // }
              
                return res.status(200).json({
                  success: true,
                  messgae: "Appointment Booked Successfull",
                })
              
            }
          } catch (error) {
            await pool.query("ROLLBACK")
            return next(new ErrorHandler(false, `${error}`, 402))
          }
        }
      } catch (error) {
        await pool.query("ROLLBACK")
        return next(new ErrorHandler(false, `${error}`, 402))
      }
    }
  } catch (error) {
    await pool.query("ROLLBACK")
    return next(new ErrorHandler(false, `${error}`, 402))
  }
}

export { bookSlots }
