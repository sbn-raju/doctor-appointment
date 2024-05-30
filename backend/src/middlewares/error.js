export const errorMiddleware = (err,req,res,next)=>{
    err.message ||= "Internal server error"
    err.statusCode ||= 500;

    res.status(err.statusCode).json({
        success:false,
        message:err.message
    });
    next()
}