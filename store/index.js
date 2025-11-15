import { configureStore } from "@reduxjs/toolkit";
import devicesReducer from "./devicesSlice";
import presetsReducer from "./presetsSlice";
import uiReducer from "./uiSlice";
import toastReducer from './toastSlice';

export const store = configureStore({
  reducer: {
    devices: devicesReducer,
    presets: presetsReducer,
    ui: uiReducer,
    toast: toastReducer
  },
});
