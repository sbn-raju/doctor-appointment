import React, { useState } from 'react'
import nutriImg from '../../assets/Page Assets/Home/NutritionalProgram.png'
import banana from '../../assets/Page Assets/Home/banana.png'
import orange from '../../assets/Page Assets/Home/orange.png'
import watermelon from '../../assets/Page Assets/Home/watermelon.png'
import juice from '../../assets/Page Assets/Home/juice.png'
import CommonButton from '../../components/Buttons/CommonButton'
import { eveningJuice } from '../../constants'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const DietPage = () => {
  const [dietType, setDietType] = useState('liquid');

  const handleDiet1 = () => {
    setDietType('liquid')
  }

  const handleDiet2 = () => {
    setDietType('solid')
  }

  return (
    <>
      <div className='h-auto w-full p-6 my-10 bg-white'>
        <div className='p-10 w-full flex flex-col md:flex-row justify-around items-center'>
          <div className='w-full text-center md:w-3/5 md:text-start'>
            <p className='text-amber-900 font-bold text-4xl'>డా.రామచంద్ర’s</p>
            <div>
              <h1 className='text-green-4 font-semibold text-6xl mb-2'>Nutritional program</h1>
              <p className='text-red-400 text-lg'>
                By emphasizing nutrient-dense fruits, vegetables, whole grains, and lean proteins, 
                a naturopathic diet supports the body's innate ability to heal and 
                maintain balance.
              </p>
            </div>
          </div>
          <div className='w-3/5 my-auto md:2/5 flex justify-center md:justify-end'>
            <img src={nutriImg} className='w-full md:w-96'/>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center w-full'>
          <div>
            <p className='text-green-800 font-semibold text-lg'>ఆహార ప్రణాళిక</p>
          </div>

          <div className='hidden md:block w-full'>
            <div className='grid grid-cols-2 md:grid-cols-3'>
              <div className='bg-green-200 p-4 rounded-2xl m-4 flex justify-center'>
                <img src={nutriImg} className='w-56'/>
              </div>
              <div className='bg-green-200 p-4 rounded-2xl m-4 flex justify-center'>
                <img src={nutriImg} className='w-56'/>
              </div>
              <div className='bg-green-200 p-4 rounded-2xl m-4 flex justify-center'>
                <img src={nutriImg} className='w-56'/>
              </div>
            </div>
            <div className='grid grid-cols-4'>
              <div className='bg-green-200 p-4 rounded-2xl m-4 flex justify-center'>
                <img src={nutriImg} className='w-56'/>
              </div>
              <div className='bg-green-200 p-4 rounded-2xl m-4 flex justify-center'>
                <img src={nutriImg} className='w-56'/>
              </div>
              <div className='bg-green-200 p-4 rounded-2xl m-4 flex justify-center'>
                <img src={nutriImg} className='w-56'/>
              </div>
              <div className='bg-green-200 p-4 rounded-2xl m-4 flex justify-center'>
                <img src={nutriImg} className='w-56'/>
              </div>
            </div>
          </div>

          <div className='md:hidden w-full'>
            <div className='bg-green-200 p-4 rounded-2xl m-4 flex justify-center'>
              <img src={nutriImg} className='w-56'/>
            </div>
            <div className='grid grid-cols-2'>
              <div className='bg-green-200 p-4 rounded-2xl m-4 flex justify-center'>
                <img src={nutriImg} className='w-56'/>
              </div>
              <div className='bg-green-200 p-4 rounded-2xl m-4 flex justify-center'>
                <img src={nutriImg} className='w-56'/>
              </div>
              <div className='bg-green-200 p-4 rounded-2xl m-4 flex justify-center'>
                <img src={nutriImg} className='w-56'/>
              </div>
              <div className='bg-green-200 p-4 rounded-2xl m-4 flex justify-center'>
                <img src={nutriImg} className='w-56'/>
              </div>
              <div className='bg-green-200 p-4 rounded-2xl m-4 flex justify-center'>
                <img src={nutriImg} className='w-56'/>
              </div>
              <div className='bg-green-200 p-4 rounded-2xl m-4 flex justify-center'>
                <img src={nutriImg} className='w-56'/>
              </div>
            </div>
          </div>
          <p className='text-red-400 font-semibold mt-4'>
            గమనిక:<br/>1.దీర్ఘకాలిక లేదా తీవ్ర ఆరోగ్య సమస్యలు అనగా…కిడ్నీ, 
            లివర్, క్యాన్సర్ మొదలగు సమస్యలు ఉన్న వారు డాక్టర్ గారి సలహా మేరకు మాత్రమే ఈ ఆహార నియమాలు 
            పాటించాలి.<br/>2.డయాబెటిక్ వాళ్ళు జ్యూస్ లో తేనె వాడరాదు.
          </p>
        </div>
      </div>
      
      <div className='relative flex flex-col justify-center items-center my-10 overflow-hidden p-8 px-0'>
        <h1 className='text-2xl text-green-600 font-semibold my-5'>21 days Diet plan</h1>
        <div className='p-6'>
          <div className='bg-green-4 rounded-2xl p-8 text-white' style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
            <img src={banana} className='w-32 absolute -z-10 top-[70px] -left-12 -rotate-45'/>
            <img src={orange} className='w-32 absolute -z-10 top-10 -right-10'/>
            <img src={watermelon} className='w-32 absolute -z-10 -bottom-0 '/>
            <p className='text-sm md:text-base'>
              1. సూర్యోదయానికి ముందే నిద్ర లేవండి (సుమారుగా 5am). లేచిన వెంటనే రెండు గ్లాసుల మంచినీళ్లు తాగండి. 
              ఒక గంట విడిచి మళ్లీ రెండు గ్లాసుల మంచినీళ్లు తాగండి. 5-8am లోపు కాలకృత్యాలు ముగించి, వ్యాయామం, 
              యోగ, ధ్యానం, సైక్లింగ్, రన్నింగ్ వంటివి చేయండి.<br/>
              2. బ్రేక్ ఫాస్ట్ /టిఫిన్ తినటానికి 30 నిమిషాలకు ముందు 
              “ఉదయం జూస్” జ్యూస్ త్రాగండి.సాయంత్రం 4:30 pm కు రసాల పట్టిక నుంచి డాక్టరు గారు సూచించిన జ్యూస్ 
              త్రాగండి.<br/>
              3. రాత్రి భోజనం పండ్లు మాత్రమే తినండి. 6-7pm లోపు ముగించండి.<br/>
              4. మాంసాహారం, గుడ్లు , పాలు 
              వద్దు, జన్యుమార్పిడి GMO ఆహారం వద్దు.<br/>
              5. ఆహారంలో ఉప్పు, కారం, నూనె తగ్గించండి.<br/>
              6. భోజనానికి భోజనానికి మధ్య ప్రతి గంటకి ఒక గ్లాసు మంచినీళ్ళు త్రాగండి. అలాగే అప్పుడప్పుడు మధ్యలో మజ్జిగ కూడా త్రాగండి.<br/>
              7. ప్రతిరోజు శరీరానికి శ్రమ కలిగించే పనులు చేయండి (కనీసం వ్యాయామం లేదా యోగా). ఇది మీ శరీర కణాల 
              జీవన క్రమంలో కీలకమైన అంశం.<br/>
            </p>
          </div>
        </div>
      </div>

      <div className='relative my-10 overflow-hidden py-8 px-0'>
        <div className='p-2 md:p-6 flex flex-col'>
          <h1 className='text-lg text-green-600 font-semibold my-5 text-center'>Recipes</h1>
          <div className='w-full flex justify-evenly my-2'>
            <button className={`p-4 rounded-lg w-1/2 m-2 border-[1px] border-white ${dietType === 'liquid' ? 'bg-green-4 font-medium text-white border-none' : 'text-red-500 font-medium hover:border-yellow-500'}`} onClick={handleDiet1}>Liquids</button>
            <button className={`p-4 rounded-lg w-1/2 m-2 border-[1px] border-white ${dietType === 'solid' ? 'bg-green-4 font-medium text-white border-none' : 'text-red-500 font-medium hover:border-yellow-500'}`} onClick={handleDiet2}>Solids</button>
          </div>
          { dietType === 'liquid' ? (
            <div className='p-6'>
              <p className='text-sm'>
                <span className='font-medium text-lg'>గమనిక:</span><br/>
                1.ఒక గ్లాస్ జ్యూస్ కి అన్నీ రకాల ఆకులు కలిపి గుప్పెడు పరిమాణంలో సరిపోతాయి.<br/>
                2.అన్ని రకాల జ్యూస్ లు తగినన్ని నీళ్లు కలిపి పల్చగా చేసుకుని త్రాగవచ్చు. జ్యూస్ లు వడకట్టుకొని త్రాగాలి.<br/>
                3.అన్నీ జ్యూస్ లకు నిమ్మరసం, తేనె కలుపుకొని త్రాగవచ్చు. డయాబెటిక్ వాళ్ళు జ్యూస్ లో తేనె వాడరాదు.<br/>
                4.సైనస్, ఆస్తమా వంటి శ్వాసకోశ సమస్యలు ఉన్న వారు, గోరువెచ్చని నీటితో జ్యూస్ ని పల్చగా చేసుకుని త్రాగాలి.<br/>
              </p>
              <br/>
              <p className='text-sm'>
                <span className='font-medium text-lg'>ఉదయం జ్యూస్:</span><br/>
                బ్రేక్ ఫాస్ట్ (టిఫిన్) తినటానికి 30 నిమిషాలకు ముందు క్రింది జ్యూస్ త్రాగాలి. ప్రతిరోజు ఇదే జ్యూస్. 
                డాక్టర్ గారు ఈ జ్యూసుకి అదనంగా మీ సమస్య పరిష్కారం కోసం ప్రత్యేకంగా ఏదైనా కలుపుకుని జూస్ చేసుకోమంటే అలాగే చేయండి.
              </p>

              <div className='relative mt-16 w-36'>
                <div className='bg-green-4 p-4 rounded-xl text-white text-sm pt-20 shadow-lg'>
                  <p>కొత్తిమీర + పుదీనా + 7 తులసి ఆకులు (మొత్తం కలిపి గుప్పెడు)</p>
                </div>
                <img src={juice}  className='absolute left-6 -top-16 w-24'/>
              </div>

              <div className='relative mt-10'>
                <span className='font-medium text-lg'>సాయంత్రం జ్యూస్:</span><br/>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                  {eveningJuice.map((food, index) => (
                    <div key={index} className='relative mt-16 w-36'>
                      <div className='bg-green-4 p-4 rounded-xl text-white text-sm pt-20 shadow-lg'>
                        <p>{food.ingirdients}</p>
                      </div>
                      <img src={juice}  className='absolute left-6 -top-16 w-24'/>
                    </div>
                  ))}
                </div>
                {eveningJuice.length > 0 && (
                  <>
                    <img src={orange} className='w-32 absolute -z-10 top-28 right-60'/>
                    <img src={watermelon} className='w-32 absolute top-80 left-44 -z-10'/>
                    <img src={watermelon} className='w-32 absolute bottom-20 left-[570px] -z-10 rotate-45'/>
                    <img src={banana} className='w-32 absolute bottom-48 right-44 -z-10'/>
                  </>
                )}
              </div>

              <img src={banana} className='hidden md:block w-32 absolute top-[200px] -right-10 -rotate-45 -z-10'/>
              <img src={orange} className='md:hidden w-32 absolute top-[200px] -right-10 -rotate-45 -z-10'/>
              <img src={orange} className='w-32 absolute -z-10 bottom-0 -left-10'/>
            </div>
          ) : (
            <div className='p-6'>
              <p>
                <span className='font-medium text-lg'>Apples</span><br/>
                Description: Apples are one of the most popular and versatile fruits available. They come in a variety of colors, including red, green, and yellow, and range from sweet to tart in flavor. Apples are rich in dietary fiber, particularly pectin, which aids in digestion and promotes gut health.<br/>
                Nutritional Benefits: High in vitamin C, fiber, and antioxidants. They help in regulating blood sugar levels and are good for heart health.<br/>
                Usage: Can be eaten raw, added to salads, or cooked in various dishes like apple pies and sauces.<br/><br/>
                <span className='font-medium text-lg'>Bananas</span><br/>
                Description: Bananas are a tropical fruit with a creamy texture and sweet flavor. They are well-known for their high potassium content, which is essential for maintaining proper muscle function and heart health.<br/>
                Nutritional Benefits: Rich in potassium, vitamin B6, vitamin C, and dietary fiber. Bananas provide a quick energy boost and help in maintaining electrolyte balance.<br/>
                Usage: Perfect as a quick snack, added to smoothies, cereals, and baked goods.
                Berries<br/>
                <br/>
                <span className='font-medium text-lg'>Strawberries</span><br/>
                Description: Strawberries are bright red, juicy, and sweet. They are rich in vitamins, antioxidants, and are low in calories.<br/>
                Nutritional Benefits: High in vitamin C, manganese, and antioxidants such as anthocyanins and ellagic acid. Strawberries promote heart health and help regulate blood sugar.<br/>
                Usage: Can be eaten fresh, added to salads, smoothies, or used in desserts.<br/>
              </p>
              
              <img src={banana} className='hidden md:block w-32 absolute top-[200px] -right-10 -rotate-45 -z-10'/>
              <img src={orange} className='md:hidden w-32 absolute top-[200px] -right-10 -rotate-45 -z-10'/>
            </div>
          )}
        </div>
      </div>

      <div className='my-6 w-full flex flex-col justify-center items-center'>
        <h1 className='text-green-4 text-2xl font-semibold'>Quick links</h1>
        <div className='my-4'>
          <p className='text-center my-2'>
            <span className='text-green-4 font-medium mx-2'>Diet - General:</span>
            <Link className='mx-2 cursor-pointer hover:underline text-blue-400'>Telugu1</Link>
            <Link className='mx-2 cursor-pointer hover:underline text-blue-400'>Telugu2</Link>
            <Link className='mx-2 cursor-pointer hover:underline text-blue-400'>English</Link>
          </p>

          <p className='text-center my-2'>
            <span className='text-green-4 font-medium mx-2'>Diet - Basics:</span>
            <Link className='mx-2 cursor-pointer hover:underline text-blue-400'>Telugu</Link>
            <Link className='mx-2 cursor-pointer hover:underline text-blue-400'>English</Link>
          </p>

          <p className='text-center my-2'>
            <span className='text-green-4 font-medium mx-2'>Diet - Juices:</span>
            <Link className='mx-2 cursor-pointer hover:underline text-blue-400'>Telugu</Link>
            <Link className='mx-2 cursor-pointer hover:underline text-blue-400'>English</Link>
          </p>

          <p className='text-center my-2'>
            <span className='text-green-4 font-medium mx-2'>Diet - Food:</span>
            <Link className='mx-2 cursor-pointer hover:underline text-blue-400'>Telugu</Link>
            <Link className='mx-2 cursor-pointer hover:underline text-blue-400'>English</Link>
          </p>
        </div>
        <p className='w-2/4 text-center font-medium text-sm'>For any health related queries, we have a volunteer team who may guide you appropriately.Please join our Telegram group using below icon.</p>
      </div>

      <div className="w-full h-12 flex justify-center items-center flex-row mt-8 text-3xl " >
        <span className="mr-3"><FaTelegram/></span>
        <span className="mr-3"><FaInstagramSquare/></span>
        <span className="mr-3"><PiYoutubeLogoFill/></span>
        <span className="mr-3"><FaFacebookF/></span>
      </div>
    </>
  )
}

export default DietPage