import React, { useState } from 'react';
import { userProfile, appointmentDetails } from '../../constants';
import { BsCalendar2Event } from "react-icons/bs";
import { FaClock, FaPhone } from "react-icons/fa6";
import CommonButton from '../../components/Buttons/CommonButton';

const CautionBox = ({handleOkay}) => {
  return (
    <div className="h-screen fixed inset-0 bg-gray-1 bg-opacity-75 flex justify-center items-center z-[60]">
      <div className="w-[400px] bg-gray-1 p-8 rounded-2xl shadow-lg flex flex-col justify-center items-center">
        <svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36.4805 0C16.5982 0 0.480469 16.1178 0.480469 36C0.480469 55.8823 16.5982 72 36.4805 72C56.3627 72 72.4805 55.8823 72.4805 36C72.4805 16.1178 56.3627 0 36.4805 0ZM53.6605 47.54C55.2179 49.0974 55.2179 51.6226 53.6605 53.18C52.103 54.7374 49.5779 54.7374 48.0205 53.18L43.6605 48.82C39.6951 44.8546 33.2659 44.8546 29.3005 48.82L24.9405 53.18C23.383 54.7374 20.8579 54.7374 19.3005 53.18C17.743 51.6226 17.743 49.0974 19.3005 47.54L23.6605 43.18C27.6259 39.2146 27.6259 32.7854 23.6605 28.82L19.3005 24.46C17.743 22.9026 17.743 20.3774 19.3005 18.82C20.8579 17.2626 23.383 17.2626 24.9405 18.82L29.3005 23.18C33.2659 27.1454 39.6951 27.1454 43.6605 23.18L48.0205 18.82C49.5779 17.2626 52.103 17.2626 53.6605 18.82C55.2179 20.3774 55.2179 22.9026 53.6605 24.46L49.3005 28.82C45.3351 32.7854 45.3351 39.2146 49.3005 43.18L53.6605 47.54Z" fill="#EB3223"/>
        </svg>
        <p className="mb-4 text-red-500">Oops, you didn’t pass the 21 days mark</p>
        <div className="flex justify-center">
          <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={handleOkay}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

const MyAppointmentsPage = () => {
  const [isCautionBoxOpen, setIsCautionBoxOpen] = useState(false);

  const handleCautionBox = () => {
    setIsCautionBoxOpen(true);
  }

  const handleOkay = () => {
    setIsCautionBoxOpen(false);
  }

  return (
    <div className="h-screen w-full p-6 flex flex-col items-center bg-gray-1">
      <div className="w-full mb-8 mt-8 flex flex-col md:flex-row items-center bg-white border-[1px] border-gray-2 rounded-2xl px-10 py-3">
        <div className="flex flex-row items-center">
          <h1 className="text-md md:text-xl">Hello <span className="font-medium">{userProfile.Name}!!</span></h1>
          <span className="ml-4 border-[1px] border-l-gray-500 h-6"></span> {/* Vertical Line */}
          <div className="flex justify-center items-center ml-3">
            <span className="text-md ml-4"><BsCalendar2Event /></span>
            <p className="text-sm ml-1">My Appointments</p>
          </div>
        </div>
      </div>

      { appointmentDetails.length !== 0 ? (
        <>
          <div className="w-full h-3/6 overflow-auto scrollbar">
            {appointmentDetails.map((appointment, index) => (
              <div key={index} className='mb-5 p-4 px-5 rounded-2xl border-[1px] border-gray-2 bg-white shadow-md'>
                <div className='w-full flex'>
                  <div className='w-3/4 grid grid-cols-2'>
                    <p className='text-sm flex items-center font-medium'>
                      <span className='text-red-500 mr-2 text-xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                        </svg>
                      </span>
                      {appointment.Date}
                    </p>
                    <p className='font-thin'>Purpose: <span className='font-medium'>{appointment.Purpose}</span></p>
                    <p className='text-sm flex items-center font-medium'>
                      <span className='text-red-500 mr-2 text-xl'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                        </svg>
                      </span>
                      {appointment.Time}
                    </p>
                    <p className='font-thin'>Doctor: <span className='font-medium'>{appointment.Doctor}</span></p>
                  </div>
                  <div className='w-1/4 px-6'>
                    <p className='text-xs mb-1'>
                      Schedule your reconsultation here, after the actual consultation
                    </p>
                    <CommonButton 
                      className='bg-green-4 pb-1 px-3 text-white white rounded-md'
                      onClick={handleCautionBox}
                    >
                      Reconsult
                    </CommonButton>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full bg-white rounded-2xl border-[1px] border-gray-2 my-20 p-4 shadow-md">
            <p className='my-2 font-medium text-lg'>Instructions:</p>
            <p className='my-2 text-sm'>Your privacy is important to us. We guarantee that your username and personal information will be kept confidential and will not be shared with any third parties. Feel safe knowing your data is secure.</p>
          </div>
        </>
      ) : (
        <div className='flex flex-col justify-center items-center h-screen'>
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="#999999" className="bi bi-file-earmark-x" viewBox="0 0 16 16">
            <path d="M6.854 7.146a.5.5 0 1 0-.708.708L7.293 9l-1.147 1.146a.5.5 0 0 0 .708.708L8 9.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 9l1.147-1.146a.5.5 0 0 0-.708-.708L8 8.293z"/>
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
          </svg>
          <p style={{color:"#999999"}} className='text-2xl my-4'>No data to show</p>
        </div>
      )}
      {isCautionBoxOpen && <CautionBox handleOkay={handleOkay} />}
    </div>
  );
}

export default MyAppointmentsPage;
