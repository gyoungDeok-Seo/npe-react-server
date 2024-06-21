import { configureStore } from "@reduxjs/toolkit";
import loginStatus from "./loginStatus";
import createQna from "./createQna";
import profileUpdate from "./profileUpdate";
import createSkills from "./createSkills";
import memberQuestions from "./memberQuestions";
import qnaDetail from "./qnaDetail";
import qnaId from "./qnaId";
import memberPosts from "./memberPosts";
import memberAnswers from "./memberAnswers";
import createCareer from "./createCareer";
import createEducation from "./createEducation";
import careerList from "./careerList";
import categoryList from "./categoryList";
import educationList from "./educationList";

const store = configureStore({
  reducer: {
    loginStatus: loginStatus.reducer,
    createQna: createQna.reducer,
    profileUpdate: profileUpdate.reducer,
    createSkills: createSkills.reducer,
    memberQuestions: memberQuestions.reducer,
    memberAnswers: memberAnswers.reducer,
    memberPosts: memberPosts.reducer,
    qnaDetail: qnaDetail.reducer,
    qnaId: qnaId.reducer,
    createCareer: createCareer.reducer,
    createEducation: createEducation.reducer,
    careerList: careerList.reducer,
    categoryList: categoryList.reducer,
    educationList: educationList.reducer,
  },
});
export default store;
