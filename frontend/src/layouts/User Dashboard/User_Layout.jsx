import React from 'react'
import HeaderHome from '../../components/Header/HeaderHome'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

const User_layout = () => {
  return (
    <>
    <HeaderHome/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default User_layout