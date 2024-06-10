import { Link } from "react-router-dom";
import { styled } from "styled-components";

const AnswerListBox = styled.div`
    background-color: var(--color-white, #fff);
    border-color: var(--color-slate-200, #e2e8f0);
    border-style: solid;
    border-width: 1px;
`;

const AnswerMains = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    gap: 2rem;
    flex-direction: column;
    display: flex;
`;

const AnswerWriterInfoBox = styled.div`
    gap: 0.75rem;
    align-items: center;
    display: flex;
    position: relative;
`;

const ProfileLink = styled(Link)`
    flex-shrink: 0;
`;

const AnswerWriterImage = styled.img`
    object-fit: cover;
    border-radius: 9999px;
    width: 2.5rem;
    height: 2.5rem;
    aspect-ratio: 1 / 1;
    border-width: 1px;
    border-style: solid;
    --tw-border-opacity: 1;
    border-color: rgb(226 232 240 / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    overflow: hidden;
`;

const ProfileBtn = styled.button`
    text-align: left;
    padding: 0;
    display: block;
`;

const ProfileBtnTextDefault = styled.p`
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
`;

const AnswerWriterName = styled(ProfileBtnTextDefault)`
    color: var(--color-text-bold, #0f172a);
    font-weight: 700;
    font-size: 0.875rem;
`;

const AnswerWriterPosition = styled(ProfileBtnTextDefault)`
    color: var(--color-text-subtle, #334155);
    font-size: 0.75rem;
`;

const AnswerWriteTime = styled(ProfileBtnTextDefault)`
    color: var(--color-text-subtler, #64748b);
    font-size: 0.75rem;
`;

const AnswerText = styled.p`
    color: var(--color-slate-900, #0f172a);
    font-size: 1rem;
`;

const AiAnswerRecommendedSector = styled.div`
    padding-top: 0.5rem;
    padding-bottom: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    gap: 0.75rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
`;

const AiAnswerRecommendedTitle = styled.p`
    color: var(--color-slate-500, #64748b);
    font-size: 0.875rem;
`;

const AiAnswerRecommendedBox = styled.div`
    border-color: var(--color-slate-200, #e2e8f0);
    border-style: solid;
    border-width: 1px;
    border-radius: 9999px;
    align-items: center;
    display: flex;
`;

const AiAnswerRecommend = styled.div`
    border-width: 0;
    position: relative;
`;

const AiAnswerRecommendBtn = styled.button`
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
    background-color: var(--color-white, #fff);
    border-top-left-radius: 9999px;
    border-bottom-left-radius: 9999px;
    overflow: hidden;
    gap: 0.25rem;
    justify-content: center;
    align-items: center;
    width: 6rem;
    display: flex;
    &:hover {
        background-color: var(--color-slate-50, #f8fafc);
    }
`;

const AiAnswerRecommendSvg = styled.svg`
    fill: var(--color-slate-500, #64748b);
    /* var(--color-teal-600, #0d9488) */
    margin-left: 0.25rem;
`;

const AiAnswerRecommendCount = styled.span`
    color: var(--color-slate-500, #64748b);
    /* var(--color-teal-600, #0d9488) */
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
    font-weight: 700;
    font-size: 1rem;
`;

const AiAnswerRecommendPromoteBox = styled.div`
    opacity: 1;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    --tw-translate-x: -50%;
    left: 50%;
    bottom: 3rem;
    position: absolute;
`;

const AiAnswerRecommendPromoteMain = styled.div`
    color: var(--color-white, #fff);
    font-weight: 700;
    font-size: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    background-color: var(--color-slate-900, #0f172a);
    border-radius: 0.25rem;
    width: 170px;
`;

const AiAnswerRecommendPromoteArrow = styled.div`
    margin-left: auto;
    margin-right: auto;
    border-top: 8px solid rgb(15 23 42 / var(--tw-border-opacity));
    border-bottom: 0 solid transparent;
    height: 0;
    width: 0;
    border-right: 4px solid transparent;
    --tw-border-opacity: 1;
    border-left: 4px solid transparent;
`;

const AiAnswerNotRecommend = styled(AiAnswerRecommend)`
    border-color: var(--color-slate-200, #e2e8f0);
    border-style: solid;
    --tw-divide-x-reverse: 0;
    border-right-width: calc(1px * var(--tw-divide-x-reverse));
    border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
`;

const AiAnswerNotRecommendBtn = styled(AiAnswerRecommendBtn)`
    border-top-right-radius: 9999px;
    border-bottom-right-radius: 9999px;
`;

const AiAnswerNotRecommendSvg = styled(AiAnswerRecommendSvg)`
    margin-left: 0;
`;

const AiAnswerNotRecommendCount = styled(AiAnswerRecommendCount)`
    margin-right: 0.25rem;
`;

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
    color: var(--color-text-subtler, #64748b);
    font-size: 0.75rem;
`;

const answers = [
    {
        answerType: "ai",
        profileLink: ``,
        profileImgUrl: "https://publy.imgix.net/user-uploaded/590678/2023.03/49e51bca73ca3d1876ecb63392a5bd4539c7e3ff1a6207eee9d90eef55d5dd4c.png?w=200&h=200&auto=format&fm=png",
        memberName: "NPE AI 봇",
        memberPosition: "GPT-4가 달아주는 답변입니다.",
        writeTime: "2023년 04월 07일",
        answerText: `
1. 마우스를 올릴 때 메뉴 스타일 변경하기
CSS의 :hover 선택자를 사용하여 메뉴에 마우스를 올렸을 때 스타일을 변경할 수 있습니다.
예를 들어, 다음과 같이 스타일을 지정할 수 있습니다.

.menu-item:hover {
    color: red;
    text-decoration: underline;
}

위 코드는 .menu-item 클래스를 가진 요소에 마우스를 올리면 텍스트 색상이 빨간색으로
변경되고, 밑줄이 생기도록 스타일을 지정한 것입니다.


2. 하위 메뉴 컨트롤하기

하위 메뉴를 컨트롤하기 위해서는 JavaScript를 사용해야 합니다.

예를 들어, 다음과 같은 방법으로 구현할 수 있습니다.

마우스를 올린 메뉴 아이템을 클릭하면 하위 메뉴를 표시합니다.
마우스를 올린 메뉴 아이템에 하위 메뉴가 표시되는 동안은 텍스트 색상과 밑줄을 유지합니다.
하위 메뉴가 닫히면 텍스트 색상과 밑줄을 원래대로 돌려 놓습니다.
예를 들어, 다음과 같은 코드를 사용할 수 있습니다.
        `,
    },
    {
        answerType: "people",
        profileLink: ``,
        profileImgUrl: "https://publy.imgix.net/user-uploaded/484624/2023.06/2469e084238292f177224fc4f1625d262d4bca866f71d1eb1e1d8fda46672d0f.jpeg?w=200&h=200&auto=format&fm=jpeg",
        memberName: "kevin",
        memberPosition: "디지털그지",
        writeTime: "2월 28일",
        answerText: `삐빅 정상입니다.`,
    },
];

function AnswerContentBox() {
    return (
        <>
            {answers.map((answer, index) => (
                <AnswerListBox key={index}>
                    <AnswerMains>
                        <AnswerWriterInfoBox>
                            <ProfileLink to={answer.profileLink}>
                                <AnswerWriterImage src={answer.profileImgUrl} />
                            </ProfileLink>
                            <ProfileBtn>
                                <AnswerWriterName>{answer.memberName}</AnswerWriterName>
                                <AnswerWriterPosition>{answer.memberPosition}</AnswerWriterPosition>
                                <AnswerWriteTime>{answer.writeTime}</AnswerWriteTime>
                            </ProfileBtn>
                        </AnswerWriterInfoBox>
                        <div>
                            <AnswerText style={{ overflowWrap: "anywhere", whiteSpace: `pre-wrap` }}>{answer.answerText}</AnswerText>
                        </div>
                    </AnswerMains>
                    {answer.answerType === "ai" ? (
                        <AiAnswerRecommendedSector>
                            <AiAnswerRecommendedTitle>커리어리 AI 봇의 답변을 평가해 주세요!</AiAnswerRecommendedTitle>
                            <AiAnswerRecommendedBox>
                                <AiAnswerRecommend>
                                    <AiAnswerRecommendBtn type="button">
                                        <AiAnswerRecommendSvg width="20" height="20" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <g id="style=outline">
                                                    <path
                                                        id="Union"
                                                        d="M11.7105 2C11.1269 2 10.5626 2.22616 10.1429 2.63603C9.72241 3.04668 9.48168 3.60876 9.48168 4.2V5.081C9.48168 5.8511 9.24202 6.45313 8.70554 7.1517L6.98522 9.3909C6.95407 9.43146 6.92261 9.47208 6.89106 9.51283C6.79113 9.64188 6.69013 9.7723 6.59499 9.90573C6.43439 9.81652 6.2657 9.74167 6.09165 9.6816C5.74159 9.56076 5.37108 9.5 5 9.5C4.62892 9.5 4.25841 9.56076 3.90835 9.6816C3.55835 9.80241 3.23 9.98293 2.9456 10.2199C2.66093 10.4572 2.42331 10.7487 2.25676 11.0838C2.08976 11.4197 2 11.7884 2 12.1667V19.3333C2 20.1055 2.3695 20.7999 2.9456 21.28C3.51639 21.7556 4.25733 21.9999 5 21.9999C5.74267 21.9999 6.48361 21.7556 7.0544 21.28C7.15661 21.1948 7.25231 21.1029 7.3406 21.005C7.52088 21.1423 7.71506 21.2621 7.9205 21.3624L7.98188 21.3923C8.84377 21.813 10.0667 21.9997 10.9236 22H17.24C18.0332 22.0002 18.805 21.7322 19.4237 21.237C20.0423 20.7419 20.4707 20.0491 20.6301 19.2737L20.6306 19.2709L21.931 13.0756L21.932 13.0707C22.0337 12.5742 22.0212 12.0616 21.8956 11.5706C21.7701 11.0796 21.5349 10.6237 21.2088 10.2353C20.8828 9.8469 20.4742 9.53581 20.0134 9.32283C19.5527 9.10988 19.0504 8.99986 18.5426 8.9998H15V5.1998C15 4.19458 14.5473 3.54265 13.9789 2.9875C13.3903 2.41277 12.6958 2 11.7105 2ZM6 18.3179C6 18.3171 6 18.3164 6 18.3156V12.1667C6 12.1072 5.9863 12.0424 5.95228 11.974C5.91781 11.9046 5.86079 11.8287 5.77403 11.7564C5.687 11.6838 5.57439 11.6188 5.43908 11.5721C5.30384 11.5255 5.15421 11.5 5 11.5C4.84579 11.5 4.69616 11.5255 4.56092 11.5721C4.42561 11.6188 4.31301 11.6838 4.22597 11.7564C4.13921 11.8287 4.08219 11.9046 4.04772 11.974C4.0137 12.0424 4 12.1072 4 12.1667V19.3333C4 19.4451 4.05193 19.5985 4.22597 19.7435C4.40533 19.893 4.6818 19.9999 5 19.9999C5.3182 19.9999 5.59467 19.893 5.77403 19.7435C5.94807 19.5985 6 19.4451 6 19.3333V18.3179ZM8 18.3169C8.00012 18.5717 8.07271 18.8235 8.21195 19.0436C8.35158 19.2643 8.55351 19.4458 8.79762 19.5649L8.85912 19.595C9.36087 19.8398 10.256 19.9997 10.9236 20H17.24C17.5835 20.0001 17.9137 19.8839 18.174 19.6755C18.4338 19.4675 18.6074 19.1819 18.6713 18.8699L18.6723 18.865L19.9726 12.6697L19.9731 12.6675C20.0135 12.4684 20.0084 12.2632 19.958 12.0661C19.9073 11.8681 19.812 11.6819 19.6771 11.5212C19.5421 11.3604 19.3707 11.2291 19.1743 11.1383C18.9777 11.0474 18.762 10.9998 18.5426 10.9998H13V5.1998C13 4.93199 12.9348 4.76342 12.5815 4.41839C12.2483 4.09295 12.0287 4 11.7105 4C11.6423 4 11.5814 4.02669 11.5403 4.06691C11.4999 4.10635 11.4817 4.15472 11.4817 4.2V5.081C11.4817 6.38799 11.0314 7.4068 10.2917 8.3699L8.57141 10.6091C8.20951 11.0803 8.12046 11.1967 8.06816 11.318C8.03833 11.3872 8 11.5066 8 12L8 18.3156C8 18.3161 8 18.3165 8 18.3169Z"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </g>
                                            </g>
                                        </AiAnswerRecommendSvg>
                                        <AiAnswerRecommendCount>0</AiAnswerRecommendCount>
                                    </AiAnswerRecommendBtn>
                                    <AiAnswerRecommendPromoteBox>
                                        <AiAnswerRecommendPromoteMain>
                                            어떤 내용이 도움이 되었는지
                                            <br />
                                            댓글로 알려주세요.
                                        </AiAnswerRecommendPromoteMain>
                                        <AiAnswerRecommendPromoteArrow />
                                    </AiAnswerRecommendPromoteBox>
                                </AiAnswerRecommend>
                                <AiAnswerNotRecommend>
                                    <AiAnswerNotRecommendBtn type="button">
                                        <AiAnswerNotRecommendSvg width="20" height="20" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <g id="style=outline">
                                                    <path
                                                        id="Union"
                                                        d="M12.2895 23C12.8731 23 13.4374 22.7738 13.8571 22.364C14.2776 21.9533 14.5183 21.3912 14.5183 20.8V19.919C14.5183 19.1489 14.758 18.5469 15.2945 17.8483L17.0148 15.6091C17.0459 15.5685 17.0774 15.5279 17.1089 15.4872C17.2089 15.3581 17.3099 15.2277 17.405 15.0943C17.5656 15.1835 17.7343 15.2583 17.9083 15.3184C18.2584 15.4392 18.6289 15.5 19 15.5C19.3711 15.5 19.7416 15.4392 20.0917 15.3184C20.4417 15.1976 20.77 15.0171 21.0544 14.7801C21.3391 14.5428 21.5767 14.2513 21.7432 13.9162C21.9102 13.5803 22 13.2116 22 12.8333L22 5.66675C22 4.89455 21.6305 4.20011 21.0544 3.72002C20.4836 3.24436 19.7427 3.00008 19 3.00008C18.2573 3.00008 17.5164 3.24436 16.9456 3.72002C16.8434 3.80519 16.7477 3.89711 16.6594 3.99502C16.4791 3.85774 16.2849 3.73791 16.0795 3.63765L16.0181 3.60768C15.1562 3.18701 13.9333 3.00027 13.0764 3L6.75996 3C5.96679 2.99978 5.19503 3.26782 4.57628 3.76304C3.9577 4.25812 3.52932 4.95087 3.36993 5.72628L3.36935 5.72908L2.06898 11.9244L2.06798 11.9293C1.96635 12.4258 1.97883 12.9384 2.1044 13.4294C2.22995 13.9204 2.46506 14.3763 2.79115 14.7647C3.11717 15.1531 3.52582 15.4642 3.98657 15.6772C4.44725 15.8901 4.94957 16.0001 5.45735 16.0002H9V19.8002C9 20.8054 9.45268 21.4574 10.0211 22.0125C10.6097 22.5872 11.3042 23 12.2895 23ZM18 12.8333C18 12.8928 18.0137 12.9576 18.0477 13.026C18.0822 13.0954 18.1392 13.1713 18.226 13.2436C18.313 13.3162 18.4256 13.3812 18.5609 13.4279C18.6962 13.4745 18.8458 13.5 19 13.5C19.1542 13.5 19.3038 13.4745 19.4391 13.4279C19.5744 13.3812 19.687 13.3162 19.774 13.2436C19.8608 13.1713 19.9178 13.0954 19.9523 13.026C19.9863 12.9576 20 12.8928 20 12.8333L20 5.66675C20 5.55489 19.9481 5.40149 19.774 5.25646C19.5947 5.10699 19.3182 5.00008 19 5.00008C18.6818 5.00008 18.4053 5.10699 18.226 5.25646C18.0519 5.40149 18 5.55489 18 5.66675L18 12.8333ZM16 6.68307C15.9999 6.42831 15.9273 6.17646 15.788 5.95639C15.6484 5.73571 15.4465 5.55418 15.2024 5.43506L15.1409 5.40502C14.6391 5.16018 13.744 5.00026 13.0764 5L6.75996 5C6.41654 4.99987 6.08634 5.11615 5.82602 5.3245C5.56617 5.53247 5.39259 5.81812 5.32873 6.13012L5.32773 6.13502L4.02736 12.3303L4.02691 12.3325C3.98651 12.5316 3.99163 12.7368 4.04205 12.9339C4.09266 13.1319 4.18804 13.3181 4.32294 13.4788C4.45792 13.6396 4.62928 13.7709 4.82575 13.8617C5.02225 13.9526 5.23805 14.0002 5.45735 14.0002L11 14.0002V19.8002C11 20.068 11.0652 20.2366 11.4185 20.5816C11.7517 20.9071 11.9713 21 12.2895 21C12.3577 21 12.4186 20.9733 12.4597 20.9331C12.5001 20.8937 12.5183 20.8453 12.5183 20.8V19.919C12.5183 18.612 12.9686 17.5932 13.7083 16.6301L15.4286 14.3909C15.7905 13.9197 15.8795 13.8033 15.9318 13.682C15.9617 13.6128 16 13.4934 16 13L16 6.68307Z"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </g>
                                            </g>
                                        </AiAnswerNotRecommendSvg>
                                        <AiAnswerNotRecommendCount>0</AiAnswerNotRecommendCount>
                                    </AiAnswerNotRecommendBtn>
                                    <AiAnswerRecommendPromoteBox>
                                        <AiAnswerRecommendPromoteMain>
                                            부족하거나 틀린 내용이 있다면
                                            <br />
                                            댓글로 알려주세요.
                                        </AiAnswerRecommendPromoteMain>
                                        <AiAnswerRecommendPromoteArrow />
                                    </AiAnswerRecommendPromoteBox>
                                </AiAnswerNotRecommend>
                            </AiAnswerRecommendedBox>
                        </AiAnswerRecommendedSector>
                    ) : (
                        <PeopleAnswerRecommendedSector>
                            <AnswerLikePeopleViewBox>
                                <AnswerLikePeopleViewBtn>
                                    <AnswerLikeCount>
                                        좋아요 <b>1</b>
                                    </AnswerLikeCount>
                                </AnswerLikePeopleViewBtn>
                            </AnswerLikePeopleViewBox>
                        </PeopleAnswerRecommendedSector>
                    )}
                </AnswerListBox>
            ))}
        </>
    );
}
export default AnswerContentBox;
