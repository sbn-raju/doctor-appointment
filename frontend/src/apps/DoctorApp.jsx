import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, useEffect } from "react";
import {DoctorLogin} from "../pages/Easy Imports/admin.js";
import Doctor_Layout from "../layouts/Doctor_Layout.jsx";
import DoctorAppointments from "../pages/Doctor Dashboard Pages/DoctorAppointments.jsx";
import Missing from "../components/Missing.jsx";
import Loading from "../components/Loading.jsx";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import DoctorPrivateRoute from "../routes/DoctorPrivateRoute.jsx";
import WhataAppMessanger from "../components/WhataAppMessanger.jsx"

const DoctorApp = () => {
  const isAuth = useSelector((state)=>state.doctorAuth.token);
  const isAdmin = useSelector((state)=>state.doctorAuth.admin);

  
      return (
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <Routes>
              {/* Public Routes */}
              <Route path='/' element={<DoctorLogin />} />
              
              {/* Protected Routes */}
              <Route
                element={
                  <DoctorPrivateRoute token={isAuth != null ? isAuth : null} admin={isAdmin === "DoctorAdmin" ? isAdmin : null}>
                    <Doctor_Layout />
                  </DoctorPrivateRoute>
                }
              >
                <Route path="/doctor/dashboard" element={<DoctorAppointments />} />
              </Route>
    
              {/* Catch-all Route */}
              <Route path="*" element={<Missing />} />
            </Routes>
            <Toaster position={"top-right"} />
          </Suspense>
        </BrowserRouter>
      );
    };
export default DoctorApp;
