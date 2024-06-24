import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { qnaListApi } from "../../service/qnaApi";
import { timeForToday } from "../profiles/QnaActivity/QnaActivityAnswer";
import { useEffect, useState } from "react";

const QnaMainItemLink = styled(Link)`
  padding: 1rem;
  border-color: #e2e8f0;
  border-style: solid;
  border-width: 0;
  border-bottom-width: 1px;
  flex-direction: column;
  min-width: 0;
  display: flex;
  &:hover {
    background-color: #f8fafc;
  }
`;

const QnaHeader = styled.div`
  gap: 0.25rem;
  align-items: center;
  display: flex;
  margin-bottom: 0.875rem;
`;

const AnswerSvg = styled.svg`
  fill: #64748b;
  width: 1rem;
  height: 1rem;
`;

const TimeWriterType = styled.p`
  color:#64748b;
  font-weight: 700;
  font-size: 0.75rem;
  word-break: break-all;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const QnaTitle = styled.p`
  font-weight: 600;
  font-size: 1.25rem;
  -webkit-line-clamp: 2;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin-bottom: 0.25rem;
`;

const QnaTitleInside = styled.span`
  color: #0f172a;
`;

const QnaContent = styled.p`
  color: #0f172a;
  font-size: 0.875rem;
  -webkit-line-clamp: 2;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin-bottom: 0.375rem;
`;

const QnaTagBox = styled.div`
  row-gap: 0.25rem;
  column-gap: 0.625rem;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
  margin-bottom: 1rem;
`;

const TagName = styled.p`
  color: #64748b;
  font-size: 0.875rem;
`;

const QnaStatBox = styled.div`
  gap: 0.625rem;
  display: flex;
`;

const AnswerCount = styled.p`
  color:#0f172a;
  font-size: 0.75rem;
`;

const ReplyCount = styled.p`
  color: #64748b;
  font-size: 0.75rem;
`;

const HitsCount = styled(ReplyCount)`
  margin-left: auto;
`;

function QnaMainItem({ qnaList }) {

  return (
    <>
      {qnaList &&
        qnaList?.map((item, index) => (
          <QnaMainItemLink to={`/qnas/detail/${item?.id}`} key={index}>
            <QnaHeader>
              <AnswerSvg
                width="24"
                height="24"
                strokeWidth="0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <g id="style=outline">
                    <path
                      id="Vector (Stroke)"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.5 3.99976C18.1021 3.99976 17.7205 4.15783 17.4391 4.43919L16.6462 5.23209L18.768 7.35387L19.5609 6.56098C19.8423 6.27961 20.0003 5.898 20.0003 5.50009C20.0003 5.10217 19.8423 4.72056 19.5609 4.43919C19.2795 4.15783 18.8979 3.99976 18.5 3.99976ZM20.9751 7.97519C21.6315 7.31875 22.0003 6.42843 22.0003 5.50009C22.0003 4.57174 21.6315 3.68142 20.9751 3.02498C20.3187 2.36854 19.4283 1.99976 18.5 1.99976C17.5717 1.99976 16.6813 2.36854 16.0249 3.02498L2.29289 16.757C2.10536 16.9445 2 17.1989 2 17.4641V21.0361C2 21.5884 2.44772 22.0361 3 22.0361H6.5C6.76522 22.0361 7.01957 21.9307 7.20711 21.7432L20.9751 7.97519ZM17.3538 8.76808L15.232 6.6463L4 17.8783V20.0361H6.08579L17.3538 8.76808Z"
                    ></path>
                  </g>
                </g>
              </AnswerSvg>
              <TimeWriterType>
                <span>{timeForToday(item?.createdDate)}</span>
                <span>&nbsp;·&nbsp;</span>
                <span>{item?.memberName} 님의 새로운 질문</span>
              </TimeWriterType>
            </QnaHeader>
            <QnaTitle>
              <QnaTitleInside>{item?.questionTitle}</QnaTitleInside>
            </QnaTitle>
            <QnaContent>{item?.questionContent}</QnaContent>
            <QnaTagBox>
              {item?.tags.map((tag, index) => (
                <TagName key={index}>#{tag?.tagName}</TagName>
              ))}
            </QnaTagBox>
            <QnaStatBox>
              <AnswerCount>
                답변 <span>{item?.answerCnt}</span>
              </AnswerCount>
              <ReplyCount>
                댓글 <span>{item?.replyCnt}</span>
              </ReplyCount>
              <HitsCount>
                조회 <span>{item?.hits}</span>
              </HitsCount>
            </QnaStatBox>
          </QnaMainItemLink>
        ))}
    </>
  );
}
export default QnaMainItem;
