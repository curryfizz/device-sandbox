import React from 'react';

const PresetItem = ({ preset, onLoad, onDelete }) => {
  const isStatic = !onLoad && !onDelete;

  return (
    <div className={`flex items-center justify-between p-3 bg-buttonColor rounded-buttonRadius  border border-buttonBorder ${isStatic ? 'cursor-not-allowed bg-sidebar' : 'cursor-pointer bg-buttonColor hover:bg-buttonHover transition-colors duration-200'}`}>
      {isStatic ? (
        <p className="text-left text-base font-normal text-textSecondary opacity-30 cursor-not-allowed">
          {preset.name}
        </p>
      ) : (
        <button
          onClick={() => onLoad(preset)}
          className="text-left text-base font-normal text-textSecondary"
        >
          {preset.name}
        </button>
      )}
    </div>
  );
};

export default PresetItem;
