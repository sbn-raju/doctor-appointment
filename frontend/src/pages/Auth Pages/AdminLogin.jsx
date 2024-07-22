import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Input from "../components/Input Fields/Input.jsx";
import CommonButton from "../components/Buttons/CommonButton.jsx";
import {adminLogin} from "../services/admin/adminThunks/adminLoginThunk.js"
import { Navigate, useNavigate } from "react-router-dom";


const AdminLogin = () => {
  const [loginData, setLoginData] = useState({
    username:"",
    password:"",
  })
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {token, error, message} = useSelector((state)=>state.auth)
  let usernameErrorMsg
  let passwordErrorMsg
  const usernameError = error === "Username is Required"? usernameErrorMsg = "Username is Required":null
  const passwordError = error === "Password is Required" || error === "Incorrect Password"? passwordErrorMsg = "Password is Incorrect":null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const result = await dispatch(adminLogin({...loginData}))
      if(result.payload.token){
        console.log(result.payload.token)
        navigate("/admin/appointment");
      }
    } catch (error) {
      navigate("/admin/login");
    }
    console.log('Form submitted:', loginData);
  };



  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F2F2F2]">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-xl h-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-600">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-8" method="POST">
        <label htmlFor="username">Username</label>
          <Input
            id="username"
            name="username" 
            value={loginData.name}
            onChange={handleChange}
            required
            className="border-[1px] border-gray-300 w-full h-12 rounded-[5px]  px-4"
          />
          <p className="text-red-600">{usernameError?usernameErrorMsg:null}</p>
           <label htmlFor="password">Password</label>
          <Input
            id="password"
            name="password"
            type="password"
            value={loginData.name}
            onChange={handleChange}
            required
            className="border-[1px] border-gray-300 w-full h-12 rounded-[5px] px-4"
          />
           <p className="text-red-600">{passwordError?passwordErrorMsg:null}</p>
          <div className="flex justify-between items-center">
            <a href="#" className="text-blue-500 hover:underline"></a>
            <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
          </div>
          <CommonButton  className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50 transition duration-300 ease-in-out">
            Login
          </CommonButton>
          <p className="text-red-800">{error === "Username Not Found"?error:null}</p>
          <p className="text-blue-600">{message?message:null}</p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
