import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import LikeUserModal from "../../profiles/Modal/LikeUserModal";
import ReportModal from "../Modal/ReportModal";
import DeleteModal from "../Modal/DeleteModal";
import AiAnswer from "./AiAnswer";
import PeopleAnswer from "./PeopleAnswer";
import { updateAnswerApi } from "../../../service/answerApi";

import { timeForToday } from "../../profiles/QnaActivity/QnaActivityAnswer";
import { checkTheComment, insertProfanityApi } from "../../../service/answerReplyApi";

const AnswerListBox = styled.div`
    background-color: #fff;
    border-color: #e2e8f0;
    border-style: solid;
    border-width: 1px;
`;

const AnswerMains = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    gap: 2rem;
    flex-direction: column;
    display: flex;
`;

const AnswerWriterInfoBox = styled.div`
    gap: 0.75rem;
    align-items: center;
    display: flex;
    position: relative;
`;

const ProfileLink = styled(Link)`
    flex-shrink: 0;
`;

const AnswerWriterImage = styled.img`
    object-fit: cover;
    border-radius: 9999px;
    width: 2.5rem;
    height: 2.5rem;
    aspect-ratio: 1 / 1;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(226 232 240 /1);
    background-color: rgb(255 255 255 / 1);
    overflow: hidden;
`;

const ProfileBtn = styled.button`
    text-align: left;
    padding: 0;
    display: block;
`;

const ProfileBtnTextDefault = styled.p`
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
`;

const AnswerWriterName = styled(ProfileBtnTextDefault)`
    color: #0f172a;
    font-weight: 700;
    font-size: 0.875rem;
`;

const AnswerWriterPosition = styled(ProfileBtnTextDefault)`
    color: #334155;
    font-size: 0.75rem;
`;

const AnswerWriteTime = styled(ProfileBtnTextDefault)`
  color: #64748b;
  font-size: 0.75rem;

`;

const AnswerText = styled.p`
    color: #0f172a;
    font-size: 1rem;
`;

const AnswerContentModifyWrap = styled.div`
  border-color: #e2e8f0;
  border-style: solid;
  border-width: 1px;
  border-radius: 0.25rem;

`;

const AnswerContentModifyContainer = styled.div`
    padding: 0.75rem;
`;

const AnswerContentModifyBox = styled.div`
    background-color: #fff;
    position: relative;
`;

const AnswerContentModifyItem = styled.div`
    overflow-y: auto;
    max-height: 22.5rem;
`;

const AnswerContentModifyTextarea = styled.textarea`
  color: #0f172a;
  padding: 0;
  border-width: 0;
  resize: none;
  width: 100%;
  min-height: 4.5rem;
  &::placeholder {
    color: #94a3b8;
  }
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`;

const AnswerContentModifyBtnBox = styled.div`
  padding: 0.75rem;
  border-color: #e2e8f0;
  border-style: solid;
  border-width: 0;
  border-top-width: 1px;
  justify-content: flex-end;
  align-items: center;
  display: flex;
`;

const AnswerContentModifyBtn = styled.button`
  color: ${({ isWrite }) => (isWrite ? "#fff" : "#94a3b8")};
  font-weight: 700;
  font-size: 0.75rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: ${({ isWrite }) => (isWrite ? "#334155" : "#f1f5f9")};
  border-color: ${({ isWrite }) => (isWrite ? "#334155" : "#f1f5f9")};
  border-style: solid;
  border-width: 1px;
  border-radius: 0.25rem;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  &:hover {
    background-color: ${({ isWrite }) => (isWrite ? "#1e293b" : "")};
    cursor: ${({ isWrite }) => (isWrite ? "pointer" : "default")};
  }
`;

const AnswerContentModifyText = styled.span`
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
`;

const ProfanityWarning = styled.span`
    color: var(--color-coral-800, #be1e08);
    font-size: 0.875rem;
    font-weight: 600;
`;

function AnswerContentBox({ answer, index, setAnswerList }) {
    const type = "답글";
    const [likeModal, setLikeModal] = useState(false);
    const [modifyValue, setModifyValue] = useState(answer.answerContent || "");
    const [reportModal, setReportModal] = useState(false);
    const [isModify, setIsModify] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [profanityState, setProfanityState] = useState(false);

    const handlerChangeValue = (e) => {
        setModifyValue(e.target.value);
    };

    const handlerClickModifyDoneBtn = async () => {
        const data = {
            id: answer.id,
            answerContent: modifyValue,
            questionId: answer.questionId,
        };

        const isProfanity = await checkTheComment(data.answerContent);
        if (isProfanity) {
            await insertProfanityApi(data.answerContent, isProfanity);
            setProfanityState(true);
        } else {
            const response = await updateAnswerApi(data);
            setProfanityState(false);
            setIsModify(false);
            setAnswerList(response);
        }
    };

  return (
    <>
      <AnswerListBox key={index}>
        <AnswerMains>
          <AnswerWriterInfoBox>
            <ProfileLink to={`/pofiles/${answer?.memberId}`}>
              <AnswerWriterImage src={answer?.kakaoProfileUrl} />
            </ProfileLink>
            <ProfileBtn>
              <AnswerWriterName>{answer?.memberName}</AnswerWriterName>
              <AnswerWriterPosition>
                {answer?.memberPosition}
              </AnswerWriterPosition>
              <AnswerWriteTime>
                {timeForToday(answer?.createdDate)}
              </AnswerWriteTime>
            </ProfileBtn>
          </AnswerWriterInfoBox>
          {isModify ? (
            <AnswerContentModifyWrap>
              <AnswerContentModifyContainer>
                <AnswerContentModifyBox>
                  <AnswerContentModifyItem>
                    <AnswerContentModifyTextarea
                      onChange={handlerChangeValue}
                      style={{ height: "72px" }}
                      placeholder="답변으로 나누고 싶은 경험이 있으신가요?"
                    >
                      {modifyValue}
                    </AnswerContentModifyTextarea>
                  </AnswerContentModifyItem>
                </AnswerContentModifyBox>
              </AnswerContentModifyContainer>
              <AnswerContentModifyBtnBox>
                <AnswerContentModifyBtn
                  onClick={handlerClickModifyDoneBtn}
                  isWrite={modifyValue}
                  disabled={!modifyValue}
                >
                  <AnswerContentModifyText>수정</AnswerContentModifyText>
                </AnswerContentModifyBtn>
              </AnswerContentModifyBtnBox>
            </AnswerContentModifyWrap>
          ) : (
            <div>
              <AnswerText
                style={{ overflowWrap: "anywhere", whiteSpace: `pre-wrap` }}
              >
                {answer?.answerContent}
              </AnswerText>
            </div>
          )}
        </AnswerMains>
        {answer?.answerType === "ai" ? (
          <AiAnswer />
        ) : (
          <PeopleAnswer
            setAnswerList={setAnswerList}
            setReportModal={setReportModal}
            setIsModify={setIsModify}
            setDeleteModal={setDeleteModal}
            setLikeModal={setLikeModal}
            answer={answer}
          />
        )}
      </AnswerListBox>
      {likeModal && (
        <LikeUserModal setLikeUsersModal={setLikeModal} data={answer} />
      )}
      {reportModal && (
        <ReportModal
          setModal={setReportModal}
          type={type}
          data={answer}
          setAnswerList={setAnswerList}
        />
      )}
      {deleteModal && (
        <DeleteModal
          setModal={setDeleteModal}
          data={answer}
          setAnswerList={setAnswerList}
        />
      )}
    </>
  );

}
export default AnswerContentBox;
