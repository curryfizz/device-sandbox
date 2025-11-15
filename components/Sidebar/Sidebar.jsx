import React from 'react';
import DeviceList from './DeviceList';
import SavedPresets from './SavedPresets';

const Sidebar = ({ }) => {
  return (
    <div className="w-[227px] bg-sidebar border-r border-border p-4 flex flex-col gap-8">
      {/* Device list*/}
      <DeviceList />

      {/* Saved preset list */}
      <SavedPresets />

    </div>
  );
};

export default Sidebar;
