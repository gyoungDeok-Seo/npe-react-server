import { createSlice } from "@reduxjs/toolkit";

const educationList = createSlice({
  name: "educationList",
  initialState: {
    educations: [
      {
        id: 0,
        educationInstitution: "",
        educationCourse: "",
        educationStart: "",
        educationEnd: "",
        description: "",
        educationUrl: "",
      },
    ],
  },
  reducers: {
    setEducations: (state, action) => {
      state.educations = action.payload;
    },
    setId: (state, action) => {
      state.educations.id = action.payload;
    },
    setEducationInstitution: (state, action) => {
      state.educations.educationInstitution = action.payload;
    },
    setEducationCourse: (state, action) => {
      state.educations.educationCourse = action.payload;
    },
    setEducationStart: (state, action) => {
      state.educations.educationStart = action.payload;
    },
    setEducationEnd: (state, action) => {
      state.educations.educationEnd = action.payload;
    },
    setDescription: (state, action) => {
      state.educations.description = action.payload;
    },
    setEducationUrl: (state, action) => {
      state.educations.educationUrl = action.payload;
    },
  },
});

export const {
  setEducations,
  setId,
  setEducationInstitution,
  setEducationCourse,
  setEducationStart,
  setEducationEnd,
  setDescription,
  setEducationUrl,
} = educationList.actions;

export default educationList;
