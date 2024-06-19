import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  id: 0,
  educationInstitution: "",
  educationCourse: "",
  educationStart: "",
  educationEnd: "",
  description: "",
  educationUrl: "",
};
const createEducation = createSlice({
  name: "education",
  initialState,
  reducers: {
    setEducationReset: (state) => ({ ...initialState }),
    setEducationState: (state, action) => {
      const newState = action.payload;
      state.id = newState.id ?? 0;
      state.educationInstitution = newState.educationInstitution ?? "";
      state.educationCourse = newState.educationCourse ?? "";
      state.educationStart = newState.educationStart ?? "";
      state.educationEnd = newState.educationEnd ?? "";
      state.description = newState.description ?? "";
      state.educationUrl = newState.educationUrl ?? "";
    },
    setEducationInstitution: (state, action) => {
      state.educationInstitution = action.payload;
    },
    setEducationCourse: (state, action) => {
      state.educationCourse = action.payload;
    },
    setEducationStart: (state, action) => {
      state.educationStart = action.payload;
    },
    setEducationEnd: (state, action) => {
      state.educationEnd = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setEducationUrl: (state, action) => {
      state.educationUrl = action.payload;
    },
  },
});

export const {
  setEducationReset,
  setEducationState,
  setEducationInstitution,
  setEducationCourse,
  setEducationStart,
  setEducationEnd,
  setDescription,
  setEducationUrl,
} = createEducation.actions;

export default createEducation;
