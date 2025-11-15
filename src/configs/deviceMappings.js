import Fan from "../components/devices/Fan/Fan";
import FanController from "../components/devices/Fan/FanController";
import FanWithRotation from "../components/devices/Fan/FanWithRotation";
import Light from "../components/devices/Light/Light";
import Lightbulb from "../components/devices/Light/Lightbulb";
import LightController from "../components/devices/Light/LightController";

export const ID_MAPPINGS = {
  1 : 'Light',
  2 : 'Fan'
}

export const CANVAS_COMPONENTS = {
  'Fan': FanWithRotation,
  'Light': Lightbulb,
};

export const DEVICE_COMPONENTS = {
  'Fan': Fan,
  'Light': Light,
};

export const CONTROLLERS = {
  'Fan': FanController,
  'Light': LightController,
};
