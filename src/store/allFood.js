import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ref, set, update } from "firebase/database";
import Fuse from "fuse.js";
import { db } from "../Firebase";
const initialState = {
  allFood: [],
  foods: [],
  allProducts: [],
  searchProducts: null,
  category: "all",
  isLoading: true,
  error: false,
  foodDetail: [],
  alsoLike: [],
  render: 0,
};

const getDataLocal = async () => {
  const path = "/products.json";
  const response = await fetch(path);
  const data = await response.json();
  return data;
};

const setDataFirebase = (d) => {
  d.forEach((data) => {
    set(ref(db, "foods/" + data.title.replace(/ /g, "-")), {
      title: data.title,
      category: data.category,
      desc: data.desc,
      price: data.price,
      image01: data.image01,
      image02: data.image02,
      image03: data.image03,
      titleAr: `${data.titleAr}`,
      categoryAr: data.categoryAr,
      descAr: data.descAr,
      id: data.id,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });
};

// const getDataFirebase = () => {
//   let dataSnapshot = [];
//   onValue(ref(db), (snapshot) => {
//     const res = snapshot.val();
//     if (!res) {
//       getDataFirebase();
//       const get = async () => {
//         const data = await getData();
//         setData(data);
//       };
//       get();
//     } else {
//       console.log(res);
//       dataSnapshot = [...res.foods];
//     }
//   });
//   return dataSnapshot;
// };

export const getAllFood = createAsyncThunk("allFood/getAllFood", async () => {
  const url =
    "https://food-delivery-cc883-default-rtdb.firebaseio.com/foods.json";
  const res = await fetch(url);
  const data = await res.json();

  return Object.values(data);
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
        keys: ["descAr", "desc", "category", "categoryAr", "titleAr", "title"],
      });

      const result = fuse.search(action.payload).map(({ item }) => item);

      state.searchProducts = result;
    },
    resetSearch(state) {
      state.searchProducts = false;
    },
    findFood(state, action) {
      const itemFind = state.allFood.filter(
        (item) => item.id === action.payload
      );

      console.log(state.allFood);

      if (itemFind.length > 0) {
        const alsoLikeItems = state.allFood.filter(
          (item) =>
            item.category === itemFind[0].category && item.id !== itemFind[0].id
        );
        state.foodDetail = itemFind;

        state.alsoLike = alsoLikeItems.slice(0, 4);
      } else if (state.render !== 0) {
        state.foodDetail = [
          {
            notFound: true,
          },
        ];
      }

      state.render++;
    },
    getData(state, action) {
      state.isLoading = false;
      state.allFood = action.payload;
      state.foods = action.payload;
      state.allProducts = action.payload;
    },
    setData() {
      (async () => {
        setDataFirebase(await getDataLocal());
      })();
    },
    updateData(state, action) {
      const item = action.payload.item;
      const content = action.payload.content;
      const oldReviews = action.payload.item.reviews || [];
      const date = new Date();

      const hour =
        date.getHours() <= 12 ? date.getHours() : date.getHours() - 12;
      const option = {
        year: "numeric",
        month: "short",
        day: "numeric",
      };
      update(ref(db, `foods/${item.title.replace(/ /g, "-")}`), {
        ...item,
        reviews: [
          ...oldReviews,
          {
            name: "any body",
            content,
            date: `${date
              .toLocaleDateString("en-gb", option)
              .split(".")
              .join("")} ${hour > 9 ? hour : `0${hour}`}:${
              date.getMinutes() > 9
                ? date.getMinutes()
                : `0${date.getMinutes()}`
            }`,
          },
        ],
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      state.allFood.filter((itemFood) => itemFood.id === item.id)[0].reviews = [
        ...oldReviews,
        {
          name: "any body",
          content,
          date: `${date
            .toLocaleDateString("en-gb", option)
            .split(".")
            .join("")} ${hour > 9 ? hour : `0${hour}`}:${
            date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`
          }`,
        },
      ];
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

export const {
  filterFood,
  sortFoods,
  searchFoods,
  resetSearch,
  findFood,
  getData,
  setData,
  updateData,
} = sliceAllFood.actions;

export default sliceAllFood.reducer;
