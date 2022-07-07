import React from 'react';

const Button = ({ classStyles, btnTitle, handleClick }) => {
  console.log(classStyles);
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`nft-gradient text-sm minlg:text-large py-2 px-6 minlg:px-8 font-poppins font-semibold text-white ${classStyles}`}
    >
      {btnTitle}
    </button>
  );
};

export default Button;
