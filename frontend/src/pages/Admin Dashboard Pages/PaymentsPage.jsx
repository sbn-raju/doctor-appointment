import React, { useState } from 'react'
import { adminPaymentDetails } from '../../constants'
import { BsCalendar2Event } from "react-icons/bs";

const PaymentsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const totalPages = Math.ceil(adminPaymentDetails.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentPayments = adminPaymentDetails.slice(startIndex, endIndex);

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const handlePageClick = (pageNo) => {
    setCurrentPage(pageNo)
  }

  return (
    <div className='h-screen w-full bg-gray-1 flex flex-col justify-center items-center px-8'>
      <div className='w-full'>
        <div className='flex flex-row items-center'>
          <h1 className="text-md md:text-xl lg:text-2xl">Hello <span className="font-medium">Admin!!</span></h1>
          
          {/* Vertical Line */}
          <span className="ml-4 border-[1px] border-l-gray-500 h-12"></span>
          
          <div className="flex justify-center items-center ml-3">
            <span className="text-sm ml-0 md:ml-4"><BsCalendar2Event /></span>
            <p className="text-sm ml-1">Payments</p>
          </div>
        </div>
      </div>

      <div className='flex justify-between mt-6 w-full'>
        <div className='flex justify-center items-center'>
          <input
            type="search"
            className="h-8 shadow-md rounded-tl-2xl rounded-bl-2xl w-[500px]"
          />
          <button className='bg-green-4 rounded-tr-2xl rounded-br-2xl w-12 h-8 flex justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
          </button>
        </div>
        <div className='flex justify-end w-full'>
          <select defaultValue="Sort" className='shadow rounded-2xl p-[6px] mx-4'>
            <option value="Sort">Sort</option>
            <option value="Date">Date</option>
            <option value="Time">Time</option>
            <option value="Purpose">Purpose</option>
          </select>

          <select defaultValue="Filter" className='shadow rounded-2xl p-[6px] mx-4'>
            <option value="Filter">Filter</option>
            <option value="Date">Date</option>
            <option value="Time">Time</option>
            <option value="Purpose">Purpose</option>
          </select>
        </div>
      </div>

      <div className='mt-6 p-3 px-8 bg-white w-full rounded-2xl shadow-md flex '>
        <input
          type="checkbox"
          id="selectAll"
          className='mx-2'
        />
        <label htmlFor="selectAll">Select All</label>
      </div>

      {adminPaymentDetails.length !== 0 ? (
        <div className='bg-white shadow-md mt-6 w-full overflow-x-auto admin-scrollbar rounded-2xl'>
          <div className='min-w-[800px] bg-white p-4 px-6 md:px-10 border-b-[1px] border-gray-2'>
            <ul className='grid grid-cols-7 text-black font-regular text-sm'>              
              <li></li>
              <li>Name</li>
              <li>Contact</li>
              <li>Date</li>
              <li>Time</li>
              <li>Transaction Id</li>
              <li>Purpose</li>
            </ul>
          </div>
          <div className='min-w-[800px] h-80 overflow-auto admin-scrollbar'>
            {currentPayments.map((payment, index) => (
              <div key={index} className='w-full bg-white p-4 px-6 md:px-10'>
                <ul className='grid grid-cols-7 text-sm'>
                  <li>
                    <input type="checkbox" id={payment.TransactionId} />
                  </li>                  
                  <li>{payment.Name}</li>
                  <li>{payment.PhoneNumber}</li>
                  <li>{payment.DateOfPayment}</li>
                  <li>{payment.TimeOfPayment}</li>
                  <li>{payment.TransactionId}</li>
                  <li>{payment.Purpose}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          No Data Recorded Yet
        </div>
      )}

      <div className='w-full my-6 shadow-md bg-white p-3 px-6 rounded-2xl flex justify-between'>
        <div>
          Row Per Page: 
          <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
          </select>
        </div>
        <div className='flex justify-evenly items-center'>
          <button className='mx-2' onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous
          </button>
          {Array.from({length: totalPages}, (_, index) => (
            <button
              key={index + 1}
              className={`h-5 w-5 mx-1 rounded-full ${currentPage === index + 1 ? 'bg-green-4 text-white' : 'bg-white text-black'}`}
              onClick={() => handlePageClick(index + 1)}
            >
            {index + 1}
          </button>
          ))}
          <button className='mx-2' onClick={handleNextPage} disabled={endIndex >= adminPaymentDetails.length}>
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default PaymentsPage
