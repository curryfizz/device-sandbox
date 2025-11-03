import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Canvas from '../Canvas/Canvas';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import { usePresets } from '../../hooks/usePresets';

const MainLayout = () => {
  const {
    canvasItems,
    handleDragStart,
    handleDrop,
    removeItem,
    setItems
  } = useDragAndDrop();

  const {
    savedPresets,
    savePreset,
    loadPreset,
    deletePreset
  } = usePresets();

  const handleSavePreset = () => {
    savePreset(canvasItems);
  };

  const handleLoadPreset = (preset) => {
    const items = loadPreset(preset);
    setItems(items);
  };

  return (
    <div className="flex h-screen bg-mainCanvas text-text font-sans">
      <Sidebar
        onDragStart={handleDragStart}
        presets={savedPresets}
        canSave={canvasItems.length > 0}
        onSavePreset={handleSavePreset}
        onLoadPreset={handleLoadPreset}
        onDeletePreset={deletePreset}
      />
      <Canvas
        items={canvasItems}
        onDrop={handleDrop}
        onDragStart={handleDragStart}
        onRemove={removeItem}
      />
    </div>
  );
};

export default MainLayout;