import React from 'react';
import GenericButton from './GenericButton';

const SaveButton = ({ onClick }) => {
  return (
    <GenericButton text="Save Preset" onClick={onClick} className={`bg-savePresetColor w-[111px]`}/>
  );
};

export default SaveButton;
