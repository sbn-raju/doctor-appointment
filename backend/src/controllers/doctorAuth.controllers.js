import {pool} from "../database/connect.db.js"
import ErrorHandler from "../helpers/errorHelpers.js"


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
    getAllDoctor
}