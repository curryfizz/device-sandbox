import React from 'react';

const PresetItem = ({ preset, onLoad, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-buttonColor rounded-buttonRadius hover:bg-buttonHover transition-colors duration-200 group">
      <button
        onClick={() => onLoad(preset)}
        className="flex text-left text-base font-normal text-textSecondary"
      >
        {preset.name}
      </button>
    </div>
  );
};

export default PresetItem;