import React from 'react';

const ClearButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-[64px] h-[38px] bg-buttonColor text-clearButtonText border border-buttonBorder rounded-topButtonRadius text-base font-normal"
    >
      Clear
    </button>
  );
};

export default ClearButton;
