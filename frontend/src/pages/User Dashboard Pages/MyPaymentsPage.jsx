import React, { useState } from 'react'
import { userProfile } from '../../constants'
import { MdPayment } from "react-icons/md"
import { FaRectangleList } from "react-icons/fa6"
import { IoIosArrowDown } from "react-icons/io"
import { paymentDetails } from '../../constants'
import '../../styles/myPayments.styles.css'

const MyPaymentsPage = () => {
  const [detailsVisible, setDetailsVisible] = useState(Array(paymentDetails.length).fill(false));

  const toggleDetailsVisibility = (index) => {
    setDetailsVisible(visibility => visibility.map((item, i) => i === index ? !item : item));
  };  

  return (
    <div className="h-screen w-full p-4">
      <div className="h-full flex flex-col items-center">
        <div className="w-3/5 mb-8 mt-8 flex items-center">
          <div className="flex items-center">
            <h1>Hello <span className="font-semibold">{userProfile.Name}!!</span></h1>
            <span className="ml-4 border-[1px] border-l-gray-500 h-12"></span> {/* Vertical Line */}
            <div className="flex items-center">
              <span className="text-md ml-4"><MdPayment /></span>
              <p className="text-sm ml-1">My Payments</p>
            </div>
          </div>
        </div>
        <div className="w-2/3 h-2/3 overflow-auto scrollbar px-5">
          {paymentDetails.map((payment, index) => (
            <div key={index} className={`mb-5 p-4 px-5 rounded-2xl border-[1px] border-custom-red bg-custom-yellow
                transition-all duration-500 ease-in-out ${detailsVisible[index] ? 'min-h-52' : 'h-22'}`}>
              <div className='w-full flex'>
                <div className='w-3/5'>
                  <div>
                    <p className='text-sm flex items-center'>
                      <span className='text-red-500 mr-2 text-xl'><FaRectangleList/></span>
                      Transaction ID: <span className="ml-1 font-medium"> {payment.TransactionId}</span>
                    </p>
                  </div>
                  <div className="flex">
                    <p className='mr-3 test-sm'>Date: <span className='font-medium'>{payment.Date}</span></p>
                    <p className='test-sm'>Purpose: <span className='font-medium'>{payment.Purpose}</span></p>
                  </div>
                </div>
                <div className='w-2/5 flex justify-end'>
                  <button onClick={() => toggleDetailsVisibility(index)} className="flex items-center text-red-500">
                    <span className={`transition-transform duration-300 ${detailsVisible[index] ? 'rotate-180' : ''}`}><IoIosArrowDown /></span>
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyPaymentsPage