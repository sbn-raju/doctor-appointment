import { instance } from "../config/paymentConfig.js";
import ErrorHandler from "../helpers/errorHelpers.js";
import { pool } from "../database/connect.db.js";


const paymentController = async (req, res) => {
    const { amount } = req.body;
    const options = {
      amount: Number(amount * 100), // amount in the smallest currency unit
      currency: "INR",
    };
    const order = await instance.orders.create(options);
    return res.status(200).json({
      success: true,
      order: order,
    });
};








const getPaymentsDetailsForUser = async(req,res,next)=>{
  const user = req.user
  if(!user.user_id){
    return next(new ErrorHandler(false, "Please Login", 402))
  }
  const classPaymentQuery = "SELECT DISTINCT class_booking.payment_details, user_payment_details.payment_date,user_payment_details.payment_amount, user_payment_details.razorpay_payment_id FROM class_booking JOIN user_payment_details ON class_booking.payment_details = user_payment_details.id  WHERE class_booking.user_id = $1;"

  const appointmentPaymentQuery = "SELECT DISTINCT user_appointment_details.payment_details,user_payment_details.payment_date,user_payment_details.payment_amount, user_payment_details.razorpay_payment_id  FROM user_appointment_details JOIN user_payment_details ON user_appointment_details.payment_details = user_payment_details.id WHERE user_appointment_details.user_id = $1; " 

  const paymentUserId = [user.user_id];
  try {
    const appointmentPaymentResults = await pool.query(appointmentPaymentQuery, paymentUserId);
    const classPaymentResults = await pool.query(classPaymentQuery, paymentUserId);
    if(appointmentPaymentResults.rowCount!=0 || classPaymentResults.rowCount!=0 )
      {
        const paymentDetails = classPaymentResults.rows.concat(appointmentPaymentResults.rows)
      return res.status(200).json({
        success: true,
        message: "All Payments",
        data: paymentDetails,
      })
    }
    else{
      // console.log(appointmentPaymentResults.rows, classPaymentResults.rows)
      return res.status(200).json({
        success: true,
        message: "No Payments",
      })
    }
  } catch (error) {
    console.log(error)
    return next(new ErrorHandler(false, `${error}`, 402))
  }
}






const getPayments = async(req,res,next)=>{
  const classPaymentQuery = "SELECT class_booking.name, class_booking.whatsapp_no, class_booking.payment_details, user_payment_details.payment_date,user_payment_details.payment_time,user_payment_details.payment_amount, user_payment_details.razorpay_order_id FROM class_booking JOIN user_payment_details ON class_booking.payment_details = user_payment_details.id  ORDER BY class_booking.created_at DESC"

  const appointmentPaymentQuery = "SELECT user_appointment_details.p_name, user_appointment_details.mobile_no, user_appointment_details.payment_details,user_payment_details.payment_date,user_payment_details.payment_time,user_payment_details.payment_amount, user_payment_details.razorpay_order_id FROM user_appointment_details JOIN user_payment_details ON user_appointment_details.payment_details = user_payment_details.id ORDER BY user_appointment_details.created_at DESC" 
  try {
    const appointmentPaymentResults = await pool.query(appointmentPaymentQuery);
    const classPaymentResults = await pool.query(classPaymentQuery);
    if(appointmentPaymentResults.rowCount!=0 && classPaymentResults.rowCount!=0 )
      {
        const paymentDetails = classPaymentResults.rows.concat(appointmentPaymentResults.rows)
      return res.status(200).json({
        success: true,
        message: "All Payments",
        data: paymentDetails,
      })
    }
    else{
      return res.status(200).json({
        success: true,
        message: "No Payments",
      })
    }
  } catch (error) {
    console.log(error)
    return next(new ErrorHandler(false, `${error}`, 402))
  } 
}







export {
    paymentController,
    getPaymentsDetailsForUser,
    getPayments
}

  