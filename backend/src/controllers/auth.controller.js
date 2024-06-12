import { pool } from "../database/connect.db.js"
import ErrorHandler from "../helpers/errorHelpers.js"
const loginController = (req,res)=>{
      return res.status(200).json({
        success:true,
        message:"This is Login Controller"
      })
}
const generateOtpRegisterController = async(req,res,next)=>{
    
}

const personalDetailsRegisterController = async(req,res,next)=>{
    try {
        //This is the line of code where the the personal details of the user is beign 
        //fetched from the frontend
        const{name, date_of_birth, gender, mobile_no, email} = req.body
       

        if(!(name || mobile_no || date_of_birth || email || gender)){
            return res.status(302).json({
                success:false,
                message:"Fill all the Fields Properly"
            })
        }
        //Verification of the user wheather user is present in the database or not
        //If the user is a Pre-existing user then return user from here itself
        const userVerifyNoQuery = "SELECT * FROM user_registration WHERE mobile_no = $1 OR email = $2"
        const userVerifyNoValues = [mobile_no, email]
        try {
            const userExist = await pool.query(userVerifyNoQuery, userVerifyNoValues);
            if(userExist.rowCount != 0){
               return res.status(409).json({
                success:false,
                message:"Account With this Mobile Number Or With this Email Exist"
               })
            }
        } catch (error) {
            return next(new ErrorHandler(`Error in finding the user ${error.message}`, 402))
        }
        //The above piece of code is for finding the existing user of the user is not present 
        //then the user personal details will get stored in the user_registration Table 
        const createUserPersonalDetailsQuery = 'INSERT INTO user_registration (name, date_of_birth, gender, mobile_no, email) VALUES ($1,$2,$3,$4,$5) RETURNING *'
        const createUserPersonalDetailsValues = [name, date_of_birth, gender, mobile_no, email];
        try {
            const newUserPersonalDetails = await pool.query(createUserPersonalDetailsQuery, createUserPersonalDetailsValues);
            //Returning the response body if the data is inserted into the table user_registration
            if(newUserPersonalDetails.rowCount != 0){
                return res.status(200).json({
                    success:true,
                    message:"Successfully Stored Personal Details",
                    data:newUserPersonalDetails.rows[0]
                })
            }
        } catch (error) {
            //Returning Error is error occured in storing the data into the table
            return next(new ErrorHandler(false, `Error in Storing the Personal Details ${error.message}`, 409))
        }

    } catch (error) {
        //Returning Error class if any error occured in storing the data into the database
        return next(new ErrorHandler())
    }
}




export {
    personalDetailsRegisterController,
    loginController
}