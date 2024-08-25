  import React, { useState, useEffect, useMemo } from 'react';
  import { DoctorAppointments as appointments } from '../../constants';
  import { Link, useNavigate } from "react-router-dom";
  import { BsCalendar2Event } from "react-icons/bs";
  import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
  import axios from "axios";
  import WhatsAppIcon from '@mui/icons-material/WhatsApp';
  import HowToRegIcon from '@mui/icons-material/HowToReg';
  import DoctorTable from '../../components/DoctorTable';
  import { formatDate } from '../../utils/formateDate';





  const DoctorAppointments = () => {
    document.title = "Doctor DashBoard | Admin Panel"
    const query = useQueryClient();
    const [selectedAppointmentType, setSelectedAppointmentType] = useState('Appointment')

    //Count Apppointments
    const fetchCountAppointment = async()=>{
      const response = await axios.get("/api/v1/doctor/count/completed");
      console.log(response);
      return response.data
    }

    const {data: countAppointments} = useQuery({
      queryKey:['AppointmentsCount'],
      queryFn:fetchCountAppointment
    })


    console.log(countAppointments);



    const fetchUserAppointment = async()=>{
      const response = await axios.get("/api/v1/doctor/get/appointment")
      return response?.data?.data
    }
    // /get/completed/appointments

    const {data: userAppointment} = useQuery({
      queryKey:['doctorAppointment'],
      queryFn:fetchUserAppointment
    })


    console.log(userAppointment);


    const data = useMemo(() => {
        return userAppointment
    }, [userAppointment])



    const columns = useMemo(()=>[
      {
          header: 'Patient Name',
          accessorKey: 'p_name',
          enableColumnFilter:true,
          enableSorting: false,
      },
      {
          header: 'Patient Contact',
          accessorKey: 'mobile_no',
          enableColumnFilter:true,
          enableSorting: false,
      },
      {
          header: 'Date',
          accessorKey: 'date',
          cell:({getValue})=> formatDate(getValue()),
          enableColumnFilter:false,
          enableSorting: true,
      },
      {
          header: 'Slot Time',
          accessorKey: 'slot_start_time',
          enableColumnFilter:true,
          enableSorting: false,
      },
      {
        header: 'Purpose',
        accessorKey: 'purpose_of_visit',
        enableColumnFilter:false,
        enableSorting: false,
    },
    ],[])

    const fetchCompletedAppointment = async()=>{
      try {
        const response = await axios.get("/api/v1/doctor/get/completed/appointments");
        return response?.data?.data;
      } catch (error) {
        console.error("Error fetching completed appointments:", error);
        throw error;
      }
    }


    const {data: completedAppointment} = useQuery({
      queryKey:['doctorCompletedAppointment'],
      queryFn:fetchCompletedAppointment
    })


    console.log(completedAppointment);


   const handleAppointments = ()=>{
       
   }
  

    
    



    // const [currentPage, setCurrentPage] = useState(1);
    // const [rowsPerPage, setRowsPerPage] = useState(10);
    // const navigate = useNavigate();
    // const [selectedAppointments, setSelectedAppointments] = useState([]);
    // const [selectedSort, setSelectedSort] = useState("All");
    // const [selectedAppointmentType, setSelectedAppointmentType] = useState("Appointments");

    // const inCompleteAppointments = userAppointment?.data || []
    // const completedAppointments = completedAppointment?.data || []

    // const [inCompletedSort, setInCompletedSort] = useState(inCompleteAppointments);
    // const [completedSort, setCompletedSort] = useState(completedAppointments);

    // useEffect(() => {
    //   let sortedList;
    //   if (selectedAppointmentType === "Appointments") {
    //     sortedList = [...inCompleteAppointments];
    //   } else {
    //     sortedList = [...completedAppointments];
    //   }
    
    //   if (selectedSort === 'Today') {
    //     const today = new Date().toDateString();
    //     sortedList = sortedList.filter(a => new Date(a.date_of_appointment).toDateString() === today);
    //   } else if (selectedSort === 'Tomorrow') {
    //     const tmrw = new Date();
    //     tmrw.setDate(tmrw.getDate() + 1);
    //     sortedList = sortedList.filter(a => new Date(a.date_of_appointment).toDateString() === tmrw.toDateString());
    //   }
      
    //   if (selectedAppointmentType === "Appointments") {
    //     setInCompletedSort(sortedList);
    //   } else {
    //     setCompletedSort(sortedList);
    //   }
    // }, [selectedSort]);

    // const stIndex = (currentPage - 1) * rowsPerPage;
    // const endIndex = stIndex + rowsPerPage;
    // const inCompleteDisplay = inCompletedSort.slice(stIndex, endIndex);
    // const completeDisplay = completedSort.slice(stIndex, endIndex);

    // let totalPages = 0;

    // if (selectedAppointmentType === "Appointments") {
    //   totalPages = Math.ceil(inCompletedSort.length / rowsPerPage);
    // } else {
    //   totalPages = Math.ceil(completedSort.length / rowsPerPage);
    // }

    // const handleRowsPerPage = (e) => {
    //   setRowsPerPage(parseInt(e.target.value, 10)); // converting string num to decimal from dropdown menu
    //   setCurrentPage(1); // reloading to 1st page after rows per page count is changed
    // }

    // const handlePreviousPage = () => {
    //   setCurrentPage(currentPage - 1);
    // }

    // const handleNextPage = () => {
    //   setCurrentPage(currentPage + 1);
    // }

    // const handlePageClick = (pageNo) => {
    //   setCurrentPage(pageNo)
    // }

    // const renderRowsPerPage = () => {
    //   const opts = [10, 20, 50, 100, 200, 300];
    //   if (selectedAppointmentType === "Appointments") {
    //     return opts.filter((option) => option < inCompletedSort.length).map((opt) => (
    //       <option key={opt} value={opt}>{opt}</option>
    //     ))
    //   } else {
    //     return opts.filter((option) => option < completedSort.length).map((opt) => (
    //       <option key={opt} value={opt}>{opt}</option>
    //     ))
    //   }
    // }

    // const handleSelectAll = (e) => {
    //   if (e.target.checked) {
    //     setSelectedAppointments(appointments.map(appointment => appointment.id));
    //   } else {
    //     setSelectedAppointments([]);
    //   }
    // }

    // const handleSelectAppointment = (e, id) => {
    //   if (e.target.checked) {
    //     setSelectedAppointments([...selectedAppointments, id]);
    //   } else {
    //     setSelectedAppointments(selectedAppointments.filter(selectedId => selectedId !== id));
    //   }
    // }

    // const handleSortChange = (e) => {
    //   setSelectedSort(e.target.value);
    //   setCurrentPage(1);
    // }

    // const handleAppointments = (e) => {
    //   setSelectedAppointmentType(e.target.value);
    //   setSelectedSort('All');
    //   setInCompletedSort(inCompleteAppointments);
    //   setCompletedSort(completedSort);
    //   setCurrentPage(1);
    // }


    


    return (
      <div className='min-h-screen bg-gray-1 p-8 flex flex-col md:flex-row'>
        <div className='w-full lg:w-9/12 flex flex-col justify-center items-center'>
        <div className='w-full flex justify-between'>
          <div className='flex flex-row items-center'>
            <h1 className="text-md md:text-xl lg:text-2xl">Hello <span className="font-medium">Doctor!!</span></h1>
            
            {/* Vertical Line */}
            <span className="ml-4 border-[1px] border-l-gray-500 h-12"></span>
            
            <div className="flex justify-center items-center ml-3">
              <span className="text-sm ml-0 md:ml-4"><BsCalendar2Event /></span>
              <p className="text-sm ml-1">Appointments</p>
            </div>
          </div>

          <div className='flex justify-end items-center'>
            <select 
              className='shadow rounded-2xl p-[6px] h-10 mx-2 md:mx-4'
              // onChange={handleSortChange} 
              // value={selectedSort}
              >
                <option value="All">All</option>
                <option value="Today">Today</option>
                <option value="Tomorrow">Tomorrow</option>
            </select>

            <select className='shadow rounded-2xl p-[6px] h-10 mx-2 md:mx-4' 
            onChange={handleAppointments} 
            value={selectedAppointmentType}
            >
              <option value="Appointments">Appointments</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        {/* <div className='mt-6 p-3 px-8 bg-white w-full rounded-2xl shadow-md flex justify-between'>
          <div>
            <input
              type="checkbox"
              id="selectAll"
              className='mx-2'
              // onChange={handleSelectAll}
              // checked={selectedAppointments.length === inCompleteDisplay.length}
            />
            <label htmlFor="selectAll">Select All</label>
          </div>
          <div className="flex justify-center items-center">
            <button className="mx-2" onClick={() => navigate('/doctor/whatsapp')}>
              <p className='text-green-700'><WhatsAppIcon/></p>
            </button>
            <button className="mx-2" onClick={changeStatus}>
              <p className='text-green-700'><HowToRegIcon/></p>
            </button>
          </div>
        </div> */}

          {
            data ? <DoctorTable data={data} columns={columns}/> :<div>
            Currently, no slots have been booked for your appointments.
          </div>
          }
        

        {/* {inCompleteDisplay.length != 0 || completeDisplay.length != 0? (
          <div className='bg-white shadow-md mt-6 w-full overflow-x-auto admin-scrollbar rounded-2xl'>
            <div className='min-w-[800px] bg-white p-4 px-6 md:px-10 border-b-[1px] border-gray-2 sticky top-0 z-10'>
              <ul className='ml-8 grid grid-cols-5 font-regular text-sm'>
                <li>Name</li>
                <li>Contact</li>
                <li>Date</li>
                <li>Time</li>
                <li>Purpose</li>
              </ul>
            </div>
            <div className='min-w-[800px] h-[520px] overflow-auto scrollbar'> */}
            {/* {selectedAppointmentType === 'Appointments' ? (
              <>
              {inCompleteDisplay?.map((appointment, index) => (
                <div key={index} className='flex w-full bg-white p-4 px-6 md:px-8'>
                  <input type="checkbox" id={index} className="mr-8" 
                        checked={selectedAppointments.includes(appointment.id)}
                        onChange={(e) => handleSelectAppointment(e, appointment.id)}/>
                  <ul className='w-full grid grid-cols-5 text-sm'>
                  <li>{appointment.p_name}</li>
                    <li>{appointment.mobile_no}</li>
                    <li>{formatDate(appointment.date)}</li>
                    <li>{appointment.slot_start_time}</li>
                    <li>{appointment.purpose_of_visit}</li>
                  </ul>
                </div>
              ))}
              </>
            ) : (
              <>
                {completeDisplay?.map((appointment, index) => (
                <div key={index} className='flex w-full bg-white p-4 px-6 md:px-8'>
                  <input type="checkbox" id={index} className="mr-8" 
                        checked={selectedAppointments.includes(appointment.id)}
                        onChange={(e) => handleSelectAppointment(e, appointment.id)}/>
                  <ul className='w-full grid grid-cols-5 text-sm'>
                    <li>{appointment.p_name}</li>
                    <li>{appointment.mobile_no}</li>
                    <li>{formatDate(appointment.date)}</li>
                    <li>{appointment.slot_start_time}</li>
                    <li>{appointment.purpose_of_visit}</li>
                  </ul>
                </div>
              ))}
              </>
            )}
            </div>
          </div>
        ) : (
          <div>
            Currently, no slots have been booked for your appointments.
          </div>
        )}  */}
        
        {/* <>
          <div className="hidden md:block w-full">
            <div className='w-full my-6 shadow-md bg-white p-3 px-6 rounded-2xl flex justify-between'>
              {selectedAppointmentType === "Appointments" ? (
                <>
                  <div className="flex w-1/3">
                    <p className="text-sm">Row Per Page: </p>
                    <select value={rowsPerPage} onChange={handleRowsPerPage} className='bg-gray-200 mx-2 rounded-md'>
                      {renderRowsPerPage()}
                      <option value={inCompletedSort.length}>{inCompletedSort.length}</option>
                    </select>
                  </div>
                  <div className='flex justify-end items-center w-2/3'>
                    <button className='mx-2' onClick={handlePreviousPage} disabled={currentPage === 1}>
                      Previous
                    </button>
                    <div className="overflow-auto whitespace-nowrap admin-scrollbar">
                      <div className=''>
                        {Array.from({length: totalPages}, (_, index) => (
                          <button
                            key={index + 1}
                            className={`w-6 mx-1 rounded-full ${currentPage === index + 1 ? 'bg-green-4 text-white' : 'bg-white text-black'}`}
                            onClick={() => handlePageClick(index + 1)}
                          >
                          {index + 1}
                        </button>
                        ))}
                      </div>
                    </div>
                    <button className='mx-2' onClick={handleNextPage} disabled={endIndex >= inCompletedSort.length}>
                      Next
                    </button>
                  </div>
                </>
                ) : (
                  <>
                    <div className="flex w-1/3">
                      <p className="text-sm">Row Per Page: </p>
                      <select value={rowsPerPage} onChange={handleRowsPerPage} className='bg-gray-200 mx-2 rounded-md'>
                        {renderRowsPerPage()}
                        <option value={completedSort.length}>{completedSort.length}</option>
                      </select>
                    </div>
                    <div className='flex justify-end items-center w-2/3'>
                      <button className='mx-2' onClick={handlePreviousPage} disabled={currentPage === 1}>
                        Previous
                      </button>
                      <div className="overflow-auto whitespace-nowrap admin-scrollbar">
                        <div className=''>
                          {Array.from({length: totalPages}, (_, index) => (
                            <button
                              key={index + 1}
                              className={`w-6 mx-1 rounded-full ${currentPage === index + 1 ? 'bg-green-4 text-white' : 'bg-white text-black'}`}
                              onClick={() => handlePageClick(index + 1)}
                            >
                            {index + 1}
                          </button>
                          ))}
                        </div>
                      </div>
                      <button className='mx-2' onClick={handleNextPage} disabled={endIndex >= completedSort.length}>
                        Next
                      </button>
                    </div>
                  </>
                )}
            </div>
          </div>

          <div className="md:hidden w-full">
          {selectedAppointmentType === "Appointments" ? (
            <div className='my-6 shadow-md bg-white p-3 px-6 rounded-2xl flex justify-between'>
              <button className='mx-2' onClick={handlePreviousPage} disabled={currentPage === 1}>
                Previous
              </button>

              <select value={rowsPerPage} onChange={handleRowsPerPage} className='bg-gray-200 mx-2 rounded-md'>
                {renderRowsPerPage()}
                <option value={inCompleteAppointments.length}>{inCompleteAppointments.length}</option>
              </select>

              <button className='mx-2' onClick={handleNextPage} disabled={endIndex >= inCompleteAppointments.length}>
                Next
              </button>
            </div>
          ) : (
            <div className='my-6 shadow-md bg-white p-3 px-6 rounded-2xl flex justify-between'>
              <button className='mx-2' onClick={handlePreviousPage} disabled={currentPage === 1}>
                Previous
              </button>

              <select value={rowsPerPage} onChange={handleRowsPerPage} className='bg-gray-200 mx-2 rounded-md'>
                {renderRowsPerPage()}
                <option value={completedAppointments.length}>{completedAppointments.length}</option>
              </select>

              <button className='mx-2' onClick={handleNextPage} disabled={endIndex >= completedAppointments.length}>
                Next
              </button>
            </div>
          )}
          </div>
        </> */}
        </div>

        <div className='h-full w-full lg:w-3/12 mx-4'>
          <div className='flex md:flex-row lg:flex-col justify-end items-center'>
              <div className='bg-white w-full rounded-xl'>
                  <div className='px-4 py-2'>
                      <p>Gratitude Box</p>
                  </div>
                  <hr className='border-[1px] border-gray-2'/>
                  <div className='p-4'>
                      <p className='text-[#666666]'>
                          “Your genuine concern and support have meant a lot to me. Thank you for going above and beyond to ensure my well-being.”
                      </p>
                  </div>
              </div>
              <div className='bg-white w-full rounded-xl my-10'>
                  <div className='px-4 py-2'>
                      <p>Number of souls you have touched.</p>
                  </div>
                  <hr className='border-[1px] border-gray-2'/>
                  <div className='p-4 flex flex-col justify-center items-center'>
                      <div className='border-8 border-white bg-green-4 h-44 w-44 rounded-full flex justify-center items-center text-white shadow-xl'>
                          {countAppointments?.data}
                      </div>
                      <p className='self-start my-4'>Lot more to go..........</p>
                  </div>
              </div>      
          </div>
        </div>
      </div> 
    )
  }

  export default DoctorAppointments;
