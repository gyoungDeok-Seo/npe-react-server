import { Link } from "react-router-dom";
import { styled } from "styled-components";

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
        background-color: var(--color-background-hover, #f8fafc);
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
    color: var(--color-slate-900, #0f172a);
`;

const LowRankingNumber = styled(RankingNumber)`
    color: var(--color-slate-400, #94a3b8);
`;

const QuestionContentBox = styled.div`
    gap: 0.25rem;
    flex-direction: column;
    flex: 1 1 0%;
    display: flex;
`;

const QuestionContent = styled.span`
    color: var(--color-text-bold, #0f172a);
    font-size: 0.875rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
`;

const QuestionStatsBox = styled.div`
    gap: 0.25rem;
    align-items: center;
    display: flex;
`;

const QuestionStat = styled.span`
    --tw-text-opacity: 1;
    color: rgb(100 116 139 / var(--tw-text-opacity));
    font-size: 0.75rem;
`;

function TodayTopTenSlideBox({ transform }) {
    return (
        <ContentsListBox>
            <QuestionsViewBox>
                <QuestionsListTrailer style={{ transform }}>
                    <QuestionsListSlide style={{ width: "348px", marginRight: "24px" }}>
                        <QuestionBox to="">
                            <RankingBox>
                                <HighRankingNumber>1</HighRankingNumber>
                            </RankingBox>
                            <QuestionContentBox>
                                <QuestionContent>it 시장 언제까지 안좋을련지…</QuestionContent>
                                <QuestionStatsBox>
                                    <QuestionStat>답변 5</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>추천해요 3</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>보충이 필요해요 3</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>조회 1,573</QuestionStat>
                                </QuestionStatsBox>
                            </QuestionContentBox>
                        </QuestionBox>
                        <QuestionBox to="">
                            <RankingBox>
                                <HighRankingNumber>2</HighRankingNumber>
                            </RankingBox>
                            <QuestionContentBox>
                                <QuestionContent>it 시장 언제까지 안좋을련지…</QuestionContent>
                                <QuestionStatsBox>
                                    <QuestionStat>답변 5</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>추천해요 3</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>보충이 필요해요 3</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>조회 1,573</QuestionStat>
                                </QuestionStatsBox>
                            </QuestionContentBox>
                        </QuestionBox>
                        <QuestionBox to="">
                            <RankingBox>
                                <HighRankingNumber>3</HighRankingNumber>
                            </RankingBox>
                            <QuestionContentBox>
                                <QuestionContent>it 시장 언제까지 안좋을련지…</QuestionContent>
                                <QuestionStatsBox>
                                    <QuestionStat>답변 5</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>추천해요 3</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>보충이 필요해요 3</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>조회 1,573</QuestionStat>
                                </QuestionStatsBox>
                            </QuestionContentBox>
                        </QuestionBox>
                    </QuestionsListSlide>
                    <QuestionsListSlide style={{ width: "348px", marginRight: "24px" }}>
                        <QuestionBox to="">
                            <RankingBox>
                                <LowRankingNumber>4</LowRankingNumber>
                            </RankingBox>
                            <QuestionContentBox>
                                <QuestionContent>it 시장 언제까지 안좋을련지…</QuestionContent>
                                <QuestionStatsBox>
                                    <QuestionStat>답변 5</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>추천해요 3</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>보충이 필요해요 3</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>조회 1,573</QuestionStat>
                                </QuestionStatsBox>
                            </QuestionContentBox>
                        </QuestionBox>
                        <QuestionBox to="">
                            <RankingBox>
                                <LowRankingNumber>5</LowRankingNumber>
                            </RankingBox>
                            <QuestionContentBox>
                                <QuestionContent>it 시장 언제까지 안좋을련지…</QuestionContent>
                                <QuestionStatsBox>
                                    <QuestionStat>답변 5</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>추천해요 3</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>보충이 필요해요 3</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>조회 1,573</QuestionStat>
                                </QuestionStatsBox>
                            </QuestionContentBox>
                        </QuestionBox>
                        <QuestionBox to="">
                            <RankingBox>
                                <LowRankingNumber>6</LowRankingNumber>
                            </RankingBox>
                            <QuestionContentBox>
                                <QuestionContent>it 시장 언제까지 안좋을련지…</QuestionContent>
                                <QuestionStatsBox>
                                    <QuestionStat>답변 5</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>추천해요 3</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>보충이 필요해요 3</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>조회 1,573</QuestionStat>
                                </QuestionStatsBox>
                            </QuestionContentBox>
                        </QuestionBox>
                    </QuestionsListSlide>
                    <QuestionsListSlide style={{ width: "348px", marginRight: "24px" }}>
                        <QuestionBox to="">
                            <RankingBox>
                                <LowRankingNumber>7</LowRankingNumber>
                            </RankingBox>
                            <QuestionContentBox>
                                <QuestionContent>it 시장 언제까지 안좋을련지…</QuestionContent>
                                <QuestionStatsBox>
                                    <QuestionStat>답변 5</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>추천해요 3</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>보충이 필요해요 3</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>조회 1,573</QuestionStat>
                                </QuestionStatsBox>
                            </QuestionContentBox>
                        </QuestionBox>
                        <QuestionBox to="">
                            <RankingBox>
                                <LowRankingNumber>8</LowRankingNumber>
                            </RankingBox>
                            <QuestionContentBox>
                                <QuestionContent>it 시장 언제까지 안좋을련지…</QuestionContent>
                                <QuestionStatsBox>
                                    <QuestionStat>답변 5</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>추천해요 3</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>보충이 필요해요 3</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>조회 1,573</QuestionStat>
                                </QuestionStatsBox>
                            </QuestionContentBox>
                        </QuestionBox>
                        <QuestionBox to="">
                            <RankingBox>
                                <LowRankingNumber>9</LowRankingNumber>
                            </RankingBox>
                            <QuestionContentBox>
                                <QuestionContent>it 시장 언제까지 안좋을련지…</QuestionContent>
                                <QuestionStatsBox>
                                    <QuestionStat>답변 5</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>추천해요 3</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>보충이 필요해요 3</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>조회 1,573</QuestionStat>
                                </QuestionStatsBox>
                            </QuestionContentBox>
                        </QuestionBox>
                    </QuestionsListSlide>
                    <QuestionsListSlide style={{ width: "348px", marginRight: "24px" }}>
                        <QuestionBox to="">
                            <RankingBox>
                                <LowRankingNumber>10</LowRankingNumber>
                            </RankingBox>
                            <QuestionContentBox>
                                <QuestionContent>it 시장 언제까지 안좋을련지…</QuestionContent>
                                <QuestionStatsBox>
                                    <QuestionStat>답변 5</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>추천해요 3</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>보충이 필요해요 3</QuestionStat>
                                    <QuestionStat>•</QuestionStat>
                                    <QuestionStat>조회 1,573</QuestionStat>
                                </QuestionStatsBox>
                            </QuestionContentBox>
                        </QuestionBox>
                    </QuestionsListSlide>
                </QuestionsListTrailer>
            </QuestionsViewBox>
        </ContentsListBox>
    );
}
export default TodayTopTenSlideBox;
