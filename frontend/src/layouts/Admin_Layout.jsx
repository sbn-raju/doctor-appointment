import React from 'react'
import HeaderAdmin from '../components/Header/HeaderAdmin.jsx'
import { Outlet } from 'react-router-dom'
import Sidebar from "../components/Admin Components/Admin Sidebar/Sidebar";

const Admin_Layout = () => {
  return (
   <>
   <HeaderAdmin/>
   <div className='flex flex-row'>
   <Sidebar/>
   <Outlet/>
   </div>
   </>
  )
}

export default Admin_Layout