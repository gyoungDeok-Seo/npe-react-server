import { Link } from "react-router-dom";
import styled from "styled-components";
import LikeUserModal from "../Modal/LikeUserModal";
import { useState } from "react";
import ToolBox from "./QnaActivityAnswer/ToolBox";
import AnswerContent from "./QnaActivityAnswer/AnswerContent";

const QnaActivityAnswerItem = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const QnaActivityAnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const QnaActivityAnswerProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const QnaActivityAnswerBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const AnswerProfileImg = styled.img`
  flex: none;
  overflow: hidden;
  border-radius: 9999px;
  -o-object-fit: cover;
  object-fit: cover;
  width: 2.5rem;
  height: 2.5rem;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(226 232 240 /1);
  background-color: rgb(255 255 255 /1);
`;
const AnswerUserData = styled.div`
  display: flex;
  flex-direction: column;
`;
const AnswerUserName = styled.div`
  color: #0f172a;
  font-weight: 700;
  font-size: 0.875rem;
`;
const AnswerUserJob = styled.div`
  color: #334155;
  font-size: 0.75rem;
  word-break: break-all;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;
const AnswerUserCreateAt = styled.div`
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 600;
`;

function QnaActivityAnswer({ likeUsersModal, setLikeUsersModal }) {
  return (
    <>
      <QnaActivityAnswerItem>
        <QnaActivityAnswerContainer>
          <QnaActivityAnswerProfileBox>
            <QnaActivityAnswerBox>
              <AnswerProfileImg
                src="https://publy.imgix.net/static/images/img_profile-dummy.png?w=200&h=200&auto=format&fm=png"
                alt="백시현님의 프로필 사진"
              />
              <AnswerUserData>
                <AnswerUserName>백시현</AnswerUserName>
                <AnswerUserJob>취준생</AnswerUserJob>
                <AnswerUserCreateAt>2023년 05월 05일</AnswerUserCreateAt>
              </AnswerUserData>
            </QnaActivityAnswerBox>
          </QnaActivityAnswerProfileBox>
          <AnswerContent />
        </QnaActivityAnswerContainer>
        <ToolBox setLikeUsersModal={setLikeUsersModal} />
      </QnaActivityAnswerItem>
      {likeUsersModal && (
        <LikeUserModal setLikeUsersModal={setLikeUsersModal} />
      )}
    </>
  );
}
export default QnaActivityAnswer;
