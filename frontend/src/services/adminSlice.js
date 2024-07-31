import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token:null,
    admin:null
}

const adminAuth = createSlice({
    name:"AdminAuth",
    initialState,
    reducers:{
        loginAdmin:(state, action)=>{
          state.token = action.payload.token;
          state.admin = action.payload.admin;
        },
        logoutAdmin:(state, action)=>{
            state.token = action.payload.token;
            state.admin = action.payload.admin;
        }
    }
})


export const {loginAdmin, logoutAdmin} = adminAuth.actions

export default adminAuth.reducer
