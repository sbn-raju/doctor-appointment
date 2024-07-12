import { Router } from "express"
import {
  setClass,
  getClass,
  getClassWithId,
  putClass,
  deleteClass,
  closeBookings,
  terminateClass,
  classLink,
  getUpcomingClass,
  getUpcomingClassDate,
  getBatchMembers,
  getOngoingClass,
  getClassBookingData
} from "../controllers/classes.controllers.js"
import { setClassValidator } from "../helpers/validator.js"


const classRoute = Router()



// Admin Routes
// Create the new Class Route Passing Paramaters
classRoute.route("/admin/setClass").post(setClassValidator, setClass) //Correct calling Check
// Close the bookings of the Upcoming Class
classRoute.route("/admin/close-Bookings").post(closeBookings)//Correct Calling Check
// Terminating the Ongoing Class
classRoute.route("/admin/terminate-Bookings").post(terminateClass)//Correct Calling Check
// Updating the Class link daily for the Ongoing Class
classRoute.route("/admin/class-link").post(classLink)//Correct Calling Check
// Read the all classes
classRoute.route("/admin/getClass").get(getClass) //Correct calling Check
// Read the class using the id
classRoute.route("/admin/getClass/:id").get(getClassWithId) //Correct calling Check
classRoute.route("/admin/upcoming-class").get(getUpcomingClass) //Correct calling Check
classRoute.route("/admin/ongoing-class").get(getOngoingClass) //Correct calling Check
classRoute.route("/admin/upcoming-class/date").get(getUpcomingClassDate)//Correct calling Check
classRoute.route("/admin/class/batches").post(getBatchMembers)//Correct calling Check
classRoute.route("/admin/users/booked").get(getClassBookingData)//Correct calling Check
// Update the Classes using id
classRoute.route("/admin/putClass/:id").put(putClass) //Correct calling Check
// Delete the Classes using id
classRoute.route("/admin/deleteClass/:id").delete(deleteClass) //Correct calling Check




export default classRoute