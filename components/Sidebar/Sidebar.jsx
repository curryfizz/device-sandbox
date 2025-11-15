import React from 'react';
import DeviceList from './DeviceList';
// import SavedPresets from './SavedPresets'; // Commented out for now

const Sidebar = ({}) => {
  return (
    <div className="w-[227px] bg-sidebar border-r border-border p-4 flex flex-col gap-8">
      {/* Device list is fully Redux-driven */}
      <DeviceList/>

      {/* SavedPresets temporarily disabled */}
      {/*
      <SavedPresets
        presets={presets}
        canSave={canSave}
        onSave={onSavePreset}
        onLoad={onLoadPreset}
        onDelete={onDeletePreset}
      />
      */}
    </div>
  );
};

export default Sidebar;
