import {instance} from "../config/paymentConfig.js"
import ErrorHandler from "../helpers/errorHelpers.js";


const classPaymentOrderInit = async (req,res)=>{
    const {amount} = req.body;
    const options = {
        amount : Number(amount * 100),
        currency:"INR",
    }
    try{
        const order = await instance.orders.create(options);
        if(!order){
            return res.status(400).json({
                success:false,
                message:"This is not the Order",
            });
        }
        else{
            return res.status(200).json({
                success:false,
                order:order
            });
        }
    }catch(error){
        return next(new ErrorHandler(error, 402))
    }   
}


export {
    classPaymentOrderInit
}