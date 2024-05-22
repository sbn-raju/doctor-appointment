import React, { useState } from 'react';
import { userProfile, paymentDetails } from '../../constants';
import { MdPayment } from "react-icons/md";
import { FaRectangleList } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import '../../styles/scrollbar.styles.css';

const MyPaymentsPage = () => {
  const [detailsVisible, setDetailsVisible] = useState(Array(paymentDetails.length).fill(false));

  const toggleDetailsVisibility = (index) => {
    setDetailsVisible(visibility => visibility.map((item, i) => i === index ? !item : item));
  };  

  return (
    <div className="h-screen w-full p-4 flex flex-col items-center">
      <div className="w-full lg:w-3/5 my-8 flex flex-col md:flex-row items-center">
        <div className="flex flex-row items-center">
          <h1 className='text-md md:text-xl lg:text-2xl'>Hello <span className="font-semibold">{userProfile.Name}!!</span></h1>
          <span className="ml-4 border-[1px] border-l-gray-500 h-12"></span> {/* Vertical Line */}
          <div className="flex justify-center items-center ml-3">
            <span className="text-md ml-4"><MdPayment /></span>
            <p className="text-sm ml-1">My Payments</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/3 h-3/6 overflow-auto scrollbar px-2 md:px-5">
        {paymentDetails.map((payment, index) => (
          <div key={index} className={`mb-5 p-4 px-5 rounded-2xl border-[1px] border-custom-red bg-custom-yellow
              transition-all duration-500 ease-in-out ${detailsVisible[index] ? 'min-h-52' : 'h-22'}`}>
            <div className='w-full flex flex-row'>
              <div className='w-full md:w-3/5'>
                <div>
                  <p className='text-sm flex items-center'>
                    <span className='text-red-500 mr-2 text-xl'><FaRectangleList /></span>
                    Transaction ID: <span className="ml-1 font-medium"> {payment.TransactionId}</span>
                  </p>
                </div>
                <div className="flex flex-wrap">
                  <p className='mr-3 text-sm'>Date: <span className='font-medium'>{payment.Date}</span></p>
                  <p className='text-sm'>Purpose: <span className='font-medium'>{payment.Purpose}</span></p>
                </div>
              </div>
              <div className='w-full md:w-2/5 flex justify-end mt-4 md:mt-0'>
                <button onClick={() => toggleDetailsVisibility(index)} className="flex items-center text-red-500">
                  <span className={`transition-transform duration-300 ${detailsVisible[index] ? 'rotate-180' : ''}`}><IoIosArrowDown /></span>
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full lg:w-2/3 bg-custom-yellow rounded-2xl border-[1px] border-custom-red p-4 px-5 lg:px-8 my-10">
        <p className="font-medium mb-4">Note:</p>
        <p className='text-sm'>
          Your privacy is important to us. We guarantee that your payment transaction information will be kept 
          confidential and will not be shared with any third parties. Feel safe knowing your data is secure.
        </p>
      </div>
    </div>
  );
}

export default MyPaymentsPage;

// import React, { useState } from 'react'
// import { userProfile } from '../../constants'
// import { MdPayment } from "react-icons/md"
// import { FaRectangleList } from "react-icons/fa6"
// import { IoIosArrowDown } from "react-icons/io"
// import { paymentDetails } from '../../constants'
// import '../../styles/myPayments.styles.css'

// const MyPaymentsPage = () => {
//   const [detailsVisible, setDetailsVisible] = useState(Array(paymentDetails.length).fill(false));

//   const toggleDetailsVisibility = (index) => {
//     setDetailsVisible(visibility => visibility.map((item, i) => i === index ? !item : item));
//   };  

//   return (
//     <div className="h-screen w-full p-4 flex flex-col items-center">
//       <div className="w-full md:w-3/5 my-8 flex flex-col md:flex-row items-center">
//         <div className="flex flex-col md:flex-row items-center">
//           <h1 className='text-text-md md:text-xl lg:text-2xl'>Hello <span className="font-semibold">{userProfile.Name}!!</span></h1>
//           <span className="ml-4 border-[1px] border-l-gray-500 h-12"></span> {/* Vertical Line */}
//           <div className="flex items-center mt-4 md:mt-0">
//             <span className="text-md ml-4"><MdPayment /></span>
//             <p className="text-sm ml-1">My Payments</p>
//           </div>
//         </div>
//         <div className="w-full md:w-2/3 h-3/6 overflow-auto scrollbar px-2 md:px-2">
//           {paymentDetails.map((payment, index) => (
//             <div key={index} className={`mb-5 p-4 px-5 rounded-2xl border-[1px] border-custom-red bg-custom-yellow
//                 transition-all duration-500 ease-in-out ${detailsVisible[index] ? 'min-h-52' : 'h-22'}`}>
//               <div className='w-full flex'>
//                 <div className='w-3/5'>
//                   <div>
//                     <p className='text-sm flex items-center'>
//                       <span className='text-red-500 mr-2 text-xl'><FaRectangleList/></span>
//                       Transaction ID: <span className="ml-1 font-medium"> {payment.TransactionId}</span>
//                     </p>
//                   </div>
//                   <div className="flex">
//                     <p className='mr-3 test-sm'>Date: <span className='font-medium'>{payment.Date}</span></p>
//                     <p className='test-sm'>Purpose: <span className='font-medium'>{payment.Purpose}</span></p>
//                   </div>
//                 </div>
//                 <div className='w-2/5 flex justify-end'>
//                   <button onClick={() => toggleDetailsVisibility(index)} className="flex items-center text-red-500">
//                     <span className={`transition-transform duration-300 ${detailsVisible[index] ? 'rotate-180' : ''}`}><IoIosArrowDown /></span>
//                     Details
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="w-2/3 bg-custom-yellow rounded-2xl border-[1px] border-custom-red p-4 px-8 my-10">
//           <p className="font-medium mb-4">Note:</p>
//           <p className='text-sm'>
//             our privacy is important to us. We guarantee that your Payment Transaction information will be kept 
//             confidential and will not be shared with any third parties. Feel safe knowing your data is secure.
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default MyPaymentsPage