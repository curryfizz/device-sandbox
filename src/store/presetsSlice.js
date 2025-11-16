import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { presetAPI } from "../services/presetsApi";

// Async thunks for API calls
export const loadPresets = createAsyncThunk(
  "presets/loadPresets",
  async () => (await presetAPI.getAllPresets()).data // fetch all presets
);

export const savePreset = createAsyncThunk(
  "presets/savePreset",
  async (payload) => await presetAPI.savePreset(payload) // save new preset
);

export const loadPreset = createAsyncThunk(
  "presets/loadPreset",
  async (id) => await presetAPI.getPreset(id) // fetch single preset
);

const presetsSlice = createSlice({
  name: "presets",
  initialState: {
    list: [],   // all presets
    loaded: null, // currently loaded preset
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPresets.fulfilled, (state, action) => {
        state.list = action.payload; // set preset list
      })
      .addCase(savePreset.fulfilled, (state, action) => {
        state.list.push(action.payload.data); // add new preset
      })
      .addCase(loadPreset.fulfilled, (state, action) => {
        state.loaded = action.payload.data; // set loaded preset
      });
  }
});

export default presetsSlice.reducer;
