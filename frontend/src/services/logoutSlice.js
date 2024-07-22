import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  message: "",
};

const logoutSlice = createSlice({
  name: "logout",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.message = "";
      localStorage.removeItem("a_tk");
    },
  },
});

export const { logout } = logoutSlice.actions;

export default logoutSlice.reducer;
