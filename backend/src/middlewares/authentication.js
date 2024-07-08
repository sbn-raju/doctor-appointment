import jwt, { decode } from "jsonwebtoken"
import ErrorHandler from "../helpers/errorHelpers.js";
import { configDotenv } from "dotenv";

const authentication = (req,res,next)=>{
    const authToken = req.cookies.a_Id ? req.cookies.a_Id : req.cookies.d_Id
    if(!authToken){
        return next(new ErrorHandler(false, "Auth Token is not present" , 403)) 
    }
    try {
        jwt.verify(authToken, process.env.JWT_SECERT_KEY,(err, decoded)=>{
            if(err){
                console.log(err);
                if (err.name === 'TokenExpiredError') {
                    return res.status(401).json({ success: false, message: 'Token has expired' });
                } else {
                    return res.status(401).json({ success: false, message: 'Invalid token' });
                }
            }
            if (!decoded.user) {
                return res.status(401).json({ success: false, message: 'Invalid token: No user data' });
            }
            req.user = decoded.user
            next();
        })
    } catch (error) {
        return res.status(401).json({ message: `${error}` });
    }
}

export {
    authentication
}