import React from 'react'
import nutriImg from '../../assets/Page Assets/Home/NutritionalProgram.png'

const DietPage = () => {
  return (
    <>
    <div className='h-auto p-6 my-10 bg-white'>
      <div className='p-10 w-full flex flex-col md:flex-row justify-around items-center'>
        <div className='w-full text-center md:w-3/5 md:text-start'>
          <p className='text-amber-900 font-bold text-4xl'>డా.రామచంద్ర’s</p>
          <div>
            <h1 className='text-red-400 font-bold text-6xl mb-2'>Nutritional program</h1>
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

      <div className='flex flex-col justify-center items-center'>
        <div>
          <p className='text-green-800 font-semibold text-lg'>ఆహార ప్రణాళిక</p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4'>
          <div className='grid-cols-3'>
            <div className='bg-green-200 p-4 rounded-2xl m-4'>
              <img src={nutriImg} className='w-56'/>
            </div>
            <div className='bg-green-200 p-4 rounded-2xl m-4'>
              <img src={nutriImg} className='w-56'/>
            </div>
            <div className='bg-green-200 p-4 rounded-2xl m-4'>
              <img src={nutriImg} className='w-56'/>
            </div>
          </div>
          <div className='bg-green-200 p-4 rounded-2xl m-4'>
            <img src={nutriImg} className='w-56'/>
          </div>
          <div className='bg-green-200 p-4 rounded-2xl m-4'>
            <img src={nutriImg} className='w-56'/>
          </div>
          <div className='bg-green-200 p-4 rounded-2xl m-4'>
            <img src={nutriImg} className='w-56'/>
          </div>
        </div>
        <p className='text-red-400 font-semibold mt-4'>
          గమనిక:<br/>1.దీర్ఘకాలిక లేదా తీవ్ర ఆరోగ్య సమస్యలు అనగా…కిడ్నీ, 
          లివర్, క్యాన్సర్ మొదలగు సమస్యలు ఉన్న వారు డాక్టర్ గారి సలహా మేరకు మాత్రమే ఈ ఆహార నియమాలు 
          పాటించాలి.<br/>2.డయాబెటిక్ వాళ్ళు జ్యూస్ లో తేనె వాడరాదు.
        </p>
      </div>
    </div>
    

    </>
  )
}

export default DietPage