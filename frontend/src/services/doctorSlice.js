import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    token:null,
}

const doctorAuth = createSlice({
    name:"DoctorAuth",
    initialState,
    reducers:{
        loginDoctor:(state, action)=>{
          state.token = action.payload.token;
        },
        logoutDoctor:(state, action)=>{
            state.token = null;
        }
    }
})


export const {loginDoctor, logoutDoctor} = doctorAuth.actions

export default doctorAuth.reducer

// {username: 'Raju', password: 'raju@123'}


// export const authProvider = {
//     adminAuthLogin :async({username,password})=>{
//         const request = new Request(
//             "/api/v1/admin/login",
//             {
//                 method:"POST",
//                 body: JSON.stringify({username, password}),
//                 headers: new Headers({ "Content-Type": "application/json" })
//             }
//         )

//         const response = await axios.post(request);

//         const data = await response.json();
//         console.log(data);

//         if(data.success){
//             localStorage.setItem("admin_auth_token", data.token);
//         }

//         Promise.resolve();
//         return data;
//     }
// }
