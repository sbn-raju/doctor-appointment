import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Correct the function parameters for createAsyncThunk
const loginUser = createAsyncThunk("loginAuth", async ({ phoneNumber, code }, { rejectWithValue }) => {
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
    return response.data; // Ensure this is serializable
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.token = null;
        state.message = "";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token; // Ensure payload is serializable
        state.message = action.payload.message;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.token = null;
        state.message = action.payload || action.error.message; // Use action.payload for error message
      });
  }
});


export {loginUser}

export default authSlice.reducer;
