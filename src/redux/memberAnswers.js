import { createSlice } from "@reduxjs/toolkit";

const memberAnswers = createSlice({
    name: "answers",
    initialState: { answers: [] },
    reducers: {
        setAnswers: (state, action) => {
            state.answers = action.payload;
        },
    },
});

export const { setAnswers } = memberAnswers.actions;

export default memberAnswers;
