  import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
  import { Suspense, useState, useEffect } from "react";
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
    Notifications,
  } from "../pages/Easy Imports/admin.js";
  import Admin_Layout from "../layouts/Admin_Layout.jsx";
  import ReschedulePage from "../pages/Admin Dashboard Pages/ReschedulePage.jsx";
import WhataAppMessanger from "../components/WhataAppMessanger.jsx";
  import PrivateRoute from "../routes/PrivateRoute.jsx";
  import Loading from "../components/Loading.jsx";
  import Missing from "../components/Missing.jsx";
  import { Toaster } from "react-hot-toast";
  import UnauthorizedPage from "../pages/Admin Dashboard Pages/UnauthorizedPage.jsx";
  import { useSelector } from "react-redux";



  const AdminApp = () => {
    const isAuth = useSelector((state)=>state.adminAuth.token);
    const isAdmin = useSelector((state)=>state.adminAuth.admin);

    return (
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<AdminLogin />} />
            <Route
              element={
                <PrivateRoute token={isAuth != null ? isAuth : null} admin={isAdmin === "Admin" ? isAdmin : null}>
                  <Admin_Layout />
                </PrivateRoute>
              }
            >
              <Route path="/admin/addDoctor" element={<AddDoctorPage />} />
              <Route path="/admin/appointment" element={<AppointmentsPage />} />
              <Route
                path="/admin/appointment/reschedule"
                element={<ReschedulePage />}
              />
              <Route path="/admin/whatsapp" element={<WhataAppMessanger />} />
              <Route path="/admin/payment" element={<PaymentPage />} />
              <Route path="/admin/classbooked" element={<ClassBookingPage />} />
              <Route path="/admin/slots" element={<SetSlotsPage />} />
              <Route path="/admin/class" element={<ClassUpdatesPage />} />
              <Route path="/admin/youtube" element={<YoutubeVideosPage />} />
              <Route path="/admin/users" element={<UserDataPage />} />
              <Route path="/admin/notifications" element={<Notifications />}/>
            </Route>
            <Route path="*" element={<Missing />} />
            <Route path="/unauthorized" element={<UnauthorizedPage />} />
          </Routes>
          <Toaster position={"top-right"} />
      </Suspense>
    </BrowserRouter>
    );
  };

  export default AdminApp;
