import { configureStore } from "@reduxjs/toolkit";
import loginStatus from "./loginStatus";
import createQna from "./createQna";

const store = configureStore({
  reducer: {
    loginStatus: loginStatus.reducer,
    createQna: createQna.reducer,
  },
});
export default store;
