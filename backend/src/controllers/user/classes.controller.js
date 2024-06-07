import { pool } from "../../database/connect.db.js"
import crypto from "crypto"
import dotenv from "dotenv"
dotenv.config()

//USER ROUTES
const setClassBooking = async (req, res) => {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      formData,
    } = req.body
    try {
      const body = razorpay_order_id + "|" + razorpay_payment_id
      const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(body.toString())
        .digest("hex")
  
      if (expectedSignature === razorpay_signature) {
        const class_idQuery =
          "SELECT id FROM active_class_master ORDER BY createdAt DESC LIMIT 1"
        const classID = await pool.query(class_idQuery)
        const class_id = classID.rows[0].id
        const { name, email, whatsapp, city } = { ...formData }
        const payment_status = 1
        const setClassBookingQuery =
          "INSERT INTO user_class_bookings (class_id, name, email, whatsapp, payment_status, city) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *"
        const setClassBookingValues = [
          class_id,
          name,
          email,
          whatsapp,
          payment_status,
          city,
        ]
        try {
          const setClassBooking = await pool.query(
            setClassBookingQuery,
            setClassBookingValues
          )
          return res.status(200).json({
            success: true,
            data: setClassBooking.rows,
            message: "This is the set Booking",
          })
        } catch (error) {
          console.log(error)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  const getClassBooking = (req, res) => {
    return res.status(200).json({
      success: true,
      message: "This is the Get class Booking Routes",
    })
  }
  
  const getClassBookingById = (req, res) => {
    return res.status(200).json({
      success: true,
      message: "This is the get class booking route by id",
    })
  }
  
  const putClassBooking = (req, res) => {
    return res.status(200).json({
      success: true,
      message: "This is the put class Booking route",
    })
  }
  
  const deleteClassBooking = (req, res) => {
    return res.status(200).json({
      success: true,
      message: "This is the delete class Booking Route",
    })
  }
  
export {
    setClassBooking,
    getClassBooking,
    getClassBookingById,
    putClassBooking,
    deleteClassBooking,
}