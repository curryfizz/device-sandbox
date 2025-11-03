import React from 'react';
import DeviceList from './DeviceList';
import SavedPresets from './SavedPresets';

const Sidebar = ({
  onDragStart,
  presets,
  canSave,
  onSavePreset,
  onLoadPreset,
  onDeletePreset
}) => {
  return (
    <div className="w-[227px] bg-sidebar border-r border-border p-4 flex flex-col gap-8">
      <DeviceList onDragStart={onDragStart} />
      <SavedPresets
        presets={presets}
        canSave={canSave}
        onSave={onSavePreset}
        onLoad={onLoadPreset}
        onDelete={onDeletePreset}
      />
    </div>
  );
};

export default Sidebar;