import React from 'react';

const GenericButton = ({ onClick, text='Cancel', className }) => {
  return (
    <button
      onClick={onClick}
      className={`min-w-[64px] h-[38px] bg-buttonColor text-GenericButtonText border border-buttonBorder rounded-topButtonRadius text-base font-normal ${className}`}
    >
      {text}
    </button>
  );
};

export default GenericButton;
