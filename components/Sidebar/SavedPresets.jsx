import React from 'react';
import PresetItem from './PresetItem';
import { PRESETS_EMPTY_MESSAGE } from '../../utils/constants';

const SavedPresets = ({ presets, canSave, onSave, onLoad, onDelete }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-base font-normal text-text gap-4">Saved Presets</p>
      </div>
      <div className="p-3 bg-sidebar border border-buttonBorder rounded-buttonRadius h-[46px]">
        {presets.length === 0 ? (
          <span className="text-base text-textSecondary">{PRESETS_EMPTY_MESSAGE}</span>
        ) : (
          <div className="flex flex-col gap-1.5">
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
    </div>
  );
};

export default SavedPresets;