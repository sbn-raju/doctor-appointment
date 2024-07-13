import {configureStore} from "@reduxjs/toolkit"
import adminAuthSlice from "../services/admin/adminThunks/adminLoginThunk.js"
import authSlice from "../services/auth/authSlice.js"


const store = configureStore({
    reducer:{
        auth: adminAuthSlice,
        authUser: authSlice,
    }
});

export default store