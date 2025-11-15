import React from 'react';
import PresetItem from './PresetItem';
import { PRESETS_EMPTY_MESSAGE } from '../../configs/devices';

const SavedPresets = ({ presets, canSave, onSave, onLoad, onDelete }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-base font-normal text-text gap-4">Saved Presets</p>
      </div>

      {presets.length === 0 ? (
        <PresetItem preset={{ name: PRESETS_EMPTY_MESSAGE }} />
      ) : (
        <div className="flex flex-col gap-3">
          {presets.map(preset => (
            <PresetItem
              key={preset.id}
              preset={preset}
              onLoad={onLoad}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedPresets;
