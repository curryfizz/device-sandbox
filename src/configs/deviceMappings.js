import Fan from "../components/Devices/Fan/Fan";
import FanController from "../components/Devices/Fan/FanController";
import FanWithRotation from "../components/Devices/Fan/FanWithRotation";
import Light from "../components/Devices/Light/Light";
import Lightbulb from "../components/Devices/Light/Lightbulb";
import LightController from "../components/Devices/Light/LightController";

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
