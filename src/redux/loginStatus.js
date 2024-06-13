import { createSlice } from "@reduxjs/toolkit";

const loginStatus = createSlice({
  name: "loginStatus",
  initialState: { status: false },
  reducers: {
    controlRedux: (state, action) => {
      state.status = action.payload;
    },
  },
});

export default loginStatus;
export const { controlRedux } = loginStatus.actions;
