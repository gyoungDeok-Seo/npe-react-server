import { useEffect, useState } from "react";
import styled from "styled-components";
import AnswerReplyComponent from "./AnswerReplyComponent";
import { useQuery } from "@tanstack/react-query";
import { sendAnswerLikePeople, answerLikeApi, updateAnswer } from "../../../service/answerApi";
import { useDispatch, useSelector } from "react-redux";
import { checkTheComment, createReplyApi, insertProfanityApi } from "../../../service/answerReplyApi";

const PeopleAnswerRecommendedSector = styled.div`
    padding: 0.25rem;
    padding-top: 0;
    flex-direction: column;
    display: flex;
`;

const AnswerLikePeopleViewBox = styled.div`
    padding: 0.75rem;
`;

const AnswerLikePeopleViewBtn = styled.button`
    text-underline-offset: 2px;
    padding: 0;
    gap: 0.125rem;
    align-items: center;
    display: flex;
    &:hover {
        text-decoration-line: underline;
    }
`;

const AnswerLikeCount = styled.span`
    color: #64748b;
    font-size: 0.75rem;
`;

const AnswerActionBtnBox = styled.div`
    justify-content: space-between;
    align-items: center;
    display: flex;
`;

const LikeReplyBox = styled.div`
    align-items: center;
    display: flex;
`;

const LikeBtn = styled.button`
    padding: 0.75rem;
    gap: 0.25rem;
    align-items: center;
    display: flex;
`;

const LikeSvg = styled.svg`
    fill: ${({ isLike }) => (isLike ? "#0d9488" : "#64748b")};
`;

const LikeText = styled.span`
    color: ${({ isLike }) => (isLike ? "#0d9488" : "#64748b")};
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
    font-weight: 700;
    font-size: 0.75rem;
`;

const ReplyBtn = styled(LikeBtn)``;

const ReplySvg = styled.svg`
    fill: #64748b;
`;

const ReplyText = styled.span`
    color: #64748b;
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
    font-weight: 700;
    font-size: 0.75rem;
`;

const MoreBox = styled.div`
    position: relative;
`;

const MoreBtn = styled.button`
    padding: 0.75rem;
`;

const MoreSvg = styled.svg`
    fill: #94a3b8;
    display: block;
`;

const MoreActionBox = styled.div`
    --tw-shadow-color: hsla(0, 0%, 52%, 0.1);
    --tw-shadow: var(--tw-shadow-colored);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    font-size: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: #fff;
    border-color: #e2e8f0;
    border-style: solid;
    border-width: 1px;
    border-radius: 0.25rem;
    overflow: hidden;
    flex-direction: column;
    display: flex;
    z-index: 2;
    right: 0.75rem;
    top: -8.1rem;
    position: absolute;
`;

const AnswerReportBtn = styled.button`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    background-color: #fff;
    gap: 0.5rem;
    align-items: center;
    width: 100%;
    display: flex;
    &:hover {
        background-color: #f8fafc;
    }
`;

const AnswerReportSvg = styled.svg`
    fill: #ef4444;
`;

const AnswerReportText = styled.p`
    color: #ef4444;
    font-size: 0.875rem;
    white-space: nowrap;
`;

const AnswerModifyBtn = styled(AnswerReportBtn)``;

const AnswerModifySvg = styled.svg`
    fill: #94a3b8;
`;

const AnswerModifyText = styled(AnswerReportText)`
    color: #0f172a;
`;

const AnswerDeleteBtn = styled(AnswerReportBtn)``;

const AnswerDeleteSvg = styled(AnswerReportSvg)``;

const AnswerDeleteText = styled(AnswerReportText)``;

const AnswerReplyWriteSector = styled.div`
    padding: 1rem;
    border-color: #e2e8f0;
    border-style: solid;
    border-bottom-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-width: 1px;
    gap: 0.75rem;
    display: flex;
`;

const MemberProfileImg = styled.img`
    object-fit: cover;
    background-color: rgb(255 255 255 / 1);
    border-color: #e2e8f0;
    border-style: solid;
    border-width: 1px;
    border-radius: 9999px;
    flex: none;
    width: 2rem;
    height: 2rem;
`;

const AnswerReplyRegistrationBox = styled.div`
    border-radius: 0.25rem;
    gap: 0.75rem;
    align-items: flex-end;
    flex-direction: column;
    flex: 1 1 0%;
    display: flex;
`;

