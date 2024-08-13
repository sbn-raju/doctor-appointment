import React from "react";
import Input from "../../components/Input Fields/Input";
import { useForm } from "react-hook-form";
import CommonButton from "../../components/Buttons/CommonButton";
import {useMutation} from "@tanstack/react-query";
import axios from "axios"
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom"
import { loginDoctor } from "../../services/doctorSlice";
import { useDispatch, useSelector } from 'react-redux';
import { encryptData } from "../../utils/encryptData";


const DoctorLogin = () => {
  document.title = "Doctor Login"
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  
  const loginDataSubmit = async(userData)=>{
    console.log(userData);
    const response = await axios.post("/api/v1/doctor/auth/login",userData)
    console.log(response)
    return response.data;
  }


  const loginMutation = useMutation({
     mutationFn:loginDataSubmit,
     onSuccess:async(data)=>{
      console.log(data);
      const docToken = data.token;
      const userRole = data.data[0].userRole;
      const encryptedToken = await encryptData(
        docToken.toString()
      );
      const encryptedUserRole = await encryptData(
        userRole.toString()
      )
      sessionStorage.setItem("doctor_info", encryptedToken);
      sessionStorage.setItem("user_Role",encryptedUserRole); 
      dispatch(loginDoctor(data));
      toast.success("Doctor is Successfully logged in");
      navigate("/doctor/dashboard");
     },
     onError:async(data)=>{
      console.log(data);
      toast.error("Check With Password or username")
      navigate("/")
     }
  })


  const handleDoctorLogin = (userData)=>{
    console.log(userData);
     loginMutation.mutate(userData)
  }




    
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F2F2F2]">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-[400px] h-auto ">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-4">Doctor Login</h2>
        <form onSubmit={handleSubmit(handleDoctorLogin)} className="space-y-8">
          <Input
            label="Username"
            type="text"
            placeholder="Enter your username"
            {...register("username", {
              required: true,
            })}
            className="border-[1px] border-gray-300 w-full h-12 rounded-[5px] px-4"
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
            className="border-[1px] border-gray-300 w-full h-12 rounded-[5px] px-4"
          />
          <div className="flex justify-between items-center">
            <a href="#" className="text-blue-500 hover:underline"></a>
          </div>
          <CommonButton className="w-full bg-green-4 text-white font-bold py-3 px-4 rounded-2xl hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 transition duration-300 ease-in-out">
            Login
          </CommonButton>
        </form>
      </div>
    </div>
  );
};

export default DoctorLogin;
