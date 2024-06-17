import { createSlice } from "@reduxjs/toolkit";

const qnaId = createSlice({
  name: "qnaId",
  initialState: { id: 0 },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setId } = qnaId.actions;
export default qnaId;
