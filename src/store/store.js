import { configureStore } from "@reduxjs/toolkit";

import sliceAllFood from "./allFood";
import cartItems from "./cartItems";
import uiVisible from "./UiVisible";
import user from "./user";

const store = configureStore({
  reducer: {
    allFood: sliceAllFood,
    cartItems,
    uiVisible,
    user,
  },
});

export default store;
