import { createSlice } from "@reduxjs/toolkit";

const profileUpdate = createSlice({
  name: "profile",
  initialState: { name: "", ref: "", description: "" },
  reducers: {
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

export const { setName, setRef, setDescription } = profileUpdate.actions;

export default profileUpdate;
