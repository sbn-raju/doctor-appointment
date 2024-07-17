import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderHome from '../components/Header/HeaderHome'


const Doctor_Layout = () => {
  return (
    <>
   <HeaderHome/>
   <Outlet/>
   </>
  )
}

export default Doctor_Layout