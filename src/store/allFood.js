import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Fuse from "fuse.js";
const initialState = {
  allFood: [],
  foods: [],
  allProducts: [],
  searchProducts: null,
  category: "all",
  isLoading: true,
  error: false,
  foodDetail: [],
};

export const getAllFood = createAsyncThunk("allFood/getAllFood", async () => {
  const url = "/products.json";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
});

const sliceAllFood = createSlice({
  name: "allFood",
  initialState,
  reducers: {
    filterFood(state, action) {
      state.category = action.payload;
      if (action.payload === "all") {
        state.foods = state.allFood;
      } else {
        state.foods = state.allFood.filter(
          (food) => food.category === action.payload
        );
      }
    },
    sortFoods(state, action) {
      const sortType = action.payload;
      if (sortType === "default") {
        state.allProducts = state.allFood;
        state.searchProducts = state.allFood;
      } else if (sortType === "ascending") {
        state.allProducts.sort((a, b) => a.title.localeCompare(b.title));
        state.searchProducts?.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortType === "descending") {
        state.allProducts.sort((a, b) => b.title.localeCompare(a.title));
        state.searchProducts?.sort((a, b) => b.title.localeCompare(a.title));
      } else if (sortType === "high-price") {
        state.allProducts = state.allFood.sort((a, b) =>
          a.price > b.price ? -1 : 0
        );

        // if (!state.searchProducts) return;
        state.searchProducts = state.searchProducts?.sort((a, b) =>
          a.price > b.price ? -1 : 0
        );
      } else if (sortType === "low-price") {
        state.allProducts = state.allFood.sort((a, b) => a.price - b.price);
        state.searchProducts = state.searchProducts?.sort(
          (a, b) => a.price - b.price
        );
      }
    },
    searchFoods(state, action) {
      const fuse = new Fuse(state.allProducts, {
        keys: ["descAr", "desc", "category", "title"],
      });

      const result = fuse.search(action.payload).map(({ item }) => item);

      state.searchProducts = result;
    },
    resetSearch(state) {
      state.searchProducts = false;
    },
    findFood(state, action) {
      state.foodDetail = state.allFood.filter(
        (item) => item.id === action.payload
      );
    },
  },
  extraReducers: {
    [getAllFood.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.allFood = action.payload;
      state.foods = action.payload;
      state.allProducts = action.payload;
    },
    [getAllFood.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    [getAllFood.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export const { filterFood, sortFoods, searchFoods, resetSearch, findFood } =
  sliceAllFood.actions;

export default sliceAllFood.reducer;
