import { pool } from "../database/connect.db.js"
import { encryptToken } from "../helpers/encryptToken.js";
import ErrorHandler from "../helpers/errorHelpers.js"
import { sendOTPMessage } from "../services/messages.services.js";
import jwt from "jsonwebtoken";
let currentTimeStamp = new Date();

const options = {
  httpOnly:true,
  secure:true,
  sameSite:"strict"
}


const generateAccessToken = (user)=>{
    const accessToken = jwt.sign(user, process.env.JWT_SECERT_KEY, {expiresIn:'30m'},options)
    return accessToken
}


const generateRefreshToken = (user)=>{
  const refreshToken = jwt.sign(user, process.env.JWT_SECERT_KEY, {expiresIn:'1d'}, options)
  return refreshToken
}



const generateAccessAndRefreshTokens = async(userData) =>{
    try {
      const findUserById = "SELECT * FROM user_registration WHERE id = $1"
      const findUserByIdRes = await pool.query(findUserById, [parseInt(userData.user.user_id)]);
      const user = findUserByIdRes.rows[0];
      // console.log(user)
      const accessToken = generateAccessToken(userData);
      const refreshToken = generateRefreshToken(userData);
      const updateRefreshToken = "UPDATE user_registration SET refresh_token = $1 WHERE id = $2";
      try {
        const updateRefreshTokenResult = await pool.query(updateRefreshToken, [refreshToken, user.id]);
        // console.log(updateRefreshTokenResult.rows)
        if(updateRefreshTokenResult.rowCount!=0){
          // console.log(accessToken)
          return {accessToken, refreshToken}
        }
      } catch (error) {
        console.log(error)
      }
    } catch (error) {
      console.log(error)

    }
}


const generateOtp = async ()=>{
    return Math.floor(100000 + Math.random() * 900000)
}

const sendOneTimePasswordRegisterController = async(req,res,next)=>{
    try {
      const {phoneNumber} = req.body;
      // console.log(phoneNumber);
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
          if(setOTPResults.rowCount!=0 && sendOTPMessage(phoneNumber, generatedOtp)){
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
      if(sendOTPResults.rowCount!= 0 && sendOTPMessage(phoneNumber, generatedOtp) ){
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


        const options = {
          httpOnly:true,
          secure:true,
          sameSite:"strict"
        }


        // const accessToken = jwt.sign(userData.user.user_id, process.env.JWT_SECERT_KEY, {expiresIn: '5m'})
        // const refreshToken = jwt.sign(userData,process.env.JWT_SECERT_KEY, {expiresIn:'1d'})
        const{accessToken, refreshToken} = await generateAccessAndRefreshTokens(userData)

        const encryptAccessToken = await encryptToken(accessToken)   
        // console.log(encryptAccessToken)
        // console.log(accessToken)
        // console.log(refreshToken)
        //Change the expire in production
        // console.log(refreshToken);

        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json({
          success:true,
          message:"OTP Verified",
          tokens:{
            accessToken:encryptAccessToken,
            refreshToken
          }
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
    console.log(error)
    return next(new ErrorHandler(false, `${error}`, 402))
  }

}







const refreshAccessToken = async(req,res,next)=>{
  const incomingAccessToken = req.cookies.refreshToken || req.body.refreshToken
  console.log(req.cookies);
  console.log(incomingAccessToken)

  if(!incomingAccessToken){
    return next(new ErrorHandler(false, `No incomming token`, 402))
  }

  try {
    const decodedRefreshToken = jwt.verify(incomingAccessToken,
      process.env.JWT_SECERT_KEY
    )
    // console.log(decodedRefreshToken.user.user_id);


    const findUserQuery = "SELECT * FROM user_registration WHERE id = $1"
    const findUser = await pool.query(findUserQuery, [parseInt(decodedRefreshToken.user.user_id)])
    
    
    if(findUser.rowCount!=0){
      // console.log(findUser.rows[0]);
      if(incomingAccessToken === findUser.rows[0]?.refresh_token){

         const userData = {
          user:{
              user_id:findUser.rows[0].id,
              mobile_no:findUser.rows[0].mobile_no
          }
         }


         const  {accessToken, refreshToken} = await generateAccessAndRefreshTokens(userData);
        //console.log(refreshToken)
  
        const encryptAccessToken = await encryptToken(accessToken)   

         return res
         .status(200)
         .cookie("accessToken" , accessToken ,options)
         .cookie("refreshToken" , refreshToken, options) 
         .json({
            success:true,
            tokens:{
              accessToken:encryptAccessToken,
              refreshToken
            }
         })
      }

      else{
        // console.log("Refresh token does not match the one in the database");
        return next(new ErrorHandler(false, `Invalid refresh token`, 401));
      }
    }


    else{
      // console.log("User not found");
      return next(new ErrorHandler(false, `User not found`, 404));
    }


  } catch (error) {
    // console.log("JWT verification error:", error);
    return next(new ErrorHandler(false, `Invalid token`, 401));
  }
}




const userLogoutController = async(req,res,next)=>{
  const user = req.user
  console.log(user.user_id)
  console.log("Hello");
  const isUser = 0;
  const logoutUserQuery = "UPDATE user_registration SET refresh_token = $1, otp_verification = $2 WHERE id = $3"
  const logoutUserValue = [null, isUser, user.user_id]
  try {
    const logoutUserResult = await pool.query(logoutUserQuery, logoutUserValue);
     console.log(logoutUserResult)
    if(logoutUserResult.rowCount != 0){ 
      return res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json({
        success:true,
        message:"User logged out successfully"
      })
    }
  } catch (error) {
    return next(new ErrorHandler(false, `${error}`, 401));
  }
}









export {
    verifyOneTimePasswordRegisterController,
    sendOneTimePasswordRegisterController,
    userLogoutController,
    refreshAccessToken
}