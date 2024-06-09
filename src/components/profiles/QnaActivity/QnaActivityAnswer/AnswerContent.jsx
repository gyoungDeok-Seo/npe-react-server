import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const QuestionPrevBox = styled(Link)`
  padding: 0.75rem;
  border-color: #e2e8f0;
  border-style: solid;
  border-width: 1px;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

const QuestionMarkBox = styled.div`
  background-color: #f1f5f9;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.75rem;
  height: 1.75rem;
`;

const QuestionMark = styled.span`
  color: #475569;
  line-height: 1;
  font-weight: 700;
  font-size: 0.875rem;
`;
const QuestionPrevContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
const QuestionPrevContentTitle = styled.span`
  display: -webkit-box;
  color: #0f172a;
  font-weight: 700;
  font-size: 0.875rem;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -webkit-box-orient: vertical;
`;
const QuestionPrevContent = styled.span`
  color: #0f172a;
  font-size: 0.875rem;
  word-break: break-all;
  overflow: hidden;
  display: -webkit-box;
  cursor: default;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;
const AnswerPrevBox = styled.button``;

const AnswerPrevContent = styled.p`
  color: rgb(15 23 42 / 1);
  white-space: pre-line;
  word-break: keep-all;
  text-align: start;
`;

const AnswerPrevContentMore = styled.span`
  color: rgb(100 116 139 / 1);
  cursor: pointer;
`;

function AnswerContent() {
  const [viewAll, setViewAll] = useState(false);

  const handelViewAll = () => {
    setViewAll(true);
  };

  return (
    <>
      <div>
        <QuestionPrevBox to="#">
          <QuestionMarkBox>
            <QuestionMark>Q.</QuestionMark>
          </QuestionMarkBox>
          <QuestionPrevContentBox>
            <QuestionPrevContentTitle>
              국비지원교육 커리큘럼 추천
            </QuestionPrevContentTitle>
            <QuestionPrevContent>
              안녕하세요 제 소개를 먼저 하자면 지방대 IT융합학부 2학년 중퇴
              고졸입니다. 개인적인 사정으로 대학교를 다닐수 없게 되었고
              국비지원교육에 관심이 생겨서 발품 팔아 면접보고 알아보던 와중
              두군데에 합격하게 되었습니다. 한 곳은 자바 기반 풀스택, 한 곳은
              빅데이터/AI 커리큘럼인데 현실적으로 제 상황에서 어떤 커리큘럼을
              선택하는것이 좋을까요? 대학교에서는 C언어, 웹프로그래밍(HTML, CSS,
              JavaScript) 배웠었는데 비록 지방대지만 성적은 전공 과목 모두 A
              이상이었고 교육도 성실하게 받을 자신은 있지만 워낙 빅데이터,AI
              쪽이 어렵다는 소리를 듣기도 했고, 고졸이 취업이 잘 될까 하는
              걱정도 있어서 그냥 풀스택을 배워서 빠르게 취직을 할까 생각중이기도
              합니다. 물론 취직 후에 학위는 학점은행제나 야간학교를 통해서
              나중에라도 취득할 생각입니다. 제 상황에서 어떤 결정을 해야하는지
              선배님들의 의견이 필요합니다.
            </QuestionPrevContent>
          </QuestionPrevContentBox>
        </QuestionPrevBox>
      </div>
      {viewAll ? (
        <AnswerPrevBox>
          <AnswerPrevContent style={{ overflowWrap: "break-word" }}>
            <p>
              저가 작년 인공지능 국비교육과정을 들었는데요, 총 6개월 강의중에서
              웹개발 5개월배우고 인공지능 1개월 배우더라구요. 학원마다
              교육과정은 다를수 있지만 교육과정을 관리,감독하는것은 정부이기에
              크게 다르지는 않을거 같네요. 진도 나가기 급하다는 느낌을 많이
              받았습니다. 웹개발 수업이었다면 좋은 수업이었겠지만 정해진
              기간안에 기본지식+인공지능 다 가르치려고 하다보니 그런거같은데요,
              윗분 말씀대로 겉핥기 라는 말이 딱 맞는거 같네요. 배우는건 많은데
              깊이있게 배우는게 없습니다. 그리고 수강생이 20명 초반이었던거
              같은데 인공지능 빅데이터 쪽으로 취직하시는분 없었고 거의 웹개발로
              취직하셧습니다.
            </p>
          </AnswerPrevContent>
        </AnswerPrevBox>
      ) : (
        <AnswerPrevBox role="button" tabIndex="-1" onClick={handelViewAll}>
          <AnswerPrevContent
            style={{ overflowWrap: "break-word", display: "block" }}
          >
            저가 작년 인공지능 국비교육과정을 들었는데요, 총 6개월 강의중에서
            웹개발 5개월배우고 인공지능 1개월 배우더라구요. 학원마다 교육과정은
            다를수 있지만 교육과정을 관리,감독하는것은 정부이기에 크게 다르지는
            않을거 같네요. 진도 나가기 급하다는 느낌을 많이 받았습니다. 웹개발
            수업이었다면 좋은 수업이었겠지만 정해진 기간안에 기본지식+인공지능
            다 가르치려고{" "}
            <span>
              ... <AnswerPrevContentMore>더보기</AnswerPrevContentMore>
            </span>
          </AnswerPrevContent>
        </AnswerPrevBox>
      )}
    </>
  );
}
export default AnswerContent;
