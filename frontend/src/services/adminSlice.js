import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { decryptData } from "../utils/encryptData";
import { isTokenExpired } from "../utils/isTokenExpire";
import { useNavigate } from "react-router-dom";

const decryptTokenAndVerifyToken = async (token) => {
  if (token == null) {
    return null;
  }

  const expiryTime = sessionStorage.getItem("admin_token_expiry");
  if (isTokenExpired(expiryTime)) {
    sessionStorage.removeItem("admin_info");
    sessionStorage.removeItem("admin_token_expiry");
    return null;
  }

  const decryptedToken = await decryptData(token);
  try {
    const response = await axios.post("/api/v1/admin/verify");
    console.log(response);
    if (
      response.status == 200 &&
      response.statusText === "OK" &&
      response.data.success
    )
      return decryptedToken;
  } catch (error) {
    console.log(error);
    logoutAdmin();
    return null;
  }
};

const decryptUserAndVerifyUser = async (userRole) => {
  if (userRole == null) {
    return null;
  }
  const decryptedUser = await decryptData(userRole);
  return decryptedUser;
};

const initialState = {
  token: await decryptTokenAndVerifyToken(sessionStorage.getItem("admin_info")),
  admin: await decryptUserAndVerifyUser(sessionStorage.getItem("user_Role")),
};



const adminAuth = createSlice({
  name: "AdminAuth",
  initialState,
  reducers: {
    loginAdmin: (state, action) => {
      const currentTime = new Date().getTime();
      const expiryTime = currentTime + 1 * 60 * 1000;
      sessionStorage.setItem("admin_token_expiry", expiryTime);

      console.log(action.payload);
      state.token = action.payload.token;
      state.admin = action.payload.data[0].userRole;
    },
    logoutAdmin: (state, action) => {
      state.token = null;
      state.admin = null;
      sessionStorage.removeItem("admin_Info");
      sessionStorage.removeItem("user_Role");
      sessionStorage.removeItem("admin_token_expiry");
      window.location.reload();
    },
  },
});

export const { loginAdmin, logoutAdmin } = adminAuth.actions;

setInterval(() => {
  const token = sessionStorage.getItem("admin_info");
  if (token) {
    decryptTokenAndVerifyToken(token).then((decryptedToken) => {
      if (!decryptedToken) {
        logoutAdmin();
      }
    });
  }
}, 60 * 1000); 





export default adminAuth.reducer;
