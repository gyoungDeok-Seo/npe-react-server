import { createSlice } from "@reduxjs/toolkit";

const memberQuestions = createSlice({
  name: "questions",
  initialState: { questions: [] },
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
  },
});

export const { setQuestions } = memberQuestions.actions;

export default memberQuestions;