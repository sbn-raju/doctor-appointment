import React from "react";
import posterImage from "../../assets/Page Assets/Services/Group 65.png";
import ClassCard from "../../components/User Components/Home/ClassCard";
import AppointmentCards from "../../components/User Components/Home/AppointmentCards";

const ServicesPage = () => {
  return (
    <>
      {/* Poster */}
      <div className="min-w-full h-auto flex justify-center items-center mt-10">
        <div className="w-11/12 bg-blue-700 px-4 py-4 flex flex-col lg:w-11/12 lg:flex-row-reverse xl:w-11/12">
        <div className="text-2xl font-bold text-center lg:hidden">
          <h2>మా సేవలు</h2>
        </div>
        <div className=" md:m-auto md:w-2/5 lg:m-auto lg:w-2/5 xl:w-2/5">
          <img src={posterImage} alt="" />
        </div>
        <div className=" mt-4 lg:m-auto lg:w-3/5 xl:w-3/5">
          <div>
          <h2 className="text-2xl font-bold hidden lg:block">మా సేవలు</h2>
          </div>
          <p>
            ఆయుర్వేద, అలోపతి, హోమియోపతి, యునాని, సిద్ధ వైద్య విధానం మొదలగు వైద్య
            విధానాలవలే ఇది ఒక వైద్య విధానం. పంచభూతాలతో చికిత్స చేసే ఒక ప్రక్రియ.
            ఇందులో మందులు కానీ, పసర్లు కానీ, పూతలు కానీ, లేపనాలు కానీ ఏమీ
            వుండవు. ఈ ట్రీట్మెంట్స్ మందుల్లేకుండా జబ్బులు తగ్గించడానికి
            ఉపయోగపడతాయి. ఈ వైద్య విధానంలో ట్రీట్మెంట్స్ – వాటర్ థెరపీ, ఫాస్టింగ్
            థెరపీ, డైట్ థెరపీ, యోగా థెరపీ, మసాజ్ థెరపీ, మడ్ థెరపీ, సన్ లైట్
            థెరపీ మొదలగు థెరపీలు వుంటాయి.
          </p>
        </div>
        </div>
      </div>

      {/* Card of Appointment */}
      <ClassCard />

       {/* Card of Appointment Booking */}
       <AppointmentCards />
    </>
  );
};

export default ServicesPage;
