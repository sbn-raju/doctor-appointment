import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { decryptData } from "../utils/encryptData";

const encryptAndVerifyToken = async(token)=>{
    if(token == null){
        return null;
    }
    const decryptedToken = await decryptData(token);
    const response = await axios.post("/api/v1/doctor/verify");
    if(response.status == 200 && response.statusText === "OK" && response.data.success){
        return decryptedToken
    }
    else if(response.status == 403 || response.statusText === "Forbidden" || response.data.success){
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
    token: await encryptAndVerifyToken(sessionStorage.getItem("doctor_info")),
    admin: await decryptedAndVerifyUser(sessionStorage.getItem("user_Role")),
}




const doctorAuth = createSlice({
    name:"DoctorAuth",
    initialState,
    reducers:{
        loginDoctor:(state, action)=>{
          state.token = action.payload.token;
          state.admin = action.payload.data[0].userRole;
        },
        logoutDoctor:(state, action)=>{
            state.token = null;
            state.admin = null;
        }
    }
})


export const {loginDoctor, logoutDoctor} = doctorAuth.actions

export default doctorAuth.reducer
