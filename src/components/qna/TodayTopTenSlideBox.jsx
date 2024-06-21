import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { topTenListApi } from "../../service/qnaApi";

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

const QuestionBox = styled(Link)`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  gap: 0.5rem;
  align-items: flex-start;
  display: flex;
  &:hover {
    background-color: #f8fafc;
  }
`;

const RankingBox = styled.div`
  justify-content: center;
  flex: none;
  width: 1.25rem;
  display: flex;
`;

const RankingNumber = styled.span`
  font-weight: 700;
  font-size: 0.875rem;
`;

const HighRankingNumber = styled(RankingNumber)`
  color: #0f172a;
`;

const QuestionContentBox = styled.div`
  gap: 0.25rem;
  flex-direction: column;
  flex: 1 1 0%;
  display: flex;
`;

const QuestionContent = styled.span`
  color: #0f172a;
  font-size: 0.875rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
`;

const QuestionStatsBox = styled.div`
  gap: 0.25rem;
  align-items: center;
  display: flex;
`;

const QuestionStat = styled.span`
  color: rgb(100 116 139 / 1);
  font-size: 0.75rem;
`;

const QuestionsListItem = ({ item, num }) => {
  return (
    <QuestionBox to={`/qnas/detail/${item?.id}`}>
      <RankingBox>
        <HighRankingNumber>{num}</HighRankingNumber>
      </RankingBox>
      <QuestionContentBox>
        <QuestionContent>{item?.questionTitle}</QuestionContent>
        <QuestionStatsBox>
          <QuestionStat>답변 {item?.answerCnt}</QuestionStat>
          <QuestionStat>•</QuestionStat>
          <QuestionStat>조회 {item?.hits?.toLocaleString()}</QuestionStat>
        </QuestionStatsBox>
      </QuestionContentBox>
    </QuestionBox>
  );
};

function TodayTopTenSlideBox({ transform }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchTopTen = async () => {
      const categories = await topTenListApi();
      setList(categories);
    };

    fetchTopTen();
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
                      <QuestionsListItem
                        key={innerIndex}
                        item={item}
                        num={index * 3 + innerIndex + 1}
                      />
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
export default TodayTopTenSlideBox;
