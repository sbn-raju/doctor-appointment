import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, useState, useEffect} from "react";
import {
  AddDoctorPage,
  AppointmentsPage,
  ClassUpdatesPage,
  ClassBookingPage,
  SetSlotsPage,
  YoutubeVideosPage,
  UserDataPage,
  PaymentPage,
  AdminLogin,
} from "../pages/Easy Imports/admin.js";
import Admin_Layout from "../layouts/Admin_Layout.jsx";
import ReschedulePage from "../pages/Admin Dashboard Pages/ReschedulePage.jsx";
import WhatsappTemplatePage from "../pages/Admin Dashboard Pages/whatsappTemplatePage.jsx";
import PrivateRoute from "../routes/PrivateRoute.jsx";
import Loading from "../components/Loading.jsx";
import Missing from "../components/Missing.jsx";
import { Toaster } from "react-hot-toast";
import UnauthorizedPage from "../pages/Admin Dashboard Pages/UnauthorizedPage.jsx";
import { useSelector } from "react-redux";



const AdminApp = () => {
  const isAuth = useSelector((state)=>state.adminAuth.token);
  const isAdmin = useSelector((state)=>state.adminAuth.data);
  

  
    return (
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* This are the Private Routes only the admin can access this routes and the their can be the multiple admin */}
            <Route path="/" element={<AdminLogin />} />
            
            <Route
              element={
                <PrivateRoute isAuthenticated={isAuth?true:false}>
                  <Admin_Layout /> 
                </PrivateRoute>}>
              <Route path="/admin/addDoctor" element={<AddDoctorPage />} />
              <Route path="/admin/appointment" element={<AppointmentsPage />} />
              <Route
                path="/admin/appointment/reschedule"
                element={<ReschedulePage />}
              />
              <Route path="/admin/whatsapp" element={<WhatsappTemplatePage />} />
              <Route path="/admin/payment" element={<PaymentPage />} />
              <Route path="/admin/classbooked" element={<ClassBookingPage />} />
              <Route path="/admin/slots" element={<SetSlotsPage />} />
              <Route path="/admin/class" element={<ClassUpdatesPage />} />
              <Route path="/admin/youtube" element={<YoutubeVideosPage />} />
              <Route path="/admin/users" element={<UserDataPage />} />
            </Route>
            <Route path="*" element={<Missing />} />
            <Route path="/unauthorized" element={<UnauthorizedPage/>}/>
          </Routes>
          <Toaster position={"top-right"} />
        </Suspense>
      </BrowserRouter>
    );
  };
  

export default AdminApp;
