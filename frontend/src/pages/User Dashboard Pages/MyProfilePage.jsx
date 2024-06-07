import React from 'react';
import { userProfile } from '../../constants/index';
import { BsFillPersonVcardFill } from "react-icons/bs";
import CommonButton from '../../components/Buttons/CommonButton';
import { useNavigate } from 'react-router-dom';

const MyProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full p-6 flex justify-center items-center bg-gray-1">
      <div className="w-full">
        <div className="flex flex-row items-center mb-10 bg-white rounded-2xl px-10 py-3 border-[1px] border-gray-2">
          <h1 className="text-md md:text-xl">Hello <span className="font-medium">{userProfile.Name}!!</span></h1>
          
          {/* Vertical Line */}
          <span className="ml-4 border-[1px] border-l-gray-500 h-6"></span>
          
          <div className="flex justify-center items-center ml-3">
            <span className="text-sm ml-0 md:ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
              </svg>
            </span>
            <p className="text-sm ml-1">Profile</p>
          </div>
        </div>

        <div className='mb-8 lg:mb-16 rounded-2xl bg-white shadow-md pb-4'>
          <div className="w-full border-b-[1px] border-red-1 p-4 px-6 md:px-8">
            <div className='flex items-center'>
              <span className="text-red-500 text-xl md:text-2xl"><BsFillPersonVcardFill /></span>
              <span className='ml-2 text-base md:text-lg'>Personal Information</span>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-red-1 p-4 px-6 md:px-8">
            <div className="flex">
              <span className="w-2/5 md:w-3/6">Name</span>
              <span className="w-3/5 md:w-3/6">{userProfile.Name}</span>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-red-1 p-4 px-6 md:px-8">
            <div className="flex">
              <span className="w-2/5 md:w-3/6">Contact</span>
              <span className="w-3/5 md:w-3/6">{userProfile.Contact}</span>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-red-1 p-4 px-6 md:px-8">
            <div className="flex">
              <span className="w-2/5 md:w-3/6">Email</span>
              <span className="w-3/5 md:w-3/6">{userProfile.Email}</span>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-red-1 p-4 px-6 md:px-8">
            <div className="flex">
              <span className="w-2/5 md:w-3/6">Gender</span>
              <span className="w-3/5 md:w-3/6">{userProfile.Gender}</span>
            </div>
          </div>
          <div className="w-full p-4 px-6 md:px-8">
            <div className="flex">
              <span className="w-2/5 md:w-3/6">Mamebership</span>
              <CommonButton className='bg-green-4 px-2 rounded-md text-white' onClick={() => navigate('/user/membership')}>View</CommonButton>
            </div>
          </div>
        </div>

        <div className="shadow-md bg-white rounded-2xl border-[1px] border-custom-red p-4 px-6 lg:px-8">
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