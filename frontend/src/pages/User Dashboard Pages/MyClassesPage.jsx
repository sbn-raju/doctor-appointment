import React from 'react'
import { userProfile, classDetails } from '../../constants'
import { BsCalendar2Event } from "react-icons/bs"
import { FaClock, FaPhone } from "react-icons/fa6"

const MyClassesPage = () => {
  return (
    <div className="h-screen w-full p-4">
      <div className="h-full flex flex-col items-center">
        <div className="w-3/5 mb-8 mt-8 flex items-center">
          <div className="flex items-center">
            <h1>Hello <span className="font-semibold">{userProfile.Name}!!</span></h1>
            <span className="ml-4 border-[1px] border-l-gray-500 h-12"></span> {/* Vertical Line */}
            <div className="flex items-center">
              <span className="text-md ml-4"><BsCalendar2Event /></span>
              <p className="text-sm ml-1">My Classes</p>
            </div>
          </div>
        </div>
        <div className="w-2/3 h-2/3 overflow-auto scrollbar px-5">
          {classDetails.map((classItem, index) => (
            <div key={index} className='mb-5 p-4 px-5 rounded-2xl border-[1px] border-custom-red bg-custom-yellow'>
              <div className='w-full flex'>
                <div className='w-3/5'>
                  <div>
                    <p className='text-sm flex items-center'>
                      <span className='text-red-500 mr-2 text-xl'><FaClock /></span>
                      <span className="ml-1 font-medium"> {classItem.Date} {classItem.Time}</span>
                    </p>
                  </div>
                  <div className="flex">
                    <p className='mr-3 text-sm'>Batch: <span className='font-medium'>{classItem.Batch}</span></p>
                    <p className='mr-3 text-sm'>Status: <span className='font-medium text-red-500'>{classItem.Status}</span></p>
                    <p className='text-sm'>Link: <span className='font-medium text-red-600'>{classItem.Link}</span></p>
                  </div>
                </div>
                <div className='w-2/5 flex justify-end'>
                  <div className="w-full px-3 p-2 bg-white rounded-xl flex justify-between border-[1px] border-red-200">
                    <div className='w-3/5'>
                      <p className="text-xs font-normal">If you have any questions or concerns about your Appointment</p>
                    </div>
                    <div className='w-2/5 flex items-center'>
                      <span className='text-red-400 text-sm mr-3'><FaPhone /></span>
                      <p className='text-red-400'>Contact us</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyClassesPage
