import React from 'react';
import dot from '../../../assets/Page Assets/Home/aboutDot.png';

const LeftCard = ({year, work}) => {
    return (
        <div className='mr-6 relative bg-green-4 p-4 text-right text-white rounded-tl-lg rounded-bl-lg mb-[160px]'>
            <p className='font-medium text-lg'>{year}</p>
            <p>{work}</p>
            <span className='absolute top-[35%] -right-[16px]'>
                <svg width="17" height="26" viewBox="0 0 17 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.9707 12.9121L0.414856 0.711639L0.414856 25.1126L16.9707 12.9121Z" fill="#497246"/>
                </svg>
            </span>
            <img src={dot} className='w-10 absolute top-[30%] -right-[54px]'/>
        </div>
    )
}

export default LeftCard;