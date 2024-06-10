import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../components/User Components/Home/Carousel";
import RandomImage from "../../assets/Page Assets/Home/Rectangle 85.png";
import ServiceHoverableImg from "../../components/User Components/Home/ServiceHoverableImg";
import ClassCard from "../../components/User Components/Home/ClassCard";
import AppointmentCards from "../../components/User Components/Home/AppointmentCards";
import NutritionalCard from "../../components/User Components/Home/NutritionalCard";
import Introbg from "../../assets/Page Assets/Home/Introbg.png";
import Introbg1 from "../../assets/Page Assets/Home/Introbg1.png";
import ItemsCard from "../../components/User Components/Home/ItemsCard";
import Introbg2 from "../../assets/Page Assets/Home/Introbg2.png";
import IntroBg from "../../assets/Page Assets/Home/IntroBg.svg";
import EndingBg from "../../assets/Page Assets/Home/Endingbg.png";
import Servicesbg from "../../assets/Page Assets/Home/Servicesbg.png";

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
      {/* Carousel */}
      <Carousel />

      {/* Intro */}
      <div className="w-full h-auto flex justify-center mt-10 mb-8 mr-20">
  <div className="w-full lg:w-4/5 h-auto flex flex-col xl:flex-row py-10 px-10 xl:py-16 xl:px-16">
    <div className="w-full xl:w-3/5 text-left mb-10 xl:mb-0 xl:mr-20">
      <h2 className="text-[#1E2F1D] font-bold text-2xl xl:text-4xl mb-8">
        Naturopathy&nbsp;<span>అనగా</span>
      </h2>
      <p className="font-medium text-sm leading-relaxed text-[#333333]">
        ఆయుర్వేద, అలోపతి, హోమియోపతి, యునాని, సిద్ధ వైద్య విధానం మొదలగు
        వైద్య విధానాలవలే ఇది ఒక వైద్య విధానం. పంచభూతాలతో చికిత్స చేసే ఒక
        ప్రక్రియ. ఇందులో మందులు కానీ, పసర్లు కానీ, పూతలు కానీ, లేపనాలు కానీ
        ఏమీ వుండవు. ఈ ట్రీట్మెంట్స్ మందుల్లేకుండా జబ్బులు తగ్గించడానికి
        ఉపయోగపడతాయి. ఈ వైద్య విధానంలో ట్రీట్మెంట్స్ – వాటర్ థెరపీ, ఫాస్టింగ్
        థెరపీ, డైట్ థెరపీ, యోగా థెరపీ, మసాజ్ థెరపీ, మడ్ థెరపీ, సన్ లైట్
        థెరపీ మొదలగు థెరపీలు వుంటాయి.ఈ ట్రీట్మెంట్స్ మందుల్లేకుండా జబ్బులు తగ్గించడానికి
        ఉపయోగపడతాయి. ఈ వైద్య విధానంలో ట్రీట్మెంట్స్ – వాటర్ థెరపీ, ఫాస్టింగ్
        థెరపీ, డైట్ థెరపీ, యోగా థెరపీ, మసాజ్ థెరపీ, మడ్ థెరపీ, సన్ లైట్
        థెరపీ మొదలగు థెరపీలు వుంటాయి.
      </p>
    </div>
    <div className="w-full xl:w-2/5 flex justify-end">
      <img src={Introbg} alt="Naturopathy" className="rounded-lg w-full" />
    </div>
  </div>
</div>


      {/* intro2 */}

      <div
        className="w-full h-64 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Introbg1})` }}
      >
        <h1 className="text-white text-2xl font-bold">
          ఇల్లే వైద్యశాల - వంటగధే మందుల షాపు - అమ్మే డాక్టర్
        </h1>
      </div>

      {/* intro3 */}
      <div
  className="relative w-full h-96 flex items-center justify-center bg-cover bg-center px-10 py-16 mb-10"
  style={{
    backgroundImage: `url(${IntroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white text-center">
    <div>
      <h1 className="text-xl font-bold mb-2">24</h1>
      <p className="text-sm">Years of experience. Naturopathic way. Estd. 1999</p>
    </div>
    <div>
      <h1 className="text-xl font-bold mb-2">3 Lakhs+</h1>
      <p className="text-sm">Patients consulted personally at Prakruti Ashram. Still counting…</p>
    </div>
    <div>
      <h1 className="text-xl font-bold mb-2">20</h1>
      <p className="text-sm">Yoga Studios across the states of Andhra Pradesh and Telangana.</p>
    </div>
    <div>
      <h1 className="text-xl font-bold mb-2">1000+</h1>
      <p className="text-sm">Health awareness camps.</p>
    </div>
    <div>
      <h1 className="text-xl font-bold mb-2">Millions</h1>
      <p className="text-sm">Of health seekers transformed from revolutionary speeches.</p>
    </div>
    <div>
      <h1 className="text-xl font-bold mb-2">Many</h1>
      <p className="text-sm">Popular TV shows, YouTube videos, Food festivals, Yoga competitions, Student seminars and so on.</p>
    </div>
  </div>
</div>



      {/* Services */}
      <ServiceHoverableImg />
     {/* three dots background */}
      <div
      className="relative w-full max-w-4xl mx-auto h-96 bg-cover bg-center"
      style={{
        backgroundImage: `url(${Servicesbg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <div className="w-4 h-4 bg-black rounded-full"></div>
      </div>

      
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-4 h-4 bg-black rounded-full"></div>
      </div>

      
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <div className="w-4 h-4 bg-black rounded-full"></div>
      </div>
    </div>

      {/* Card of Appointment */}
      <ClassCard />

      {/* Card of Appointment Booking */}
      <AppointmentCards />

      {/* Card of Diet */}
      <NutritionalCard />

      {/* Card of products and their prices */}
      <ItemsCard />

      {/* Youtube Videos */}
      <div className="w-full mt-10 flex flex-col justify-center items-center mb-6">
        <div>
          <h2 className=" font-semibold text-2xl lg:font-bold lg:text-3xl text-[#34442C] mb-10">
            మా కార్యకలాపాలు
          </h2>
        </div>
        <div className="w-full sm:w-4/5 md:w-4/5 lg:w-4/5 h-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
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

      {/* Ending */}
      {/* Ending */}
<div
  className="w-full h-[600px] flex flex-col items-center justify-start bg-cover bg-center bg-no-repeat pt-10"
  style={{ backgroundImage: `url(${EndingBg})` }}
>
  <h1 className="text-white text-3xl font-bold mt-40">స్వస్థత గాధలు</h1>
  <div className="flex-grow flex flex-col justify-center items-center">
    <div className="w-full flex justify-center items-center gap-14 mb-8">
      {youtube.slice(0, 3).map((video, index) => (
        <div key={index} className="w-1/3 h-60">
          <iframe
            src={video.tag}
            title={`YouTube video ${index + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-2xl"
          ></iframe>
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  );
};

export default HomePage;
