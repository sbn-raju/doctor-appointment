import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { navItems } from "../../constants";
import LoginButton from "../Buttons/LoginButton";
import CommonButton from "../Buttons/CommonButton";
import logo from '../../assets/Page Assets/Home/New Logo.png';
import { Link } from "react-router-dom";

const HeaderHome = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`px-4 md:px-6 py-3 w-full flex flex-row justify-between items-center sticky top-0 ${isScrolled ? 'bg-green-2 text-white' : 'bg-white text-green-1'} z-50 shadow-lg`}>
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="LogoImage" className="w-12 h-12 md:w-16 md:h-16 mx-2 md:mx-4" />
          </Link>
          <div className="pl-1 md:mr-4">
            <h2 className="font-regular text-sm md:text-base lg:text-lg leading-tight">
              Dr.Padma &amp; Dr.Ramachandra
            </h2>
            <p className="font-regular text-sm md:text-base lg:text-lg">
              Naturopathy
            </p>
          </div>
        </div>
        <div className="hidden md:flex flex-grow justify-center items-center space-x-4 md:space-x-6 lg:space-x-10">
          <ul className="flex flex-row text-sm md:text-base lg:text-lg font-medium space-x-4 md:space-x-6 lg:space-x-10">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex items-center ml-2 md:ml-4 lg:ml-6">
          <LoginButton />
          <CommonButton className="px-6 py-2 m-2 rounded-md text-white bg-green-3">
            Sign&nbsp;In
          </CommonButton>
        </div>
        <div className="md:hidden">
          <button onClick={handleDrawer} className="text-3xl md:text-4xl">
            {drawerIsOpen ? <RxCross2 /> : <IoMenu />}
          </button>
        </div>
      </div>
      {drawerIsOpen && (
        <div className="fixed z-10 w-full h-full top-0 left-0 bg-green-800 transform transition-transform ease-in-out duration-300 md:hidden">
          <div className="flex justify-end p-4">
            <button onClick={handleDrawer} className="text-3xl md:text-4xl text-white">
              <RxCross2 />
            </button>
          </div>
          <ul className="flex flex-col items-center text-lg text-white">
            {navItems.map((item, index) => (
              <li key={index} className="mb-4 border-b-2 border-yellow-500 w-full text-center">
                <a href={item.href} className="block w-full py-2">{item.label}</a>
              </li>
            ))}
            <li className="my-4">
              <LoginButton />
            </li>
            <li>
              <CommonButton className="px-6 py-2 m-2 rounded-md text-white bg-green-3">
                Sign In
              </CommonButton>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default HeaderHome;
