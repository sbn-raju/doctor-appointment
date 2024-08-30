import { createSlice } from "@reduxjs/toolkit";
import { decryptData } from "../utils/encryptData";
import axios from "axios";

// decrypting the information
const decryptTokenAndVerifyToken = async (token) => {
  const decryptedToken = await decryptData(token);
  try {
    const response = await axios.post("/api/v1/auth/verify/user");
    console.log(response.data);
    if (response.status == 200) {
      return decryptedToken;
    }
    console.log(decryptedToken);
  } catch (error) {
    console.log(error);
    return null;
  }
};

const decryptRoleAndVerifyRole = async (role) => {
  if (!role) {
    return null;
  }
  const decryptedRole = await decryptData(role);
  console.log(decryptedRole);

  return decryptedRole;
};

const initialState = {
  token: await decryptTokenAndVerifyToken(localStorage.getItem("user_Info")),
  user_Role: await decryptRoleAndVerifyRole(localStorage.getItem("user_Role")),
};

const authSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.token = action.payload.token;
      state.user_Role = action.payload.user_role;
    },
    logoutUser: (state) => {
      state.token = null;
      state.user_Role = null;
      localStorage.removeItem("user_Info");
      localStorage.removeItem("user_Role");
    },
  },
});

export const { logoutUser, loginUser } = authSlice.actions;

export default authSlice.reducer;
