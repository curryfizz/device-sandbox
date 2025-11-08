import React from 'react';
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

  const handleSavePreset = () => {
    if (canvasItem) {
      savePreset(canvasItem);
    }
  };

  const handleLoadPreset = (preset) => {
    const loadedItem = loadPreset(preset);
    setItem(loadedItem);
  };

  return (
    <div className="flex h-screen bg-mainCanvas text-text font-sans">
      <Sidebar
        onDragStart={handleDragStart}
        presets={savedPresets}
        canSave={canvasItem !== null}
        onSavePreset={handleSavePreset}
        onLoadPreset={handleLoadPreset}
        onDeletePreset={deletePreset}
      />
      <Canvas
        item={canvasItem}             
        onDrop={handleDrop}
        onDragStart={handleDragStart}
        onRemove={removeItem}
        onClear={clearCanvas}         
      />
    </div>
  );
};

export default MainLayout;
