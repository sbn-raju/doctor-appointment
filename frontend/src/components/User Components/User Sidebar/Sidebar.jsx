import React from "react";
import { Link } from "react-router-dom";
import { userProfile } from "../../../constants";
import img from '../../../assets/Logo/image 2.png';
import { IoMdPerson } from "react-icons/io";
import { MdPayment } from "react-icons/md";
import { BsCalendar2Event } from "react-icons/bs";

const Sidebar = () => {
  return (
    <>
      <aside className="hidden lg:block lg:w-80">
        <div className="hidden lg:h-full lg:flex justify-start items-start flex-col bg-custom-yellow p-10 lg:w-80 rounded-br-2xl rounded-tr-2xl mb-2 border-r-[1px] border-b-[1px] border-custom-red">
          <div className="w-full flex flex-col justify-center items-center">
            <img src={img}/>
            <p className="font-medium">{userProfile.Name}</p>
            <p>{userProfile.Contact}</p>
          </div>
          <div className="w-full flex flex-col py-4">
            <Link to="/user/profile" className="hover:bg-yellow-100 rounded-2xl p-4 cursor-pointer flex">
                    <span className="px-2 flex justify-center items-center">
                        <IoMdPerson />
                    </span>
                    <p className="font-medium">Profile</p>
            </Link>
            <Link to="/user/appointment" className="hover:bg-yellow-100 rounded-2xl p-4 cursor-pointer flex">
                    <span className="px-2 flex justify-center items-center">
                        <BsCalendar2Event />
                    </span>
                    <p className="font-medium">My Appointments</p>
            </Link>
            <Link to="/user/payment" className="hover:bg-yellow-100 rounded-2xl p-4 cursor-pointer flex">
                    <span className="px-2 flex justify-center items-center">
                        <MdPayment />
                    </span>
                    <p className="font-medium">My Payments</p>
            </Link>
            <Link to="/user/class" className="hover:bg-yellow-100 rounded-2xl p-4 cursor-pointer flex">
                    <span className="px-2 flex justify-center items-center">
                        <BsCalendar2Event />
                    </span>
                    <p className="font-medium">My Classes</p>
            </Link>
          </div>
          <div className="w-full flex flex-col justify-end flex-grow pb-20">
            <p className="text-slate-500 ml-[25%]">Version 1.0</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
