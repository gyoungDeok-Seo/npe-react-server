import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "", ref: "", description: "" };
const profileUpdate = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileReset: (state) => ({ ...initialState }),
    setProfileState: (state, action) => {
      const newState = action.payload;
      state.name = newState.name ?? "";
      state.ref = newState.ref ?? "";
      state.description = newState.description ?? "";
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setRef: (state, action) => {
      state.ref = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
  },
});

export const {
  setProfileReset,
  setProfileState,
  setName,
  setRef,
  setDescription,
} = profileUpdate.actions;

export default profileUpdate;
