  import React, { useState, useEffect } from 'react';
  import { userProfile, appointmentDetails } from '../../constants';
  import { BsCalendar2Event } from "react-icons/bs";
  import { FaClock, FaPhone } from "react-icons/fa6";
  import CommonButton from '../../components/Buttons/CommonButton';
  import patient from '../../assets/Page Assets/User Dashboard/svg/patient.svg'
  import doctor from '../../assets/Page Assets/User Dashboard/svg/doctor.svg'
  import {useDispatch, useSelector} from 'react-redux'
  import axios from 'axios'
  import {refreshUserToken} from '../../services/refreshSlice.js';



  const formatDate = (isDateString) => {
    const options = { year: 'numeric', month: 'short', day: '2-digit'};
    const date = new Date(isDateString);
    return date.toLocaleDateString('en-GB', options).toUpperCase().replace(/ /g, ' ');
  }

  const MyAppointmentsPage = () => {
    document.title = "User Appointments"
    const [appointmentRecords, setAppointmentRecords] = useState([]);
    const dispatch = useDispatch()

    useEffect(()=> {
      const fetchData = async ()=> {
        const requestOptions= {
          headers: {'Content-Type': 'application/json',},
        };

        try{
          const response = await axios.post('/api/v1/appointment/user/get-appointment',{}, requestOptions);
          console.log(response)
          const data = response.data
          console.log(data);
          setAppointmentRecords(data?.data?data.data:[]);
        } catch(error){
          console.log(error.response.status)
          if(error.response.status === 401){
            dispatch(refreshUserToken())
          }
          console.log('Error occured', error);
          throw error;
        }
      }
      fetchData();
    }, []);

    return (
      <div className="h-screen w-full p-4 md:p-10 flex flex-col items-center bg-gray-1">
        <div className="w-full my-8 flex flex-col md:flex-row items-center bg-white border-[1px] border-gray-2 rounded-2xl md:px-10 py-3">
          <div className="flex flex-row items-center">
            <h1 className="text-sm md:text-xl">Hello <span className="font-medium">{userProfile.Name}!!</span></h1>
            <span className="ml-4 border-[1px] border-l-gray-500 h-6"></span> {/* Vertical Line */}
            <div className="flex justify-center items-center">
              <span className="text-md ml-4"><BsCalendar2Event /></span>
              <p className="text-[10px] md:text-sm ml-1">My Appointments</p>
            </div>
          </div>
        </div>
        {appointmentRecords.length !== 0?(
          <>
            <div className="w-full h-full md:h-3/6 overflow-auto scrollbar">
              {appointmentRecords?.map((appointment, index) => (
                <div key={index} className='mb-5 p-6 px-5 rounded-2xl border-[1px] border-gray-2 bg-white shadow-md'>
                  <div className='w-full flex'>
                    <div className='w-11/12 md:w-9/12 grid grid-cols-2 gap-4'>
                      <p className='text-xs md:text-base flex items-center md:font-medium'>
                        <span className='mr-2 text-xl'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#507E4D" className=" bi bi-calendar" viewBox="0 0 16 16">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                          </svg>
                        </span>
                        {formatDate(appointment?.date)}
                      </p>
                      <p className='text-xs md:text-base flex items-center md:font-medium'>
                        <span className='mr-2 text-xl'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#507E4D" class="bi bi-clock" viewBox="0 0 16 16">
                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                          </svg>
                        </span>
                        {appointment?.slot_start_time}
                      </p>
                      <p className='flex justify-start items-center'>
                        <img src={patient} className='w-5'/>
                        <span className='text-xs md:text-base md:font-medium'>{appointment?.purpose_of_visit}</span>
                      </p>
                      <p className='flex justify-start items-center'>
                      <img src={doctor} className='w-5'/>
                        <span className='text-xs md:text-base md:font-medium'>{appointment?.name}</span>
                      </p>
                    </div>

                    <div className='w-1/12 md:w-3/12 md:px-4 flex justify-center items-center'>
                      <button className='hover:border-[1px] hover:border-green-4 p-2 rounded-lg flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#507E4D" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                        </svg>
                        <p className='hidden md:block text-green-4 text-sm ml-2'>Contact for any queries</p>
                      </button>
                    </div>
                    {/* <div className='w-1/4 px-6'>
                      <p className='text-xs mb-1'>
                        Schedule your reconsultation here, after the actual consultation
                      </p>
                      <CommonButton 
                        className='bg-green-4 pb-1 px-3 text-white white rounded-md'
                        onClick={handleCautionBox}
                      >
                        Reconsult
                      </CommonButton>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full bg-white rounded-2xl border-[1px] border-gray-2 my-6 md:my-20 p-2 px-4 md:p-4 shadow-md">
              <p className='my-2 font-medium text-sm md:text-base'>Instructions:</p>
              <p className='my-2 text-[10px] md:text-sm'>Your privacy is important to us. We guarantee that your username and personal information will be kept confidential and will not be shared with any third parties. Feel safe knowing your data is secure.</p>
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
        {/* {isCautionBoxOpen && <CautionBox handleOkay={handleOkay} />} */}
      </div>
    );
  }

  export default MyAppointmentsPage;
