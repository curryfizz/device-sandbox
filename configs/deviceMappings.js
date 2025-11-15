// deviceMappings.js

import Fan from "../components/devices/Fan/Fan";
import FanController from "../components/devices/Fan/FanController";
import FanWithRotation from "../components/devices/Fan/FanWithRotation";
import Light from "../components/devices/Light/Light";
import Lightbulb from "../components/devices/Light/Lightbulb";
import LightController from "../components/devices/Light/LightController";

export const ID_MAPPINGS = {
  1 : 'light',
  2 : 'fan'
}

export const CANVAS_COMPONENTS = {
  fan: FanWithRotation,
  light: Lightbulb,
};

export const DEVICE_COMPONENTS = {
  fan: Fan,
  light: Light,
};

export const CONTROLLERS = {
  fan: FanController,
  light: LightController,
};
