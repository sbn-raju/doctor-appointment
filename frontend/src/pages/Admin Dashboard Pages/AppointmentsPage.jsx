import React from "react";
import { BsCalendar2Event } from "react-icons/bs";
import '../../styles/scrollbar.styles.css'
import { IoMdPerson } from "react-icons/io";

const appointments = [
  {
    id: 1,
    name: "Raju",
    phone: 9030934206,
    date_of_appointment: "2024-05-18T08:00:00Z",
    time: "10:00:00",
    purpose: "Sinus",
  },
  {
    id: 2,
    name: "Sita",
    phone: 9081234567,
    date_of_appointment: "2024-05-19T09:00:00Z",
    time: "11:00:00",
    purpose: "Fever",
  },
  {
    id: 3,
    name: "Ram",
    phone: 9123456789,
    date_of_appointment: "2024-05-20T10:00:00Z",
    time: "12:00:00",
    purpose: "Cough",
  },
  {
    id: 4,
    name: "Lakshmi",
    phone: 9176543210,
    date_of_appointment: "2024-05-21T11:00:00Z",
    time: "13:00:00",
    purpose: "Headache",
  },
  {
    id: 5,
    name: "Krishna",
    phone: 9198765432,
    date_of_appointment: "2024-05-22T12:00:00Z",
    time: "14:00:00",
    purpose: "Back Pain",
  },
  {
    id: 6,
    name: "Lakshmi",
    phone: 9176543210,
    date_of_appointment: "2024-05-21T11:00:00Z",
    time: "13:00:00",
    purpose: "Headache",
  },
  {
    id: 7,
    name: "Krishna",
    phone: 9198765432,
    date_of_appointment: "2024-05-22T12:00:00Z",
    time: "14:00:00",
    purpose: "Back Pain",
  },
];

const AppointmentsPage = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center p-8'>
      <div className='w-full'>
        <div className='flex flex-row items-center mb-10'>
          <h1 className="text-md md:text-xl lg:text-2xl">Hello <span className="font-medium">Admin!!</span></h1>
          
          {/* Vertical Line */}
          <span className="ml-4 border-[1px] border-l-gray-500 h-12"></span>
          
          <div className="flex justify-center items-center ml-3">
            <span className="text-sm ml-0 md:ml-4"><BsCalendar2Event /></span>
            <p className="text-sm ml-1">My Appoinments</p>
          </div>
        </div>        
      </div>

      <div className='mb-8 lg:mb-16 w-full overflow-x-auto admin-scrollbar'>
        <div className='min-w-[800px] bg-custom-yellow border-[1px] border-custom-red rounded-tl-2xl rounded-tr-2xl p-4 px-6 md:px-8'>
          <ul className='grid grid-cols-5 text-red-400 font-regular'>
            <li>Name</li>
            <li>Phone Number</li>
            <li>Date of Appoinment</li>
            <li>time of Appoinment</li>
            <li>Purpose</li>
          </ul>
        </div>
        <div className='min-w-[800px] h-72 overflow-auto admin-scrollbar'>
          {appointments.map((appointment, index) => (
            <div key={index} className={`w-full bg-custom-yellow border-[1px] border-custom-red p-4 px-6 md:px-8 ${appointments.length === index+1 ? 'rounded-br-2xl rounded-bl-2xl' : ''}`}>
              <ul className='grid grid-cols-5'>
                <li className='flex items-center'>
                  <span className='mr-2'><IoMdPerson /></span>
                  {appointment.name}
                </li>
                <li>{appointment.phone}</li>
                <li>{appointment.date_of_appointment}</li>
                <li>{appointment.time}</li>
                <li>{appointment.purpose}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default AppointmentsPage;