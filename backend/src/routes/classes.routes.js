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
import { adminAuthentication } from "../middlewares/authentication.js"


const classRoute = Router()



// Admin Routes
// Create the new Class Route Passing Paramaters
classRoute.route("/admin/setClass").post(adminAuthentication, setClassValidator, setClass) //Correct calling Check
// Close the bookings of the Upcoming Class
classRoute.route("/admin/close-Bookings").post(adminAuthentication, closeBookings)//Correct Calling Check
// Terminating the Ongoing Class
classRoute.route("/admin/terminate-Bookings").post(adminAuthentication, terminateClass)//Correct Calling Check
// Updating the Class link daily for the Ongoing Class
classRoute.route("/admin/class-link").post(adminAuthentication, classLink)//Correct Calling Check
// Read the all classes
classRoute.route("/admin/getClass").get(adminAuthentication, getClass) //Correct calling Check
// Read the class using the id
classRoute.route("/admin/getClass/:id").get(adminAuthentication, getClassWithId) //Correct calling Check
// Read the upcoming classes
classRoute.route("/admin/upcoming-class").get(adminAuthentication, getUpcomingClass) //Correct calling Check
// Read the oncoming classes
classRoute.route("/admin/ongoing-class").get(adminAuthentication, getOngoingClass) //Correct calling Check
// Read the upcoming classes date
classRoute.route("/admin/upcoming-class/date").get(adminAuthentication, getUpcomingClassDate)//Correct calling Check
// Read the members of the particular batch
classRoute.route("/admin/class/batches").get(adminAuthentication, getBatchMembers)//Correct calling Check
// Read the User class booking data
classRoute.route("/admin/users/booked").get(adminAuthentication, getClassBookingData)//Correct calling Check
// Update the Classes using id
classRoute.route("/admin/putClass/:id").put(adminAuthentication, putClass) //Correct calling Check
// Delete the Classes using id
classRoute.route("/admin/deleteClass/:id").delete(adminAuthentication, deleteClass) //Correct calling Check




export default classRoute