import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { bestAnswerListApi } from "../../service/qnaApi";

const ContentsListBox = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  position: relative;
`;

const QuestionsViewBox = styled.div`
  touch-action: pan-y;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
`;

const QuestionsListTrailer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition: transform 0.3s ease-in-out;
  box-sizing: content-box;
`;

const QuestionsListSlide = styled.div`
  transform: translateZ(0);
  backface-visibility: hidden;
  flex-shrink: 0;
  height: 100%;
  position: relative;
  transition-property: transform;
`;

const AnswerBox = styled(Link)`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  gap: 0.25rem;
  flex-direction: column;
  display: flex;
  &:hover {
    background-color: #f8fafc;
  }
`;

const AnswerQuestion = styled.span`
  color: #0f172a;
  font-size: 0.875rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
`;

const AnswerContentBox = styled.div`
  gap: 0.25rem;
  align-items: center;
  display: flex;
`;

const QuestionStat = styled.p`
  color: rgb(100 116 139 /1);
  font-size: 0.75rem;
`;

const AnswerListItem = ({ item, num }) => {
  return (
    <AnswerBox to={`/qnas/detail/${item?.id}`}>
      <AnswerQuestion>{item?.questionTitle}</AnswerQuestion>
      <AnswerContentBox>
        <QuestionStat>답변 {item?.answerCnt}</QuestionStat>
        <QuestionStat>•</QuestionStat>
        <QuestionStat>
          답변 좋아요 {item?.maxLikeCnt?.toLocaleString()}
        </QuestionStat>
      </AnswerContentBox>
    </AnswerBox>
  );
};

function BestAnswerSlideBox({ transform }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchBestAnswer = async () => {
      const answers = await bestAnswerListApi();
      setList(answers);
    };

    fetchBestAnswer();
  }, []);
  return (
    <ContentsListBox>
      <QuestionsViewBox>
        <QuestionsListTrailer style={{ transform }}>
          {list && (
            <>
              {[...Array(Math.ceil(list.length / 3))].map((_, index) => (
                <QuestionsListSlide
                  key={index}
                  style={{ width: "348px", marginRight: "24px" }}
                >
                  {list
                    ?.slice(index * 3, index * 3 + 3)
                    .map((item, innerIndex) => (
                      <AnswerListItem key={innerIndex} item={item} />
                    ))}
                </QuestionsListSlide>
              ))}
            </>
          )}
        </QuestionsListTrailer>
      </QuestionsViewBox>
    </ContentsListBox>
  );
}
export default BestAnswerSlideBox;
