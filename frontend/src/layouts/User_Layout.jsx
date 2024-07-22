import React, { useEffect } from 'react'
import HeaderHome from '../components/Header/HeaderHome'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/User Components/User Sidebar/Sidebar'

const User_layout = () => {
  useEffect(() => {
    
  }, [])
  
  return (
    <>
    <HeaderHome/>
    <div className='flex flex-row'>
      <Sidebar />
      <Outlet/>
    </div>
    </> 
  )
}

export default User_layout