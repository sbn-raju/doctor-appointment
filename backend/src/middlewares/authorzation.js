import ErrorHandler from "../helpers/errorHelpers.js"

const adminAutho = (req,res,next)=>{
    const user = req.user
    if(user.role_id !== "Admin" || !user){
        return next(new ErrorHandler(false, "Only Admin have the Access to this Page" , 401))
    }
   
    else if(user.role_id === 'Admin'){
        next()
    }
}


export {
    adminAutho
}