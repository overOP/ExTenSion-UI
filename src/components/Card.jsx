import React, { useState } from 'react';

const Card = ({ darkMode, Image, header, das }) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(prev => !prev);
  };

  return (
    <div className="mt-7 px-5">
      <div className={`rounded-2xl ${darkMode ? 'bg-[#1f2535]' : 'bg-white'} min-h-[200px] flex flex-col transition-all duration-300`}>
        <div className={`flex justify-center items-center gap-5 p-5 ${darkMode ? 'text-white' : 'text-black'}`}>
          {Image ? <img src={Image} alt="Image" /> : <p>No image</p>}
          <div>
            <h1 className="text-2xl">{header}</h1>
            <p className="text-[#8e939d] mt-2">{das}</p>
          </div>
        </div>

        <div className={`flex justify-between items-center p-5 ${darkMode ? 'text-white' : 'text-black'}`}>
          <div>
            {/* Button styles change based on dark mode */}
            <button
              className={`border rounded-full px-5 py-2 transition-all duration-300 ${darkMode ? 'bg-[#1f2535] text-white' : 'bg-white text-black'}`}
            >
              Remove
            </button>
          </div>

          {/* Toggle Switch */}
          <label className="relative inline-flex items-center cursor-pointer" onClick={toggleSwitch}>
            <div className={`w-12 h-6 rounded-full transition-colors duration-300 ${isOn ? 'bg-[#ef5c52]' : 'bg-[#525868]'}`}></div>
            <div
              className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${isOn ? 'translate-x-6' : 'translate-x-1'}`}
            ></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Card;


/*import React from 'react'

const Card = ({ Image,header,das,className}) => {
    
  return (
    <>
    <div className=' mt-7 px-5'>

    <div className=' bg-[#1f2535] text-white rounded-2xl'>
    <div className='flex justify-center items-center gap-5 p-5'>
    {Image ? <img src={Image} alt='Image' /> : <p>No image</p>}
    <div>
    <h1 className=' text-2xl'>{header}</h1>
    <p className=' text-[#8e939d] mt-2'>{das}</p>
    </div>
    </div>

    <div className=' flex justify-between items-center p-5'>
    <div>
        <button className=' bg-[#1f2535] border border-[#464b5b] rounded-full px-5 py-2'>Remove</button>
    </div>
    <label className="relative inline-flex items-center cursor-pointer">
        <div className={w-12 h-6 bg-[#ef5c52] ${className} rounded-full}></div>
        <div className="absolute left-7 top-1 w-4 h-4 bg-white rounded-full"></div>
    </label>
    </div>
    
    </div>
    </div>
    </>
  )
}

export default Card */