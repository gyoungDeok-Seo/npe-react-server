import { createSlice } from "@reduxjs/toolkit";

const createEducation = createSlice({
  name: "education",
  initialState: {
    educationInstitution: "",
    educationCourse: "",
    educationStart: "",
    educationEnd: "",
    description: "",
    educationUrl: "",
  },
  reducers: {
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
  setEducationInstitution,
  setEducationCourse,
  setEducationStart,
  setEducationEnd,
  setDescription,
  setEducationUrl,
} = createEducation.actions;

export default createEducation;
