import React from "react";
import { Link } from "react-router-dom";
import img from '../../../assets/Page Assets/Home/New Logo.png'
import { IoMdPerson } from "react-icons/io";
import { MdPayment } from "react-icons/md";
import { BsCalendar2Event } from "react-icons/bs";
import { MdOndemandVideo } from "react-icons/md"
import { MdOutlineCalendarMonth } from "react-icons/md"

const Sidebar = () => {
  return (
    <>
      <aside className="hidden lg:block lg:w-80 bg-gray-1">
        <div className="hidden lg:h-full lg:flex justify-start items-start flex-col text-white bg-green-4 p-10 lg:w-80 rounded-br-3xl rounded-tr-3xl mb-2">
          <div className="w-full flex flex-col justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#000000" class="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
            <p className="text-sm text-gray-300">Admin</p>
          </div>
          <div className="w-full flex flex-col py-4">
            <Link to="/admin/classbooked" className="hover:bg-green-3 focus:bg-green-3 rounded-2xl p-4 cursor-pointer flex">
                    <span className="px-2 flex justify-center items-center text-lg">
                      <BsCalendar2Event />
                    </span>
                    <p className="text-lg">Class Bookings</p>
            </Link>
            <Link to="/admin/appointment" className="hover:bg-green-3 focus:bg-green-3 rounded-2xl p-4 cursor-pointer flex">
                    <span className="px-2 flex justify-center items-center text-lg">
                        <BsCalendar2Event />
                    </span>
                    <p className="text-lg">My Appointments</p>
            </Link>
            <Link to="/admin/youtube" className="hover:bg-green-3 focus:bg-green-3 rounded-2xl p-4 cursor-pointer flex">
                    <span className="px-2 flex justify-center items-center text-lg">
                        <MdOndemandVideo />
                    </span>
                    <p className="text-lg">Youtube Videos</p>
            </Link>
            <Link to="/admin/payment" className="hover:bg-green-3 focus:bg-green-3 rounded-2xl p-4 cursor-pointer flex">
                    <span className="px-2 flex justify-center items-center text-xl">
                        <MdPayment />
                    </span>
                    <p className="text-lg">Payments</p>
            </Link>
            <Link to="/admin/users" className="hover:bg-green-3 focus:bg-green-3 rounded-2xl p-4 cursor-pointer flex">
                    <span className="px-2 flex justify-center items-center text-lg">
                      <IoMdPerson />
                    </span>
                    <p className="text-lg">User Data</p>
            </Link>
            <Link to="/admin/slots" className="hover:bg-green-3 focus:bg-green-3 rounded-2xl p-4 cursor-pointer flex">
                    <span className="px-2 flex justify-center items-center text-lg">
                      <MdOutlineCalendarMonth />
                    </span>
                    <p className="text-lg">Set Slots</p>
            </Link>
            <Link to="/admin/addDoctor" className="hover:bg-green-3 focus:bg-green-3 rounded-2xl p-4 cursor-pointer flex">
                    <span className="px-2 flex justify-center items-center text-lg">
                      <MdOutlineCalendarMonth />
                    </span>
                    <p className="text-lg">Add Docter</p>
            </Link>
            <Link to="/admin/class" className="hover:bg-green-3 focus:bg-green-3 rounded-2xl p-4 cursor-pointer flex">
                    <span className="px-2 flex justify-center items-center text-lg">
                      <MdOutlineCalendarMonth />
                    </span>
                    <p className="text-lg">Class Updates</p>
            </Link>
          </div>
          <div className="w-full flex flex-col justify-end flex-grow pb-16">
            <p className="text-gray-400 ml-[25%]">Version 1.0</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;