import React from "react";
import { Link } from "react-router-dom";
import img from '../../../assets/Logo/image 2.png';
import { IoMdPerson } from "react-icons/io";
import { MdPayment } from "react-icons/md";
import { BsCalendar2Event } from "react-icons/bs";
import { MdOndemandVideo } from "react-icons/md"
import { MdOutlineCalendarMonth } from "react-icons/md"

const Sidebar = () => {
  return (
    <>
      <aside className="hidden lg:block lg:w-80">
        <div className="hidden lg:h-full lg:flex justify-start items-start flex-col bg-custom-yellow p-10 lg:w-80 rounded-br-2xl rounded-tr-2xl mb-2 border-r-[1px] border-b-[1px] border-custom-red">
          <div className="w-full flex flex-col justify-center items-center">
            <img src={img}/>
            <p className="font-medium">Admin</p>
          </div>
          <div className="w-full flex flex-col py-4">
            <Link to="/admin/classbooked" className="hover:bg-yellow-100 rounded-2xl p-4 cursor-pointer flex">
                    <span className="px-2 flex justify-center items-center text-lg">
                      <BsCalendar2Event />
                    </span>
                    <p className="font-medium text-lg">Class Bookings</p>
            </Link>
            <Link to="/admin/appointment" className="hover:bg-yellow-100 rounded-2xl p-4 cursor-pointer flex">
                    <span className="px-2 flex justify-center items-center text-lg">
                        <BsCalendar2Event />
                    </span>
                    <p className="font-medium text-lg">My Appointments</p>
            </Link>
            <Link to="/admin/youtube" className="hover:bg-yellow-100 rounded-2xl p-4 cursor-pointer flex">
                    <span className="px-2 flex justify-center items-center text-lg">
                        <MdOndemandVideo />
                    </span>
                    <p className="font-medium text-lg">Youtube Videos</p>
            </Link>
            <Link to="/admin/payment" className="hover:bg-yellow-100 rounded-2xl p-4 cursor-pointer flex">
                    <span className="px-2 flex justify-center items-center text-xl">
                        <MdPayment />
                    </span>
                    <p className="font-medium text-lg">Payments</p>
            </Link>
            <Link to="/admin/users" className="hover:bg-yellow-100 rounded-2xl p-4 cursor-pointer flex">
                    <span className="px-2 flex justify-center items-center text-lg">
                      <IoMdPerson />
                    </span>
                    <p className="font-medium text-lg">User Data</p>
            </Link>
            <Link to="/admin/slots" className="hover:bg-yellow-100 rounded-2xl p-4 cursor-pointer flex">
                    <span className="px-2 flex justify-center items-center text-lg">
                      <MdOutlineCalendarMonth />
                    </span>
                    <p className="font-medium text-lg">Set Slots</p>
            </Link>
            <Link to="/admin/addDoctor" className="hover:bg-yellow-100 rounded-2xl p-4 cursor-pointer flex">
                    <span className="px-2 flex justify-center items-center text-lg">
                      <MdOutlineCalendarMonth />
                    </span>
                    <p className="font-medium text-lg">Add Docter</p>
            </Link>
            <Link to="/admin/class" className="hover:bg-yellow-100 rounded-2xl p-4 cursor-pointer flex">
                    <span className="px-2 flex justify-center items-center text-lg">
                      <MdOutlineCalendarMonth />
                    </span>
                    <p className="font-medium text-lg">Class Updates</p>
            </Link>
          </div>
          <div className="w-full flex flex-col justify-end flex-grow pb-16">
            <p className="text-slate-500 ml-[25%]">Version 1.0</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;