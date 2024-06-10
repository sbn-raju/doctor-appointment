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
        <div className="absolute top-1/3 right-4 p-2 mr-8">
          <p className='text-[#71FF77] text-sm mr-12'>ఇల్లే వైద్యశాల - వంటగధే మందుల షాపు - అమ్మే డాక్టర్</p>
          <h1 className='text-white text-center text-6xl font-bold mt-8 ml-[-10px]'>దా.రామచంద్ర</h1>
          <button className="px-6 py-4 bg-[#497246] text-white rounded-md font-semibold transition transform ease-in-out hover:scale-110 duration-300 hover:delay-75 mt-10 ml-52 shadow-lg hover:bg-[#355a34] ">
            సంప్రదించండి
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
