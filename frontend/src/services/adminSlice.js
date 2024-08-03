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
          state.admin = action.payload.data;
        },
        logoutAdmin:(state, action)=>{
            state.token = null;
            state.admin = null;
        }
    }
})


export const {loginAdmin, logoutAdmin} = adminAuth.actions

export default adminAuth.reducer
