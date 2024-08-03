import {configureStore} from "@reduxjs/toolkit"
import userAuthReducer from "../services/userSlice.js"
import logoutReducer from "../services/logoutSlice.js"
import adminAuthReducer from "../services/adminSlice.js";


const store = configureStore({
    reducer:{
        auth: userAuthReducer,
        adminAuth: adminAuthReducer,
        logout: logoutReducer
    }
});

export default store