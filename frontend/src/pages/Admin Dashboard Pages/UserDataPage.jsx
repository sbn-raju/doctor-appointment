import React from 'react'
import { adminUserData } from '../../constants'
import { IoMdPerson } from 'react-icons/io';

const UserDataPage = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center p-8'>
      <div className='w-full'>
        <div className='flex flex-row items-center mb-10'>
          <h1 className="text-md md:text-xl lg:text-2xl">Hello <span className="font-medium">Admin!!</span></h1>
          
          {/* Vertical Line */}
          <span className="ml-4 border-[1px] border-l-gray-500 h-12"></span>
          
          <div className="flex justify-center items-center ml-3">
            <span className="text-sm ml-0 md:ml-4"><IoMdPerson /></span>
            <p className="text-sm ml-1">Class Bookings</p>
          </div>
        </div>
      </div>

      <div className='mb-8 lg:mb-16 w-full overflow-x-auto admin-scrollbar'>
        <div className='min-w-[800px] bg-custom-yellow border-[1px] border-custom-red rounded-tl-2xl rounded-tr-2xl p-4 px-6 md:px-8'>
          <ul className='grid grid-cols-6 text-red-400 font-regular text-sm'>              
            <li>Name</li>
            <li>Phone Number</li>
            <li>Email</li>
            <li>Gender</li>
            <li>Age</li>
            <li>City</li>
          </ul>
        </div>
        <div className='min-w-[800px] h-72 overflow-auto admin-scrollbar'>
          {adminUserData.map((user, index) => (
            <div key={index} className={`w-full bg-custom-yellow border-[1px] border-custom-red p-4 px-6 md:px-8 ${adminUserData.length === index+1 ? 'rounded-br-2xl rounded-bl-2xl' : ''}`}>
              <ul className='grid grid-cols-6 text-sm'>                  
                <li className='flex items-center'>
                  <span className='mr-2'><IoMdPerson /></span>
                  {user.Name}
                </li>
                <li>{user.PhoneNumber}</li>
                <li>{user.Email}</li>
                <li>{user.Gender}</li>
                <li>{user.Age}</li>
                <li>{user.city}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserDataPage