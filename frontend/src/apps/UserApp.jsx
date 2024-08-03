import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, useEffect } from "react";
import {
  AboutPage,
  AppointmentPage,
  HomePage,
  TermsAndConditionPage,
  ServicesPage,
  DietPage,
  ClassPage,
} from "../pages/Easy Imports/main.js";
import MainLayout from "../layouts/MainLayout.jsx";
import User_layout from "../layouts/User_Layout.jsx";
import {
  MyAppointmentsPage,
  MyProfilePage,
  MyPaymentsPage,
  MyClassesPage,
} from "../pages/Easy Imports/user.js";
import ProtectedRoute from "../routes/ProtectedRoute.jsx";
import Loading from "../components/Loading.jsx";
import Missing from "../components/Missing.jsx";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const UserApp = () => {
  const { token } = useSelector((state) => state.auth);
//   let authLocalToken;
//   if (!token) {
//     authLocalToken = localStorage.getItem("a_tk");
//     // console.log(authLocalToken);
//     if (!authLocalToken) {
//       toast.success("Please verify yourself :)");
//     }
//   }


  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Routing for the main pages like Home, Services and etc. All this are the Public Routes*/}
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="term" element={<TermsAndConditionPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="diet" element={<DietPage />} />
            <Route
              path="/class"
              element={
                <ProtectedRoute isAuthenticated={token ? true : false}>
                  <ClassPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/appointment"
              element={
                <ProtectedRoute isAuthenticated={token ? true : false}>
                  <AppointmentPage />
                </ProtectedRoute>
              }
            />
          </Route>

          {/* Routing for the user dash Boards pages like Profile and payments and etc. */}
          {/* This are the protected Routes */}

          <Route
            element={
              <ProtectedRoute isAuthenticated={ token? true : false}>
                <User_layout />
              </ProtectedRoute>
            }
          >
            <Route path="/user/appointment" element={<MyAppointmentsPage />} />
            <Route path="/user/profile" element={<MyProfilePage />} />
            <Route path="/user/payment" element={<MyPaymentsPage />} />
            <Route path="/user/class" element={<MyClassesPage />} />
          </Route>

          <Route path="*" element={<Missing />}></Route>
        </Routes>
        <Toaster position={"top-right"} />
      </Suspense>
    </BrowserRouter>
  );
}

export default UserApp;
