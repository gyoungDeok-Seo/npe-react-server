import { createSlice } from "@reduxjs/toolkit";

const careerList = createSlice({
  name: "career",
  initialState: {
    key: [
      {
        companyName: "",
        memberPosition: "",
        careerStart: "",
        careerEnd: "",
        careerIndustries: [],
        careerSkills: [],
        description: "",
        careerUrl: "",
      },
    ],
  },
  reducers: {
    setKey: (state, action) => {
      state.key = action.payload;
    },
    setCompanyName: (state, action) => {
      state.key.companyName = action.payload;
    },
    setMemberPosition: (state, action) => {
      state.key.memberPosition = action.payload;
    },
    setCareerStart: (state, action) => {
      state.key.careerStart = action.payload;
    },
    setCareerEnd: (state, action) => {
      state.key.careerEnd = action.payload;
    },
    setIndustry: (state, action) => {
      state.key.industry = action.payload;
    },
    setSkills: (state, action) => {
      state.key.skills = action.payload;
    },
    setDescription: (state, action) => {
      state.key.description = action.payload;
    },
    setCareerUrl: (state, action) => {
      state.key.careerUrl = action.payload;
    },
  },
});

export const {
  setKey,
  setCompanyName,
  setMemberPosition,
  setCareerStart,
  setCareerEnd,
  setIndustry,
  setSkills,
  setDescription,
  setCareerUrl,
} = careerList.actions;

export default careerList;
