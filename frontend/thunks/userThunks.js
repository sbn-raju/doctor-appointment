import { loginUser, logoutUser } from "../src/services/userSlice";
import { decryptData } from "../src/utils/encryptData";
import { useDispatch } from "react-redux";


export const initializeAuth = ()=> async()=>{
    const dispatch = useDispatch();
    console.log("Hello");
   dispatch(logoutUser());

   const token = localStorage.getItem("user_Info");
   const role = localStorage.getItem("user_Role");

   if (token) {
    const decryptedToken = await decryptTokenAndVerifyToken(token);
    if (decryptedToken) {
      const decryptedRole = await decryptRoleAndVerifyRole(role);
      dispatch(loginUser({ token: decryptedToken, user_role: decryptedRole }));
    } else {
      dispatch(logoutUser());
    }
  } else {
    dispatch(logoutUser());
  }
}


const decryptTokenAndVerifyToken = async (token) => {
    const decryptedToken = await decryptData(token);
    try {
      const response = await axios.post("/api/v1/auth/verify/user");
      console.log(response.data);
      if (response.status == 200) {
        return decryptedToken;
      }
      console.log(decryptedToken);
    } catch (error) {
      console.log(error);
      logoutUser();
      return null;
    }
  };
  
  const decryptRoleAndVerifyRole = async (role) => {
    if (!role) {
      return null;
    }
    const decryptedRole = await decryptData(role);
    console.log(decryptedRole);
  
    return decryptedRole;
  };