import React from 'react';
import homebg from "../../../assets/Page Assets/Home/homebg.png";

const Carousel = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div
        className="relative w-[1200px] h-screen mb-12 mt-4 rounded-lg shadow-md"
        style={{
          backgroundImage: `url(${homebg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          fontFamily: 'Roboto, sans-serif'
        }}
      >
        <div className="absolute top-4 right-4 mt-4 mr-6 p-2">
          <p className='text-[#71FF77]'>ఇల్లే వైద్యశాల - వంటగధే మందుల షాపు - అమ్మే డాక్టర్</p>
          <h1 className='text-white text-center text-3xl font-bold mt-4'>దా.రామచంద్ర</h1>
          <button className="px-6 py-3 bg-[#497246] text-white rounded-xl font-semibold transition transform ease-in-out hover:scale-110 duration-300 hover:delay-75 mt-10 ml-36">
            సంప్రదించండి
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
