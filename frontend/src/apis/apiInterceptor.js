import axios from "axios";
import store from "../toolkit/store.js"
import { logoutAdmin } from "../services/adminSlice.js";
import { isTokenExpired } from "../utils/isTokenExpire";


const expiryTime = sessionStorage.getItem("admin_token_expiry");



axios.interceptors.request.use(
    (config)=>{
        if(isTokenExpired(expiryTime)){
            store.dispatch(logoutAdmin());
            return Promise.reject(new Error("Session expired. Please log in again."));
        }
        console.log(config);
        return config;
    },
    (error)=>{
        return Promise.reject(error)
    }
)

