import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { decryptData } from "../utils/encryptData.js";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginAdmin, logoutAdmin } from "../services/adminSlice.js"; 
import Loading from "../components/Loading.jsx";

const AdminAuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isAuthentication, setIsAuthentication] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let isMounted = true;
      try {
        const adminInfo = localStorage.getItem("admin_info");
        if (adminInfo) {
          const fetchedToken = await decryptData(adminInfo.toString());

          const verifyToken = await axios.post("/api/v1/admin/verify", {
            token: fetchedToken,
          });

          if (
            verifyToken.status === 200 &&
            verifyToken.statusText === "OK" &&
            verifyToken.data.success
          ) {
            if (isMounted) {
              setIsAuthentication(true);
              dispatch(loginAdmin({ token: fetchedToken, data: verifyToken.data.adminData }));
            }
          } else {
            localStorage.removeItem("admin_info");
            if (isMounted) {
              setIsAuthentication(false);
              dispatch(logoutAdmin());
              navigate("/");
            }
          }
        } else {
          if (isMounted) {
            navigate("/");
          }
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        localStorage.removeItem("admin_info");
        if (isMounted) {
          setIsAuthentication(false);
          dispatch(logoutAdmin());
          navigate("/");
        }
      }
      if (isMounted) {
        setIsLoading(false);
      }
      return () => { isMounted = false; };
    })();
  }, [navigate, dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  // Instead of using navigate here directly, you should handle authentication in useEffect.
  if (!isAuthentication) {
    return null; // or a different fallback UI
  }

  return children;
};

export default AdminAuthProvider;
