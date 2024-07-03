import React from "react";
import { Link } from "react-router-dom";
import Carousal from "../../components/User Components/Home/Carousel";
import RandomImage from "../../assets/Page Assets/Home/Rectangle 85.png";
import ServiceHoverableImg from "../../components/User Components/Home/ServiceHoverableImg";
import ClassCard from "../../components/User Components/Home/ClassCard";
import AppointmentCards from "../../components/User Components/Home/AppointmentCards";
import NutritionalCard from "../../components/User Components/Home/NutritionalCard";
import Introbg from "../../assets/Page Assets/Home/Introbg.png";
import Introduction_Image_section_two from "../../assets/Page Assets/Home/Introduction_Image_section_two.png";
import ItemsCard from "../../components/User Components/Home/ItemsCard";
import Introbg2 from "../../assets/Page Assets/Home/Introbg2.png";
import IntroBg from "../../assets/Page Assets/Home/IntroBg.svg";
import EndingBg from "../../assets/Page Assets/Home/Endingbg.png";
import Services from "../../assets/Page Assets/Home/services.png";
import ServicesMb from '../../assets/Page Assets/Home/services_mb.svg';
import docImg from '../../assets/Page Assets/Home/docImg2.svg';
import AboutUsCard from "../../components/User Components/Home/AboutUsCard";

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
    <>
      <div className="w-full px-8 py-2">
        {/* Carousel */}
        <Carousal />    


        {/* Introduction Sections of the Home Page Section-01 */}
        <div className="w-full flex flex-col md:flex-row justify-center p-10 mt-4 md:my-6 lg:-mt-20">   
          <div className="w-full md:w-3/5 flex flex-col justify-center items-start text-left">
            <h2 className="text-green-1 font-leagueSpartanSemiBold text-[48px] md:text-4xl mb-4">
              Naturopathy <span className="font-gurajadaRegular text-[55px]">అనగా</span>
            </h2>
            <p className="text-[24px] md:text-[17px] leading-8 text-[#333333] font-tenaliRamaKrishnaRegular">
              ఆయుర్వేద, అలోపతి, హోమియోపతి, యునాని, సిద్ధ వైద్య విధానం మొదలగు
              వైద్య విధానాలవలే ఇది ఒక వైద్య విధానం. పంచభూతాలతో చికిత్స చేసే ఒక
              ప్రక్రియ. ఇందులో మందులు కానీ, పసర్లు కానీ, పూతలు కానీ, లేపనాలు కానీ
              ఏమీ వుండవు. ఈ ట్రీట్మెంట్స్ మందుల్లేకుండా జబ్బులు తగ్గించడానికి
              ఉపయోగపడతాయి. ఈ వైద్య విధానంలో ట్రీట్మెంట్స్ – వాటర్ థెరపీ, ఫాస్టింగ్
              థెరపీ, డైట్ థెరపీ, యోగా థెరపీ, మసాజ్ థెరపీ, మడ్ థెరపీ, సన్ లైట్
              థెరపీ మొదలగు థెరపీలు వుంటాయి.ఈ ట్రీట్మెంట్స్ మందుల్లేకుండా జబ్బులు
              తగ్గించడానికి ఉపయోగపడతాయి. ఈ వైద్య విధానంలో ట్రీట్మెంట్స్ – వాటర్
              థెరపీ, ఫాస్టింగ్ థెరపీ, డైట్ థెరపీ, యోగా థెరపీ, మసాజ్ థెరపీ, మడ్
              థెరపీ, సన్ లైట్ థెరపీ మొదలగు థెరపీలు వుంటాయి.
            </p>
          </div>
          <div className="w-full md:w-2/5 md:flex justify-end">
            <img src={Introbg} alt="Naturopathy" className="rounded-lg w-full mb-10 md:mb-0" />
          </div>
        </div>
      </div>
      


       {/* Introduction Sections of the Home Page Section-02 */}
      <div
        className="w-full h-[180px] sm:h-[200px] md:h-[450px] flex items-center justify-center bg-cover bg-center -mt-36"
        style={{ backgroundImage: `url(${Introduction_Image_section_two})` }}
      >
        <h2 className="text-white text-sm md:text-[48px] font-gurajadaRegular md:mt-20">
          ఇల్లే వైద్యశాల - వంటగధే మందుల షాపు - అమ్మే డాక్టర్
        </h2>
      </div>

      {/* Introduction Sections of the Home Page Section-03 */}
      <>
        <div className="hidden md:block">
          <div
            className="relative w-cw-1 h-[650px] flex items-center justify-center bg-cover bg-center mr-20 bg-green-3 rounded-br-[400px] shadow-2xl">
            <div className="flex justify-start p-8 pl-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white w-cw-2 text-start">
                <div className="w-2/3 my-4">
                  <h2 className="text-2xl lg:text-5xl font-leagueSpartanMedium mb-2">24</h2>
                  <p className="text-sm lg:text-base font-leagueSpartanRegular">Years of experience.Naturopathic way.Estd. 1999</p>
                </div>
                <div className="w-2/3 my-4">
                  <h2 className="text-2xl lg:text-5xl font-leagueSpartanMedium mb-2">3 Lakhs+</h2>
                  <p className="text-sm lg:text-base font-leagueSpartanRegular">Patients consulted personally at Prakruti Ashram. Still counting…</p>
                </div>
                <div className="w-2/3 my-4">
                  <h2 className="text-2xl lg:text-5xl font-leagueSpartanMedium mb-2">20</h2>
                  <p className="text-sm lg:text-base font-leagueSpartanRegular">Yoga Studios across the states of Andhra Pradesh and Telangana.</p>
                </div>
                <div className="w-2/3 my-4">
                  <h2 className="text-2xl lg:text-5xl font-leagueSpartanMedium mb-2">1000+</h2>
                  <p className="text-sm lg:text-base font-leagueSpartanRegular">Health awareness camps.</p>
                </div>
                <div className="w-2/3 my-4">
                  <h2 className="text-2xl lg:text-5xl font-leagueSpartanMedium mb-2">Millions</h2>
                  <p className="text-sm lg:text-base font-leagueSpartanRegular">Of health seekers transformed from revolutionary speeches.</p>
                </div>
                <div className="w-2/3 my-4">
                  <h2 className="text-2xl lg:text-5xl font-leagueSpartanMedium mb-2">Many</h2>
                  <p className="text-sm lg:text-base font-leagueSpartanRegular">Popular TV shows, YouTube videos, Food festivals, Yoga competitions, Student seminars and so on.</p>
                </div>
              </div>
            </div>
            <img src={docImg} className="absolute w-52 lg:w-72 -top-32 right-0"/>
          </div>
        </div>

        <div className="md:hidden">
          <div className="bg-green-3 p-10">
            <div className="flex justify-center">
              <img src={docImg} className="w-48 rounded-3xl"/>
            </div>
            <div className="w-full text-white mt-10">
              <div className="grid grid-cols-2">
                <div className="w-3/4 m-4">
                  <h2 className="text-lg font-[18px] mb-2 font-leagueSpartanMedium">24</h2>
                  <p className="text-base font-[18px] font-leagueSpartanRegular">Years of experience.<br/>Naturopathic way.Estd. 1999</p>
                </div>
                <div className="w-3/4 m-4 text-right">
                  <h2 className="text-lg font-[18px] mb-2 font-leagueSpartanMedium">3 Lakhs+</h2>
                  <p className="text-base font-[18px] font-leagueSpartanRegular">Patients consulted personally at Prakruti Ashram. Still counting…</p>
                </div>
                <div className="w-3/4 m-4">
                  <h2 className="text-lg font-[18px] mb-2 font-leagueSpartanMedium">20</h2>
                  <p className="text-base font-[18px] font-leagueSpartanRegular">Yoga Studios across the states of Andhra Pradesh and Telangana.</p>
                </div>
                <div className="w-3/4 m-4 text-right">
                  <h2 className="text-lg font-[18px] mb-2 font-leagueSpartanMedium">1000+</h2>
                  <p className="text-base font-[18px] font-leagueSpartanRegular">Health awareness camps.</p>
                </div>
                <div className="w-3/4 m-4">
                  <h2 className="text-lg font-[18px] mb-2 font-leagueSpartanMedium">Millions</h2>
                  <p className="text-base font-[18px] font-leagueSpartanRegular">Of health seekers transformed from revolutionary speeches.</p>
                </div>
                <div className="w-3/4 m-4 text-right">
                  <h2 className="text-lg font-[18px] mb-2 font-leagueSpartanMedium">Many</h2>
                  <p className="text-base font-[18px] font-leagueSpartanRegular">Popular TV shows, YouTube videos, Food festivals, Yoga competitions, Student seminars and so on.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Services */}
      <div className="flex flex-col justify-center items-center my-10 mt-20">
        <p className="text-green-3 text-[64px] font-gurajadaRegular">మా సేవలు</p>
        <img src={Services} className="w-4/6 hidden md:block" style={{WebkitUserDrag: "none", MozUserDrag: "none", msUserDrag: "none", userDrag: "none"}}/>
        <img src={ServicesMb} className="w-4/6 md:hidden" onDragStart={(e) => e.preventDefault()} style={{WebkitUserDrag: "none", MozUserDrag: "none", msUserDrag: "none", userDrag: "none"}}/>
      </div>

      {/* Card for Diet */}
      <NutritionalCard />

      {/* Card for Appointment Booking */}
      <AppointmentCards />

      {/* Card for Class Booking */}
      <ClassCard />

      {/* Card for About Us */}
      <AboutUsCard />

      {/* Card of products and their prices */}
      {/* <ItemsCard /> */}

      {/* Youtube Videos */}
      <div className="w-full mt-72 flex flex-col justify-center items-center mb-6">
        <div>
          <h2 className=" font-gurajadaRegular text-[64px] text-[#34442C] mb-10">
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
      <div
        className="w-full min-h-[900px] flex flex-col justify-evenly bg-cover bg-center bg-no-repeat pt-10"
      >
        <h2 className="text-black text-[64px] font-gurajadaRegular mt-52 flex justify-center">స్వస్థత గాధలు</h2>
        <div className="flex-grow flex flex-col justify-center items-center">
          <div className="w-full flex flex-col md:flex-row justify-evenly items-center">
            {youtube.slice(0, 3).map((video, index) => (
              <div key={index} className="h-52 m-6">
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
    </>
  );
}

export default HomePage
