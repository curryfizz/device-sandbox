// Default device definitions with initial settings
export const DEVICES = [
  {
    id: 1,
    name: "Light",
    type: "Light",
    settings: {
      size: 640,
      isOn: false,
      brightness: 0,
      color: "#FFE5B4",
    },
  },
  {
    id: 2,
    name: "Fan",
    type: "Fan",
    settings: {
      size: 400,
      isOn: false,
      speed: 1,
    },
  },
];

// Placeholder messages for UI
export const CANVAS_EMPTY_MESSAGE = "Drag anything here";  // when canvas is empty
export const PRESETS_EMPTY_MESSAGE = "Nothing added yet";  // when no saved presets
export const DRAG_INDICATOR_MESSAGE = "Drag items from here";  // shown near draggable items
