import { createSlice } from "@reduxjs/toolkit";

const careerList = createSlice({
  name: "careerList",
  initialState: {
    careers: [
      {
        id: 0,
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
    setCareers: (state, action) => {
      state.careers = action.payload;
    },
    setId: (state, action) => {
        state.careers.id = action.payload;
      },
    setCompanyName: (state, action) => {
      state.careers.companyName = action.payload;
    },
    setMemberPosition: (state, action) => {
      state.careers.memberPosition = action.payload;
    },
    setCareerStart: (state, action) => {
      state.careers.careerStart = action.payload;
    },
    setCareerEnd: (state, action) => {
      state.careers.careerEnd = action.payload;
    },
    setIndustry: (state, action) => {
      state.careers.industry = action.payload;
    },
    setSkills: (state, action) => {
      state.careers.skills = action.payload;
    },
    setDescription: (state, action) => {
      state.careers.description = action.payload;
    },
    setCareerUrl: (state, action) => {
      state.careers.careerUrl = action.payload;
    },
  },
});

export const {
  setCareers,
  setId,
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