import {configureStore} from "@reduxjs/toolkit"
import userAuthReducer from "../services/userSlice.js"
import logoutReducer from "../services/logoutSlice.js"
import adminAuthReducer from "../services/adminSlice.js";
import doctorAuthReducer from "../services/doctorSlice.js"


const store = configureStore({
    reducer:{
        auth: userAuthReducer,
        adminAuth: adminAuthReducer,
        doctorAuth: doctorAuthReducer,
        logout: logoutReducer
    }
});

export default store