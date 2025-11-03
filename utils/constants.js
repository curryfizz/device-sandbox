import Fan from "../components/devices/Fan";
import Light from "../components/devices/Light";


export const DEVICES = [
  { 
    id: 'light', 
    name: 'Light', 
    component: Light  // Reference to component instead of icon
  },
  { 
    id: 'fan', 
    name: 'Fan', 
    component: Fan    // Reference to component instead of icon
  }
];

export const CANVAS_EMPTY_MESSAGE = 'Drag anything here';
export const PRESETS_EMPTY_MESSAGE = 'Nothing added yet';
export const DRAG_INDICATOR_MESSAGE = 'Drag items from here';