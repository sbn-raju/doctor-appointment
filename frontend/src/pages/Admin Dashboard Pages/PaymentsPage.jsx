import React, { useState, useMemo } from "react";
import axios from "axios";
import { useQuery} from "@tanstack/react-query";
import Table from "../../components/Table";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { formatDate } from "../../utils/formateDate";
import { formatTime } from "../../utils/formateTime";





const PaymentsPage = () => {
  document.title = "Payment | Admin";

  const [limit] = useState(10);
  const [skip, setSkip] = useState(0);

  const fetchPaymentDetails = async () => {
    const response = await axios.get(
      `/api/v1/orders/admin/payments?limit=${limit}&skip=${skip}`
    );
    return response.data.data;
  };

  const { data: fetchUserPaymentDetails } = useQuery({
    queryKey: ["fetchUserPayDetails", skip],
    queryFn: fetchPaymentDetails,
  });

  console.log(fetchUserPaymentDetails);

  const handleMove = (moveCount) => {
    setSkip((prevSkip) => {
      return Math.max(prevSkip + moveCount, 0);
    });
  };

  const columns = [
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Contact",
      accessorKey: "whatsapp_no" || "mobile_no",
    },
    {
      header: "Date",
      accessorKey: "payment_date",
      cell: ({ getValue }) => formatDate(getValue()),
    },
    {
      header: "Time",
      accessorKey: "payment_time",
      cell: ({ getValue }) => formatTime(getValue()),
    },
    {
      header: "Transaction Id",
      accessorKey: "razorpay_payment_id",
    },
    {
      header: "Purpose",
      accessorKey: "payment_amount",
    },
  ];

  const data = useMemo(
    () => fetchUserPaymentDetails,
    [fetchUserPaymentDetails]
  );

  // const [currentPage, setCurrentPage] = useState(1);
  // const [rowsPerPage, setRowsPerPage] = useState(10);

  // const totalPages = Math.ceil(adminPaymentDetails.length / rowsPerPage);
  // const stIndex = (currentPage - 1) * rowsPerPage;
  // const endIndex = stIndex + rowsPerPage;
  // const currPayments = adminPaymentDetails.slice(stIndex, endIndex);

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
  //   return opts.filter((option) => option < adminPaymentDetails.length).map((opt) => (
  //     <option key={opt} value={opt}>{opt}</option>
  //   ))
  // }

  return (
    <div className="h-auto w-full bg-gray-1 flex flex-col justify-center items-center px-8">
      <div className="w-full flex justify-between">
        <div className="flex flex-row items-center">
          <h1 className="text-md md:text-xl lg:text-2xl">
            Hello <span className="font-medium">Admin!!</span>
          </h1>

          {/* Vertical Line */}
          <span className="ml-4 border-[1px] border-l-gray-500 h-12"></span>

          <div className="flex justify-center items-center ml-3">
            <span className="text-sm ml-0 md:ml-4">
            <CalendarMonthIcon/>
            </span>
            <p className="text-sm ml-1">Payments</p>
          </div>
        </div>
      </div>

      {Array.isArray(fetchUserPaymentDetails) ? (
        <Table data={data} columns={columns} />
      ) : (
        <div>No Data Recorded Yet</div>
      )}

      {/* <>
        <div className="hidden md:block w-full">
          <div className="w-full my-6 shadow-md bg-white p-3 px-6 rounded-2xl flex justify-between">
            <div className="flex w-1/3">
              <p className="text-sm">Row Per Page: </p>
              <select value={rowsPerPage} onChange={handleRowsPerPage} className='bg-gray-200 mx-2 rounded-md'>
                {renderRowsPerPage()}
                <option value={adminPaymentDetails.length}>{adminPaymentDetails.length}</option>
              </select>
            </div>
            <div className="flex justify-end items-center w-2/3">
              <button className="mx-2" onClick={() => handleMove(-limit)}>
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
              <button
                className="mx-2"
                onClick={() => handleMove(limit)}
                disabled={fetchUserPaymentDetails == undefined}
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden w-full">
          <div className='my-6 shadow-md bg-white p-3 px-6 rounded-2xl flex justify-between'>
            <button className='mx-2' onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </button>

        <select value={rowsPerPage} onChange={handleRowsPerPage} className='bg-gray-200 mx-2 rounded-md'>
              {renderRowsPerPage()}
              <option value={adminPaymentDetails.length}>{adminPaymentDetails.length}</option>
            </select>
        <button className='mx-2' onClick={handleNextPage} disabled={endIndex >= adminPaymentDetails.length}>
              Next
            </button>
          </div>
        </div>
      </> */}
    </div>
  );
};

export default PaymentsPage;
