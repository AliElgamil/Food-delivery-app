import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartVisible: false,
};

const uiSlice = createSlice({
  name: "uiVisible",
  initialState,
  reducers: {
    toggleCartVisible(state) {
      state.cartVisible = !state.cartVisible;
    },
  },
});

export const { toggleCartVisible } = uiSlice.actions;

export default uiSlice.reducer;
