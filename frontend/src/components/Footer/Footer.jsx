import React from "react";
import logo from "../../assets/image 21.png";
import { FaFacebook } from "react-icons/fa";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";



const Footer = () => {
  return (
    <> 
      <div className="max-w-full h-auto flex flex-col bg-green-900 md:flex-row">
        <div className="max-w-full h-60 flex justify-center items-center flex-col sm:w-1/3 sm:h-96">
            <div className="w-full h-1/4 pl-4 sm:text-center">
                  <h2 className="text-white font-semibold">LET'S WORK TOGETHER</h2>
                  <h3 className="text-white font-semibold">For diseases free world</h3>
            </div>
            <div className="w-full h-1/2 pl-4 flex flex-row sm:flex-col md:flex-col">
              <div className="flex justify-center items-center">
                <img src={logo} alt="Logo Image" />
              </div>
              <div className="flex justify-center items-center pl-2">
                <p className="text-white font-light sm:text-center sm:w-52">Dr.Padma &amp; Dr.Ramachandra Naturopathy</p>
              </div>
            </div>
        </div>
        <div>
          
        </div>
        <div>box3</div>
      </div>
    </>
  );
};

export default Footer;
