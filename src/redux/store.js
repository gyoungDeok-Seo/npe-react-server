import { configureStore } from "@reduxjs/toolkit";
import loginStatus from "./loginStatus";
import createQna from "./createQna";
import profileUpdate from "./profileUpdate";

const store = configureStore({
  reducer: {
    loginStatus: loginStatus.reducer,
    createQna: createQna.reducer,
    profileUpdate: profileUpdate.reducer,
  },
});
export default store;
