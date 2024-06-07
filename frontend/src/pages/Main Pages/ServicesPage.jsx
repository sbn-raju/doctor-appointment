import React from "react";
import posterImage from "../../assets/Page Assets/Services/Group 65.png";
import ClassCard from "../../components/User Components/Home/ClassCard";
import AppointmentCards from "../../components/User Components/Home/AppointmentCards";
import { CardsHolder } from "../../components/User Components/Services/CardsHolder";

const ServicesPage = () => {
  return (
    <>
      {/* Poster */}
      <div className="bg-white">
        <div className="min-w-full h-auto flex flex-col lg:flex-row justify-center items-center mt-10 ml-6 ">
          <div className="w-full lg:w-11/12 px-4 py-4 flex flex-col-reverse lg:flex-row-reverse xl:w-11/12 rounded-2xl mt-6 ">
            <div className="text-2xl font-bold text-center lg:hidden">
              <h2 className="text-[#34442C]">మా సేవలు</h2>
            </div>
            <div className="md:m-auto md:w-2/5 lg:m-auto lg:w-2/5 xl:w-2/5">
              <img
                src={posterImage}
                alt="Poster"
                style={{ width: "200px", height: "auto" }}
                className="mx-auto"
              />
            </div>
            <div className="mt-4 lg:m-auto lg:w-3/5 xl:w-3/5">
              <div>
                <h2 className="text-2xl font-bold hidden lg:block text-[#34442C] mb-6">
                  మా సేవలు
                </h2>
              </div>
              <p className="font-medium">
                ఆయుర్వేద, అలోపతి, హోమియోపతి, యునాని, సిద్ధ వైద్య విధానం మొదలగు
                వైద్య విధానాలవలే ఇది ఒక వైద్య విధానం. పంచభూతాలతో చికిత్స చేసే
                ఒక ప్రక్రియ. ఇందులో మందులు కానీ, పసర్లు కానీ, పూతలు కానీ,
                లేపనాలు కానీ ఏమీ వుండవు. ఈ ట్రీట్మెంట్స్ మందుల్లేకుండా జబ్బులు
                తగ్గించడానికి ఉపయోగపడతాయి. ఈ వైద్య విధానంలో ట్రీట్మెంట్స్ –
                వాటర్ థెరపీ, ఫాస్టింగ్ థెరపీ, డైట్ థెరపీ, యోగా థెరపీ, మసాజ్
                థెరపీ, మడ్ థెరపీ, సన్ లైట్ థెరపీ మొదలగు థెరపీలు వుంటాయి.
              </p>
            </div>
          </div>
        </div>

        {/* Card Holders */}
        <CardsHolder />

        {/* Card of Appointment Booking */}
        <AppointmentCards />
        <div className="mt-10"></div>
      </div>

      {/* Card of Appointment */}
      <div className="mt-20">
        <ClassCard />
      </div>
    </>
  );
};

export default ServicesPage;
