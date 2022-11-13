import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const user = createSlice({
  name: "uiVisible",
  initialState,
  reducers: {
    setUser(state, action) {
      const displayName = action.payload?.displayName;
      const photoURL = action.payload?.photoURL;

      if (action.payload) {
        state.user = {
          displayName,
          photoURL,
        };
      } else state.user = action.payload;
    },
  },
});

export const { setUser } = user.actions;

export default user.reducer;
