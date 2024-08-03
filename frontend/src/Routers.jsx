import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, useEffect } from "react";
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
  DoctorLogin
} from "./pages/Easy Imports/admin.js";
import {
  AboutPage,
  AppointmentPage,
  HomePage,
  TermsAndConditionPage,
  ServicesPage,
  DietPage,
  ClassPage,
} from "./pages/Easy Imports/main.js";
import MainLayout from "./layouts/MainLayout.jsx";
import Admin_Layout from "./layouts/Admin_Layout.jsx";
import User_layout from "./layouts/User_Layout.jsx";
import Doctor_Layout from "./layouts/Doctor_Layout.jsx";
import {
  MyAppointmentsPage,
  MyProfilePage,
  MyPaymentsPage,
  MyClassesPage,
} from "./pages/Easy Imports/user.js";
import ReschedulePage from "./pages/Admin Dashboard Pages/ReschedulePage.jsx";
import WhatsappTemplatePage from "./pages/Admin Dashboard Pages/whatsappTemplatePage.jsx";
import DoctorAppointments from "./pages/Doctor Dashboard Pages/DoctorAppointments.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import Loading from "./components/Loading.jsx";
import Missing from "./components/Missing.jsx";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "./hooks/useAuth.js";
import axios from "axios";






//EVERY ONE USE APP FOR TESTING YOUR COMPONENT
function App() {

  const {token} = useSelector((state)=>state.auth)
  // const authLocalToken = useAuth(token)
  // console.log(authLocalToken)
  // if(!authLocalToken){
  //   toast.success('Please verify yourself :)');
  // }
  let authLocalToken
  if(!token){
    authLocalToken = localStorage.getItem("a_tk");
    console.log(authLocalToken);
    if(!authLocalToken){
      toast.success('Please verify yourself :)', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
    }
  }

  

  return (
    <BrowserRouter>
    <Suspense fallback={<Loading/>}>
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
          <ProtectedRoute isAuthenticated={authLocalToken ? true : false}>
            <ClassPage />
          </ProtectedRoute>
          } />
          <Route 
          path="/appointment" 
          element={
          <ProtectedRoute isAuthenticated={authLocalToken ? true : false}>
            <AppointmentPage />
          </ProtectedRoute>
          } />
        </Route>

        {/* Routing for the user dash Boards pages like Profile and payments and etc. */}
        {/* This are the protected Routes */}

        <Route
          element={
            <ProtectedRoute isAuthenticated={authLocalToken ? true : false}>
              <User_layout />
            </ProtectedRoute>
          }
        >
          <Route path="/user/appointment" element={<MyAppointmentsPage />} />
          <Route path="/user/profile" element={<MyProfilePage />} />
          <Route path="/user/payment" element={<MyPaymentsPage />} />
          <Route path="/user/class" element={<MyClassesPage />} />
        </Route>

        <Route path="*" 
        element={<Missing/>}>
        </Route>

      </Routes>
      <Toaster position={"top-right"}/>
      </Suspense>
    </BrowserRouter>
  );
}

function DoctorApp () {
 <BrowserRouter>
 <Routes>
          {/* This are the Private Routes only the admin can access this routes and the their can be the multiple admin */}

      <Route path="/doctor/login" element={<DoctorLogin />} />
        <Route 
        element={
        <PrivateRoute isAuthenticated={true} isAdmin={true}>
          <Doctor_Layout />
        </PrivateRoute>
        }
        >
          <Route path="/doctor/dashboard" element={<DoctorAppointments />} />
          <Route path="/doctor/whatsapp" element={<WhatsappTemplatePage />} />
        </Route>


        <Route path="*" 
        element={<Missing/>}>
        </Route>
  </Routes>
 </BrowserRouter>
}


function AdminApp(){
  // useEffect(()=>{
  //   ;(async()=>{
  //      const response = await axios.post()
  //   })()
  // })

  <BrowserRouter>
  <Routes>
  {/* This are the Private Routes only the admin can access this routes and the their can be the multiple admin */}

  <Route path="/admin/login" element={<AdminLogin/>} />
        <Route
          element={
            <PrivateRoute isAuthenticated={true}>
              <Admin_Layout/>
            </PrivateRoute>
          }
        >
          <Route path="/admin/addDoctor" element={<AddDoctorPage />} />
          <Route path="/admin/appointment" element={<AppointmentsPage />} />
          <Route path="/admin/appointment/reschedule" element={<ReschedulePage />} />
          <Route path="/admin/whatsapp" element={<WhatsappTemplatePage />} />
          <Route path="/admin/payment" element={<PaymentPage />} />
          <Route path="/admin/classbooked" element={<ClassBookingPage />} />
          <Route path="/admin/slots" element={<SetSlotsPage />} />
          <Route path="/admin/class" element={<ClassUpdatesPage />} />
          <Route path="/admin/youtube" element={<YoutubeVideosPage />} />
          <Route path="/admin/users" element={<UserDataPage />} />
        </Route>

        <Route path="*" 
        element={<Missing/>}>
        </Route>
  </Routes>
  </BrowserRouter>
}


export{
  App,
  DoctorApp,
  AdminApp
}

