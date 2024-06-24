import { async } from "q";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { setAnswers } from "../../../../redux/memberAnswers";

const QnaActivitySubContentBox = styled.div`
    padding-top: 0;
    padding: 0.25rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const QnaActivityLikeBtnBox = styled.div`
    padding: 0.75rem;
`;

const QnaActivityLikeBtn = styled.button`
    text-underline-offset: 2px;
    padding: 0;
    display: flex;
    align-items: center;
`;

const QnaActivityLikeText = styled.span`
    color: #64748b;
    font-size: 0.75rem;
`;

const QnaActivityToolBox = styled.div`
    display: flex;
    align-items: center;
`;
const QnaActivityToolLikeBtn = styled.button`
    padding: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
`;

const QnaActivityToolLikeSvg = styled.svg`
    fill: ${(props) => (props.isOn ? "#0d9488" : "#64748b")};
`;

const QnaActivityToolLikeText = styled.span`
    color: ${(props) => (props.isOn ? "#0d9488" : "#64748b")};
    font-weight: 700;
    font-size: 0.75rem;
`;

const QnaActivityToolComment = styled(Link)`
    padding: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
`;

const QnaActivityToolCommentSvg = styled.svg`
    fill: #64748b;
`;

const QnaActivityToolCommentText = styled.span`
    color: #64748b;
    font-weight: 700;
    font-size: 0.75rem;
`;
function ToolBox({ answer }) {
    const dispatch = useDispatch();
    const [isLike, setIsLike] = useState(false);
    const [likeCount, setLikeCount] = useState(answer?.answerLikeCount);

    const modifyAnswerLikeFetch = async () => {
        const response = await fetch(`http://localhost:10000/members/api/answer-like-modify?answerId=${answer?.id}`, {
            method: "PATCH",
            credentials: "include",
        });
        const data = await response.json();
        setIsLike(data.answerLikeVO.status);
        setLikeCount(data.answerLikeCount);
    };

    const checkAnswerLike = async () => {
        const response = await fetch(`http://localhost:10000/members/api/answer-like?answerId=${answer?.id}`, {
            method: "GET",
            credentials: "include",
        });
        const data = await response.json();
        setIsLike(data);
    };

    useEffect(() => {
        checkAnswerLike();
    }, []);

    const handleLike = () => {
        modifyAnswerLikeFetch();
    };

    return (
        <QnaActivitySubContentBox>
            <QnaActivityLikeBtnBox>
                <QnaActivityLikeBtn style={{ cursor: "default" }}>
                    {likeCount != 0 && (
                        <QnaActivityLikeText>
                            좋아요 <b>{likeCount}</b>
                        </QnaActivityLikeText>
                    )}
                </QnaActivityLikeBtn>
            </QnaActivityLikeBtnBox>
            <QnaActivityToolBox>
                <QnaActivityToolLikeBtn type="button" onClick={handleLike}>
                    <QnaActivityToolLikeSvg width={20} height={20} strokeWidth={0} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" isOn={isLike}>
                        <g>
                            <g id="style=outline">
                                {isLike ? (
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
                    </QnaActivityToolLikeSvg>
                    <QnaActivityToolLikeText isOn={isLike}>좋아요</QnaActivityToolLikeText>
                </QnaActivityToolLikeBtn>
                <QnaActivityToolComment to={`/qnas/detail/${answer?.questionId}`}>
                    <QnaActivityToolCommentSvg width={20} height={20} strokeWidth={0} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <g id="style=outline">
                                <path
                                    id="Vector (Stroke)"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5 5C4.73478 5 4.48043 5.10536 4.29289 5.29289C4.10536 5.48043 4 5.73478 4 6V14C4 14.2652 4.10536 14.5196 4.29289 14.7071C4.48043 14.8946 4.73478 15 5 15H9C9.55228 15 10 15.4477 10 16V18.5858L13.2929 15.2929C13.4804 15.1054 13.7348 15 14 15H19C19.2652 15 19.5196 14.8946 19.7071 14.7071C19.8946 14.5196 20 14.2652 20 14V6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5H5ZM2.87868 3.87868C3.44129 3.31607 4.20435 3 5 3H19C19.7957 3 20.5587 3.31607 21.1213 3.87868C21.6839 4.44129 22 5.20435 22 6V14C22 14.7957 21.6839 15.5587 21.1213 16.1213C20.5587 16.6839 19.7957 17 19 17H14.4142L9.70711 21.7071C9.42111 21.9931 8.99099 22.0787 8.61732 21.9239C8.24364 21.7691 8 21.4045 8 21V17H5C4.20435 17 3.44129 16.6839 2.87868 16.1213C2.31607 15.5587 2 14.7956 2 14V6C2 5.20435 2.31607 4.44129 2.87868 3.87868ZM7 10C7 9.44772 7.44772 9 8 9H8.01C8.56228 9 9.01 9.44772 9.01 10C9.01 10.5523 8.56228 11 8.01 11H8C7.44772 11 7 10.5523 7 10ZM11 10C11 9.44772 11.4477 9 12 9H12.01C12.5623 9 13.01 9.44772 13.01 10C13.01 10.5523 12.5623 11 12.01 11H12C11.4477 11 11 10.5523 11 10ZM15 10C15 9.44772 15.4477 9 16 9H16.01C16.5623 9 17.01 9.44772 17.01 10C17.01 10.5523 16.5623 11 16.01 11H16C15.4477 11 15 10.5523 15 10Z"
                                />
                            </g>
                        </g>
                    </QnaActivityToolCommentSvg>
                    <QnaActivityToolCommentText>댓글 {answer?.answerReplyCount}</QnaActivityToolCommentText>
                </QnaActivityToolComment>
            </QnaActivityToolBox>
        </QnaActivitySubContentBox>
    );
}
export default ToolBox;
