import { createSlice } from "@reduxjs/toolkit";

const createCareer = createSlice({
    name: "career",
    initialState: {
        companyName: "",
        memberPosition: "",
        careerStart: "",
        careerEnd: "",
        careerIndustries: [],
        careerSkills: [],
        description: "",
        careerUrl: "",
    },
    reducers: {
        setState: (state, action) => {
            const newState = action.payload;
            state.companyName = newState.companyName;
            state.memberPosition = newState.memberPosition;
            state.careerStart = newState.careerStart;
            state.careerEnd = newState.careerEnd;
            state.careerIndustries = newState.careerIndustries;
            state.careerSkills = newState.careerSkills;
            state.description = newState.description;
            state.careerUrl = newState.careerUrl;
        },
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
            state.careerIndustries = action.payload;
        },
        setSkills: (state, action) => {
            state.careerSkills = action.payload;
        },
        setDescription: (state, action) => {
            state.description = action.payload;
        },
        setCareerUrl: (state, action) => {
            state.careerUrl = action.payload;
        },
    },
});

export const { setState, setCompanyName, setMemberPosition, setCareerStart, setCareerEnd, setIndustry, setSkills, setDescription, setCareerUrl } = createCareer.actions;

export default careerList;