const AnswerReplyTextarea = styled.textarea`
    height: 24px !important;
    color: #0f172a;
    font-size: 1rem;
    padding: 0;
    border-width: 0;
    resize: none;
    width: 100%;
    &::placeholder {
        color: #94a3b8;
    }
    &:focus-visible {
        outline: none;
        box-shadow: none;
    }
`;

const AnswerReplyRegistrationBtn = styled.button`
    color: ${({ isWrite }) => (isWrite ? "#fff" : " #94a3b8")};
    font-weight: 700;
    font-size: 0.75rem;
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    background-color: ${({ isWrite }) => (isWrite ? "#334155" : "#f1f5f9")};
    border-color: ${({ isWrite }) => (isWrite ? "#334155" : "#f1f5f9")};
    border-style: solid;
    border-width: 1px;
    border-radius: 0.25rem;
    justify-content: center;
    align-items: center;
    display: inline-flex;
    &:hover {
        background-color: ${({ isWrite }) => (isWrite ? "#1e293b" : "")};
        cursor: ${({ isWrite }) => (isWrite ? "pointer" : "default")};
    }
`;

const AnswerReplyRegistrationText = styled.span`
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
`;

const AnswerReplyList = styled.div`
    border-color: var(--color-slate-200, #e2e8f0);
    border-style: solid;
    border-width: 0;
    border-top-width: 1px;
`;

const ProfanityWarning = styled.span`
    color: var(--color-coral-800, #be1e08);
    font-size: 0.875rem;
    font-weight: 600;
`;

