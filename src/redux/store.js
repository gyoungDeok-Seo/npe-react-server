import { configureStore } from "@reduxjs/toolkit";
import loginStatus from "./loginStatus";
import createQna from "./createQna";
import profileUpdate from "./profileUpdate";
import createSkills from "./createSkills";
import qnaDetail from "./qnaDetail";
import qnaId from "./qnaId";

const store = configureStore({
  reducer: {
    loginStatus: loginStatus.reducer,
    createQna: createQna.reducer,
    profileUpdate: profileUpdate.reducer,
    createSkills: createSkills.reducer,
    qnaDetail: qnaDetail.reducer,
    qnaId: qnaId.reducer,
  },
});
export default store;
