import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { presetAPI } from "../services/presetsApi";

export const loadPresets = createAsyncThunk(
  "presets/loadPresets",
  async () => {
    const result = await presetAPI.getAllPresets();
    return result.data;
  }
);

export const savePreset = createAsyncThunk(
  "presets/savePreset",
  async (payload) => await presetAPI.savePreset(payload)
);

export const loadPreset = createAsyncThunk(
  "presets/loadPreset",
  async (id) => await presetAPI.getPreset(id)
);

const presetsSlice = createSlice({
  name: "presets",
  initialState: {
    list: [],
    loaded: null,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadPresets.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(savePreset.fulfilled, (state, action) => {
        state.list.push(action.payload.data);
      })
      .addCase(loadPreset.fulfilled, (state, action) => {
        state.loaded = action.payload.data;
      });
  }
});

export default presetsSlice.reducer;
