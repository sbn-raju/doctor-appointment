import { pool } from "../database/connect.db.js"
import ErrorHandler from "../helpers/errorHelpers.js"
import {authClientWithNumber, verify_sid} from "../services/twilio.services.js";
let currentTimeStamp = new Date();




const sendOneTimePasswordRegisterController = async(req,res,next)=>{
    const {phoneNumber} = req.body;
    if(!phoneNumber){
      return res.status(400).json({
        success: false,
        error: "Phone number is required"
      });
    }
     
     const sendOTPQuery = "INSERT INTO user_registration (mobile_no) VALUES ($1) RETURNING *"
     const sendOTPValues = [phoneNumber];
    try{
      const verification = await authClientWithNumber.verify.v2.services(verify_sid)
      .verifications
      .create({
        to: `${phoneNumber}`,
        channel: 'sms'
      });
      const sendOTPResults = await pool.query(sendOTPQuery, sendOTPValues);
      if(sendOTPResults.rowCount != 0 && verification.status == "pending"){
        return res.status(200).json({
          success: true, 
          status: verification.status,
          data:sendOTPResults.rows
        })
      }
    }catch(error){
      console.error('Error initializing verification: ',error);
      res.status(500).json({
        status: false,
        error,
      });
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

  try{
    const verificationCheck = await authClientWithNumber.verify.v2.services(verify_sid)
    .verificationChecks
    .create({
      to: `${phoneNumber}`,
      code
    });
    const verifiedPhoneNumberQuery = "UPDATE user_registration SET otp_verification = $1, updated_at = $2 WHERE id = (SELECT id from user_registration WHERE mobile_no = $3)"
    const verifiedPhoneNumberValues = [1, currentTimeStamp, phoneNumber];
    try {
        const verifiedPhoneNumber = await pool.query(verifiedPhoneNumberQuery, verifiedPhoneNumberValues);
        req.session.mobile_no = phoneNumber;
        return res.status(200).json({
            success:true,
            message:"Verification Successfull",
            data:verifiedPhoneNumber
        })
    } catch (error) {
        return next(new ErrorHandler(false, `Error is due to ${error.message}`, 403))
    }
    
  }catch(error){
    console.error('Error checking verification', error);
    res.status(500).json({success: false, error});
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