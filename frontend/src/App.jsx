import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import HeaderHome from './components/Header/HeaderHome'
import {AddDoctorPage, AppointmentsPage, ClassUpdatesPage, ClassBookingPage, SetSlotsPage, YoutubeVideosPage, UserDataPage, PaymentPage} from "./pages/Easy Imports/Admin Dashboard Imports/admin.js"
import {UserLogin} from "./pages/Easy Imports/Auth Imports/auth.js"
import {AboutPage, AppointmentPage, HomePage,TermsAndConditionPage, ServicesPage} from "./pages/Easy Imports/Main Imports/main.js"
import MainLayout from './layouts/Main Layout/MainLayout.jsx'
import Admin_Layout from './layouts/Admin Dashboard/Admin_Layout.jsx'
import User_layout from './layouts/User Dashboard/User_Layout.jsx'
import Doctor_Layout from './layouts/Doctor Dashboard/Doctor_Layout.jsx'
<<<<<<< HEAD
import {MyAppointmentsPage, MyProfilePage, MyPaymentsPage, MyClassesPage} from './pages/Easy Imports/User Dashboard Imports/user.js'
import {TermsAndConditionPage} from './pages/Easy Imports/Main Imports/main.js'
import {ServicesPage} from './pages/Easy Imports/Main Imports/main.js'
=======
import {MyAppointmentsPage} from './pages/Easy Imports/User Dashboard Imports/user.js'


>>>>>>> c88a6dd138f84679ac2285d803130b90031afb59



//EVERY ONE USE APP FOR TESTING YOUR COMPONENT

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<MainLayout/>}>
        <Route path="" element={<HomePage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="term" element={<TermsAndConditionPage />}/>
        <Route path="service" element={<ServicesPage />} />
      </Route>
      <Route path='/user' element={<User_layout/>}>
        <Route path="appointment" element={<MyAppointmentsPage/>}/>
        <Route path="profile" element={<MyProfilePage/>}/>
        <Route path="payment" element={<MyPaymentsPage />} />
        <Route path="class" element={<MyClassesPage />} />
      </Route>
      <Route path='/admin' element={<Admin_Layout/>}>
        <Route path="addDoctor" element={<AddDoctorPage/>}/>
        <Route path="appointments" element={<AppointmentsPage/>}/>
        <Route path="payments" element={<PaymentPage/>}/>
        <Route path="classbooked" element={<ClassBookingPage/>}/>
        <Route path="slots" element={<SetSlotsPage/>}/>
        <Route path="class" element={<ClassUpdatesPage/>}/>
        <Route path="youtube" element={<YoutubeVideosPage/>}/>
        <Route path="users" element={<UserDataPage/>}/>
      </Route>
      <Route path='/doctor' element={<Doctor_Layout/>}>
        <Route path="login" element={<ClassBookingPage/>}/>
        <Route path="dashboard" element={<ClassBookingPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
