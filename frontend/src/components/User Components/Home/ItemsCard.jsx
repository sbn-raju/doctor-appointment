import React from 'react'

export default function ItemsCard() {
  return (
    <div className='w-full mt-15 flex flex-col justify-center items-center'>
    <h2 className=" font-semibold text-2xl lg:font-bold lg:text-3xl text-green-500 mt-4 mb-4">
    మా స్టోర్
          </h2>
      <div className="min-w-full h-auto flex flex-col justify-center items-center mt-6 gap-4 mb-20">
  <div className="w-4/5 lg:w-4/5 h-auto py-10 px-8 flex flex-col bg-gradient-to-r from-white via-gray-100 to-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-500">
    <div className="flex flex-wrap justify-center gap-6 mb-10">
      <div className="w-1/5 min-w-[200px] flex flex-col items-center bg-white p-5 rounded-xl shadow-md">
        <img src="path/to/image1.jpg" alt="" className="w-full h-32 object-cover rounded-lg mb-4 shadow-sm"/>
        <h3 className="text-xl font-bold mb-2">మాయిశ్చరైజర్</h3>
        <div className="flex items-center mb-2">
          <span className="text-lg text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        </div>
        <p className="text-lg text-gray-700">₹200.00</p>
      </div>
      <div className="w-1/5 min-w-[200px] flex flex-col items-center bg-white p-5 rounded-xl shadow-md">
        <img src="path/to/image2.jpg" alt="" className="w-full h-32 object-cover rounded-lg mb-4 shadow-sm"/>
        <h3 className="text-xl font-bold mb-2">కరివేపాకు నూనె</h3>
        <div className="flex items-center mb-2">
          <span className="text-lg text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        </div>
        <p className="text-lg text-gray-700">₹408.00</p>
      </div>
      <div className="w-1/5 min-w-[200px] flex flex-col items-center bg-white p-5 rounded-xl shadow-md">
        <img src="path/to/image3.jpg" alt="" className="w-full h-32 object-cover rounded-lg mb-4 shadow-sm"/>
        <h3 className="text-xl font-bold mb-2">రోజ్మేరీ జెల్</h3>
        <div className="flex items-center mb-2">
          <span className="text-lg text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        </div>
        <p className="text-lg text-gray-700">₹420.00</p>
      </div>
      <div className="w-1/5 min-w-[200px] flex flex-col items-center bg-white p-5 rounded-xl shadow-md">
        <img src="path/to/image4.jpg" alt="" className="w-full h-32 object-cover rounded-lg mb-4 shadow-sm"/>
        <h3 className="text-xl font-bold mb-2">విటమిన్ సి జెల్</h3>
        <div className="flex items-center mb-2">
          <span className="text-lg text-yellow-500">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        </div>
        <p className="text-lg text-gray-700">₹260.00</p>
      </div>
    </div>
    <div className="flex justify-center">
      <button className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold transition transform ease-in-out hover:scale-110 duration-300 hover:delay-75 flex items-center">
        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"></path>
        </svg>
        View More
      </button>
    </div>
  </div>
</div>

    </div>
  )
}
