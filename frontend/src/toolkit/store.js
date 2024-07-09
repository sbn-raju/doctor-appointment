import {configureStore} from "@reduxjs/toolkit"
import adminAuthSlice from "../services/admin/adminThunks/adminLoginThunk.js"


const store = configureStore({
    reducer:{
        auth: adminAuthSlice,
    }
});

export default store