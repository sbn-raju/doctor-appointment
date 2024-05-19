import React from 'react'
import { userProfile } from '../../constants/index'
import { BsFillPersonVcardFill } from "react-icons/bs"
import { IoMdPerson } from "react-icons/io"

const MyProfilePage = () => {
  return (
    <div className="h-screen w-full p-8 flex justify-center items-center">
      <div class="w-2/3">
        <div className="flex items-center mb-10">
          <h1 className="">Hello <span class="font-medium">{userProfile.Name}!!</span></h1>

          {/* Vertical Line */}
          <span className="ml-4 border-[1px] border-l-gray-500 h-12"></span>
          
          <div className="flex items-center">
            <span className="text-sm ml-4"><IoMdPerson /></span>
            <p className="text-sm ml-1">Profile</p>
          </div>
        </div>

        <div className='mb-16'>
          <div className="w-full bg-custom-yellow rounded-tl-2xl rounded-tr-2xl border-[1px] border-custom-red p-4 px-8">
            <div className='flex items-center'>
              <span class="text-red-500 text-2xl"><BsFillPersonVcardFill /></span>
              <span className='ml-2'>Personal Information</span>
            </div>
          </div>
          <div className="w-full bg-custom-yellow border-t-0 border-[1px] border-custom-red p-4 px-8">
            <div className="flex">
              <span className="w-3/5">Name</span>
              <span className="w-2/5">{userProfile.Name}</span>
            </div>
          </div>
          <div className="w-full bg-custom-yellow border-t-0 border-[1px] border-custom-red p-4 px-8">
            <div className="flex">
              <span className="w-3/5">Contact</span>
              <span className="w-2/5">{userProfile.Contact}</span>
            </div>
          </div>
          <div className="w-full bg-custom-yellow border-t-0 border-[1px] border-custom-red p-4 px-8">
            <div className="flex">
              <span className="w-3/5">Email</span>
              <span className="w-2/5">{userProfile.Email}</span>
            </div>
          </div>
          <div className="w-full bg-custom-yellow rounded-bl-2xl rounded-br-2xl border-t-0 border-[1px] border-custom-red p-4 px-8">
            <div className="flex">
              <span className="w-3/5">Gender</span>
              <span className="w-2/5">{userProfile.Gender}</span>
            </div>
          </div>
        </div>

        <div className="bg-custom-yellow rounded-2xl border-[1px] border-custom-red p-4 px-8">
          <p className="font-medium mb-4">Note:</p>
          <p className='text-sm'>
            our privacy is important to us. We guarantee that your username and personal information will be kept 
            confidential and will not be shared with any third parties. Feel safe knowing your data is secure.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MyProfilePage