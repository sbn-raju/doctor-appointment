import React, { useState } from "react";
import logo from "../../assets/Logo/image 2.png";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { navItems } from "../../constants";

const HeaderHome = () => {
  let [drawerisOpen, setDrawerIsOpen] = useState(false);

  const handleDrawer = (event) => {
    setDrawerIsOpen(!drawerisOpen);
  };

  return(
    <>
      <div className="w-full h-auto flex flex-row justify-between">
        <div className="pl-2 flex flex-row justify-center items-center">
          <div>
            <img src={logo} alt="LogoImage" className="w-16 h-16"/>
          </div>
          <div className="block pl-1">
            <span>
            <h2 className="font-bold tracking-tight">
              Dr.Padma &amp; Dr.Ramachandra<br/>
            </h2>
            </span>
            <p>
              Naturopathy
            </p>
          </div>
        </div>
        <div className="hidden xl:flex flex-row justify-between items-center">
          <ul className="flex flex-row text-lg">
              {navItems.map((item, index)=>(
                <li key={index} className="ml-10">
                    <a href={item.href}>{item.label}</a>
                </li>
              ))}
          </ul>
        </div>
        <div className="hidden xl:flex flex-row justify-center items-center mr-10"> 
            <div>
                  <button className="px-6 py-2 rounded-md text-white bg-gradient-to-tr from-lime-600 to-green-950">
                    Login
                  </button>
            </div>
            <div>
                  <button className="px-6 py-2 m-2 rounded-md text-white bg-gradient-to-tr from-green-600 to-green-950">
                    Sign In
                  </button>
            </div>
        </div>
        <div className=" w-1/4 flex justify-center items-center xl:hidden">
          <button onClick={handleDrawer} className="text-4xl">
          {drawerisOpen ? <RxCross2/> : <IoMenu/>}
          </button>
        </div>
        </div>
       {drawerisOpen && (
          <div className="py-12 px-2 transform transition-transform ease-in-out duration-300 bg-green-800 xl:hidden"> 
           <ul className="flex flex-col text-lg">
           {navItems.map((item, index)=>(
             <li key={index} className=" mb-4 border-b-yellow-500 border-b-2">
                 <a href={item.href}>{item.label}</a>
             </li>
           ))}
           </ul>
         </div>
       )}
    </>
  )
};

export default HeaderHome;
