import { configureStore } from "@reduxjs/toolkit";
import loginStatus from "./loginStatus";
import createQna from "./createQna";
import profileUpdate from "./profileUpdate";
import createSkills from "./createSkills";
import memberQuestions from "./memberQuestions";

const store = configureStore({
  reducer: {
    loginStatus: loginStatus.reducer,
    createQna: createQna.reducer,
    profileUpdate: profileUpdate.reducer,
    createSkills: createSkills.reducer,
    memberQuestions: memberQuestions.reducer,
  },
});
export default store;
