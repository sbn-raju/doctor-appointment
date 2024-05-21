import React, {useState} from 'react'
import AboutImage from'../../assets/Page Assets/Services/Group 65.png'
import { aboutDetails } from '../../constants'

const AboutPage = () => {
  const [Lang, setLang] = useState('telugu')

  const handleLang1 = () => {
    setLang('telugu')
  }

  const handleLang2 = () => {
    setLang('english')
  }

  return (
    <>
      <div className='min-h-auto p-6 my-10 bg-white'>
        <div className='p-10 w-full flex flex-col md:flex-row justify-around items-center'>
          <div className='w-full text-center md:w-3/5 md:text-start'>
            <p className="text-amber-900 font-bold text-4xl">మా   ప్రస్తావన</p>
            <div>
              <h1 className='text-red-400 font-bold text-6xl'>About us!!</h1>
              <p className='text-red-400 text-lg'>More than 3 lakhs patients consulted personally at Prakruti Ashram. The consultation and food is served for 
                FREE since the inception of this Ashram. </p>
            </div>
          </div>
          <div className='w-3/5 my-auto md:w-2/5 flex justify-center md:justify-end'>
            <img src={AboutImage} className='w-full md:w-96'/>
          </div>
        </div>

        <div className='bg-green-gradient rounded-2xl flex flex-col p-6 py-10 mx-4'>
          <p className='text-green-900 font-bold text-center'>మా ప్రస్తావన</p>

          {aboutDetails.map((each, index) => (
            <div key={index} className='pt-4 mt-4'>
              <div className='flex items-center'>
                <p className='text-sm w-32'>{each.Date}:</p>
                <div className='mx-5 p-4 w-full transition-all duration-500 ease-in-out hover:bg-green-200 rounded-3xl cursor-pointer'>
                  <h1 className='text-lg font-medium'>{each.Title}</h1>
                  <p className='text-sm'>{each.Description}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="hidden md:block mt-36">
            <div className='w-full h-96 relative'>
              <div className='h-2/5 bg-slate-200 flex justify-around items-center p-4 rounded-2xl relative'>
                <img src={AboutImage} className='w-1/3 -translate-y-1/4 mr-4'/>
                <p className='w-2/3 ml-auto text-center'>
                  ఆయుర్వేద, అలోపతి, హోమియోపతి, యునాని, సిద్ధ వైద్య విధానం మొదలగు వైద్య విధానాలవలే ఇది ఒక వైద్య విధానం. పంచభూతాలతో 
                  చికిత్స చేసే ఒక ప్రక్రియ. ఇందులో మందులు కానీ, పసర్లు కానీ, పూతలు కానీ, లేపనాలు కానీ ఏమీ 
                </p>
              </div>
            </div>
          </div>

          <div className='md:hidden w-full bg-slate-200 p-5 rounded-2xl mt-16'>
            <div className='flex flex-col justify-center items-center'>
              <p className='w-3/5 text-center'>
                  ఆయుర్వేద, అలోపతి, హోమియోపతి, యునాని, సిద్ధ వైద్య విధానం మొదలగు వైద్య విధానాలవలే ఇది ఒక వైద్య విధానం. పంచభూతాలతో 
                  చికిత్స చేసే ఒక ప్రక్రియ. ఇందులో మందులు కానీ, పసర్లు కానీ, పూతలు కానీ, లేపనాలు కానీ ఏమీ 
              </p>
              <div className='w-2/5'>
                <img src={AboutImage}/>
              </div>
            </div>
          </div>
        </div>

          <div className='flex justify-center items-center my-10'>
            <div className='w-full'>
              <h1 className='text-green-700 text-lg font-semibold text-center'>ఆశ్రమంలో వైద్య సలహాలు</h1>
              <div className='flex justify-evenly my-10'>
                <button className={`p-4 rounded-lg w-1/2 ${Lang === 'telugu' ? 'bg-green-400 font-medium' : 'bg-white border-[1px] border-yellow-500'}`} onClick={handleLang1}>తెలుగు</button>
                <button className={`p-4 rounded-lg w-1/2 ${Lang === 'english' ? 'bg-green-400 font-medium' : 'bg-white border-[1px] border-yellow-500'}`} onClick={handleLang2}>English</button>
              </div>
              {Lang == 'telugu' ? (
                <div>
                  <p>
                    నేలకొండపల్లి ప్రకృతి ఆశ్రమం వైద్య సలహాల కొరకు కేవలం బుధ, గురు, శుక్ర వారాలలో మాత్రమే తెరిచి ఉంటుంది. ఏమైనా మార్పులు ఉంటే ఈ పైన/ప్రక్కన క్యాలెండర్ లో ఎప్పటికప్పుడు తాజా సమాచారం ఇవ్వబడుతుంది.

                    ఆశ్రమంలో ఇన్ పేషంట్ సదుపాయం లేదు.హైదరాబాద్లో కన్సల్టేషన్ లేదు. 
                    టెలిఫోన్ ద్వారా అపాయింట్మెంట్స్ ఇవ్వబడవు.

                    ఆశ్రమానికి నేరుగా ఉదయం 8 గంటల లోపు వచ్చిన వారికి మాత్రమే టోకెన్లు ఇవ్వబడతాయి. వారిని మాత్రమే డాక్టర్ గారు చూస్తారు.

                    ఆశ్రమంలో సప్లిమెంట్ షాపు కన్సల్టేషన్ ఉన్న రోజులతో సంబంధం లేకుండా సంవత్సరమంతా ప్రతీ బుధ, గురు, శుక్ర వారాలలో ఉదయం 9 గంటల నుంచి 11 గంటల వరకు మాత్రమే తెరిచి ఉంటుంది.


                    ఆశ్రమం రావడానికి మార్గాలు:

                    ఇతర ఊళ్ళ నుంచి నేలకొండపల్లి రావడానికి
                    నేలకొండపల్లి నుంచి ఆశ్రమానికి
                    గూగుల్ డైరెక్షన్స్
                    ఆరోగ్య సలహాలు ఉచితం.భోజన సదుపాయం ఉచిత
                  </p>
                </div>
              ) : (
                <div>
                  <p>
                  Nelakondapally Prakriti Ashram is open for medical consultation only on Wednesday, Thursday and Friday. Any changes will be updated from time to time in this calendar above/beside.

                  There is no inpatient facility in the ashram. No consultation in Hyderabad.
                  Appointments cannot be made by telephone.

                  Tokens will be given only to those who arrive directly at the ashram before 8 am. Doctor sees only them.

                  The supplement shop at the Ashram is open only on Wednesday, Thursday and Friday from 9 am to 11 am throughout the year irrespective of consultation days.
                  
                  Ways to reach Ashram:

                    To come to Nelakondapalli from other villages
                    From Nelakondapally to Ashram
                    Google Directions
                    Health counseling is free.Food facility is free
                  </p>
                </div>
              )}
            </div>
          </div>

      </div>
    </>
  )
}

export default AboutPage