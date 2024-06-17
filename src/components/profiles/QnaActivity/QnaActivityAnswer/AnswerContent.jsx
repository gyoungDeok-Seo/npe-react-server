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
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
`;
const AnswerPrevBox = styled.button`
    cursor: ${({ viewAll }) => (viewAll ? "default" : "pointer")};
`;

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

function AnswerContent({ answer }) {
    const [viewAll, setViewAll] = useState(answer?.answerContent.length < 200);

    const handelViewAll = () => {
        setViewAll(true);
    };

    return (
        <>
            <div>
                <QuestionPrevBox to={`/qnas/detail/${answer?.questionId}`}>
                    <QuestionMarkBox>
                        <QuestionMark>Q.</QuestionMark>
                    </QuestionMarkBox>
                    <QuestionPrevContentBox>
                        <QuestionPrevContentTitle>{answer?.questionTitle}</QuestionPrevContentTitle>
                        <QuestionPrevContent>{answer?.questionContent}</QuestionPrevContent>
                    </QuestionPrevContentBox>
                </QuestionPrevBox>
            </div>
            {viewAll ? (
                <AnswerPrevBox style={{ cursor: "default" }}>
                    <AnswerPrevContent style={{ overflowWrap: "break-word" }}>
                        <p>{answer?.answerContent}</p>
                    </AnswerPrevContent>
                </AnswerPrevBox>
            ) : (
                <AnswerPrevBox onClick={handelViewAll}>
                    <AnswerPrevContent style={{ overflowWrap: "break-word", display: "block" }}>
                        {answer?.answerContent.substr(0, 200)}{" "}
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
