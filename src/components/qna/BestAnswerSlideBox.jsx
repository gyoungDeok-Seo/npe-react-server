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

const AnswerBox = styled(Link)`
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    gap: 0.25rem;
    flex-direction: column;
    display: flex;
`;

const AnswerQuestion = styled.span`
    color: var(--color-text-bold, #0f172a);
    font-size: 0.875rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
`;

const AnswerContentBox = styled.div`
    gap: 0.25rem;
    align-items: center;
    display: flex;
`;

const QuestionStat = styled.p`
    --tw-text-opacity: 1;
    color: rgb(100 116 139 / var(--tw-text-opacity));
    font-size: 0.75rem;
`;

function BestAnswerSlideBox() {
    return (
        <ContentsListBox>
            <QuestionsViewBox>
                <QuestionsListTrailer>
                    <QuestionsListSlide style={{ width: "348px", marginRight: "24px" }}>
                        <AnswerBox href="">
                            <AnswerQuestion>백엔드 입문 - spring VS django</AnswerQuestion>
                            <AnswerContentBox>
                                <QuestionStat>답변 7</QuestionStat>
                                <QuestionStat>•</QuestionStat>
                                <QuestionStat>답변 좋아요 56</QuestionStat>
                            </AnswerContentBox>
                        </AnswerBox>
                        <AnswerBox href="">
                            <AnswerQuestion>백엔드 입문 - spring VS django</AnswerQuestion>
                            <AnswerContentBox>
                                <QuestionStat>답변 7</QuestionStat>
                                <QuestionStat>•</QuestionStat>
                                <QuestionStat>답변 좋아요 56</QuestionStat>
                            </AnswerContentBox>
                        </AnswerBox>
                        <AnswerBox href="">
                            <AnswerQuestion>백엔드 입문 - spring VS django</AnswerQuestion>
                            <AnswerContentBox>
                                <QuestionStat>답변 7</QuestionStat>
                                <QuestionStat>•</QuestionStat>
                                <QuestionStat>답변 좋아요 56</QuestionStat>
                            </AnswerContentBox>
                        </AnswerBox>
                    </QuestionsListSlide>
                    <QuestionsListSlide style={{ width: "348px", marginRight: "24px" }}>
                        <AnswerBox href="">
                            <AnswerQuestion>백엔드 입문 - spring VS django</AnswerQuestion>
                            <AnswerContentBox>
                                <QuestionStat>답변 7</QuestionStat>
                                <QuestionStat>•</QuestionStat>
                                <QuestionStat>답변 좋아요 56</QuestionStat>
                            </AnswerContentBox>
                        </AnswerBox>
                        <AnswerBox href="">
                            <AnswerQuestion>백엔드 입문 - spring VS django</AnswerQuestion>
                            <AnswerContentBox>
                                <QuestionStat>답변 7</QuestionStat>
                                <QuestionStat>•</QuestionStat>
                                <QuestionStat>답변 좋아요 56</QuestionStat>
                            </AnswerContentBox>
                        </AnswerBox>
                        <AnswerBox href="">
                            <AnswerQuestion>백엔드 입문 - spring VS django</AnswerQuestion>
                            <AnswerContentBox>
                                <QuestionStat>답변 7</QuestionStat>
                                <QuestionStat>•</QuestionStat>
                                <QuestionStat>답변 좋아요 56</QuestionStat>
                            </AnswerContentBox>
                        </AnswerBox>
                    </QuestionsListSlide>
                    <QuestionsListSlide style={{ width: "348px", marginRight: "24px" }}>
                        <AnswerBox href="">
                            <AnswerQuestion>백엔드 입문 - spring VS django</AnswerQuestion>
                            <AnswerContentBox>
                                <QuestionStat>답변 7</QuestionStat>
                                <QuestionStat>•</QuestionStat>
                                <QuestionStat>답변 좋아요 56</QuestionStat>
                            </AnswerContentBox>
                        </AnswerBox>
                        <AnswerBox href="">
                            <AnswerQuestion>백엔드 입문 - spring VS django</AnswerQuestion>
                            <AnswerContentBox>
                                <QuestionStat>답변 7</QuestionStat>
                                <QuestionStat>•</QuestionStat>
                                <QuestionStat>답변 좋아요 56</QuestionStat>
                            </AnswerContentBox>
                        </AnswerBox>
                        <AnswerBox href="">
                            <AnswerQuestion>백엔드 입문 - spring VS django</AnswerQuestion>
                            <AnswerContentBox>
                                <QuestionStat>답변 7</QuestionStat>
                                <QuestionStat>•</QuestionStat>
                                <QuestionStat>답변 좋아요 56</QuestionStat>
                            </AnswerContentBox>
                        </AnswerBox>
                    </QuestionsListSlide>
                    <QuestionsListSlide style={{ width: "348px", marginRight: "24px" }}>
                        <AnswerBox href="">
                            <AnswerQuestion>백엔드 입문 - spring VS django</AnswerQuestion>
                            <AnswerContentBox>
                                <QuestionStat>답변 7</QuestionStat>
                                <QuestionStat>•</QuestionStat>
                                <QuestionStat>답변 좋아요 56</QuestionStat>
                            </AnswerContentBox>
                        </AnswerBox>
                        <AnswerBox href="">
                            <AnswerQuestion>백엔드 입문 - spring VS django</AnswerQuestion>
                            <AnswerContentBox>
                                <QuestionStat>답변 7</QuestionStat>
                                <QuestionStat>•</QuestionStat>
                                <QuestionStat>답변 좋아요 56</QuestionStat>
                            </AnswerContentBox>
                        </AnswerBox>
                        <AnswerBox href="">
                            <AnswerQuestion>백엔드 입문 - spring VS django</AnswerQuestion>
                            <AnswerContentBox>
                                <QuestionStat>답변 7</QuestionStat>
                                <QuestionStat>•</QuestionStat>
                                <QuestionStat>답변 좋아요 56</QuestionStat>
                            </AnswerContentBox>
                        </AnswerBox>
                    </QuestionsListSlide>
                </QuestionsListTrailer>
            </QuestionsViewBox>
        </ContentsListBox>
    );
}
export default BestAnswerSlideBox;
