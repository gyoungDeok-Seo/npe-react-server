import { createSlice } from "@reduxjs/toolkit";

const createSkills = createSlice({
  name: "skills",
  initialState: { skills: [] },
  reducers: {
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
  },
});

export const { setSkills } = createSkills.actions;

export default createSkills;

