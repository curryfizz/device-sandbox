import { configureStore } from "@reduxjs/toolkit";
import devicesReducer from "./devicesSlice";
import presetsReducer from "./presetsSlice";
import uiReducer from "./uiSlice";
import toastReducer from './toastSlice';

// Configure the Redux store with multiple slices
export const store = configureStore({
  reducer: {
    devices: devicesReducer, // manages devices and canvas state
    presets: presetsReducer, // manages saved presets
    ui: uiReducer,           // manages modal visibility and UI flags
    toast: toastReducer      // manages toast notifications
  },
});
