import Fan from "../components/devices/Fan/Fan";
import Light from "../components/devices/Light/Light";
import Lightbulb from "../components/devices/Light/Lightbulb";


export const DEVICES = [
  { 
    id: 'light', 
    name: 'Light', 
    component: Light,
    canvasComponent: Lightbulb,
    canvasComponentProps: { size: 160 }
  },
  { 
    id: 'fan', 
    name: 'Fan', 
    component: Fan    
  }
];

export const CANVAS_EMPTY_MESSAGE = 'Drag anything here';
export const PRESETS_EMPTY_MESSAGE = 'Nothing added yet';
export const DRAG_INDICATOR_MESSAGE = 'Drag items from here';