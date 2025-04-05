import React from 'react';

const Btn = ({ name, className, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`bg-[#2f354a] rounded-full px-5 py-2 text-white ${className}`}>
        {name}
        </button>
    </>
  );
};

export default Btn;

/*const Btn = ({name,className}) => {
  return (
    <>
    <button className={bg-[#2f354a] rounded-full px-5 py-2 text-white ${className}}>{name}</button>
    </>
  )
} */