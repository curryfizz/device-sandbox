import Fan from "../components/Devices/Fan/Fan";
import FanController from "../components/Devices/Fan/FanController";
import FanWithRotation from "../components/Devices/Fan/FanWithRotation";
import Light from "../components/Devices/Light/Light";
import Lightbulb from "../components/Devices/Light/Lightbulb";
import LightController from "../components/Devices/Light/LightController";

// Maps numeric IDs to device type names
export const ID_MAPPINGS = {
  1: 'Light',
  2: 'Fan'
}

// Components used for rendering on the canvas
export const CANVAS_COMPONENTS = {
  'Fan': FanWithRotation,
  'Light': Lightbulb,
};

// Components used in device lists / sidebar
export const DEVICE_COMPONENTS = {
  'Fan': Fan,
  'Light': Light,
};

// Controller components for each device type
export const CONTROLLERS = {
  'Fan': FanController,
  'Light': LightController,
};
