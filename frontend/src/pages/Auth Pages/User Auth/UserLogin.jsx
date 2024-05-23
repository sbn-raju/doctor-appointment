import React from "react";
import Input from "../../../components/Input Fields/Input";
import { useForm } from "react-hook-form";
import CommonButton from "../../../components/Buttons/CommonButton";

const UserLogin = () => {
  const { register, handleSubmit } = useForm();
  const loginData = (formData) => console.log(formData); 
    
  return (
    <>
      <form onSubmit={handleSubmit(loginData)}>
        <Input
          label="Email:"
          type="number"
          placeholder="Enter your Mobile Number"
          {...register("phoneNumber",{
            required: true,
          })}
        />
        <Input
        label="Password:"
        type="password"
        placeholder="Enter your Password"
        {...register("password",{
          required:true,
          minLength:6,
        })}
        />
      {/* <button>login</button> */}
      <CommonButton>Login</CommonButton>
      </form>
    </>
  );
};

export default UserLogin;
