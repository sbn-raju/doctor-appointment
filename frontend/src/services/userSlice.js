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
    // Use rejectWithValue instead of isRejectedWithValue
    return rejectWithValue(error.response.data);
  }
});

const initialState = {
  token: null,
  message: ""
};



const authSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    logout:(state)=>{
      state.token = null;
      state.message = "";
      localStorage.removeItem("a_tk");
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
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
        state.token = null;
        state.message = action.payload || action.error.message;
        localStorage.removeItem("a_tk") // Use action.payload for error message
      });
  }
});


export {loginUser}

export const {logout} = authSlice.actions

export default authSlice.reducer;
