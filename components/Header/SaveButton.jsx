import React from 'react';

const SaveButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-[111px] h-[38px] bg-savePresetColor text-white border border-buttonBorder rounded-topButtonRadius text-base font-normal"
    >
      Save Preset
    </button>
  );
};

export default SaveButton;
