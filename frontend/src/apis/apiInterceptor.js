import axios from "axios";
import store from "../toolkit/store.js"
import { logoutAdmin } from "../services/adminSlice.js";
import { isTokenExpired } from "../utils/isTokenExpire";


const expiryTime = sessionStorage.getItem("admin_token_expiry");



axios.interceptors.request.use(
    response => response,
  error => {
    if (error.response && error.response.status === 401) {
      store.dispatch(logoutAdmin());
    }
    return Promise.reject(error);
  }
)

