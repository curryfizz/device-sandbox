import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Canvas from '../Canvas/Canvas';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import { usePresets } from '../../hooks/usePresets';

const MainLayout = () => {
  const {
    canvasItem,
    handleDragStart,
    handleDrop,
    removeItem,
    clearCanvas,
    setItem
  } = useDragAndDrop();

  const {
    savedPresets,
    savePreset,
    loadPreset,
  } = usePresets();

  // NEW: selected device state lifted here
  const [selectedDevice, setSelectedDevice] = useState(null);


  const handleClearCanvas = () => {
    clearCanvas();
    setSelectedDevice(null); // reset active device
  };

  const handleDeviceDragStart = (device) => {
    setSelectedDevice(device.id);
    handleDragStart(device);
  };

  return (
    <div className="flex h-screen bg-mainCanvas text-text font-sans">
      <Sidebar/>
      <Canvas
        item={canvasItem}
        onDrop={handleDrop}
        onDragStart={handleDeviceDragStart}
        onRemove={removeItem}
        onClear={handleClearCanvas}
        onSavePreset={savePreset} // pass it down
      />
    </div>
  );
};

export default MainLayout;
