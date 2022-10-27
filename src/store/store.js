import { configureStore } from "@reduxjs/toolkit";

import sliceAllFood from "./allFood";
import cartItems from "./cartItems";
import uiVisible from "./UiVisible";

const store = configureStore({
  reducer: {
    allFood: sliceAllFood,
    cartItems,
    uiVisible,
  },
});

export default store;
