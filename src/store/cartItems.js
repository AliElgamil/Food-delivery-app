import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalQuantity: 0,
  totalPrice: 0,
  cartItems: [],
};

const cartItemSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existItem = state.cartItems.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.totalPrice += newItem.price;

      if (!existItem) {
        state.cartItems.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image01,
        });
      } else {
        existItem.quantity++;
        existItem.totalPrice += newItem.price;
      }
    },
    inCreaseItem(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload);
      item.totalPrice += item.price;
      item.quantity++;
      state.quantity++;
      state.totalPrice += item.price;
      state.totalQuantity++;
    },
    deCreaseItem(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload);

      if (item.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
      } else {
        item.totalPrice -= item.price;
        item.quantity--;
      }
      state.quantity--;
      state.totalPrice -= item.price;
      state.totalQuantity--;
    },
    removeItem(state, action) {
      const itemCart = state.cartItems.find(
        (item) => item.id === action.payload
      );
      state.totalQuantity -= itemCart.quantity;
      state.totalPrice -= itemCart.totalPrice;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== itemCart.id
      );
    },
  },
});

export const { addToCart, inCreaseItem, deCreaseItem, removeItem } =
  cartItemSlice.actions;

export default cartItemSlice.reducer;
