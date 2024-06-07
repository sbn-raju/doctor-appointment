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
    <div className="h-screen w-full p-6 flex flex-col items-center bg-gray-1">
      <div className="w-full my-8 flex flex-col md:flex-row items-center bg-white border-[1px] border-gray-2 rounded-2xl px-10 py-3">
        <div className="flex flex-row items-center">
          <h1 className='text-md md:text-xl'>Hello <span className="font-semibold">{userProfile.Name}!!</span></h1>
          <span className="ml-4 border-[1px] border-l-gray-500 h-6"></span> {/* Vertical Line */}
          <div className="flex justify-center items-center ml-3">
            <span className="text-md ml-4"><MdPayment /></span>
            <p className="text-sm ml-1">My Payments</p>
          </div>
        </div>
      </div>
      
      { paymentDetails.length !== 0 ? (
        <>
          <div className="w-full h-3/6 overflow-auto scrollbar">
            {paymentDetails.map((payment, index) => (
              <div key={index} className={`mb-5 p-4 px-10 rounded-2xl border-[1px] border-gray-2 bg-white shadow-md
                transition-all duration-300 ease-in-out ${detailsVisible[index] ? 'min-h-[208px]' : 'h-[88px]'}`}>
                <div className='w-full flex flex-row'>
                  <div className='w-full md:w-3/5'>
                    <div>
                      <p className='text-sm flex items-center'>
                        <span className='text-red-500 mr-2 text-xl'><FaRectangleList /></span>
                        Transaction ID: <span className="ml-1 font-medium"> {payment.TransactionId}</span>
                      </p>
                    </div>
                    <div className="flex flex-wrap mt-2">
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
                {detailsVisible[index] && (
                  <div className="mt-2">
                    <p className="text-sm">Additional details go here...</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="w-full bg-white rounded-2xl border-[1px] border-gray-2 my-12 p-4 shadow-md">
            <p className='my-2 font-medium text-lg'>Instructions:</p>
            <p className='my-2 text-sm'>Your privacy is important to us. We guarantee that your username and personal information will be kept confidential and will not be shared with any third parties. Feel safe knowing your data is secure.</p>
          </div>
        </>
      ) : (
        <div className='flex flex-col justify-center items-center h-screen'>
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="#999999" class="bi bi-file-earmark-x" viewBox="0 0 16 16">
            <path d="M6.854 7.146a.5.5 0 1 0-.708.708L7.293 9l-1.147 1.146a.5.5 0 0 0 .708.708L8 9.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 9l1.147-1.146a.5.5 0 0 0-.708-.708L8 8.293z"/>
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
          </svg>
          <p style={{color:"#999999"}} className='text-2xl my-4'>No data to show</p>
        </div>
      )}
    </div>
  );
}

export default MyPaymentsPage;
