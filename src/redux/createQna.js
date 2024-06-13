import { createSlice } from "@reduxjs/toolkit";

const createQna = createSlice({
  name: "qna",
  initialState: {
    title: "",
    question: "",
    images: [],
    category: "JAVA",
    tags: [],
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setQuestion: (state, action) => {
      state.question = action.payload;
    },
    setImages: (state, action) => {
      state.images = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setTags: (state, action) => {
      state.tags = action.payload;
    },
  },
});

export const {
  setTitle,
  setQuestion,
  setImages,
  setCategory,
  setTags,
  setDatas,
} = createQna.actions;

export default createQna;
