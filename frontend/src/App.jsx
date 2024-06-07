import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'
import HeaderHome from './components/Header/HeaderHome.jsx'
import {AddDoctorPage, AppointmentsPage, ClassUpdatesPage, ClassBookingPage, SetSlotsPage, YoutubeVideosPage, UserDataPage, PaymentPage} from "./pages/Easy Imports/Admin Dashboard Imports/admin.js"
import {UserLogin} from "./pages/Easy Imports/Auth Imports/auth.js"
import {AboutPage, AppointmentPage, HomePage,TermsAndConditionPage, ServicesPage, DietPage, ClassPage} from "./pages/Easy Imports/Main Imports/main.js"
import MainLayout from './layouts/Main Layout/MainLayout.jsx'
import Admin_Layout from './layouts/Admin Dashboard/Admin_Layout.jsx'
import User_layout from './layouts/User Dashboard/User_Layout.jsx'
import Doctor_Layout from './layouts/Doctor Dashboard/Doctor_Layout.jsx'
import {MyAppointmentsPage, MyProfilePage, MyPaymentsPage, MyClassesPage} from './pages/Easy Imports/User Dashboard Imports/user.js'
import ReschedulePage from './pages/Admin Dashboard Pages/ReschedulePage.jsx'
import WhatsappTemplatePage from './pages/Admin Dashboard Pages/whatsappTemplatePage.jsx'
import MyMembershipPage from './pages/User Dashboard Pages/MyMembershipPage.jsx'

//EVERY ONE USE APP FOR TESTING YOUR COMPONENT

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<MainLayout/>}>
        <Route path="" element={<HomePage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="term" element={<TermsAndConditionPage />}/>
        <Route path="services" element={<ServicesPage />} />
        <Route path="login" element={<UserLogin />} />        
        <Route path="diet" element={<DietPage />} />
        <Route path="class" element={<ClassPage />} />
        <Route path="appointment" element={<AppointmentPage />} />
      </Route>
      <Route path='/user' element={<User_layout/>}>
        <Route path="appointment" element={<MyAppointmentsPage/>}/>
        <Route path="profile" element={<MyProfilePage/>}/>
        <Route path="payment" element={<MyPaymentsPage />} />
        <Route path="class" element={<MyClassesPage />} />
        <Route path="membership" element={<MyMembershipPage />} />
      </Route>
      <Route path='/admin' element={<Admin_Layout/>}>
        <Route path="addDoctor" element={<AddDoctorPage/>}/>
        <Route path="appointment" element={<AppointmentsPage/>}/>
        <Route path="appointment/reschedule" element={<ReschedulePage />} />
        <Route path="whatsapp" element={<WhatsappTemplatePage />} />
        <Route path="payment" element={<PaymentPage/>}/>
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
