import React, { useState, useEffect, useMemo, Suspense } from "react";
import { BsCalendar2Event } from "react-icons/bs";
import '../../styles/scrollbar.styles.css'
import { Link } from "react-router-dom";
import {useQuery} from "@tanstack/react-query"
import axios from "axios"
import AppointmentsTable from "../../components/AppointmentsTable";
import Loading from "../../components/Loading.jsx"
import { formatDate } from "../../utils/formateDate.js";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import isValidToken from "../../apis/isValidToken.js";
import { useDispatch } from "react-redux";
import { logoutAdmin } from "../../services/adminSlice.js";




const CautionBox = ({handleCancel}) => {
  return (
    <div className="h-screen fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-[60]">
      <div className="w-[400px] bg-red-500 p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl mb-4 text-white">Caution</h2>
        <p className="mb-4 text-white">Are you sure to, reshedule, this may lead to bad brand publicity, try to avoid resheduling</p>
        <div className="flex justify-center">
          <button className="bg-white text-black px-4 py-2 rounded mr-2" onClick={handleCancel}>
            Cancel
          </button>
          <Link className="text-gray-2 px-4 py-2 rounded" to='/admin/appointment/reschedule'>
            Continue
          </Link>
        </div>
      </div>
    </div>
  )
}





const AppointmentsPage = () => {
  const dispatch = useDispatch();
    //Fetching All Appointments
    const fetchAllAppointments = async()=>{
      try {
        const response = await axios.get("/api/v1/appointment/get/appointments");
        console.log(response)
        return response?.data.data
      } catch (error) {
        console.log(error);
        if(isValidToken(error)){
          dispatch(logoutAdmin())
        }
        else{
          console.log(error)
          // return Promise.reject(error);
        }
        return null
      }
    }


    const{data : userappointments} = useQuery({
      queryKey:['userAppointments'],
      queryFn:fetchAllAppointments
    })

    console.log(userappointments);


    const data = useMemo(()=>{
      return userappointments
    },[userappointments])


    const columns = useMemo(()=>[
      {
        header: 'Patient Name',
        accessorKey: 'p_name',
        enableColumnFilter:true,
        enableSorting: false,
      },
      {
        header: 'Doctor Name',
        accessorKey: 'name',
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
        header: 'Time',
        accessorKey: 'slot_start_time',
        enableColumnFilter:false,
        enableSorting: false,
      },
      {
        header: 'Contact',
        accessorKey: 'mobile_no',
        enableColumnFilter: false,
        enableSorting: false,
      },
      {
        header: 'Purpose',
        accessorKey: 'purpose_of_visit',
        enableColumnFilter: false,
        enableSorting: false,
      },
      
    ],[]);
  
  // const [currentPage, setCurrentPage] = useState(1);
  // const [rowsPerPage, setRowsPerPage] = useState(10);//
  // const [isCautionBoxOpen, setIsCautionBoxOpen] = useState(false);
  // const [selectedSort, setSelectedSort] = useState("All");
  // const [selectedAppointmentType, setSelectedAppointmentType] = useState("Appointments");
  // const [selectedAppointments, setSelectedAppointments] = useState([]);
  // const [selectDoctor, setSelectDoctor] = useState("All");
  // const navigate = useNavigate();

  // const inCompleteAppointments = appointments.filter((doc) => !doc.isChecked);
  // //Array apppointments
  // const completedAppointments = appointments.filter((doc) => doc.isChecked);

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
    
  //   if (selectDoctor !== 'All') {
  //     sortedList = sortedList.filter(a => a.doctor === selectDoctor);
  //   }
    
  //   if (selectedAppointmentType === "Appointments") {
  //     setInCompletedSort(sortedList);
  //   } else {
  //     setCompletedSort(sortedList);
  //   }
  // }, [selectedSort, selectDoctor]);

  // const handleSortChange = (e) => {
  //   setSelectedSort(e.target.value);
  //   setSelectDoctor('All');
  //   setCurrentPage(1);
  // }

  // const handleDoctors = (e) => {
  //   setSelectDoctor(e.target.value);
  //   setCurrentPage(1);
  // }

  // const handleAppointments = (e) => {
  //   setSelectedAppointmentType(e.target.value);
  //   setSelectedSort('All');
  //   setSelectDoctor('All');
  //   setInCompletedSort(inCompleteAppointments);
  //   setCompletedSort(completedSort);
  //   setCurrentPage(1);
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
  //   setRowsPerPage(parseInt(e.target.value, 10)); 
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

  // const handleWhatsapp = () => {
  //   if(selectedAppointments.length !== 0){
  //     navigate('/admin/whatsapp');
  //   } else{
  //     alert('Please select appointments to send whatsapp message');
  //   }
  // }

  // const changeStatus = () => {
  //   if(selectedAppointments.length !== 0){
  //     // api (axios) call
  //   } else{
  //     alert('Please select appointments to send whatsapp message');

  //   }
  // }

  // const handleCautionBox = () => {
  //   if(selectedAppointments.length !== 0){
  //     setIsCautionBoxOpen(true);
  //   } else{
  //     alert('Please select appointments to send whatsapp message');
  //   }
  // }

  // const handleCancel = () => {
  //   setIsCautionBoxOpen(false);
  // }

  return (
    <div className='h-auto w-full bg-gray-1 flex flex-col justify-center items-center p-8'>
      <div className='w-full flex justify-between mt-6'>
        <div className='flex flex-row items-center'>
          <h1 className="text-md md:text-xl lg:text-2xl">Hello <span className="font-medium">Admin!!</span></h1>
          
          {/* Vertical Line */}
          <span className="ml-4 border-[1px] border-l-gray-500 h-12"></span>
          
          <div className="flex justify-center items-center ml-3">
            <span className="text-sm ml-0 md:ml-4"><BsCalendar2Event /></span>
            <p className="text-sm ml-1">Appoitnments</p>
          </div>
        </div>

        <div className='flex justify-end items-center'>
          {/* <select 
            className='shadow rounded-2xl p-[6px] h-10 mx-2 md:mx-4'
            onChange={handleSortChange} 
            value={selectedSort}>
              <option value="All">All</option>
              <option value="Today">Today</option>
              <option value="Tomorrow">Tomorrow</option>
          </select> */}


          <select className='shadow rounded-2xl p-[6px] h-10 mx-2 md:mx-4' >
          {/* onChange={handleAppointments} value={selectedAppointmentType} */}
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
            onChange={handleSelectAll}
            checked={selectedAppointments.length === appointments.length}
          />
          <label htmlFor="selectAll">Select All</label>
        </div>
        <div className="flex justify-center items-center">
          <button className="mx-2 bg-green-600" >
          <WhatsAppIcon/>&nbsp;Whatsapp
          </button>
        </div>
      </div> */}

      {/* {isCautionBoxOpen && <CautionBox handleCancel={handleCancel} />} */}


      
      {userappointments ? (
        <Suspense fallback={<Loading/>}>
          <AppointmentsTable data={data} columns={columns} />
        </Suspense>
) : (
  <Loading/>
)}
      {/* {appointments.length !==0 ? (
        <div className='bg-white shadow-md mt-6 w-full overflow-x-auto admin-scrollbar rounded-2xl'>
          <div className='min-w-[800px] bg-white p-4 px-6 md:px-10 border-b-[1px] border-gray-2'>
            <ul className='ml-8 grid grid-cols-6 font-regular text-sm'>
              <li>Name</li>
              <li>Docter</li>
              <li>Date</li>
              <li>Time</li>
              <li>Contact</li>
              <li>Purpose</li>
            </ul>
          </div>
          <div className='min-w-[800px] h-[520px] overflow-auto scrollbar'>
          {selectedAppointmentType === 'Appointments' ? (
            <>
              {inCompleteDisplay.map((appointment, index) => (
                <div key={index} className='flex w-full bg-white p-4 px-6 md:px-8'>
                  <input type="checkbox" id={index} className="mr-8" 
                      checked={selectedAppointments.includes(appointment.id)}
                      onChange={(e) => handleSelectAppointment(e, appointment.id)}/>
                  <ul className='w-full grid grid-cols-6 text-sm'>
                    <li>{appointment.name}</li>
                    <li>{appointment.doctor}</li>
                    <li>{appointment.date_of_appointment}</li>
                    <li>{appointment.time}</li>
                    <li>{appointment.phone}</li>
                    <li>{appointment.purpose}</li>
                  </ul>
                </div>
              ))}
            </>
          ) : (
            <>
              {completeDisplay.map((appointment, index) => (
                <div key={index} className='flex w-full bg-white p-4 px-6 md:px-8'>
                  <input type="checkbox" id={index} className="mr-8" 
                      checked={selectedAppointments.includes(appointment.id)}
                      onChange={(e) => handleSelectAppointment(e, appointment.id)}/>
                  <ul className='w-full grid grid-cols-6 text-sm'>
                    <li>{appointment.name}</li>
                    <li>{appointment.doctor}</li>
                    <li>{appointment.date_of_appointment}</li>
                    <li>{appointment.time}</li>
                    <li>{appointment.phone}</li>
                    <li>{appointment.purpose}</li>
                  </ul>
                </div>
              ))}
            </>
          )}
          </div>
        </div>
      ) : (
        <div>
          No Data Recorded Yet
        </div>
      )} */}
{/*       
      <>
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
  )
};

export default AppointmentsPage;
