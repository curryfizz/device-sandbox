import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  type: 'success', // success | error
  visible: false,
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast: (state, action) => {
      const { message, type } = action.payload;
      state.message = message;
      state.type = type || 'success';
      state.visible = true;
    },
    hideToast: (state) => {
      state.visible = false;
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
