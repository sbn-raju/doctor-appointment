import React from "react";
import Input from "../../../components/Input Fields/Input";
import { useForm } from "react-hook-form";
import CommonButton from "../../../components/Buttons/CommonButton";

const UserLogin = () => {
  const { register, handleSubmit } = useForm();
  const loginData = (formData) => console.log(formData);

  return (
    <>
      <div className="w-min-full">
        <div>
          <div>
            <form onSubmit={handleSubmit(loginData)}>
              <Input
                label="Enter the Register Mobile Number"
                type="text"
                placeholder="Enter your Mobile Number"
                {...register("phoneNumber", {
                  required: true,
                })}
              />
              <Input
                label="Password:"
                type="password"
                placeholder="Enter your Password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
              />
              <button>login</button>
              <CommonButton>Login</CommonButton>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