function PeopleAnswer({ answer, setReportModal, setIsModify, setDeleteModal, setLikeModal, setAnswerList }) {
    const [isAnswerMenuShow, setIsAnswerMenuShow] = useState(false);
    const [isReplyShow, setIsReplyShow] = useState(true);
    const [replyTextareaValue, setReplyTextTextareaValue] = useState("");
    const { qnaDetailData } = useSelector((state) => state.qnaDetail);
    const [profanityState, setProfanityState] = useState(false);

    const handlerClickLikeBtn = async () => {
        const request = {
            id: answer?.id,
            questionId: answer?.questionId,
        };
        const response = await answerLikeApi(request);
        setAnswerList(response);
    };
    const handlerMoreBtnClick = (e) => {
        e.stopPropagation();
        setIsAnswerMenuShow((isAnswerMenuShow) => !isAnswerMenuShow);
    };

    const handleReplyBtnClick = () => {
        setIsReplyShow((isReplyShow) => !isReplyShow);
    };

    const handleReplyTextareaChange = (e) => {
        setReplyTextTextareaValue(e.target.value);
    };
    const handlerClickPeopleView = () => {
        setLikeModal(true);
    };

    const handlerClickReportBtn = () => {
        setReportModal(true);
    };

    const handlerClickModifyBtn = () => {
        setIsModify(true);
    };

    const handlerClickDeleteBtn = () => {
        setDeleteModal(true);
    };
    const handleClickOutside = (e) => {
        setIsAnswerMenuShow(false);
    };

    const handleSendReply = async () => {
        let request = {
            replayContent: replyTextareaValue,
            answerId: answer?.id,
            questionId: answer?.questionId,
        };

        const isProfanity = await checkTheComment(request.replayContent);
        if (isProfanity) {
            await insertProfanityApi(request.replayContent, isProfanity);
            setProfanityState(true);
        } else {
            const response = await createReplyApi(request);
            setProfanityState(false);
            setAnswerList(response);
            setReplyTextTextareaValue("");
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <>
            <PeopleAnswerRecommendedSector>
                <AnswerLikePeopleViewBox>
                    <AnswerLikePeopleViewBtn type="button" onClick={handlerClickPeopleView}>
                        {answer?.likeCnt !== 0 && (
                            <AnswerLikeCount>
                                좋아요 <b>{answer?.likeCnt}</b>
                            </AnswerLikeCount>
                        )}
                    </AnswerLikePeopleViewBtn>
                </AnswerLikePeopleViewBox>
                <AnswerActionBtnBox>
                    <LikeReplyBox>
                        <LikeBtn onClick={handlerClickLikeBtn}>
                            <LikeSvg isLike={answer?.memberLiked} width="20" height="20" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <g id="style=outline">
                                        {answer?.memberLiked ? (
                                            <path
                                                id="Vector"
                                                d="M2.40002 12.5999C2.40002 12.3635 2.44658 12.1295 2.53704 11.9111C2.6275 11.6927 2.76009 11.4943 2.92723 11.3271C3.09438 11.16 3.29281 11.0274 3.51119 10.9369C3.72958 10.8465 3.96365 10.7999 4.20002 10.7999C4.4364 10.7999 4.67047 10.8465 4.88885 10.9369C5.10724 11.0274 5.30567 11.16 5.47282 11.3271C5.63996 11.4943 5.77255 11.6927 5.86301 11.9111C5.95347 12.1295 6.00002 12.3635 6.00002 12.5999V19.7999C6.00002 20.2773 5.81038 20.7351 5.47282 21.0727C5.13525 21.4103 4.67741 21.5999 4.20002 21.5999C3.72263 21.5999 3.2648 21.4103 2.92723 21.0727C2.58967 20.7351 2.40002 20.2773 2.40002 19.7999V12.5999ZM7.20002 12.3995V18.9155C7.19982 19.3615 7.32389 19.7987 7.55832 20.1781C7.79275 20.5576 8.12827 20.8641 8.52722 21.0635L8.58722 21.0935C9.25309 21.4263 9.98723 21.5997 10.7316 21.5999H17.2308C17.7859 21.6001 18.3238 21.408 18.7531 21.0561C19.1824 20.7043 19.4764 20.2146 19.5852 19.6703L21.0252 12.4703C21.0948 12.1221 21.0863 11.7629 21.0003 11.4184C20.9143 11.074 20.7529 10.7529 20.5278 10.4783C20.3027 10.2037 20.0195 9.98254 19.6986 9.83065C19.3777 9.67875 19.0271 9.59994 18.672 9.5999H14.4V4.7999C14.4 4.16338 14.1472 3.55293 13.6971 3.10285C13.247 2.65276 12.6365 2.3999 12 2.3999C11.6818 2.3999 11.3765 2.52633 11.1515 2.75137C10.9265 2.97642 10.8 3.28164 10.8 3.5999V4.4003C10.8 5.43888 10.4632 6.44944 9.84002 7.2803L8.16002 9.5195C7.53688 10.3504 7.20002 11.3609 7.20002 12.3995Z"
                                            ></path>
                                        ) : (
                                            <path
                                                id="Union"
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M11.7105 2C11.1269 2 10.5626 2.22616 10.1429 2.63603C9.72241 3.04668 9.48168 3.60876 9.48168 4.2V5.081C9.48168 5.8511 9.24202 6.45313 8.70554 7.1517L6.98522 9.3909C6.95407 9.43146 6.92261 9.47208 6.89106 9.51283C6.79113 9.64188 6.69013 9.7723 6.59499 9.90573C6.43439 9.81652 6.2657 9.74167 6.09165 9.6816C5.74159 9.56076 5.37108 9.5 5 9.5C4.62892 9.5 4.25841 9.56076 3.90835 9.6816C3.55835 9.80241 3.23 9.98293 2.9456 10.2199C2.66093 10.4572 2.42331 10.7487 2.25676 11.0838C2.08976 11.4197 2 11.7884 2 12.1667V19.3333C2 20.1055 2.3695 20.7999 2.9456 21.28C3.51639 21.7556 4.25733 21.9999 5 21.9999C5.74267 21.9999 6.48361 21.7556 7.0544 21.28C7.15661 21.1948 7.25231 21.1029 7.3406 21.005C7.52088 21.1423 7.71506 21.2621 7.9205 21.3624L7.98188 21.3923C8.84377 21.813 10.0667 21.9997 10.9236 22H17.24C18.0332 22.0002 18.805 21.7322 19.4237 21.237C20.0423 20.7419 20.4707 20.0491 20.6301 19.2737L20.6306 19.2709L21.931 13.0756L21.932 13.0707C22.0337 12.5742 22.0212 12.0616 21.8956 11.5706C21.7701 11.0796 21.5349 10.6237 21.2088 10.2353C20.8828 9.8469 20.4742 9.53581 20.0134 9.32283C19.5527 9.10988 19.0504 8.99986 18.5426 8.9998H15V5.1998C15 4.19458 14.5473 3.54265 13.9789 2.9875C13.3903 2.41277 12.6958 2 11.7105 2ZM6 18.3179C6 18.3171 6 18.3164 6 18.3156V12.1667C6 12.1072 5.9863 12.0424 5.95228 11.974C5.91781 11.9046 5.86079 11.8287 5.77403 11.7564C5.687 11.6838 5.57439 11.6188 5.43908 11.5721C5.30384 11.5255 5.15421 11.5 5 11.5C4.84579 11.5 4.69616 11.5255 4.56092 11.5721C4.42561 11.6188 4.31301 11.6838 4.22597 11.7564C4.13921 11.8287 4.08219 11.9046 4.04772 11.974C4.0137 12.0424 4 12.1072 4 12.1667V19.3333C4 19.4451 4.05193 19.5985 4.22597 19.7435C4.40533 19.893 4.6818 19.9999 5 19.9999C5.3182 19.9999 5.59467 19.893 5.77403 19.7435C5.94807 19.5985 6 19.4451 6 19.3333V18.3179ZM8 18.3169C8.00012 18.5717 8.07271 18.8235 8.21195 19.0436C8.35158 19.2643 8.55351 19.4458 8.79762 19.5649L8.85912 19.595C9.36087 19.8398 10.256 19.9997 10.9236 20H17.24C17.5835 20.0001 17.9137 19.8839 18.174 19.6755C18.4338 19.4675 18.6074 19.1819 18.6713 18.8699L18.6723 18.865L19.9726 12.6697L19.9731 12.6675C20.0135 12.4684 20.0084 12.2632 19.958 12.0661C19.9073 11.8681 19.812 11.6819 19.6771 11.5212C19.5421 11.3604 19.3707 11.2291 19.1743 11.1383C18.9777 11.0474 18.762 10.9998 18.5426 10.9998H13V5.1998C13 4.93199 12.9348 4.76342 12.5815 4.41839C12.2483 4.09295 12.0287 4 11.7105 4C11.6423 4 11.5814 4.02669 11.5403 4.06691C11.4999 4.10635 11.4817 4.15472 11.4817 4.2V5.081C11.4817 6.38799 11.0314 7.4068 10.2917 8.3699L8.57141 10.6091C8.20951 11.0803 8.12046 11.1967 8.06816 11.318C8.03833 11.3872 8 11.5066 8 12L8 18.3156C8 18.3161 8 18.3165 8 18.3169Z"
                                            ></path>
                                        )}
                                    </g>
                                </g>
                            </LikeSvg>
                            <LikeText isLike={answer?.memberLiked}>좋아요</LikeText>
                        </LikeBtn>
                        <ReplyBtn onClick={handleReplyBtnClick}>
                            <ReplySvg width="20" height="20" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <g id="style=outline">
                                        <path
                                            id="Vector (Stroke)"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M5 5C4.73478 5 4.48043 5.10536 4.29289 5.29289C4.10536 5.48043 4 5.73478 4 6V14C4 14.2652 4.10536 14.5196 4.29289 14.7071C4.48043 14.8946 4.73478 15 5 15H9C9.55228 15 10 15.4477 10 16V18.5858L13.2929 15.2929C13.4804 15.1054 13.7348 15 14 15H19C19.2652 15 19.5196 14.8946 19.7071 14.7071C19.8946 14.5196 20 14.2652 20 14V6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5H5ZM2.87868 3.87868C3.44129 3.31607 4.20435 3 5 3H19C19.7957 3 20.5587 3.31607 21.1213 3.87868C21.6839 4.44129 22 5.20435 22 6V14C22 14.7957 21.6839 15.5587 21.1213 16.1213C20.5587 16.6839 19.7957 17 19 17H14.4142L9.70711 21.7071C9.42111 21.9931 8.99099 22.0787 8.61732 21.9239C8.24364 21.7691 8 21.4045 8 21V17H5C4.20435 17 3.44129 16.6839 2.87868 16.1213C2.31607 15.5587 2 14.7956 2 14V6C2 5.20435 2.31607 4.44129 2.87868 3.87868ZM7 10C7 9.44772 7.44772 9 8 9H8.01C8.56228 9 9.01 9.44772 9.01 10C9.01 10.5523 8.56228 11 8.01 11H8C7.44772 11 7 10.5523 7 10ZM11 10C11 9.44772 11.4477 9 12 9H12.01C12.5623 9 13.01 9.44772 13.01 10C13.01 10.5523 12.5623 11 12.01 11H12C11.4477 11 11 10.5523 11 10ZM15 10C15 9.44772 15.4477 9 16 9H16.01C16.5623 9 17.01 9.44772 17.01 10C17.01 10.5523 16.5623 11 16.01 11H16C15.4477 11 15 10.5523 15 10Z"
                                        ></path>
                                    </g>
                                </g>
                            </ReplySvg>
                            <ReplyText>댓글 {answer?.replyCnt}</ReplyText>
                        </ReplyBtn>
                    </LikeReplyBox>
                    <div>
                        <MoreBox>
                            {answer?.master && (
                                <MoreBtn type="button" onClick={handlerMoreBtnClick}>
                                    <MoreSvg width="16" height="16" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <g id="style=outline">
                                                <path
                                                    id="Vector (Stroke)"
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5C14 5.53043 13.7893 6.03914 13.4142 6.41421C13.0391 6.78929 12.5304 7 12 7C11.4696 7 10.9609 6.78929 10.5858 6.41421C10.2107 6.03914 10 5.53043 10 5C10 4.46957 10.2107 3.96086 10.5858 3.58579ZM10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858ZM10.5858 17.5858C10.9609 17.2107 11.4696 17 12 17C12.5304 17 13.0391 17.2107 13.4142 17.5858C13.7893 17.9609 14 18.4696 14 19C14 19.5304 13.7893 20.0391 13.4142 20.4142C13.0391 20.7893 12.5304 21 12 21C11.4696 21 10.9609 20.7893 10.5858 20.4142C10.2107 20.0391 10 19.5304 10 19C10 18.4696 10.2107 17.9609 10.5858 17.5858Z"
                                                ></path>
                                            </g>
                                        </g>
                                    </MoreSvg>
                                </MoreBtn>
                            )}
                            {isAnswerMenuShow && (
                                <MoreActionBox role="menu" tabindex="0">
                                    {/* 다른사람의 답글의 경우 */}
                                    <AnswerReportBtn onClick={handlerClickReportBtn}>
                                        <AnswerReportSvg width="20" height="20" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <g id="style=outline">
                                                    <path
                                                        id="Vector (Stroke)"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M5.5 4C5.23478 4 4.98043 4.10536 4.79289 4.29289C4.60536 4.48043 4.5 4.73478 4.5 5V14.1716C4.8182 14.0591 5.15606 14 5.5 14H12C12.2652 14 12.5196 14.1054 12.7071 14.2929L13.4142 15H19.882L17.6056 10.4472C17.4648 10.1657 17.4648 9.83431 17.6056 9.55279L19.882 5H13.5V9C13.5 9.55228 13.0523 10 12.5 10C11.9477 10 11.5 9.55228 11.5 9V4H5.5ZM13.4142 3H21.5C21.8466 3 22.1684 3.17945 22.3507 3.47427C22.5329 3.76909 22.5494 4.13723 22.3944 4.44721L19.618 10L22.3944 15.5528C22.5494 15.8628 22.5329 16.2309 22.3507 16.5257C22.1684 16.8205 21.8466 17 21.5 17H13C12.7348 17 12.4804 16.8946 12.2929 16.7071L11.5858 16H5.5C5.23478 16 4.98043 16.1054 4.79289 16.2929C4.60536 16.4804 4.5 16.7348 4.5 17V21C4.5 21.5523 4.05228 22 3.5 22C2.94772 22 2.5 21.5523 2.5 21V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H12C12.2652 2 12.5196 2.10536 12.7071 2.29289L13.4142 3Z"
                                                    ></path>
                                                </g>
                                            </g>
                                        </AnswerReportSvg>
                                        <AnswerReportText>신고</AnswerReportText>
                                    </AnswerReportBtn>
                                    {/* 자신의 답글의 경우 */}
                                    <AnswerModifyBtn onClick={handlerClickModifyBtn}>
                                        <AnswerModifySvg width="20" height="20" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <g id="style=outline">
                                                    <path id="Vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M18.5 3.99976C18.1021 3.99976 17.7205 4.15783 17.4391 4.43919L16.6462 5.23209L18.768 7.35387L19.5609 6.56098C19.8423 6.27961 20.0003 5.898 20.0003 5.50009C20.0003 5.10217 19.8423 4.72056 19.5609 4.43919C19.2795 4.15783 18.8979 3.99976 18.5 3.99976ZM20.9751 7.97519C21.6315 7.31875 22.0003 6.42843 22.0003 5.50009C22.0003 4.57174 21.6315 3.68142 20.9751 3.02498C20.3187 2.36854 19.4283 1.99976 18.5 1.99976C17.5717 1.99976 16.6813 2.36854 16.0249 3.02498L2.29289 16.757C2.10536 16.9445 2 17.1989 2 17.4641V21.0361C2 21.5884 2.44772 22.0361 3 22.0361H6.5C6.76522 22.0361 7.01957 21.9307 7.20711 21.7432L20.9751 7.97519ZM17.3538 8.76808L15.232 6.6463L4 17.8783V20.0361H6.08579L17.3538 8.76808Z"></path>
                                                </g>
                                            </g>
                                        </AnswerModifySvg>
                                        <AnswerModifyText>수정하기</AnswerModifyText>
                                    </AnswerModifyBtn>
                                    <AnswerDeleteBtn onClick={handlerClickDeleteBtn}>
                                        <AnswerDeleteSvg width="20" height="20" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <g id="style=outline">
                                                    <path
                                                        id="Vector (Stroke)"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H19.9311L19.1305 19.213C19.1305 19.2131 19.1305 19.2129 19.1305 19.213C19.0765 19.9698 18.7379 20.6783 18.1826 21.1954C17.6274 21.7125 16.8968 22 16.138 22H7.86202C7.10323 22 6.37262 21.7125 5.81735 21.1954C5.26213 20.6783 4.92347 19.97 4.86954 19.2132C4.86953 19.2132 4.86955 19.2133 4.86954 19.2132L4.06886 8H4C3.44772 8 3 7.55228 3 7C3 6.44772 3.44772 6 4 6H8V4C8 3.46957 8.21071 2.96086 8.58579 2.58579ZM10 6H14V4H10V6ZM6.07395 8L6.86446 19.0708C6.88242 19.3231 6.99533 19.5594 7.18042 19.7318C7.36551 19.9042 7.60905 20 7.862 20H16.138C16.391 20 16.6345 19.9042 16.8196 19.7318C17.0047 19.5594 17.1176 19.3233 17.1355 19.071L17.926 8H6.07395ZM10 10C10.5523 10 11 10.4477 11 11V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V11C9 10.4477 9.44772 10 10 10ZM14 10C14.5523 10 15 10.4477 15 11V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V11C13 10.4477 13.4477 10 14 10Z"
                                                    ></path>
                                                </g>
                                            </g>
                                        </AnswerDeleteSvg>
                                        <AnswerDeleteText>삭제</AnswerDeleteText>
                                    </AnswerDeleteBtn>
                                </MoreActionBox>
                            )}
                        </MoreBox>
                    </div>
                </AnswerActionBtnBox>
            </PeopleAnswerRecommendedSector>
            {isReplyShow && (
                <AnswerReplyWriteSector>
                    <MemberProfileImg alt="프로필 이미지" src="https://publy.imgix.net/static/images/img_profile-dummy.png?w=200&h=200&auto=format&fm=png" />
                    <AnswerReplyRegistrationBox>
                        <AnswerReplyTextarea placeholder="댓글을 남겨주세요" onChange={handleReplyTextareaChange} value={replyTextareaValue}></AnswerReplyTextarea>
                        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <ProfanityWarning>{profanityState && "작성한 댓글이 욕설을 포함하고 있어 등록할 수 없습니다."}</ProfanityWarning>
                            <AnswerReplyRegistrationBtn isWrite={replyTextareaValue} disabled={!replyTextareaValue} onClick={handleSendReply}>
                                <AnswerReplyRegistrationText>등록</AnswerReplyRegistrationText>
                            </AnswerReplyRegistrationBtn>
                        </div>
                    </AnswerReplyRegistrationBox>
                </AnswerReplyWriteSector>
            )}
            {answer.replyList ? (
                <AnswerReplyList>
                    {answer.replyList.map((reply, index) => (
                        <AnswerReplyComponent reply={reply} index={index} setAnswerList={setAnswerList} qnaId={answer.questionId} />
                    ))}
                </AnswerReplyList>
            ) : (
                <></>
            )}
        </>
    );
}
export default PeopleAnswer;
