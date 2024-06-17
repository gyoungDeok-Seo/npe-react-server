import { createSlice } from "@reduxjs/toolkit";

const qnaDetail = createSlice({
  name: "qnaDetail",
  initialState: {
    qnaDetailData: {
      questionTitle: "",
      questionContent: "",
      answerList: [],
      tagList: [],
      fileList: [],
      createdDate: "",
      updatedDate: "",
      categoryValue: "",
      categoryName: "",
      status: true,
      memberId: null,
    },
  },
  reducers: {
    setQnaDetailData: (state, action) => {
      state.qnaDetailData = action.payload;
    },
    setQuestionTitle: (state, action) => {
      state.qnaDetailData.questionTitle = action.payload;
    },
    setQuestionContent: (state, action) => {
      state.qnaDetailData.questionContent = action.payload;
    },
    setAnswerList: (state, action) => {
      state.qnaDetailData.answerList = action.payload;
    },
    setTagList: (state, action) => {
      state.qnaDetailData.tagList = action.payload;
    },
    setFileList: (state, action) => {
      state.qnaDetailData.fileList = action.payload;
    },
    setCreatedDate: (state, action) => {
      state.qnaDetailData.createdDate = action.payload;
    },
    setUpdatedDate: (state, action) => {
      state.qnaDetailData.updatedDate = action.payload;
    },
    setCategoryName: (state, action) => {
      state.qnaDetailData.categoryName = action.payload;
    },
    setCategoryValue: (state, action) => {
      state.qnaDetailData.categoryValue = action.payload;
    },
    setStatus: (state, action) => {
      state.qnaDetailData.status = action.payload;
    },
    setMemberId: (state, action) => {
      state.qnaDetailData.memberId = action.payload;
    },
  },
});

export const {
  setQnaDetailData,
  setQuestionTitle,
  setQuestionContent,
  setAnswerList,
  setTagList,
  setFileList,
  setCreatedDate,
  setUpdatedDate,
  setCategoryName,
  setCategoryValue,
  setStatus,
  setMemberId,
} = qnaDetail.actions;

export default qnaDetail;
