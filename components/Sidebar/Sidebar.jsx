import React from 'react';
import DeviceList from './DeviceList';
import SavedPresets from './SavedPresets';

const Sidebar = ({
  onDragStart,
  presets,
  canSave,
  onSavePreset,
  onLoadPreset,
  onDeletePreset,
  selectedDevice,       // Active device ID from MainLayout
  setSelectedDevice     // Setter to update active device
}) => {
  return (
    <div className="w-[227px] bg-sidebar border-r border-border p-4 flex flex-col gap-8">
      <DeviceList
        onDragStart={onDragStart}
        selectedId={selectedDevice}        // pass active device
        setSelectedId={setSelectedDevice}  // allow selection updates
      />
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
