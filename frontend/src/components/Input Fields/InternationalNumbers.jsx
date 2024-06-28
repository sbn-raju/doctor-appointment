// PhoneInput.js
import React, { useEffect, useRef, useState } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import "intl-tel-input/build/js/utils.js";

const PhoneInput = () => {
  const inputRef = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  
   
  useEffect(() => {
    const input = inputRef.current;

    // Initialize intlTelInput
    const iti = intlTelInput(input, {
      initialCountry: "in",
      validationNumberType:"MOBILE",
      strictMode:true,
      showFlags:false,
      utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });

    // Handle changes
    // input.addEventListener("countrychange", function () {
    //   const selectedCountryData = iti.getSelectedCountryData();
    // });

    // Cleanup
    return () => {
      iti.destroy();
    };
  }, []);



  return (
    <>
      <label htmlFor="phone">Phone Number</label>
      <input
        id="phone"
        ref={inputRef}
        type="tel"
        onInput={(e) => {setPhoneNumber(e.target.value) 
        console.log(phoneNumber)}}
        maxLength="10"
        placeholder="Enter your Phone Number"
        className="border-[1px] border-green-4 px-4 py-2 my-3 rounded-lg text-black w-full"
      />
    </>
  );
};

export default PhoneInput;
