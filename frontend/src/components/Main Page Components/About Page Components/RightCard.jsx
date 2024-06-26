import React from 'react';
import dot from '../../../assets/Page Assets/Home/aboutDot.png';

const RightCard = ({year, work}) => {
    return (
        <div className='ml-6 relative bg-green-4 p-4 text-left text-white rounded-tr-lg rounded-br-lg my-[150px]'>
            <p className='font-medium text-lg'>{year}</p>
            <p>{work}</p>
            <span className='absolute top-[35%] -left-[16px]'>
                <svg width="17" height="25" viewBox="0 0 17 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12.791L16.5558 24.9915V0.590545L0 12.791Z" fill="#497246"/>
                </svg>
            </span>
            <img src={dot} className='w-10 absolute top-[30%] -left-[50px]'/>
        </div>
    )
}

export default RightCard;