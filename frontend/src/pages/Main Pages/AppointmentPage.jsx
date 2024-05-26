import React from 'react';
import nutriImg from '../../assets/Page Assets/Home/NutritionalProgram.png';
import clock from '../../assets/Page Assets/Home/AppointmentCard.png';
import docter from '../../assets/Page Assets/Home/docter image.png';
import Input from "../../components/Input Fields/Input";
import CommonButton from '../../components/Buttons/CommonButton';
import { useForm } from 'react-hook-form';
import { slotDetails } from '../../constants';

const AppointmentPage = () => {
  const { register, handleSubmit } = useForm();
  const appointmentData = (formData) => console.log(formData);

  return (
    <>
      <div className='w-full h-auto p-6 my-10 bg-white'>
        <div className='p-10 w-full flex flex-col md:flex-row justify-around items-center'>
          <div className='w-full text-center md:w-3/5 md:text-start'>
            <p className='text-amber-900 font-bold text-4xl'>డా.రామచంద్ర’s</p>
            <div>
              <h1 className='text-red-400 font-bold text-6xl mb-2'>Harmony Heal</h1>
              <p className='text-red-400 text-lg'>
                Our platform offers a seamless journey towards well-being through personalized 
                appointments with experienced naturopathy practitioners
              </p>
            </div>
          </div>
          <div className='w-full md:w-2/5 flex justify-center md:justify-end'>
            <img src={nutriImg} className='w-full md:w-96' />
          </div>
        </div>

        <div className='py-8 px-4 md:px-16 bg-green-100 rounded-2xl flex flex-col justify-center items-center'>
          <div>
            <h1 className='text-green-700 text-xl mb-10 mt-5 font-semibold'>Book your Appointment</h1>
          </div>
          <form onSubmit={handleSubmit(appointmentData)} className='w-full'>
            <div className='w-full flex flex-col md:flex-row'>

              <div className='w-full md:w-1/2 order-3 md:order-1 m-5'>
                <div className='p-8 border-[1px] border-custom-red rounded-xl' style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
                  <div>
                    <div className='flex justify-center items-center'>
                      <img className='w-1/3' src={clock} />
                    </div>
                    <div>
                      <p>
                        <span className='font-medium text-lg'>Instructions:</span><br />
                        Please arrive 5-10 minutes prior to your scheduled appointment time to allow for 
                        check-in procedures.<br />
                        Write down any questions or concerns you have before your appointment to ensure you 
                        address them during your visit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-full md:w-1/2 order-1 md:order-2 m-5'>
                <Input
                  label="Name *"
                  type="text"
                  placeholder="Enter Your Name"
                  className="border-[1px] border-green-800 w-full h-10 rounded-[5px] mb-[4px]"
                  {...register("setName", { required: true })}
                />

                <Input
                  label="Phone Number *"
                  type="text"
                  placeholder="Enter Your Phone Number"
                  className="border-[1px] border-green-800 w-full h-10 rounded-[5px] mb-[4px]"
                  {...register("setPhoneNumber", { required: true })}
                />

                <Input
                  label="Choose the Purpose *"
                  type="text"
                  placeholder="Enter Purpose for the Appointment"
                  className="border-[1px] border-green-800 w-full h-10 rounded-[5px] mb-[4px]"
                  {...register("setPurpose", { required: true })}
                />

                <Input
                  label="Choose your Doctor *"
                  type="text"
                  placeholder="Select Doctor"
                  className="border-[1px] border-green-800 w-full h-10 rounded-[5px] mb-[4px]"
                  {...register("setDoctor", { required: true })}
                />

                <Input
                  label="Date *"
                  type="date"
                  placeholder="Select the date for appointment"
                  className="border-[1px] border-green-800 w-full h-10 rounded-[5px] mb-[2px]"
                  {...register("setDate", { required: true })}
                />
              </div>

              <div className='block md:hidden ml-6 w-full order-2 md:order-3'>
                <p className='text-slate-400'>Available Slots *</p>
                <div className='flex flex-wrap'>
                  {slotDetails.map((slot, index) => (
                    <div key={index} className='m-2 w-auto text-sm bg-white rounded-[5px] p-[1px] px-4 border-[1px] border-green-800'>
                      {slot.time}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className='hidden md:block ml-12 w-full order-2 md:order-3'>
              <p className='text-slate-400'>Available Slots *</p>
              <div className='flex flex-wrap'>
                {slotDetails.map((slot, index) => (
                  <div key={index} className='m-2 w-auto text-sm bg-white rounded-[5px] p-[1px] px-4 border-[1px] border-green-800'>
                    {slot.time}
                  </div>
                ))}
              </div>
            </div>

            <div className='mx-12 flex items-center'>
              <Input
                type="checkbox"
                id="checkbox"
                className="mr-2"
              />
              <label htmlFor="checkbox" className='mt-5'>
                By checking this box, you agree to our terms and conditions and confirm 
                your appointment booking.
              </label>
            </div>

            <div className='flex justify-center my-4'>
              <CommonButton type='submit' className='bg-green-500 text-black p-2 px-4 w-44 rounded-lg font-medium'>Pay Now</CommonButton>
            </div>
          </form>
        </div>

        <div className='flex flex-col justify-center items-center my-10'>
          <div>
            <p className='text-green-700 text-xl mb-10 mt-5 font-semibold'>Know your Doctor</p>
          </div>
          <div className='relative m-16'>
            <div className='w-full flex flex-col md:flex-row p-6 rounded-2xl' style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
              <div className='w-full md:w-1/5 flex justify-center md:justify-start'>
                <img className='hidden md:block w-36 md:absolute md:bottom-0 md:left-0 lg:left-10' src={docter} />

                <div className='block md:hidden relative'>
                  <div className='flex justify-center'>
                    <img className='absolute bottom-0 w-36 text-center' src={docter}/>
                    <div className='bg-green-100 w-full p-16 px-48 rounded-2xl'>
                    </div>
                  </div>
                </div>

              </div>
              <div className='w-full md:w-4/5 mt-4 md:mt-0'>
                <h1 className='text-xl font-semibold'>Dr. Ramachandra</h1>
                <p>
                  ఆయుర్వేద, అలోపతి, హోమియోపతి, యునాని, సిద్ధ వైద్య విధానం మొదలగు వైద్య విధానాలవలే ఇది ఒక వైద్య విధానం. 
                  పంచభూతాలతో చికిత్స చేసే ఒక ప్రక్రియ. ఇందులో మందులు కానీ, పసర్లు కానీ, పూతలు 
                </p>
              </div>
            </div>
          </div>

          <div className='relative m-16'>
            <div className='w-full flex flex-col md:flex-row p-6 rounded-2xl' style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
              <div className='w-full md:w-1/5 flex justify-center md:justify-start'>
                <img className='hidden md:block w-36 md:absolute md:bottom-0 md:left-0 lg:left-10' src={docter} />

                <div className='block md:hidden relative'>
                  <div className='flex justify-center'>
                    <img className='absolute bottom-0 w-36 text-center' src={docter}/>
                    <div className='bg-green-100 w-full p-16 px-48 rounded-2xl'>
                    </div>
                  </div>
                </div>

              </div>
              <div className='w-full md:w-4/5 mt-4 md:mt-0'>
                <h1 className='text-xl font-semibold'>Dr. Ramachandra</h1>
                <p>
                  ఆయుర్వేద, అలోపతి, హోమియోపతి, యునాని, సిద్ధ వైద్య విధానం మొదలగు వైద్య విధానాలవలే ఇది ఒక వైద్య విధానం. 
                  పంచభూతాలతో చికిత్స చేసే ఒక ప్రక్రియ. ఇందులో మందులు కానీ, పసర్లు కానీ, పూతలు 
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className='flex flex-col justify-center items-center my-10'>
          <div className='w-full md:w-5/6'>
            <div className='my-4 text-center'>
              <p className='font-semibold text-2xl'>FAQs</p>
            </div>
            <div className='w-full'>
              <div className='flex justify-between my-2'>
                <p className='text-lg'>1. What conditions can Naturopathy help with?</p>
                <span className='text-4xl font-medium'>+</span>
              </div>
              <div className='flex justify-between my-2'>
                <p className='text-lg'>2. What can I expect from a Naturopathic consultation?</p>
                <span className='text-4xl font-medium'>+</span>
              </div>
              <div className='flex justify-between my-2'>
                <p className='text-lg'>3. How long does it take to see results with Naturopathy?</p>
                <span className='text-4xl font-medium'>+</span>
              </div>
              <div className='flex justify-between my-2'>
                <p className='text-lg'>4. Are Naturopathic treatments evidence-based?</p>
                <span className='text-4xl font-medium'>+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppointmentPage;