import { pool } from "../database/connect.db.js"
import ErrorHandler from "../helpers/errorHelpers.js"
import { body, param, validationResult } from "express-validator"
import dotenv from "dotenv"
dotenv.config()

// If Status of the class is 0 then it is open for the booking 
// Admin must close the booking to updated the class_link in the database and to add new Class
// We will update the class isactvive to 0 before adding link and creating new class and while updating closing the bookings 
// If isActive of the class is 1 then the class is terminated
// If isActive of the class is 0 then the class is ongoing 


//Creating the class using the details given by the admin with isActive to null and status to 0
const setClass = async (req, res, next) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({
      succes:true,
      message:"Input Validation failed",
      data:errors.array()
    })
  }
  // Fetching the previous class to check wheather the class is closed
  // or not if class is not present then create the first class
  const fetchPreviousClass = "SELECT status FROM class_master ORDER BY created_at DESC LIMIT $1"
  try {
    const fetchPreviousClassResults = await pool.query(fetchPreviousClass,[1]);
    if(fetchPreviousClassResults.rowCount != 0){
      if(fetchPreviousClassResults.rows[0].status != 1){
        return res.status(201).json({
          success:true,
          message:"Please Close the Previous Class Bookings",
        })
      }
    }
  } catch (error) {
    return next(new ErrorHandler(false, `Could not fetch the previous Class due to ${error}` ,400))
  }

  const {class_date,class_time, class_fees, created_at, created_by, updated_at,updated_by} = req.body;

  if(!(class_date || class_time || class_fees || created_at || created_by || updated_at || updated_by)){
    return next(new ErrorHandler(false, "Provide all the Input Fields" ,400));
  }
  const timeStamp = new Date();
  const currentStatusOfClass = 0;

  const setClassQuery = "INSERT INTO class_master (class_date,class_time, class_fees, status, created_at, created_by, updated_at, updated_by) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *";
  const setClassValues = [class_date,class_time, class_fees, currentStatusOfClass, timeStamp, created_by, timeStamp, updated_by];

  try {
    const setClassResult = await pool.query(setClassQuery, setClassValues);
    if(setClassResult.rowCount!=0){
      return res.status(201).json({
        success:true,
        message:"DataBase Created",
        data:setClassResult.rows[0]
      })
    }
    else{
      return next(new ErrorHandler(false, "Class Not created" ,400));
    }

  } catch (error) {
    return next(new ErrorHandler(false, `${error}` ,400));
  }
}

//Closing the bookings of the class and updating the isActive status to Zero
const closeBookings = async(req,res,next)=>{

  const newStatusOfClass = 1
  const limit = 1
  const newIsActiveStatus = 0


  const closeBookingsQuery = "UPDATE class_master SET status = $1, isactive = $2 WHERE id = (SELECT id FROM class_master ORDER BY created_at DESC LIMIT $3)"
  const closeBookingsValue = [newStatusOfClass, newIsActiveStatus, limit];
  try {
    const closeBookingsResults = await pool.query(closeBookingsQuery, closeBookingsValue);
    if(closeBookingsResults.rowCount!=0){
      return res.status(200).json({
        success:true,
        message:"This Last class closed for bookings and is Active now"
      })
    }
  } catch (error) {
    return next(new ErrorHandler(false, `${error}` ,400));
  }
}

//Terminiting the Class to update the link for the new batch
const terminateClass = async(req,res,next)=>{
  const checkingClassStatusQuery = "SELECT status, id FROM class_master ORDER BY created_at DESC LIMIT $1"
  
  try {
    
    const checkingClassStatusResults = await pool.query(checkingClassStatusQuery, [1]);
    console.log(checkingClassStatusResults.rows[0].status);
    if(checkingClassStatusResults.rows[0].status != 1){
      const idOfTerminatingClass = checkingClassStatusResults.rows[0].id
      const isActiveTerminating = 1
      const terminateClassQuery = "UPDATE class_master SET isactive = $1 WHERE id = $2"
      const terminateClassValues = [isActiveTerminating, idOfTerminatingClass];
      try {
        const terminateClassResults = await pool.query(terminateClassQuery, terminateClassValues);
        if(terminateClassResults.rowCount!=0){
          return res.status(201).json({
          success:true,
          message:"The Class is terminated Successfully",
          })
        }
      } catch (error) {
        return next(new ErrorHandler(false, `Error in Terminating ${error}` ,400));
      }
    }
  } catch (error) {
    return next(new ErrorHandler(false, `Error in Fetching Latest Class due to${error}` ,400));
  }
}


