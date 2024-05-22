import React from 'react';
import { userProfile } from '../../constants/index';
import { BsFillPersonVcardFill } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";

const MyProfilePage = () => {
  return (
    <div className="h-screen w-full p-6 flex justify-center items-center">
      <div className="w-full lg:w-2/3">
        <div className="flex flex-row items-center mb-10">
          <h1 className="text-md md:text-xl lg:text-2xl">Hello <span className="font-medium">{userProfile.Name}!!</span></h1>
          
          {/* Vertical Line */}
          <span className="ml-4 border-[1px] border-l-gray-500 h-12"></span>
          
          <div className="flex justify-center items-center ml-3">
            <span className="text-sm ml-0 md:ml-4"><IoMdPerson /></span>
            <p className="text-sm ml-1">Profile</p>
          </div>
        </div>

        <div className='mb-8 lg:mb-16'>
          <div className="w-full bg-custom-yellow rounded-tl-2xl rounded-tr-2xl border-[1px] border-custom-red p-4 px-6 md:px-8">
            <div className='flex items-center'>
              <span className="text-red-500 text-xl md:text-2xl"><BsFillPersonVcardFill /></span>
              <span className='ml-2 text-base md:text-lg'>Personal Information</span>
            </div>
          </div>
          <div className="w-full bg-custom-yellow border-t-0 border-[1px] border-custom-red p-4 px-6 md:px-8">
            <div className="flex">
              <span className="w-2/5 md:w-3/6">Name</span>
              <span className="w-3/5 md:w-3/6">{userProfile.Name}</span>
            </div>
          </div>
          <div className="w-full bg-custom-yellow border-t-0 border-[1px] border-custom-red p-4 px-6 md:px-8">
            <div className="flex">
              <span className="w-2/5 md:w-3/6">Contact</span>
              <span className="w-3/5 md:w-3/6">{userProfile.Contact}</span>
            </div>
          </div>
          <div className="w-full bg-custom-yellow border-t-0 border-[1px] border-custom-red p-4 px-6 md:px-8">
            <div className="flex">
              <span className="w-2/5 md:w-3/6">Email</span>
              <span className="w-3/5 md:w-3/6">{userProfile.Email}</span>
            </div>
          </div>
          <div className="w-full bg-custom-yellow rounded-bl-2xl rounded-br-2xl border-t-0 border-[1px] border-custom-red p-4 px-6 md:px-8">
            <div className="flex">
              <span className="w-2/5 md:w-3/6">Gender</span>
              <span className="w-3/5 md:w-3/6">{userProfile.Gender}</span>
            </div>
          </div>
        </div>

        <div className="bg-custom-yellow rounded-2xl border-[1px] border-custom-red p-4 px-6 lg:px-8">
          <p className="font-medium mb-4">Note:</p>
          <p className='text-sm'>
            Your privacy is important to us. We guarantee that your username and personal information will be kept 
            confidential and will not be shared with any third parties. Feel safe knowing your data is secure.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MyProfilePage;