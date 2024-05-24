import React from 'react'
import Input from "../../components/Input Fields/Input";
import CommonButton from '../../components/Buttons/CommonButton';
import { useForm } from 'react-hook-form';
import { MdOndemandVideo } from 'react-icons/md';

const ClassUpdatesPage = () => {
  const { register, handleSubmit } = useForm();
  const classData = (formData) => console.log(formData);

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center p-8'>
      <div className='w-full'>
        <div className='flex flex-row items-center mb-10'>
          <h1 className="text-md md:text-xl lg:text-2xl">Hello <span className="font-medium">Admin!!</span></h1>
          
          {/* Vertical Line */}
          <span className="ml-4 border-[1px] border-l-gray-500 h-12"></span>
          
          <div className="flex justify-center items-center">
            <span className="text-lg ml-4"><MdOndemandVideo /></span>
            <p className="text-sm ml-1">Classes Update</p>
          </div>
        </div>        
      </div>

      <div className='w-full mb-8 bg-custom-yellow border-[1px] border-custom-red px-4 py-6 rounded-2xl'>
        <form onSubmit={handleSubmit(classData)}>
          <div className='grid grid-cols-1 md:grid-cols-2 px-10 items-center gap-4'>
            <Input
              label="Set Date"
              type="date"
              placeholder="Select Date"
              className="border-[1px] border-green-800 w-full"
              {...register("setData", { required: true })}
            />

            <Input
              label="Set Time"
              type="time"
              placeholder="Select Time"
              className="border-[1px] border-green-800 w-full"
              {...register("setSlotTime", { required: true })}
            />            
          </div>
          <div className='flex justify-center md:justify-end self-center px-10 mt-5'>
            <CommonButton type='submit' className='bg-green-300 font-medium rounded-xl h-12 w-24'>Submit</CommonButton>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ClassUpdatesPage