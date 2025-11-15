import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  saveModalOpen: false,
  clearModalOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    // Save Modal
    openSaveModal: (state) => {
      state.saveModalOpen = true;
    },
    closeSaveModal: (state) => {
      state.saveModalOpen = false;
    },

    openClearModal: (state) => {
      state.clearModalOpen = true;
    },
    closeClearModal: (state) => {
      state.clearModalOpen = false;
    },
  },
});

export const {
  openSaveModal,
  closeSaveModal,
  openClearModal,
  closeClearModal,
} = uiSlice.actions;

export default uiSlice.reducer;
