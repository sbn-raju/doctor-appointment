import React from 'react'
import logo from "../../assets/image 21.png"
import { IoMenu } from "react-icons/io5";

const HeaderHome = () => {
  return (
    <>
      <div className='max-w-full h-20 bg-slate-100 flex flex-row '>
        <div className='w-4/5 h-full flex flex-row justify-center items-center xl:w-1/3'>
          <div children className='w-20 h-20'>
            <img src={logo} alt="LogoImage" />
          </div>
          <div className='pl-1'>
            <h2 className='font-bold'>Dr.Padma &amp; Dr.Ramachandra</h2>
            <h4>Naturopathy</h4>
          </div>
        </div>
        <div className='w-1/5 h-full flex justify-center items-center'>
         <span className='text-3xl xl:hidden'>
          <IoMenu/>
         </span>
        </div>
      </div>
    </>
  )
}

export default HeaderHome