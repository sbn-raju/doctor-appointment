import { validationResult } from "express-validator"
import {pool} from "../database/connect.db.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import ErrorHandler from "../helpers/errorHelpers.js";
import { configDotenv } from "dotenv";

const adminAuthRegistetController = async(req,res,next)=>{
    const { username, password, email, mobile_no} = req.body
    try {
        const hashedPassword = await bcrypt.hash(password, 10)

        const isUserExistQuery = 'SELECT * FROM admin_master WHERE username = $1 OR email = $2'
        const isUserExistValues = [username, email]
        const isUserExistResult = await pool.query(isUserExistQuery, isUserExistValues)
        // console.log(isUserExistResult)
        if (isUserExistResult.rowCount != 0) {
            return next(new ErrorHandler(false, "User with this email or username already exists" , 401))
        }


        const newUserQuery = 'INSERT INTO admin_master (username,password,email,mobile_no) VALUES ($1,$2,$3,$4) RETURNING *'
        const newUserValues = [username,hashedPassword,email,mobile_no]

        const newUserResult = await pool.query(newUserQuery, newUserValues);
        const admin = newUserResult.rows[0]
        // console.log(newUserResult)
        const adminData = {
            admin: {
                admin_id:admin.id,
                username,
            }
        }
        // console.log(adminData)
        const token = await jwt.sign(adminData, process.env.JWT_SECERT_KEY)

        // console.log(token)
        return res.status(201).json({
            message: "User Created Successfully",
            data: {
                username,
                email,
                mobile_no
            },
            token
        })

    } catch (error) {
        return next(new ErrorHandler(false, `${error}`, 401))
    }
}



const adminAuthLoginController = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(401).json({
            success:false,
            message:errors.array()
        })
    }
    const {username, password} = req.body
    console.log(username, password)
    if(!(username || password)){
        return next(new ErrorHandler(false, "Username and Password required" , 401))
    }
    const fetchAdminQuery = "SELECT * FROM admin_master WHERE username = $1"
    const fetchAdminValues = [username]
    try {
        const fetchAdmin = await pool.query(fetchAdminQuery, fetchAdminValues);
        const admin = fetchAdmin.rows[0]
        // console.log(admin);
        if(!admin){
            return next(new ErrorHandler(false, "Username Not Found" , 401))
        } 
        const comparePassword = await bcrypt.compare(password, admin.password);
        if(!comparePassword){
            return next(new ErrorHandler(false, "Incorrect Password" , 401))
        }
        const adminData = {
            user:{
                admin_id:admin.id,
                username,
                role_id:"Admin"
            }
        }
        const token = jwt.sign(adminData, process.env.JWT_SECERT_KEY)
        //Creating Session 
        req.session.admin = adminData.user
        //Creating Cookie
        res.cookie("admin_auth_token",token,{
            httpOnly:true,
            maxAge: Date.now() + 60 * 1000
        })

        return res.status(200).json({
            message: "User Logged in successfully",
            token: token
        })

    } catch (error) {
        return next(new ErrorHandler(false, "Incorrect Password" , 401))
    }
}

const adminAuthLogoutController = async(req,res,next)=>{
    try {
        if(req.session){
            req.session.destroy((err)=>{
                if(err){
                    return next(new ErrorHandler(false, "Failed to logout" , 401))
                }
                else{
                    res.clearCookie("session_Id")
                    res.clearCookie("a_Id")
                    return res.status(200).json({
                        success:true,
                        message:"Logged Out Successfully"
                    })
                }
            })
        }
        else{
            return next(new ErrorHandler(false, "Session Not Found" , 401))
        }
    } catch (error) {
        return next(new ErrorHandler(false, `${error}` , 401))
    }
}

export {
    adminAuthLoginController,
    adminAuthRegistetController,
    adminAuthLogoutController
}