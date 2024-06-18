import { createSlice } from "@reduxjs/toolkit";

const createCareer = createSlice({
  name: "career",
  initialState: {
    companyName: "",
    memberPosition: "",
    careerStart: "",
    careerEnd: "",
    industry: [],
    skills: [],
    description: "",
    careerUrl: "",
  },
  reducers: {
    setCompanyName: (state, action) => {
      state.companyName = action.payload;
    },
    setMemberPosition: (state, action) => {
      state.memberPosition = action.payload;
    },
    setCareerStart: (state, action) => {
      state.careerStart = action.payload;
    },
    setCareerEnd: (state, action) => {
      state.careerEnd = action.payload;
    },
    setIndustry: (state, action) => {
      state.industry = action.payload;
    },
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setCareerUrl: (state, action) => {
      state.careerUrl = action.payload;
    },
  },
});

export const {
  setCompanyName,
  setMemberPosition,
  setCareerStart,
  setCareerEnd,
  setIndustry,
  setSkills,
  setDescription,
  setCareerUrl,
} = createCareer.actions;

export default createCareer;
