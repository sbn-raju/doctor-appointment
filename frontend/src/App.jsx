import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import HeaderHome from './components/Header/HeaderHome'
import {AddDoctorPage, ClassBookingPage} from "./pages/Easy Imports/Admin Imports/admin.js"
import {UserLogin} from "./pages/Easy Imports/Auth Imports/auth.js"
import {AboutPage, AppointmentPage, HomePage} from "./pages/Easy Imports/User Imports/user.js"
import MainLayout from './layouts/Main Layout/MainLayout.jsx'
import Admin_Layout from './layouts/Admin Dashboard/Admin_Layout.jsx'
import User_layout from './layouts/User Dashboard/User_Layout.jsx'
import Doctor_Layout from './layouts/Doctor Dashboard/Doctor_Layout.jsx'




//EVERY ONE USE APP FOR TESTING YOUR COMPONENT

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<MainLayout/>}>
        <Route path="/about"element={<AboutPage/>}/>
      </Route>
      <Route path='/user' element={<User_layout/>}>
        <Route path="appointment" element={<AppointmentPage/>}/>
      </Route>
      <Route path='/admin' element={<Admin_Layout/>}>
        <Route path="addDoctor" element={<AddDoctorPage/>}/>
      </Route>
      <Route path='/doctor' element={<Doctor_Layout/>}>
        <Route path="login" element={<ClassBookingPage/>}/>
      </Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App
