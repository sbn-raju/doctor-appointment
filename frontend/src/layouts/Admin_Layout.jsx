import React from 'react'
import HeaderHome from '../components/Header/HeaderHome'
import { Outlet } from 'react-router-dom'
import Sidebar from "../components/Admin Components/Admin Sidebar/Sidebar";

const Admin_Layout = () => {
  return (
   <>
   <HeaderHome/>
   <div className='flex flex-row'>
   <Sidebar/>
   <Outlet/>
   </div>
   </>
  )
}

export default Admin_Layout