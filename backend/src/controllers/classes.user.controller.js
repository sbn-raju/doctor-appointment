import { pool } from "../database/connect.db.js"
import crypto from "crypto"
import dotenv from "dotenv"
import ErrorHandler from "../helpers/errorHelpers.js";


dotenv.config()


const currentDate = new Date(Date.now())
const formattedDate = currentDate.toLocaleDateString('en-GB');


const currentTime = new Date(Date.now())



//USER ROUTES
const setClassBooking = async (req, res, next) => {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      formData,
    } = req.body
    const {name, email, whatsapp, city} = {...formData}
    let paymentDetailsId 
    let upcomingClassDetailsId
    try { 
        await pool.query('BEGIN');
        const paymentDetailsQuery = "INSERT INTO user_payment_details (payment_amount, payment_date, payment_time, payment_status, razorpay_order_id, razorpay_payment_id, razorpay_signature) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *"
        const paymentDetailsValues = [1000, formattedDate, currentTime, 1, razorpay_order_id, razorpay_payment_id, razorpay_signature]
        try {
          const paymentDetailsResults = await pool.query(paymentDetailsQuery, paymentDetailsValues);
          paymentDetailsId = paymentDetailsResults.rows[0].id
          const upcomingClassIdQuery = "SELECT id FROM class_master WHERE status = $1 and isactive IS NULL" 
          try {
            const upcomingClassIdResults = await pool.query(upcomingClassIdQuery,[0]);
            upcomingClassDetailsId = upcomingClassIdResults.rows[0].id
          } catch (error) {
            await pool.query('ROLLBACK');
            return next(new ErrorHandler(false, `${error}` ,400));
          }
        } catch (error) {
          await pool.query('ROLLBACK');
          return next(new ErrorHandler(false, `${error}` ,400));
        }
        const classBookingQuery = "INSERT INTO class_booking (user_id, class_id, name, email, whatsapp_no, city, payment_details) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *"
        const classBookingValues = [40, upcomingClassDetailsId, name, email, whatsapp,city,paymentDetailsId]
        try {
          const classBookingResults = await pool.query(classBookingQuery, classBookingValues)
          if(classBookingResults.rowCount!=0){
            await pool.query("COMMIT");
            return res.status(200).json({
              success:true,
              message:"The Class is Booked",
              data:classBookingResults.rows[0]
            })
          }
        } catch (error) {
          await pool.query('ROLLBACK');
          return next(new ErrorHandler(false, `${error}` ,400));
        }
    } catch (error) {
      await pool.query('ROLLBACK');
      console.log(error)
      return next(new ErrorHandler(false, `${error}` ,400));
    }
}






const getClassesBooked = async(req,res,next)=>{
  const {user_id} = req.body
  const getClassesBookedQuery = "SELECT DISTINCT class_booking.class_id, class_master.class_date, class_master.class_time, class_master.class_link FROM class_booking JOIN class_master ON class_booking.class_id = class_master.id WHERE class_booking.user_id = $1;"
  try {
    const getClassBookedResults = await pool.query(getClassesBookedQuery, [user_id]);
    if(getClassBookedResults.rowCount!=0){
      return res.status(200).json({
        success:true,
        message:"All Class Bookings",
        data:getClassBookedResults.rows
      })
    }

  } catch (error) {
    console.log(error)
    return next(new ErrorHandler(false, `${error}` ,400));
  }
}
  



  const getClassBooking = (req, res) => {
    return res.status(200).json({
      success: true,
      message: "This is the Get class Booking Routes",
    })
}
  
  const getClassBookingById = (req, res) => {
    return res.status(200).json({
      success: true,
      message: "This is the get class booking route by id",
    })
  }
  
  const putClassBooking = (req, res) => {
    return res.status(200).json({
      success: true,
      message: "This is the put class Booking route",
    })
  }
  
  const deleteClassBooking = (req, res) => {
    return res.status(200).json({
      success: true,
      message: "This is the delete class Booking Route",
    })
  }
  
export {
    setClassBooking,
    getClassBooking,
    getClassesBooked,
    getClassBookingById,
    putClassBooking,
    deleteClassBooking,
}