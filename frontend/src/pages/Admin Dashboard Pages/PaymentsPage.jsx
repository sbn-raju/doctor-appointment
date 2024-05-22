import React from 'react'
import { adminPaymentDetails } from '../../constants'
import { BsCalendar2Event } from "react-icons/bs";
import { IoMdPerson } from 'react-icons/io';

const PaymentsPage = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center p-8'>
      <div className='w-full'>
        <div className='flex flex-row items-center mb-10'>
          <h1 className="text-md md:text-xl lg:text-2xl">Hello <span className="font-medium">Admin!!</span></h1>
          
          {/* Vertical Line */}
          <span className="ml-4 border-[1px] border-l-gray-500 h-12"></span>
          
          <div className="flex justify-center items-center ml-3">
            <span className="text-sm ml-0 md:ml-4"><BsCalendar2Event /></span>
            <p className="text-sm ml-1">Payments</p>
          </div>
        </div>
      </div>

      <div className='mb-8 lg:mb-16 w-full overflow-x-auto admin-scrollbar'>
        <div className='min-w-[800px] bg-custom-yellow border-[1px] border-custom-red rounded-tl-2xl rounded-tr-2xl p-4 px-6 md:px-8'>
          <ul className='grid grid-cols-7 text-red-400 font-regular text-sm'>              
            <li>Name</li>
            <li>Phone Number</li>
            <li>Date of Payment</li>
            <li>Time of Payment</li>
            <li>Amount</li>
            <li>Transaction Id</li>
            <li>Purpose</li>
          </ul>
        </div>
        <div className='min-w-[800px] h-72 overflow-auto admin-scrollbar'>
          {adminPaymentDetails.map((payment, index) => (
            <div key={index} className={`w-full bg-custom-yellow border-[1px] border-custom-red p-4 px-6 md:px-8 ${adminPaymentDetails.length === index+1 ? 'rounded-br-2xl rounded-bl-2xl' : ''}`}>
              <ul className='grid grid-cols-7 text-sm'>                  
                <li className='flex items-center'>
                  <span className='mr-2'><IoMdPerson /></span>
                  {payment.Name}
                </li>
                <li>{payment.PhoneNumber}</li>
                <li>{payment.DateOfPayment}</li>
                <li>{payment.TimeOfPayment}</li>
                <li>{payment.Amount}</li>
                <li>{payment.TransactionId}</li>
                <li>{payment.Purpose}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PaymentsPage