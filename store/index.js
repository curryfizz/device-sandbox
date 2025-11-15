import { configureStore } from "@reduxjs/toolkit";
import devicesReducer from "./devicesSlice";
import presetsReducer from "./presetsSlice";
import uiReducer from "./uiSlice";

export const store = configureStore({
  reducer: {
    devices: devicesReducer,
    presets: presetsReducer,
    ui: uiReducer,
  },
});
