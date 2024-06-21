import styled from "styled-components";
import ToolBox from "./QnaActivityAnswer/ToolBox";
import AnswerContent from "./QnaActivityAnswer/AnswerContent";
import LikeUserModal from "../Modal/LikeUserModal";

const QnaActivityAnswerItem = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e2e8f0;
  &:last-child {
    border: none;
  }
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
export const timeForToday = (datetime) => {
  const today = new Date();
  const date = new Date(datetime);

  let gap = Math.floor((today.getTime() - date.getTime()) / 1000 / 60);

  if (gap < 1) {
    return "방금 전";
  }

  if (gap < 60) {
    return `${gap}분 전`;
  }

  gap = Math.floor(gap / 60);

  if (gap < 24) {
    return `${gap}시간 전`;
  }

  gap = Math.floor(gap / 24);

  if (gap < 31) {
    return `${gap}일 전`;
  }

  gap = Math.floor(gap / 31);

  if (gap < 12) {
    return `${gap}개월 전`;
  }

  gap = Math.floor(gap / 12);

  return `${gap}년 전`;
};
function QnaActivityAnswer({ answer, member }) {
  return (
    <>
      <QnaActivityAnswerItem>
        <QnaActivityAnswerContainer>
          <QnaActivityAnswerProfileBox>
            <QnaActivityAnswerBox>
              <AnswerProfileImg
                src={member?.kakaoProfileUrl}
                alt="백시현님의 프로필 사진"
              />
              <AnswerUserData>
                <AnswerUserName>{member?.memberName}</AnswerUserName>
                <AnswerUserJob>{member?.memberPosition}</AnswerUserJob>
                <AnswerUserCreateAt>
                  {timeForToday(answer?.createdDate)}
                </AnswerUserCreateAt>
              </AnswerUserData>
            </QnaActivityAnswerBox>
          </QnaActivityAnswerProfileBox>
          <AnswerContent answer={answer} />
        </QnaActivityAnswerContainer>
        <ToolBox answer={answer} />
      </QnaActivityAnswerItem>
      {/* {likeUsersModal && (
        <LikeUserModal />
      )} */}
    </>
  );
}
export default QnaActivityAnswer;
