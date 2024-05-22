import React from 'react'
import { BsCalendar2Event } from "react-icons/bs";

const YoutubeVideosPage = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center p-8'>
      <div className='w-full'>
        <div className='flex flex-row items-center mb-10'>
          <h1 className="text-md md:text-xl lg:text-2xl">Hello <span className="font-medium">Admin!!</span></h1>
          
          {/* Vertical Line */}
          <span className="ml-4 border-[1px] border-l-gray-500 h-12"></span>
          
          <div className="flex justify-center items-center ml-3">
            <span className="text-sm ml-0 md:ml-4"><BsCalendar2Event /></span>
            <p className="text-sm ml-1">Youtube Videos</p>
          </div>
        </div>
      </div>

      <div className='w-full px-20 bg-custom-yellow p-8 border-[1px] border-custom-red rounded-2xl'>
        <p>Iframe *</p>
        <textarea className='border-[1px] border-green-700 p-4 rounded-xl w-full h-40' placeholder='Copy Iframe from youtube and paste here'>

        </textarea>
        <div className='w-full flex justify-end'>
          <button className='bg-green-300 px-4 py-2 font-medium rounded-xl'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default YoutubeVideosPage