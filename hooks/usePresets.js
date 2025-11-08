import { useState } from 'react';

export const usePresets = () => {
  const [savedPresets, setSavedPresets] = useState([]);

  const savePreset = (items) => {
    if (items.length === 0) return;
    
    const presetName = `Preset ${savedPresets.length + 1}`;
    const newPreset = {
      id: Date.now(),
      name: presetName,
      items: [...items]
    };
    
    setSavedPresets([...savedPresets, newPreset]);
  };

  const loadPreset = (preset) => {
    console.log(...preset.items);
    return [...preset.items];
  };

  const deletePreset = (presetId) => {
    setSavedPresets(savedPresets.filter(p => p.id !== presetId));
  };

  return {
    savedPresets,
    savePreset,
    loadPreset,
    deletePreset
  };
};