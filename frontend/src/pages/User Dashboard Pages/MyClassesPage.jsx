import React from 'react';
import { userProfile, classDetails } from '../../constants';
import { BsCalendar2Event } from "react-icons/bs";
import { FaClock, FaPhone } from "react-icons/fa6";

const MyClassesPage = () => {
  return (
    <div className="h-screen w-full p-4 flex flex-col items-center">
      <div className="w-full md:w-3/5 my-8 flex flex-col md:flex-row items-center">
        <div className="flex flex-row items-center">
          <h1 className='text-md md:text-xl lg:text-2xl'>Hello <span className="font-semibold">{userProfile.Name}!!</span></h1>
          <span className="ml-4 border-[1px] border-l-gray-500 h-12"></span> {/* Vertical Line */}
          <div className="flex justify-center items-center ml-4">
            <span className="text-md ml-4"><BsCalendar2Event /></span>
            <p className="text-sm ml-1">My Classes</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/3 h-3/6 overflow-auto scrollbar px-2 md:px-5">
        {classDetails.map((classItem, index) => (
          <div key={index} className='mb-5 p-4 px-5 rounded-2xl border-[1px] border-custom-red bg-custom-yellow'>
            <div className='w-full flex flex-col'>
              <div>
                <p className='text-sm flex items-center'>
                  <span className='text-red-500 mr-2 text-xl'><FaClock /></span>
                  <span className="ml-1 font-medium"> {classItem.Date} {classItem.Time}</span>
                </p>
              </div>
              <div className="flex flex-wrap">
                <p className='mr-3 text-sm'>Batch: <span className='font-medium'>{classItem.Batch}</span></p>
                <p className='mr-3 text-sm'>Status: <span className='font-medium text-red-500'>{classItem.Status}</span></p>
                <p className='text-sm'>Link: <span className='font-medium text-red-600'>{classItem.Link}</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full md:w-2/3 bg-custom-yellow rounded-2xl border-[1px] border-custom-red p-4 px-5 md:px-8 my-10">
        <div className="w-full px-3 p-2 bg-white rounded-xl flex flex-col md:flex-row justify-between border-[1px] border-red-200">
          <div className='w-full md:w-3/5'>
            <p className="text-xs font-normal">
              If you have any questions, concerns, or need further 
              clarification regarding your upcoming appointment, please do not hesitate to reach out to 
              us for additional information and support.
            </p>
          </div>
          <div className='w-full md:w-2/5 flex items-center justify-center md:justify-end mt-4 md:mt-0'>
            <span className='text-red-400 text-sm mr-3'><FaPhone /></span>
            <p className='text-red-400'>Contact us</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyClassesPage;

// import React from 'react'
// import { userProfile, classDetails } from '../../constants'
// import { BsCalendar2Event } from "react-icons/bs"
// import { FaClock, FaPhone } from "react-icons/fa6"

// const MyClassesPage = () => {
//   return (
//     <div className="h-screen w-full p-4">
//       <div className="h-full flex flex-col items-center">
//         <div className="w-3/5 mb-8 mt-8 flex items-center">
//           <div className="flex items-center">
//             <h1 className='text-md md:text-xl lg:text-2xl'>Hello <span className="font-semibold">{userProfile.Name}!!</span></h1>
//             <span className="ml-4 border-[1px] border-l-gray-500 h-12"></span> {/* Vertical Line */}
//             <div className="flex items-center">
//               <span className="text-md ml-4"><BsCalendar2Event /></span>
//               <p className="text-sm ml-1">My Classes</p>
//             </div>
//           </div>
//         </div>
//         <div className="w-2/3 h-2/3 overflow-auto scrollbar px-5">
//           {classDetails.map((classItem, index) => (
//             <div key={index} className='mb-5 p-4 px-5 rounded-2xl border-[1px] border-custom-red bg-custom-yellow'>
//               <div className='w-full flex'>
//                 <div className=''>
//                   <div>
//                     <p className='text-sm flex items-center'>
//                       <span className='text-red-500 mr-2 text-xl'><FaClock /></span>
//                       <span className="ml-1 font-medium"> {classItem.Date} {classItem.Time}</span>
//                     </p>
//                   </div>
//                   <div className="flex">
//                     <p className='mr-3 text-sm'>Batch: <span className='font-medium'>{classItem.Batch}</span></p>
//                     <p className='mr-3 text-sm'>Status: <span className='font-medium text-red-500'>{classItem.Status}</span></p>
//                     <p className='text-sm'>Link: <span className='font-medium text-red-600'>{classItem.Link}</span></p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="w-full md:w-2/3 bg-custom-yellow rounded-2xl border-[1px] border-custom-red p-4 px-5 md:px-8 my-10">
//         <div className="w-full px-3 p-2 bg-white rounded-xl flex flex-col md:flex-row justify-between border-[1px] border-red-200">
//           <div className='w-full md:w-3/5'>
//             <p className="text-xs font-normal">
//               If you have any questions, concerns, or need further 
//               clarification regarding your upcoming appointment, please do not hesitate to reach out to 
//               us for additional information and support.
//             </p>
//           </div>
//           <div className='w-full md:w-2/5 flex items-center justify-center md:justify-end mt-4 md:mt-0'>
//             <span className='text-red-400 text-sm mr-3'><FaPhone /></span>
//             <p className='text-red-400'>Contact us</p>
//           </div>
//         </div>
//       </div>
//       </div>
//     </div>
//   )
// }

// export default MyClassesPage
