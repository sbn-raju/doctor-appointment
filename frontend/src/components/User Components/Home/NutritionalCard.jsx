import React from "react";
import NutritionalCardImage from "../../../assets/Page Assets/Home/NutritionalProgram.png";

const NutritionalCard = () => {
  return (
    <>
      <div className="min-w-full h-auto flex justify-center items-center mt-10">
        <div className="w-4/5 lg:w-3/5 h-auto py-5 px-5 flex flex-col lg:flex-row bg-yellow-700 rounded-xl justify-center items-center">
          <div className="text-center">
            <h2 className="font-bold text-xl lg:hidden">డా.రామచంద్ర’s </h2>
          </div>
          <div className="h-2/5 flex justify-center m-4 lg:w-2/5">
            <img src={NutritionalCardImage} alt="" />
          </div>
          <div className="h-3/5 lg:w-3/5">
            <div className="text-center">
              <h2 className="hidden lg:block text-2xl font-bold">డా.రామచంద్ర’s </h2>
              <p className="text-xl font-medium">Nutritional Program</p>
            </div>
            <div className="text-center">
              <p>
              "మా డైట్ పేజీకి ఒక్క క్లిక్తో మీ ఆరోగ్య లక్ష్యాలను సాధించడానికి మీకు శక్తినిచ్చే డాక్టర్ రామచంద్ర యొక్క పరివర్తన ఆహార ప్రణాళికను కనుగొనండి."
              </p>
            </div>
            <div className="mt-4 flex justify-center">
              <button className="px-4 py-4 bg-green-600 text-green-950 rounded-xl font-semibold transition ease-in-out hover:scale-110 duration-300 hover:delay-75">
                సంప్రదించండి
               </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NutritionalCard;
