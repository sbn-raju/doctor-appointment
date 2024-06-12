import { pool } from "../../database/connect.db.js"
import ErrorHandler from "../../helpers/errorHelpers.js"
import { body, param, validationResult } from "express-validator"
import dotenv from "dotenv"
dotenv.config()



//Creating the class using the details given by the admin
const setClass = async (req, res, next) => {
  const validationRules = [
    body("class_date", "Date should be Provided").isDate().notEmpty(),
    body("class_timing", "Time should be provided").notEmpty(),
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

  const { class_date, class_timing, class_fees, updated_by, created_by } =
    req.body

  if (!(class_date, class_timing, class_fees)) {
    return next(new ErrorHandler("Provide all the Field", 402))
  }

  const setClassQuery =
    "INSERT INTO active_class_master (class_date, class_timing, class_fees, created_by, updated_by) VALUES ($1,$2,$3,$4,$5) RETURNING *"
  const setClassValues = [
    class_date,
    class_timing,
    class_fees,
    created_by,
    updated_by,
  ]
  try {
    const newClass = await pool.query(setClassQuery, setClassValues)
    return res.status(200).json({
      success: true,
      data: newClass.rows,
      message: "Successfully created class",
    })
  } catch (error) {
    console.log(error)
    return next(new ErrorHandler(error, 400))
  }
}



//Getting all the Previous Classes
const getClass = async (req, res) => {
  const getClassQuery = "SELECT * FROM active_class_master"
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
  const getClassWithIdQuery = "SELECT * FROM active_class_master WHERE id = $1"
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
    "UPDATE active_class_master SET class_date=$1, class_time=$2, class_fees=$3, updated_by=$4, created_by=$5 WHERE id=$6"
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
  const deleteClassQuery = "DELETE FROM active_class_master WHERE id = $1"
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
  getClass,
  getClassWithId,
  setClass,
  putClass,
  deleteClass,
}
