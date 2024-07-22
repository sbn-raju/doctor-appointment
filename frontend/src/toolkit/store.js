import {configureStore} from "@reduxjs/toolkit"
import userAuthReducer from "../services/userSlice.js"
import logoutReducer from "../services/logoutSlice.js"


const store = configureStore({
    reducer:{
        auth: userAuthReducer,
        logout: logoutReducer
    }
});

export default store