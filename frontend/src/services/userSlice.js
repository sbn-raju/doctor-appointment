import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Correct the function parameters for createAsyncThunk
const loginUser = createAsyncThunk("auth/loginUser", async ({ phoneNumber, code }, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      "/api/v1/auth/register/verify-Details/verify",
      { phoneNumber, code },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error);
    // Use rejectWithValue instead of isRejectedWithValue
    return rejectWithValue(error.response.data);
  }
});


const encryptAndVerifyToken = async(token)=>{
  if(token == null){
      return null;
  }

  const expiryTime = sessionStorage.getItem("admin_token_expiry");

  if(isTokenExpired(expiryTime)){
      sessionStorage.removeItem("admin_info");
      sessionStorage.removeItem("admin_token_expiry");
      return null;
  }
   


  const decryptedToken = await decryptData(token);
  const response = await axios.post("/api/v1/admin/verify");
  if(response.status == 200 && response.statusText === "OK" && response.data.success){
      return decryptedToken
  }
  else if(response.status == 403 || response.statusText === "Forbidden" || response.data.success || response.status == 500 || response.status == 404){
       return null;
  }
  else{
      return null;
  }
}



const decryptedAndVerifyUser = async(userRole)=>{
  if(userRole == null){
      return null
  }
  const decryptedUser = await decryptData(userRole);
  return decryptedUser;
}



const initialState = {
  token: await encryptAndVerifyToken(localStorage.getItem("a_tk")),
  user_role: await decryptedAndVerifyUser(localStorage.getItem("user_Role")),
}







const authSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    loginUser:(state, action)=>{
      state.token = action.payload.tokens.accessToken.encryptedData;
      state.user_role = action.payload.admin;

    },
    logoutUser:(state)=>{
      state.token = null;
      state.message = "";
      localStorage.removeItem("a_tk");
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        console.log("HI");
        state.token = null;
        state.message = "";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.tokens.accessToken.encryptedData;
        console.log(action.payload.tokens);
        state.message = action.payload.message;
        localStorage.setItem("a_tk", action.payload.tokens.accessToken.encryptedData);
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.log("BYEE");
        state.token = null;
        state.message = action.payload || action.error.message;
        localStorage.removeItem("a_tk") // Use action.payload for error message
      });
  }
});


export {loginUser}

export const {logout} = authSlice.actions

export default authSlice.reducer;
