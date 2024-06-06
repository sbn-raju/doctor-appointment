import React from "react";
import AppointmentCardImage from "../../../assets/Page Assets/Home/AppointmentCard.png";
import Appointmentcardbg from "../../../assets/Page Assets/Home/Appointmentbackground.svg";

const AppointmentCards = () => {
  return (
    <>
      <div className="min-w-full h-auto flex justify-center items-center mt-10 pb-6">
        <div
          className="w-full md:w-4/5 lg:w-4/5 h-auto py-10 px-4 md:px-8 flex flex-col lg:flex-row-reverse bg-[#507E4D] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-500 justify-center items-center"
          style={{ backgroundImage: `url(${Appointmentcardbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="text-center lg:text-right lg:w-2/5 mb-6 lg:mb-0">
            <h2 className="font-bold text-2xl lg:text-3xl mb-4 lg:hidden text-white">అపాయింట్‌మెంట్</h2>
            <div className="flex justify-center lg:justify-end">
              <img src={AppointmentCardImage} alt="Appointment Image" className="rounded-lg shadow-md" />
            </div>
          </div>
          <div className="lg:w-3/5 text-center lg:text-left">
            <h2 className="hidden lg:block text-3xl font-bold mb-4 text-white">అపాయింట్‌మెంట్</h2>
            <p className="text-xl font-medium mb-4 text-white">Your Time, Your Care: Schedule Today!</p>
            <p className="mb-6 text-white">
              ప్రకృతి వైద్యం మిమ్మల్ని నయం చేయడంలో సహాయపడనివ్వండి! ఇది
              అన్నింటికీ నివారణ కానప్పటికీ, ప్రకృతి వైద్యం మీకు ఆరోగ్యంగా
              మరియు సంతోషంగా ఉండేందుకు సహాయపడుతుంది.
            </p>
            <div className="mt-4 flex justify-center lg:justify-start">
              <button className="px-6 py-3 bg-green-600 text-black rounded-xl font-semibold transition transform ease-in-out hover:scale-110 duration-300 hover:delay-75 ml-4 lg:ml-0">
                సంప్రదించండి
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentCards;
