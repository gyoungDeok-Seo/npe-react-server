import { createSlice } from "@reduxjs/toolkit";

const createQna = createSlice({
  name: "qna",
  initialState: {
    questionTitle: "",
    questionContent: "",
    files: [],
    categoryId: 1,
    tags: [],
  },
  reducers: {
    setTitle: (state, action) => {
      state.questionTitle = action.payload;
    },
    setQuestion: (state, action) => {
      state.questionContent = action.payload;
    },
    setMember: (state, action) => {
      state.memberId = action.payload;
    },
    setFiles: (state, action) => {
      state.files = action.payload;
    },
    setCategory: (state, action) => {
      state.categoryId = action.payload;
    },
    setTags: (state, action) => {
      state.tags = action.payload;
    },
  },
});

export const {
  setTitle,
  setQuestion,
  setFiles,
  setCategory,
  setTags,
  setDatas,
} = createQna.actions;

export default createQna;
