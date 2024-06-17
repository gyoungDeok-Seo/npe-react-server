import styled from "styled-components";
import OptionBar from "../../components/profiles/QnaActivity/OptionBar";
import QnaActivityAnswer from "../../components/profiles/QnaActivity/QnaActivityAnswer";
import QnaActivityQuestion from "../../components/profiles/QnaActivity/QnaActivityQuestion";
import { useState } from "react";
import NoneAnswer from "../../components/profiles/QnaActivity/NoneAnswer";
import NoneQuestion from "../../components/profiles/QnaActivity/NoneQuestion";
import { useSelector } from "react-redux";

const QnaActivityContainer = styled.div`
    border-color: #e2e8f0;
    border-style: solid;
    border-width: 0;
    border-top-width: 1px;
`;

const QnaActivityBox = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    width: 1024px;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    -moz-column-gap: 3rem;
    column-gap: 3rem;
    row-gap: 2rem;
    padding-left: 1.5rem;
    padding-bottom: 5rem;
    padding-right: 1.5rem;
`;
const QnaActivityColSpanBox = styled.div`
    grid-column: span 8 / span 8;
    grid-column-start: 3;
`;
const QnaActivityInner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-top: 1.25rem;
`;

const QnaActivityAnswerList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

function QnaActivity({ member, option, setOption, setPage: { setAnswerPage, setQuestionPage } }) {
    const memberQuestions = useSelector((state) => state.memberQuestions);
    const memberAnswers = useSelector((state) => state.memberAnswers);
    const [likeUsersModal, setLikeUsersModal] = useState(false);

    return (
        <QnaActivityContainer>
            <QnaActivityBox>
                <QnaActivityColSpanBox>
                    <QnaActivityInner>
                        <OptionBar option={option} setOption={setOption} setPage={{ setAnswerPage, setQuestionPage }} />
                        <div>
                            <QnaActivityAnswerList style={{ height: "auto", overflow: "inherit" }}>
                                {option === 1 ? (
                                    <>
                                        {memberAnswers?.answers.length > 0 ? (
                                            <>
                                                {memberAnswers?.answers.map((answer) => (
                                                    <QnaActivityAnswer key={answer.id} answer={answer} member={member} />
                                                ))}
                                            </>
                                        ) : (
                                            <NoneAnswer />
                                        )}
                                    </>
                                ) : (
                                    <>
                                        {memberQuestions?.questions.length > 0 ? (
                                            <>
                                                {memberQuestions?.questions.map((question) => (
                                                    <QnaActivityQuestion key={question.id} question={question} />
                                                ))}
                                            </>
                                        ) : (
                                            <NoneQuestion />
                                        )}
                                    </>
                                )}
                            </QnaActivityAnswerList>
                        </div>
                    </QnaActivityInner>
                </QnaActivityColSpanBox>
            </QnaActivityBox>
        </QnaActivityContainer>
    );
}
export default QnaActivity;
