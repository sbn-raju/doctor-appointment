import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { decryptData } from "../utils/encryptData";
import { isTokenExpired } from "../utils/isTokenExpire";


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
    token: await encryptAndVerifyToken(sessionStorage.getItem("admin_info")),
    admin: await decryptedAndVerifyUser(sessionStorage.getItem("user_Role")),
}





const adminAuth = createSlice({
    name:"AdminAuth",
    initialState,
    reducers:{
        loginAdmin:(state, action)=>{

          const currentTime = new Date().getTime();
          const expiryTime = currentTime + 30 * 60 * 1000;
          sessionStorage.setItem("admin_token_expiry", expiryTime);

          console.log(action.payload)
          state.token = action.payload.token;
          state.admin = action.payload.data[0].userRole;
        },
        logoutAdmin:(state, action)=>{
            state.token = null;
            state.admin = null;
            sessionStorage.removeItem("admin_token_expiry");
        },
    }
})


export const {loginAdmin, logoutAdmin} = adminAuth.actions

export default adminAuth.reducer
