import { pool } from "../database/connect.db.js"
import ErrorHandler from "../helpers/errorHelpers.js"
import { sendOTPMessage } from "../services/messages.services.js";
import jwt from "jsonwebtoken";
let currentTimeStamp = new Date();


const generateOtp = async ()=>{
    return Math.floor(100000 + Math.random() * 900000)
}

const sendOneTimePasswordRegisterController = async(req,res,next)=>{
    try {
      const {phoneNumber} = req.body;
      console.log(phoneNumber);
    if(!phoneNumber){
      return res.status(400).json({
        success: false,
        error: "Phone number is required"
      });
    }
    const generatedOtp = await generateOtp()
    const otpNotVerified = 0
    const verifyUserQuery = "SELECT * FROM user_registration WHERE mobile_no = $1"
    const verifyUserValues = [phoneNumber];
    try {
      const verifyUserResults = await pool.query(verifyUserQuery, verifyUserValues);
      if(verifyUserResults.rowCount!=0){
        const setOTPQuery = "UPDATE user_registration SET generated_otp = $1, otp_verification = $2 WHERE mobile_no = $3"
        const setOTPValues = [generatedOtp, otpNotVerified, phoneNumber];
        try {
          const setOTPResults = await pool.query(setOTPQuery,setOTPValues);
          if(setOTPResults.rowCount!=0  ){
            // && sendOTPMessage(phoneNumber, generatedOtp)
            return res.status(200).json({
                success:true,
                message:"OTP sent to the Number you have entered",
                data:setOTPResults.rows
            })
          }
        } catch (error) {
          return next(new ErrorHandler(false, `${error}`, 402))
        }
      }
      
    } catch (error) {
      return next(new ErrorHandler(false, `${error}`, 402))
    }
    
    const sendOTPQuery = "INSERT INTO user_registration (mobile_no, generated_otp) VALUES ($1,$2) RETURNING *"
    const sendOTPValues = [phoneNumber, generatedOtp];
    try {
      const sendOTPResults = await pool.query(sendOTPQuery,sendOTPValues);
      if(sendOTPResults.rowCount!=0 ){
        // && sendOTPMessage(phoneNumber, generatedOtp)
        return res.status(200).json({
            success:true,
            message:"OTP sent to the Number you have entered",
            data:sendOTPResults.rows
        })
      }
    } catch (error) {
      return next(new ErrorHandler(false, `${error}`, 402))
    }
    } catch (error) {
      return next(new ErrorHandler(false, `${error}`, 402))
    }
    
}



const verifyOneTimePasswordRegisterController = async(req,res,next)=>{
  const {phoneNumber, code} = req.body;
  if(!phoneNumber || !code){
    return res.status(400).json({
      success: false,
      error: 'Phone number and verification code are required'
    });
  }
  const otpVerified = 1
  try {
    const verifyUserQuery = "SELECT * FROM user_registration WHERE mobile_no = $1"
  const verifyUserValue = [phoneNumber]
  const verifyUserResults = await pool.query(verifyUserQuery, verifyUserValue)
  if(verifyUserResults.rowCount != 0 && (verifyUserResults.rows[0].otp_verification != otpVerified || verifyUserResults.rows[0].otp_verification == null) ){
    if(verifyUserResults.rows[0].generated_otp == code){
      const setOTPQuery = "UPDATE user_registration SET otp_verification = $1 WHERE mobile_no = $2"
      const setOTPValues = [otpVerified, phoneNumber]
      const setOTPResults = await pool.query(setOTPQuery, setOTPValues);
      if(setOTPResults.rowCount!=0){
        const userData = {
          user:{
            user_id : verifyUserResults.rows[0].id,
            mobile_no :verifyUserResults.rows[0].mobile_no
          }
        }
        const token = jwt.sign(userData, process.env.JWT_SECERT_KEY, {expiresIn: '15m'})
        return res.status(200).json({
          success:true,
          message:"OTP Verifiedddd",
          token:token
        })
      }
    }
    else{
      return res.status(302).json({
        success:false,
        message:"OTP is invallid",
      })
    }
  }
  else{
    return res.status(302).json({
      success:false,
      message:"OTP is invalid",
    })
  }
  } catch (error) {
    return next(new ErrorHandler(false, `${error}`, 402))
  }

  
}



const userLogoutController = async(req,res,next)=>{
  req.session.destroy(err => {
    if (err) {
      return next(new ErrorHandler(false, `Error is due to ${err.message}`, 403))
    }
    res.clearCookie('connect.sid'); 
    res.send('Logged out');
  });
}









export {
    verifyOneTimePasswordRegisterController,
    sendOneTimePasswordRegisterController,
    userLogoutController
}