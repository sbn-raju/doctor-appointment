import { Router } from "express"
import {
  setClass,
  getClass,
  getClassWithId,
  putClass,
  deleteClass
} from "../controllers/classes.controllers.js"


const classRoute = Router()



// Admin Routes
// Create the new Class Route Passing Paramaters
classRoute.route("/admin/setClass").post(setClass) //Correct calling Check
// Read the all classes
classRoute.route("/admin/getClass").get(getClass) //Correct calling Check
// Read the class using the id
classRoute.route("/admin/getClass/:id").get(getClassWithId) //Correct calling Check
// Update the Classes using id
classRoute.route("/admin/putClass/:id").put(putClass) //Correct calling Check
// Delete the Classes using id
classRoute.route("/admin/deleteClass/:id").delete(deleteClass) //Correct calling Check




export default classRoute