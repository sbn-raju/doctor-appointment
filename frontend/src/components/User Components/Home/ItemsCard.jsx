import React from 'react';
import item1 from "../../../assets/Page Assets/Home/Item1.png";
import item2 from "../../../assets/Page Assets/Home/Item2.png";
import item3 from "../../../assets/Page Assets/Home/Item3.png";
import item4 from "../../../assets/Page Assets/Home/Item4.png";

export default function ItemsCard() {
  const items = [
    {
      id: 1,
      imgSrc: item1,
      title: 'మాయిశ్చరైజర్',
      price: '₹200.00',
    },
    {
      id: 2,
      imgSrc: item2,
      title: 'కరివేపాకు నూనె',
      price: '₹408.00',
    },
    {
      id: 3,
      imgSrc: item3,
      title: 'రోజ్మేరీ జెల్',
      price: '₹420.00',
    },
    {
      id: 4,
      imgSrc: item4,
      title: 'విటమిన్ సి జెల్',
      price: '₹260.00',
    },
  ];

  return (
    <div className="w-full mt-20 flex flex-col justify-center items-center">
      <h2 className="font-semibold text-2xl lg:font-bold lg:text-3xl text-[#5A7F53] mt-4 mb-8">
        మా స్టోర్
      </h2>
      <div className="min-w-full h-auto flex flex-col justify-center items-center mt-6 gap-4 mb-20">
        <div className="w-full flex flex-wrap justify-center gap-12 mb-10">
          {items.map((item) => (
            <div key={item.id} className="w-1/5 min-w-[200px] flex flex-col items-start">
              <img src={item.imgSrc} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-2 shadow-sm"/>
              <h3 className="text-xl font-bold  text-[#34442C]">{item.title}</h3>
              <div className="flex items-center ">
                <span className="text-lg text-[#34442C]">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              </div>
              <p className="text-lg text-[#34442C]">{item.price}</p>
            </div>
          ))}
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
  );
}
