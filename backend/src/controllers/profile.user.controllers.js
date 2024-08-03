import { pool } from "../database/connect.db.js"
const autoLoginUser = (req, res) => {
  const userPreviousToken = req.cookies?.accessToken
  if (!userPreviousToken || userPreviousToken === null) {
    return res.status(401).json({
      success: false,
      message: "User Needs To Login",
    })
  } else {
    return res.status(200)
  }
}

const userProfileUpdate = async (req, res) => {
  const { name, phone_number, email, gender, age, city } = req.body
  const { id } = req.query
  if (!(id || name || phone_number || email || gender || age || city)) {
    return res.status(302).json({
      success: false,
      message:
        "Fill All Details to Submit the Form and get the Membership Card",
    })
  }
  const findTheUserQuery =
    "SELECT user_id FROM user_details WHERE user_id = $1"
  const findTheUserValue = [id]
  try {
    const foundUser = await pool.query(findTheUserQuery, findTheUserValue)
    // console.log(foundUser);
    if (foundUser.rowCount == 0) {
      const userProfileUpdateQuery =
        "INSERT INTO user_details (name, phone_number, email, gender, age, city, user_id) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING * "

      const userProfileUpdateValue = [
        name,
        phone_number,
        email,
        gender,
        age,
        city,
        id,
      ]
      try {
        const result = await pool.query(
          userProfileUpdateQuery,
          userProfileUpdateValue
        )
        // console.log(result.rows)
        if (result.rowCount != 0) {
          return res.status(200).json({
            success: true,
            message: "Details Updated Successfully",
          })
        }
      } catch (error) {
        return res.status(400).json({
          success: true,
          message: `${error}`,
        })
      }
    } else {
        const userProfileUpdateQuery =
        "UPDATE user_details SET name = $1, phone_number=$2, email=$3, gender=$4, age=$5, city=$6 WHERE user_id = $7 RETURNING *"

      const userProfileUpdateValue = [
        name,
        phone_number,
        email,
        gender,
        age,
        city,
        id,
      ]
      try {
        const result = await pool.query(
          userProfileUpdateQuery,
          userProfileUpdateValue
        )
        // console.log(result.rows)
        if (result.rowCount != 0) {
          return res.status(200).json({
            success: true,
            message: "Details Updated Successfully",
          })
        }
      } catch (error) {
        return res.status(400).json({
          success: true,
          message: `${error}`,
        })
      }
    }
  } catch (error) {
    return res.status(400).json({
        success: true,
        message: `${error}`,
      })
  }
}

export { autoLoginUser, userProfileUpdate }
