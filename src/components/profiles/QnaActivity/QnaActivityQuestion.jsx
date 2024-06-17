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
function QnaActivityQuestion({ question }) {
    function timeForToday(datetime) {
        const today = new Date();
        const date = new Date(datetime);

        let gap = Math.floor((today.getTime() - date.getTime()) / 1000 / 60);

        if (gap < 1) {
            return "방금 전";
        }

        if (gap < 60) {
            return `${gap}분 전`;
        }

        gap = Math.floor(gap / 60);

        if (gap < 24) {
            return `${gap}시간 전`;
        }

        gap = Math.floor(gap / 24);

        if (gap < 31) {
            return `${gap}일 전`;
        }

        gap = Math.floor(gap / 31);

        if (gap < 12) {
            return `${gap}개월 전`;
        }

        gap = Math.floor(gap / 12);

        return `${gap}년 전`;
    }
    return (
        <QnaActivityQuestionItem>
            <QnaActivityQuestionContainer style={{ height: "auto", overflow: "inherit" }}>
                <QnaActivityQuestionBox to={`/qnas/detail/${question?.id}`}>
                    <QnaActivityQuestionTitleBox>
                        <QnaActivityQuestionTitle>{question?.questionTitle}</QnaActivityQuestionTitle>
                    </QnaActivityQuestionTitleBox>
                    <QnaActivityQuestionToolBox>
                        <QnaActivityQuestionSubContentBox>
                            <QnaActivityQuestionAnswer>답변 {question?.answerCount}</QnaActivityQuestionAnswer>
                            <QnaActivityQuestionComment>댓글 {question?.answerReplyCount}</QnaActivityQuestionComment>
                        </QnaActivityQuestionSubContentBox>
                        <QnaActivityQuestionSubContentBox>
                            <QnaActivityQuestionComment>조회 {question?.hits === null && 0}</QnaActivityQuestionComment>
                            <QnaActivityQuestionComment>{timeForToday(question?.createdDate)}</QnaActivityQuestionComment>
                        </QnaActivityQuestionSubContentBox>
                    </QnaActivityQuestionToolBox>
                </QnaActivityQuestionBox>
            </QnaActivityQuestionContainer>
        </QnaActivityQuestionItem>
    );
}

export default QnaActivityQuestion;
