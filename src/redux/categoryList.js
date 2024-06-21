import { createSlice } from "@reduxjs/toolkit";

const categoryList = createSlice({
  name: "categoryList",
  initialState: {
    categories: [
      {
        id: 0,
        categoryName: "",
        categoryValue: "",
      },
    ],
  },
  reducers: {
    setCategory: (state, action) => {
      state.categories = action.payload;
    },
    setCategoryName: (state, action) => {
      state.categories.categoryName = action.payload;
    },
    setCategoryValue: (state, action) => {
      state.categories.categoryValue = action.payload;
    },
  },
});

export const {
  setCategory,
  setCategoryName,
  setCategoryValue,
} = categoryList.actions;

export default categoryList;
