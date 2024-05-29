import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../components/User Components/Home/Carousel";
import RandomImage from "../../assets/Page Assets/Home/Rectangle 85.png";
import ServiceHoverableImg from "../../components/User Components/Home/ServiceHoverableImg";
import ClassCard from "../../components/User Components/Home/ClassCard";
import AppointmentCards from "../../components/User Components/Home/AppointmentCards";
import NutritionalCard from "../../components/User Components/Home/NutritionalCard";

const youtube = [
  {
    id: 1,
    tag: "https://www.youtube.com/embed/uJv63hoxgWc?si=tAcwZvpWmLowdvGr&amp;start=3",
  },
  {
    id: 2,
    tag: "https://www.youtube.com/embed/D3oUsDkoWS4?si=tBWmqKkY9n45vClT&amp;start=1",
  },
  {
    id: 3,
    tag: "https://www.youtube.com/embed/D3oUsDkoWS4?si=tBWmqKkY9n45vClT&amp;start=1",
  },
  {
    id: 4,
    tag: "https://www.youtube.com/embed/INwoESOPi2o?si=r6PUQ66474cyJWoO&amp;start=3",
  },
];

const HomePage = () => {
  return (
    <div className="bg-custom-green">
      {/* Coursel */}
      <Carousel />

      {/* Mega Menu */}
      <div className="grid grid-cols-3 grid-rows-2 md:m-auto lg:flex lg:flex-row justify-evenly items-center mt-10">
        <Link to="/about">
          <div className="flex flex-col justify-center item-center m-2">
            <div className="w-20 h-20 m-auto bg-blue-200 rounded-full border-2 border-custom-red lg:w-30 lg:h-30 xl:w-40 xl:h-40">
              <img src="" alt="" />
            </div>
            <p className="text-sm font-semibold text-center lg:text-lg">
              About Us
            </p>
          </div>
        </Link>

        <Link to="/appointment">
          <div className="flex flex-col justify-center item-center m-2">
            <div className="w-20 h-20 m-auto bg-blue-200 rounded-full border-2 border-custom-red lg:w-30 lg:h-30 xl:w-40 xl:h-40">
              <img src="" alt="" />
            </div>
            <p className="text-sm font-semibold text-center lg:text-lg xl:text-xl">
              Appointment
            </p>
          </div>
        </Link>

        <Link to="/class">
          <div className="flex flex-col justify-center item-center m-2">
            <div className="w-20 h-20 m-auto bg-blue-200 rounded-full border-2 border-custom-red lg:w-30 lg:h-30 xl:w-40 xl:h-40">
              <img src="" alt="" />
            </div>
            <p className="text-sm font-semibold text-center lg:text-lg xl:text-xl">
              Class Booking
            </p>
          </div>
        </Link>

        <Link to="/diet">
          <div className="flex flex-col justify-center item-center m-2">
            <div className="w-20 h-20 m-auto bg-blue-200 rounded-full border-2 border-custom-red lg:w-30 lg:h-30 xl:w-40 xl:h-40">
              <img src="" alt="" />
            </div>
            <p className="text-sm font-semibold text-center lg:text-lg xl:text-xl">
              Natural Diet
            </p>
          </div>
        </Link>

        <Link to="/services">
          <div className="flex flex-col justify-center item-center m-2">
            <div className="w-20 h-20 m-auto bg-blue-200 rounded-full border-2 border-custom-red lg:w-30 lg:h-30 xl:w-40 xl:h-40">
              <img src="" alt="" />
            </div>
            <p className="text-sm font-semibold text-center lg:text-lg xl:text-xl">
              Our Services
            </p>
          </div>
        </Link>

        <Link>
          <div className="flex flex-col justify-center item-center m-2">
            <div className="w-20 h-20 m-auto bg-blue-200 rounded-full border-2 border-custom-red lg:w-30 lg:h-30 xl:w-40 xl:h-40">
              <img src="" alt="" />
            </div>
            <p className="text-sm font-semibold text-center lg:text-lg xl:text-xl">
              Online Store
            </p>
          </div>
        </Link>
      </div>

      {/* Intro */}
      <div className="w-full h-auto grid grid-rows-1 place-items-center mt-10 ">
        <div className="w-4/5 lg:w-3/5 h-auto flex flex-col justify-center items-center rounded-2xl bg-white py-5 px-5 xl:py-10 xl:px-10 xl:flex-row hover:shadow-lg hover:shadow-amber-300 hover:duration-500 border-[1px] border-yellow-500">
          <div className="w-full lg:w-3/5">
            <h2 className="text-green-700 font-bold xl:text-2xl">
              Nathuropathy&nbsp;<span>అనగా</span>
            </h2>
            <div>
              <p className="font-medium text-lg">
                ఆయుర్వేద, అలోపతి, హోమియోపతి, యునాని, సిద్ధ వైద్య విధానం మొదలగు
                వైద్య విధానాలవలే ఇది ఒక వైద్య విధానం. పంచభూతాలతో చికిత్స చేసే ఒక
                ప్రక్రియ. ఇందులో మందులు కానీ, పసర్లు కానీ, పూతలు కానీ, లేపనాలు
                కానీ ఏమీ వుండవు. ఈ ట్రీట్మెంట్స్ మందుల్లేకుండా జబ్బులు
                తగ్గించడానికి ఉపయోగపడతాయి. ఈ వైద్య విధానంలో ట్రీట్మెంట్స్ –
                వాటర్ థెరపీ, ఫాస్టింగ్ థెరపీ, డైట్ థెరపీ, యోగా థెరపీ, మసాజ్
                థెరపీ, మడ్ థెరపీ, సన్ లైట్ థెరపీ మొదలగు థెరపీలు వుంటాయి.
              </p>
            </div>
          </div>
          <div className="lg:w-2/5 py-2">
            <div className="flex justify-center items-center">
              <img src={RandomImage} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <ServiceHoverableImg />

      {/* Youtube Videos */}
      <div className="w-full mt-10 flex flex-col justify-center items-center">
        <div>
          <h2 className=" font-semibold text-2xl lg:font-bold lg:text-3xl text-green-700">
            మా కార్యకలాపాలు
          </h2>
        </div>
        <div className="w-full sm:w-4/5 md:w-4/5 lg:w-4/5 h-auto grid grid-cols-1 rid-rows-1 lg:grid-cols-2 lg:grid-rows-2 gap-8 mt-4">
          {youtube.map((video) => (
            <div
              key={video.id}
              className="h-60 w-full px-5 md:w-3/5 lg:w-4/5 lg:h-64 m-auto"
            >
              <iframe
                src={video.tag}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-2xl w-full h-full"
              ></iframe>
            </div>
          ))}
        </div>
      </div>

      {/* Card of Appointment */}
      <ClassCard />

      {/* Card of Appointment Booking */}
      <AppointmentCards />

      {/* Card of Diet  */}
      <NutritionalCard />
    </div>
  );
};

export default HomePage;
