import React, { useEffect, useState, useMemo } from 'react'
import { classBookings} from '../../constants'
import { BsCalendar2Event, BsWifi1 } from "react-icons/bs";
import '../../styles/scrollbar.styles.css'
import { useNavigate } from 'react-router-dom';
import {useQuery} from '@tanstack/react-query'
import axios from "axios"
import { useDispatch } from 'react-redux';
import Table from '../../components/Table';
import isValidToken from '../../apis/isValidToken';
import { logoutAdmin } from '../../services/adminSlice';


const ClassBookingPage = () => {

  const dispatch = useDispatch();
  const columns = [
    {
      header: 'Name',
      accessorKey: 'name',
    },
    {
      header: 'Contact',
      accessorKey: 'whatsapp_no' || 'mobile_no',
    },
    {
      header: 'Batch',
      accessorKey: 'class_id',
    },
    {
      header:"Email",
      accessorKey:"email"
    },
    {
      header: 'City',
      accessorKey: 'city',
    },
    
  ];

  




  const [batchClassDetails, setBatchClassDetails] = useState([]);
  const [keyBatch, setKeyBatch] = useState("");


  const fetchBatchNumber = async () => {
    try {
      const response = await axios.get("/api/v1/class/admin/getClass");
      return response.data.data;
    } catch (error) {
      if(isValidToken(error)){
        dispatch(logoutAdmin());
      }else{
        console.log(error);
        return error
      }
      return null 
    }
  };

  const fetchBatchWiseMembers = async (batch) => {
   try {
     const response = await axios.get(`/api/v1/class/admin/class/batches?batch=${batch}`);
     return response.data.data;
   } catch (error) {
    if(isValidToken(error)){
      dispatch(logoutAdmin());
    }else{
      console.log(error);
      return error
    }
    return null 
   }
  };

  const fetchClassDetails = async () => {
   try {
     const response = await axios.get("/api/v1/class/admin/users/booked");
     return response.data.data;
   } catch (error) {
    if(isValidToken(error)){
      dispatch(logoutAdmin());
    }else{
      console.log(error);
      return error
    }
    return null 
   }
  };

  const { data: batchDetails } = useQuery({
    queryKey: ['batches'],
    queryFn: fetchBatchNumber,
  });

  const { data: classDetails } = useQuery({
    queryKey: ['classMembers'],
    queryFn: fetchClassDetails,
  });


  useEffect(() => {
    if (keyBatch) {
      const fetchData = async () => {
        const batchMember = await fetchBatchWiseMembers(keyBatch);
        setBatchClassDetails(Array.isArray(batchMember) ? batchMember : []);
      };
      fetchData();
    } else {
      setBatchClassDetails(Array.isArray(classDetails) ? classDetails : []);
    }
  }, [keyBatch, classDetails]);

  const data = useMemo(()=> batchClassDetails , [batchClassDetails])
  




  return (
    <div className='h-auto w-full bg-gray-1 flex flex-col justify-center   items-center px-8'>
      <div className='w-full flex justify-between mt-6'>
        <div className='flex flex-row items-center'>
          <h1 className="text-md md:text-xl lg:text-2xl">Hello <span className="font-medium">Admin!!</span></h1>
          
          {/* Vertical Line */}
          <span className="ml-4 border-[1px] border-l-gray-500 h-12"></span>
          
          <div className="flex justify-center items-center ml-3">
            <span className="text-sm ml-0 md:ml-4"><BsCalendar2Event /></span>
            <p className="text-sm ml-1">Class Bookings</p>
          </div>
        </div>

        <div className='flex justify-end items-center'>
          <select 
            className='shadow rounded-2xl p-[6px] h-10 mx-2 md:mx-4'
            onChange={(e)=>setKeyBatch(e.target.value)}
            >
              <option value={''}>All</option>
              {batchDetails?.map((batch, index) => (
                <option value={batch.id} key={index}>Batch No.:{batch.id}</option>
              )) }
          </select>
        </div>
      </div>

      
      {classBookings.length !== 0 ? (
        <Table data={data} columns={columns}/>
      ) : (
        <div>
          No Slots Are Booked
        </div>
      )}

      {/* <>
        <div className="hidden md:block w-full">
          <div className='w-full my-6 shadow-md bg-white p-3 px-6 rounded-2xl flex justify-between'>
            <div className="flex w-1/3">
              <p className="text-sm">Row Per Page: </p>
              <select value={rowsPerPage} onChange={handleRowsPerPage} className='bg-gray-200 mx-2 rounded-md'>
                {renderRowsPerPage()}
                <option value={classData.length}>{classData.length}</option>
              </select>
            </div>
            <div className='flex justify-end items-center w-2/3'>
              <button className='mx-2' onClick={handleMove(-limit)} disabled={currentPage === 1}>
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
              <button className='mx-2' onClick={handleMove(limit)} disabled={currentPage === totalPages}>
                Next
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden w-full">
          <div className='my-6 shadow-md bg-white p-3 px-6 rounded-2xl flex justify-between'>
            <button className='mx-2' onClick={handleMove(-limit)} disabled={currentPage === 1}>
              Previous
            </button>

            <select value={rowsPerPage} onChange={handleRowsPerPage} className='bg-gray-200 mx-2 rounded-md'>
              {renderRowsPerPage()}
              <option value={classBookings.length}>{classBookings.length}</option>
            </select>

            <button className='mx-2' onClick={handleMove(limit)} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </div>
      </> */}
    </div>
  )
}

export default ClassBookingPage

