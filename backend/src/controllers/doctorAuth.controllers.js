import {pool} from "../database/connect.db.js"
import ErrorHandler from "../helpers/errorHelpers.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";


const setDoctor = async(req,res)=>{
    const {name, username, password} = req.body
    const {admin_id} = req.user
    try {

        //checking if any user with same username exists
        const existUser=await pool.query("SELECT * FROM doctor_master WHERE username=$1",[username]);
        if(existUser.rows.length > 0) {
            return res.status(400).json({message: "Doctor already in existance"});
        }


        const created_by = admin_id;
        const updated_by = admin_id;
        //encrypting the password using bcrypt
        const passwordHash=await bcrypt.hash(password, 10);
        //creating the user
        const newUser=await pool.query(
            "INSERT INTO doctor_master (name, username, password, created_at, updated_at, created_by, updated_by) VALUES ($1,$2,$3,NOW(),NOW(),$4, $5) RETURNING *",[name,username,passwordHash,created_by, updated_by]
        );
        const userData = {
            user:{
               id:newUser.rows[0].id,
               username:newUser.rows[0].username
            }
        };
        const authToken = jwt.sign(userData, "DUMMYKEY");
        
        res.status(201).cookie("doctorToken",authToken).json({message:"Doctor succesfully registered",user:newUser.rows[0],token:authToken});
    } catch (err) {
        console.error(err.message);
        res.status(500).json({error: err.message});
    }
}




const loginDoctor = async(req,res)=>{
    try {
        const {username,password}=req.body;
        const result=await pool.query("SELECT * FROM doctor_master WHERE username=$1",[username]);
        if(result.rows.length==0) {
            return res.status(400).json({message:"User doesnt exist"});
        }
        const user = result.rows[0];
        console.log(user);
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) {
            return res.status(400).json({message:"Invalid credentials"});
        }
        const userData = {
            user:{
               id:user.id,
               username:user.username
            }
        };
        //asigning a token which expires in 1 hour
        const token = jwt.sign(userData,"DUMMYKEY");  
        //deleting the user password so that it doesnt gets corrputed
        delete user.password;
        
        res.status(200)
        .cookie("doctorToken_l", token)
        .json({
            message:"Login succesfull",
            token
        })
        } catch (err) {
            console.error(err.message);
            res.status(500).json({error:err.message});
        }
}


const getAllDoctor = async(req,res,next)=>{
    const getAllDoctor = "SELECT id, name FROM doctor_master"
    try {
        const getAllDoctors = await pool.query(getAllDoctor)
        return res.status(200).json({
            success:true,
            message:"All Doctors",
            data:getAllDoctors.rows
        })
    } catch (error) {
        return next(new ErrorHandler(false, `${error}` ,400));
    }
}

export {
    getAllDoctor,
    setDoctor,
    loginDoctor
}