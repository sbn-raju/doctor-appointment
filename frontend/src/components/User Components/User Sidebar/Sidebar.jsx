import React, {useState} from "react";
import { Link } from "react-router-dom";
import { userProfile } from "../../../constants";
import { IoMdPerson } from "react-icons/io";
import { MdPayment } from "react-icons/md";
import { BsCalendar2Event } from "react-icons/bs";

const Sidebar = () => {
  const [activeBtn, setActiveBtn] = useState('');

  const handleBtn = (path) => {
    setActiveBtn(path);
  }

  const isActive = (path) => activeBtn === path;

  return (
    <>
      <aside className="hidden lg:block lg:w-80 bg-gray-1">
        <div className="hidden lg:h-full lg:flex flex-col justify-start items-start text-white bg-green-4 p-10 lg:w-80 rounded-br-3xl rounded-tr-3xl mb-2">
          <div className="w-full flex flex-col justify-center items-center mt-20 mb-5">
            <p className="font-medium">{userProfile.Name}</p>
            <p className="font-thin text-sm">{userProfile.Contact}</p>
          </div>
          <div className="w-full flex flex-col py-4">
            <Link
              to="/user/profile" 
              onClick={() => handleBtn("profile")}
              className={`hover:bg-green-3 ${isActive('profile') ? 'bg-green-3' : ''} rounded-2xl p-4 cursor-pointer flex m-1`}>
                <span className="px-2 flex justify-center items-center text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                  </svg>
                </span>
                <p className="text-lg">Profile</p>
            </Link>
            <Link
              to="/user/appointment" 
              onClick={() => handleBtn("appointment")}
              className={`hover:bg-green-3 ${isActive('appointment') ? 'bg-green-3' : ''} rounded-2xl p-4 cursor-pointer flex m-1`}>
                <span className="px-2 flex justify-center items-center text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-ticket-detailed" viewBox="0 0 16 16">
                    <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M5 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z"/>
                    <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5z"/>
                  </svg>
                </span>
                <p className="text-lg">My Appointment</p>
            </Link>
            <Link
              to="/user/payment" 
              onClick={() => handleBtn("payment")}
              className={`hover:bg-green-3 ${isActive('payment') ? 'bg-green-3' : ''} rounded-2xl p-4 cursor-pointer flex m-1`}>
                <span className="px-2 flex justify-center items-center text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                  </svg>
                </span>
                <p className="text-lg">My Payments</p>
            </Link>
            <Link
              to="/user/class" 
              onClick={() => handleBtn("class")}
              className={`hover:bg-green-3 ${isActive('class') ? 'bg-green-3' : ''} rounded-2xl p-4 cursor-pointer flex m-1`}>
                <span className="px-2 flex justify-center items-center text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-journal-text" viewBox="0 0 16 16">
                    <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
                  </svg>
                </span>
                <p className="text-lg">My Classes</p>
            </Link>
            <Link
              to="/user/membership" 
              onClick={() => handleBtn("membership")}
              className={`hover:bg-green-3 ${isActive('membership') ? 'bg-green-3' : ''} rounded-2xl p-4 cursor-pointer flex m-1`}>
                <span className="px-2 flex justify-center items-center text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
                  </svg>
                </span>
                <p className="text-lg">My Membership</p>
            </Link>
          </div>
          <div className="w-full flex flex-col justify-end flex-grow pb-16">
            <p className="text-gray-200 font-thin text-xl ml-[25%]">Version 1.0</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