const classLink = async(req,res,next)=>{
    
}





//Getting all the Previous Classes
const getClass = async (req, res) => {
  const getClassQuery = "SELECT * FROM class_master"
  try {
    const getAllClasses = await pool.query(getClassQuery)
    return res.status(200).json({
      success: true,
      data: getAllClasses.rows,
      message: "All the Classes Data",
    })
  } catch (error) {
    return next(new ErrorHandler(error, 400))
  }
}



//getting class by Id
const getClassWithId = async (req, res) => {
  const { id } = req.params
  const getClassWithIdQuery = "SELECT * FROM class_master WHERE id = $1"
  const getClassWithIdValues = [id]
  try {
    const getClassById = await pool.query(
      getClassWithIdQuery,
      getClassWithIdValues
    )
    if (getClassById.rowCount != 0) {
      return res.status(200).json({
        success: true,
        data: getClassById.rows,
        message: "All the Class Data",
      })
    } else {
      return res.status(200).json({
        success: true,
        message: "Id Not Found",
      })
    }
  } catch (error) {
    return next(new ErrorHandler(error, 400))
  }
}



//Updating the class based on the details given by the admin
const putClass = async (req, res, next) => {
  const validationRules = [
    body("class_date", "Date should be Provided").isDate().notEmpty(),
    body("class_time", "Time should be provided").notEmpty(),
    body("class_fees", "Pleas give money").isFloat().notEmpty(),
    body("updated_by").isInt().notEmpty().withMessage("Admin please"),
    body("created_by").isInt().notEmpty().withMessage("Nothing"),
  ]
  await Promise.all(validationRules.map((validate) => validate.run(req)))

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    console.log(errors.array())
    return next(new ErrorHandler(errors.array(), 400))
  }
  const { id } = req.params
  const { class_date, class_time, class_fees, updated_by, created_by } =
    req.body
  const putClassQuery =
    "UPDATE class_master SET class_date=$1, class_time=$2, class_fees=$3, updated_by=$4, created_by=$5 WHERE id=$6"
  const putClassValues = [
    class_date,
    class_time,
    class_fees,
    updated_by,
    created_by,
    id,
  ]
  try {
    const updateClass = await pool.query(putClassQuery, putClassValues)
    if (updateClass.rowCount != 0) {
      return res.status(200).json({
        success: true,
        data: updateClass.rows,
        message: "This is the updated Class",
      })
    } else {
      return res.status(200).json({
        success: true,
        message: "Id not found",
      })
    }
  } catch (error) {
    return next(new ErrorHandler(error, 400))
  }
}




//Deleteing the class by the Id
const deleteClass = async (req, res, next) => {
  const { id } = req.params
  const deleteClassQuery = "DELETE FROM class_master WHERE id = $1"
  const deleteClassValue = [id]
  try {
    const deleteClass = await pool.query(deleteClassQuery, deleteClassValue)
    if (deleteClass.rowCount != 0) {
      return res.status(200).json({
        success: true,
        data: deleteClass,
        message: "This is the delete classs Route",
      })
    } else {
      return res.status(200).json({
        success: true,
        message: "Id not found",
      })
    }
  } catch (error) {
    return next(new ErrorHandler(error, 400))
  }
}





export {
  closeBookings,
  terminateClass,
  getClass,
  getClassWithId,
  setClass,
  putClass,
  deleteClass,
}