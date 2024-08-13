import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, useEffect } from "react";
import {DoctorLogin} from "../pages/Easy Imports/admin.js";
import Doctor_Layout from "../layouts/Doctor_Layout.jsx";
import WhatsappTemplatePage from "../pages/Admin Dashboard Pages/whatsappTemplatePage.jsx";
import DoctorAppointments from "../pages/Doctor Dashboard Pages/DoctorAppointments.jsx";
import PrivateRoute from "../routes/PrivateRoute.jsx";
import Missing from "../components/Missing.jsx";
import Loading from "../components/Loading.jsx";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const DoctorApp = () => {
  const isAuth = useSelector((state)=>state.doctorAuth.token)
      return (
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <Routes>
              {/* Public Routes */}
              <Route path='/' element={<DoctorLogin />} />
              
              {/* Protected Routes */}
              <Route
                element={
                  <PrivateRoute isAuthenticated={isAuth?true:false} isAdmin={true}>
                    <Doctor_Layout />
                  </PrivateRoute>
                }
              >
                <Route path="/doctor/dashboard" element={<DoctorAppointments />} />
                <Route path="/doctor/whatsapp" element={<WhatsappTemplatePage />} />
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
