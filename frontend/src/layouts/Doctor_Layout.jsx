import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderDoctor from '../components/Header/HeaderDoctor'


const Doctor_Layout = () => {
  return (
    <>
   <HeaderDoctor/>
   <Outlet/>
   </>
  )
}

export default Doctor_Layout