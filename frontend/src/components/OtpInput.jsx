import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CommonButton from "./Buttons/CommonButton";
import VerifiedIcon from '@mui/icons-material/Verified';
import ClearIcon from '@mui/icons-material/Clear';
import axios from "axios";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import {useMutation} from "@tanstack/react-query"




const OtpInput = ({ phoneNumber, closeOTPCard }) => {
  const length = 6;
  const [otp, setotp] = useState(new Array(length).fill(""));
  const [combinedOTP, setCombinedOTP] = useState("");
  const inputRef = useRef([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setotp(newOtp);

    setCombinedOTP(newOtp.join(""));
    if (value && index < length - 1 && inputRef.current[index + 1]) {
      inputRef.current[index + 1].focus();
    }
  };

  const handleClick = () => {};

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRef.current[index - 1]
    ) {
      inputRef.current[index - 1].focus();
    }
  };

  const sendotp = async(phoneNumber, code)=>{
    console.log(phoneNumber, code);
    const response = await axios.post("/api/v1/auth/register/verify-Details/verify",{
      phoneNumber,
      code
    });
    console.log(response);
    return response;
  }

  const oneTimePassResponse = useMutation({
    mutationFn:sendotp,
    onSuccess:()=>{
      toast.success("User Successfull Verified");
      closeOTPCard(true);
      navigate("/");
    }
  })

  const handleOTPSubmit = async () => {
    console.log("HELLO");
    oneTimePassResponse.mutate(phoneNumber, combinedOTP)
    // try {
    //   const response = await dispatch(
    //     loginUser({ phoneNumber: phoneNumber, code: combinedOTP })
    //   ).unwrap();
    //   console.log(response);
    //   if (response.success) {
    //     toast.success(response.message);
    //     navigate("/user/profile");
    //     closeOTPCard(true);
    //   } else {
    //     toast.error(response.message);
    //   }
    // } catch (error) {
    //   toast.error("Error Connecting Server");
    // }
  };
  const lastDigits = phoneNumber.slice(6, 10);

  return (
    <div className="h-screen inset-0 fixed bg-opacity-75 w-full flex flex-col justify-center items-center">
      <div className="bg-white p-10 w-[300px] md:w-[400px] shadow-lg min-h-[200px] flex flex-col text-black rounded-lg">
        <div className="flex justify-between mb-6">
          <h1 className="font-medium text-black">One Time Password</h1>
          <CommonButton onClick={closeOTPCard}>
            <ClearIcon />
          </CommonButton>
        </div>
        <p>
          Please enter the 6-digit OTP sent to your registered phone number
          ending with ...{lastDigits}
        </p>
        <div className="flex justify-evenly space-x-2 mt-2">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              ref={(input) => (inputRef.current[index] = input)}
              value={value}
              onChange={(e) => handleChange(index, e)}
              onClick={() => handleClick()}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="border-[1px] border-green-800 w-8 h-8 md:w-10 md:h-10 rounded-[5px] text-center"
            />
          ))}
        </div>
        <CommonButton
          className="mt-4 bg-green-4 text-white px-4 py-2 rounded-xl"
          onClick={handleOTPSubmit}
        >
          Verify&nbsp;
          <VerifiedIcon />
        </CommonButton>
      </div>
    </div>
  );
};

export default OtpInput;
