import React, {useState} from 'react'
import AboutImage from'../../assets/Page Assets/Home/shaketree.png';
import ab1 from '../../assets/Page Assets/Home/about-1.png';
import ab2 from '../../assets/Page Assets/Home/about-2.png';
import { team } from '../../constants/index';

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
        <div className='p-10 w-full flex flex-col md:flex-row justify-around items-center mb-10'>
          <div className='w-full text-center md:w-3/5 md:text-start'>
            <p className="text-amber-900 font-bold text-4xl">మా   ప్రస్తావన</p>
            <div>
              <h1 className='text-green-4 font-bold text-6xl'>About us!!</h1>
              <p className='text-red-400 text-lg'>
                More than 3 lakhs patients consulted personally at Prakruti Ashram. The consultation and food is served for 
                FREE since the inception of this Ashram.
              </p>
            </div>
          </div>
          <div className='w-full mt-8 md:my-0 md:w-2/5 flex justify-center md:justify-end'>
            <img src={AboutImage} className='w-full md:w-[500px]'/>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center my-10'>
          <p className="text-amber-900 font-bold text-4xl my-2">మా   ప్రస్తావన</p>
          <p className='text-red-400 text-lg leading-6 w-2/3 text-center'>
            More than 3 lakhs patients consulted personally at Prakruti Ashram. The consultation and food is served for 
            FREE since the inception of this Ashram.
          </p>
        </div>
        
        <div className='my-20 w-full flex justify-center items-center'>
          <div className='w-full'>
            <div className="w-8/12 border-l-4 border-t-4 border-b-2 border-green-3 p-6 rounded-tl-full rounded-bl-full flex">
              <div className='w-1/3'>
                <img src={ab1} className='w-96'/>
              </div>
              <div className='w-2/3 flex flex-col justify-center items-start ml-10'>
                <p className="text-amber-900 font-bold text-4xl my-2">మా   ప్రస్తావన</p>
                <p className="text-lg leading-6">
                  ఆయుర్వేద, అలోపతి, హోమియోపతి, యునాని, సిద్ధ వైద్య విధానం మొదలగు వైద్య విధానాలవలే ఇది ఒక వైద్య విధానం. పంచభూతాలతో చికిత్స చేసే ఒక ప్రక్రియ. ఇందులో మందులు కానీ, పసర్లు కానీ, పూతలు కానీ, లేపనాలు కానీ ఏమీ వుండవు. 
                </p>
              </div>
            </div>

            <div className="ml-[130px] w-8/12 border-r-4 border-t-2 border-b-2 border-green-3 p-6 rounded-tr-full rounded-br-full flex">
              <div className='w-2/3 flex flex-col justify-center items-end mr-10 text-right'>
                <p className="text-amber-900 font-bold text-4xl my-2">మా   ప్రస్తావన</p>
                <p className="text-lg leading-6">
                  ఆయుర్వేద, అలోపతి, హోమియోపతి, యునాని, సిద్ధ వైద్య విధానం మొదలగు వైద్య విధానాలవలే ఇది ఒక వైద్య విధానం. పంచభూతాలతో చికిత్స చేసే ఒక ప్రక్రియ. ఇందులో మందులు కానీ, పసర్లు కానీ, పూతలు కానీ, లేపనాలు కానీ ఏమీ వుండవు. 
                </p>
              </div>
              <div className='w-1/3'>
                <img src={ab2} className='w-72'/>
              </div>
            </div>

            <div className="w-8/12 border-l-4 border-t-2 border-b-2 border-green-3 p-6 rounded-tl-full rounded-bl-full flex">
              <div className='w-1/3'>
                <img src={ab1} className='w-72'/>
              </div>
              <div className='w-2/3 flex flex-col justify-center items-start ml-10'>
                <p className="text-amber-900 font-bold text-4xl my-2">మా   ప్రస్తావన</p>
                <p className="text-lg leading-6">
                  ఆయుర్వేద, అలోపతి, హోమియోపతి, యునాని, సిద్ధ వైద్య విధానం మొదలగు వైద్య విధానాలవలే ఇది ఒక వైద్య విధానం. పంచభూతాలతో చికిత్స చేసే ఒక ప్రక్రియ. ఇందులో మందులు కానీ, పసర్లు కానీ, పూతలు కానీ, లేపనాలు కానీ ఏమీ వుండవు. 
                </p>
              </div>
            </div>

            <div className="ml-[116px] w-8/12 border-r-4 border-t-2 border-b-4 border-green-3 p-6 rounded-tr-full rounded-br-full flex">
              <div className='w-2/3 flex flex-col justify-center items-end mr-10 text-right'>
                <p className="text-amber-900 font-bold text-4xl my-2">మా   ప్రస్తావన</p>
                <p className="text-lg leading-6">
                  ఆయుర్వేద, అలోపతి, హోమియోపతి, యునాని, సిద్ధ వైద్య విధానం మొదలగు వైద్య విధానాలవలే ఇది ఒక వైద్య విధానం. పంచభూతాలతో చికిత్స చేసే ఒక ప్రక్రియ. ఇందులో మందులు కానీ, పసర్లు కానీ, పూతలు కానీ, లేపనాలు కానీ ఏమీ వుండవు. 
                </p>
              </div>
              <div className='w-1/3'>
                <img src={ab2} className='w-72'/>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center my-10'>
          <p className="text-amber-900 font-bold text-4xl my-2">Our Team</p>
          <p className='text-red-400 text-lg leading-6 w-2/3 text-center'>
            More than 3 lakhs patients consulted personally at Prakruti Ashram. The consultation and food is served for 
            FREE since the inception of this Ashram.
          </p>
          <div className='flex flex-wrap justify-center'>
            {team.map((mem, index) => (
              <div className='p-10 m-4 flex flex-col justify-center items-center'>
                <img src={mem.img} className='h-[200px] w-[200px] rounded-full border-[1px] border-green-3'/>
                <p>{mem.name}</p>
                <p>{mem.position}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='flex justify-center items-center my-10'>
          <div className='w-full'>
            <h1 className='text-green-700 text-lg font-semibold text-center'>ఆశ్రమంలో వైద్య సలహాలు</h1>
            <div className='flex justify-evenly my-10'>
              <button className={`mx-2 p-4 rounded-lg w-1/2 ${Lang === 'telugu' ? 'bg-green-400 font-medium' : 'bg-white border-[1px] border-yellow-500'}`} onClick={handleLang1}>తెలుగు</button>
              <button className={`mx-2 p-4 rounded-lg w-1/2 ${Lang === 'english' ? 'bg-green-400 font-medium' : 'bg-white border-[1px] border-yellow-500'}`} onClick={handleLang2}>English</button>
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