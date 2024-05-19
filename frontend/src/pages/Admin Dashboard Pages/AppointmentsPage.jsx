import React from "react";

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
];

const AppointmentsPage = () => {
  return (
    <>
      <div className="max-w-full h-auto">
         <div>
         </div>
      </div>
    </>
  )
};

export default AppointmentsPage;


// {appointments.map((appointment) => (
//   <div key={appointment.id} className="flex flex-row justify-center items-center gap-10">
//     <p>{appointment.name}</p>
//     <p>{appointment.phone}</p>
//     <p>{appointment.date_of_appointment}</p>
//     <p>{appointment.time}</p>
//     <p>{appointment.purpose}</p>
//   </div>
// ))}
