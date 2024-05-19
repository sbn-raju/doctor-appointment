import React from "react";
import AppointmentCardImage from "../../../assets/Page Assets/Home/AppointmentCard.png";

const AppointmentCards = () => {
  return (
    <>
      <div className="min-w-full h-auto flex justify-center items-center mt-40">
        <div className="w-4/5 lg:w-4/5 h-auto py-5 px-5 flex flex-col lg:flex-row-reverse bg-yellow-700 rounded-xl justify-center items-center">
          <div className="text-center">
            <h2 className="font-bold text-xl lg:hidden">అపాయింట్‌మెంట్</h2>
          </div>
          <div className="h-2/5 flex justify-center m-4 lg:w-2/5">
            <img src={AppointmentCardImage} alt="" />
          </div>
          <div className="h-3/5 lg:w-3/5">
            <div className="text-center">
              <h2 className="hidden lg:block text-3xl font-bold">అపాయింట్‌మెంట్</h2>
              <p className="text-xl font-medium">Your Time, Your Care: Schedule Today!</p>
            </div>
            <div className="text-center">
              <p>
                ప్రకృతి వైద్యం మిమ్మల్ని నయం చేయడంలో సహాయపడనివ్వండి! ఇది
                అన్నింటికీ నివారణ కానప్పటికీ, ప్రకృతి వైద్యం మీకు ఆరోగ్యంగా
                మరియు సంతోషంగా ఉండేందుకు సహాయపడుతుంది.
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

export default AppointmentCards;
