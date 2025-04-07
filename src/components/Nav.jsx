import React from 'react';

const Nav = ({ darkMode, toggleTheme }) => {
  return (
    <div className={`flex justify-between items-center p-5 lg:px-16 rounded-xl mx-5 transition-all duration-300 ${darkMode ? 'bg-[#1f2535]' : 'bg-gray-200'}`}>
      <div className="flex gap-3">
        <img className="w-11" src="./logo.webp" alt="Logo" />
        <h1 className={`text-2xl mt-2 ${darkMode ? 'text-white' : 'text-black'}`}>Extensions</h1>
      </div>
      <button
        onClick={toggleTheme}
        className={`flex justify-center items-center w-11 h-11 rounded-lg transition-all duration-300 ${darkMode ? 'bg-[#1f2535]' : 'bg-white'}`}
      >
        <img
          src={darkMode ? './icon-sun.svg' : './icon-moon.svg'}
          alt="Toggle Theme"
        />
      </button>
    </div>
  );
};

export default Nav;



/*import React from 'react'

const Nav = () => {
  return (
    <>
        <div className=' flex justify-between items-center p-5 lg:px-16 bg-[#1f2535] rounded-xl mx-5 '>
        <div className=' flex gap-3'>
        <img className=' w-11' src="/src/images/logo.webp" alt="" />
        <h1 className=' text-white text-2xl mt-2'>Extensions</h1>
        </div>
        <button className=' flex justify-center items-center w-11 h-11 bg-[#2f354c] rounded-lg'><img src='/src/images/icon-sun.svg'/></button>
        </div>
    </>
  )
}

export default Nav */