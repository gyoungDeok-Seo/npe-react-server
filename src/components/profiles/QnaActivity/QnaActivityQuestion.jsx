import { Link } from "react-router-dom";
import styled from "styled-components";

const QnaActivityQuestionItem = styled.div`
  border-bottom: 1px solid #e2e8f0;
  &:last-child {
    border: none;
  }
`;
const QnaActivityQuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const QnaActivityQuestionBox = styled(Link)`
  padding: 1rem;
  background-color: #fff;
  border-color: #e2e8f0;
  border-width: 0;
  border-style: solid;
  border-bottom-width: 1px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  &:hover {
    background-color: #f8fafc;
  }
`;
const QnaActivityQuestionTitle = styled.p`
  color: #0f172a;
  font-weight: 700;
  font-size: 1rem;
  -webkit-line-clamp: 2;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;
const QnaActivityQuestionTitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const QnaActivityQuestionToolBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;
const QnaActivityQuestionSubContentBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;
const QnaActivityQuestionAnswer = styled.div`
  color: #0f172a;
  font-size: 0.75rem;
  font-weight: 600;
`;
const QnaActivityQuestionComment = styled.div`
  color: #64748b;
  font-size: 0.75rem;
  font-weight: 600;
`;
function QnaActivityQuestion() {
  return (
    <QnaActivityQuestionItem>
      <QnaActivityQuestionContainer
        style={{ height: "auto", overflow: "inherit" }}
      >
        <QnaActivityQuestionBox to="#">
          <QnaActivityQuestionTitleBox>
            <QnaActivityQuestionTitle>
              취직이 정말 너무 안되네요.. 앞으로 어떻게 해야할까요?
            </QnaActivityQuestionTitle>
          </QnaActivityQuestionTitleBox>
          <QnaActivityQuestionToolBox>
            <QnaActivityQuestionSubContentBox>
              <QnaActivityQuestionAnswer>답변 3</QnaActivityQuestionAnswer>
              <QnaActivityQuestionComment>댓글 1</QnaActivityQuestionComment>
            </QnaActivityQuestionSubContentBox>
            <QnaActivityQuestionSubContentBox>
              <QnaActivityQuestionComment>조회 623</QnaActivityQuestionComment>
              <QnaActivityQuestionComment>
                2023년 05월 02일
              </QnaActivityQuestionComment>
            </QnaActivityQuestionSubContentBox>
          </QnaActivityQuestionToolBox>
        </QnaActivityQuestionBox>
      </QnaActivityQuestionContainer>
    </QnaActivityQuestionItem>
  );
}

export default QnaActivityQuestion;
