import React from "react";
import CardHolder_one from "../../../assets/Page Assets/Services/CardHolder_one.png";
import CardHolder_two from "../../../assets/Page Assets/Services/CardHolder_two.png";
import CardHolder_three from "../../../assets/Page Assets/Services/CardHolder_three.png";

export const CardsHolder = () => {
  return (
    <div className="max-w-full h-auto flex justify-center items-center mt-10">
      <div className="w-11/12 flex-col justify-center items-center bg-green-600 py-10 px-10">
        <div className="m-auto">
          <div className=" font-bold text-2xl text-center lg:hidden">
            <h2 className="mt-4">ఆరోగ్య సలహా</h2>
          </div>
          <div className="w-full flex flex-col-reverse lg:flex-row bg-white py-5 px-5 mt-4">
            <div className="lg:w-3/5 mt-4 m-auto">
              <h2 className="font-bold text-2xl hidden lg:block">ఆరోగ్య సలహా</h2>
              <p>
                ఆయుర్వేద, అలోపతి, హోమియోపతి, యునాని, సిద్ధ వైద్య విధానం మొదలగు
                వైద్య విధానాలవలే ఇది ఒక వైద్య విధానం. పంచభూతాలతో చికిత్స చేసే ఒక
                ప్రక్రియ. ఇందులో మందులు కానీ, పసర్లు కానీ, పూతలు కానీ, లేపనాలు
                కానీ ఏమీ వుండవు. ఈ ట్రీట్మెంట్స్ మందుల్లేకుండా జబ్బులు
                తగ్గించడానికి ఉపయోగపడతాయి. ఈ వైద్య విధానంలో ట్రీట్మెంట్స్ –
                వాటర్ థెరపీ, ఫాస్టింగ్ థెరపీ, డైట్ థెరపీ, యోగా థెరపీ, మసాజ్
                థెరపీ, మడ్ థెరపీ, సన్ లైట్ థెరపీ మొదలగు థెరపీలు వుంటాయి.
              </p>
            </div>
            <div className="h-2/5 md:m-auto lg:w-2/5">
              <img src={CardHolder_one} alt="" />
            </div>
          </div>
        </div>
        
        <div className="m-auto">
          <div className="font-bold text-2xl text-center lg:hidden">
            <h2 className="mt-10">ఆరోగ్య సలహా</h2>
          </div>
          <div className="w-full flex flex-col-reverse lg:flex-row-reverse bg-white py-5 px-5 mt-4">
            <div className="lg:w-3/5 mt-4 m-auto">
              <h2 className="font-bold text-2xl hidden lg:block">ఆరోగ్య సలహా</h2>
              <p>
                ఆయుర్వేద, అలోపతి, హోమియోపతి, యునాని, సిద్ధ వైద్య విధానం మొదలగు
                వైద్య విధానాలవలే ఇది ఒక వైద్య విధానం. పంచభూతాలతో చికిత్స చేసే ఒక
                ప్రక్రియ. ఇందులో మందులు కానీ, పసర్లు కానీ, పూతలు కానీ, లేపనాలు
                కానీ ఏమీ వుండవు. ఈ ట్రీట్మెంట్స్ మందుల్లేకుండా జబ్బులు
                తగ్గించడానికి ఉపయోగపడతాయి. ఈ వైద్య విధానంలో ట్రీట్మెంట్స్ –
                వాటర్ థెరపీ, ఫాస్టింగ్ థెరపీ, డైట్ థెరపీ, యోగా థెరపీ, మసాజ్
                థెరపీ, మడ్ థెరపీ, సన్ లైట్ థెరపీ మొదలగు థెరపీలు వుంటాయి.
              </p>
            </div>
            <div className="h-2/5 lg:w-2/5">
              <img src={CardHolder_two} alt="" />
            </div>
          </div>
        </div>
        <div className="m-auto">
          <div className="font-bold text-2xl text-center lg:hidden">
            <h2 className="mt-10">ఆరోగ్య సలహా</h2>
          </div>
          <div className="w-full flex flex-col-reverse lg:flex-row bg-white py-5 px-5 mt-4">
            <div className="lg:w-3/5 mt-4 m-auto">
              <h2 className="font-bold text-2xl hidden lg:block">ఆరోగ్య సలహా</h2>
              <p>
                ఆయుర్వేద, అలోపతి, హోమియోపతి, యునాని, సిద్ధ వైద్య విధానం మొదలగు
                వైద్య విధానాలవలే ఇది ఒక వైద్య విధానం. పంచభూతాలతో చికిత్స చేసే ఒక
                ప్రక్రియ. ఇందులో మందులు కానీ, పసర్లు కానీ, పూతలు కానీ, లేపనాలు
                కానీ ఏమీ వుండవు. ఈ ట్రీట్మెంట్స్ మందుల్లేకుండా జబ్బులు
                తగ్గించడానికి ఉపయోగపడతాయి. ఈ వైద్య విధానంలో ట్రీట్మెంట్స్ –
                వాటర్ థెరపీ, ఫాస్టింగ్ థెరపీ, డైట్ థెరపీ, యోగా థెరపీ, మసాజ్
                థెరపీ, మడ్ థెరపీ, సన్ లైట్ థెరపీ మొదలగు థెరపీలు వుంటాయి.
              </p>
            </div>
            <div className="h-2/5 mx-auto lg:w-2/5">
              <img src={CardHolder_three} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
