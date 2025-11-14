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
    deletePreset
  } = usePresets();

  // NEW: selected device state lifted here
  const [selectedDevice, setSelectedDevice] = useState(null);

  const handleSavePreset = () => {
    if (canvasItem) {
      savePreset(canvasItem);
    }
  };

  const handleLoadPreset = (preset) => {
    const loadedItem = loadPreset(preset);
    setItem(loadedItem);
  };

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
      <Sidebar
        onDragStart={handleDeviceDragStart}
        presets={savedPresets}
        canSave={canvasItem !== null}
        onSavePreset={handleSavePreset}
        onLoadPreset={handleLoadPreset}
        onDeletePreset={deletePreset}
        selectedDevice={selectedDevice}          // pass down active device
        setSelectedDevice={setSelectedDevice}   // allow DeviceList to update it
      />
      <Canvas
        item={canvasItem}
        onDrop={handleDrop}
        onDragStart={handleDeviceDragStart}
        onRemove={removeItem}
        onClear={handleClearCanvas}              // resets device selection
      />
    </div>
  );
};

export default MainLayout;
