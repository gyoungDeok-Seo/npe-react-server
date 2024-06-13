import { configureStore } from "@reduxjs/toolkit";
import loginStatus from "./loginStatus";


const store = configureStore({
  reducer: {
    loginStatus: loginStatus.reducer,
  },
});
export default store;
