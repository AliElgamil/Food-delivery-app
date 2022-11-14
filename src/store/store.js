import { configureStore } from "@reduxjs/toolkit";

import sliceAllFood from "./allFood";
import cartItems from "./cartItems";
import uiVisible from "./UiVisible";
import user from "./user";
import lang from "./lang";

const store = configureStore({
  reducer: {
    allFood: sliceAllFood,
    cartItems,
    uiVisible,
    user,
    lang,
  },
});

export default store;
