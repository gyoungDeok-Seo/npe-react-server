import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LandingBox = styled.section`
    height: 832px;
    min-width: 1024px;
    width: 100%;
`;
const LandingInner = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;
const CommentBox = styled.div`
    color: rgb(255 255 255 / 1);
    padding-top: 8rem;
    padding-bottom: 8rem;
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: space-between;
    max-width: 1280px;
    min-width: 1024px;
    width: 100%;
    height: 100%;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    position: relative;
`;
const CommentInner = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-shrink: 0;
    width: 480px;
    height: 100%;
    margin-left: 8rem;
`;
const TopComment = styled.div`
    line-height: 2.25rem;
    font-weight: 400;
    font-size: 1.5rem;
    padding-bottom: 1.25rem;
    white-space: pre-line;
`;
const BottomComment = styled.div`
    white-space: pre-line;
    font-size: 3rem;
    font-weight: 700;
    line-height: 60px;
`;
const JoinBtnsBox = styled.div`
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;
const KakaoJoinBtn = styled(Link)`
    color: #0f172a;
    font-weight: 700;
    font-size: 1rem;
    padding: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    background-color: rgb(255 235 0 / 1);
    border-color: rgb(255 235 0 / 1);
    border-style: solid;
    border-width: 1px;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
`;
const KakaoImg = styled.img`
    width: 1.25rem;
    height: 1.25rem;
`;

function Landing() {
    const isLoggedIn = useSelector((state) => state.loginStatus.status);
    const handlerClickLogin = async () => {
        window.location.href = "http://localhost:10000/kakao/login/end-point";
    };

    return (
        <LandingBox>
            <LandingInner>
                <span
                    style={{
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                    }}
                >
                    <img
                        alt="title background"
                        sizes="100vw"
                        src="https://careerly.co.kr/_next/image?url=https%3A%2F%2Fpubly-cdn.s3.ap-northeast-2.amazonaws.com%2Fadmin%2Fcareerly%2Flanding-pages%2Fimage%2F6528b5b2362e3cd58e15f5e0_1697426536.png&w=1920&q=100"
                        decoding="async"
                        data-nimg="fill"
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            boxSizing: "border-box",
                            padding: 0,
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: 0,
                            height: 0,
                            minWidth: "100%",
                            maxWidth: "100%",
                            minHeight: "100%",
                            maxHeight: "100%",
                            objectFit: "cover",
                        }}
                    />
                </span>
                <CommentBox>
                    <CommentInner>
                        <TopComment>개발 트렌드부터 Q&amp;A, 네트워킹까지</TopComment>
                        <BottomComment>
                            요즘 개발자들의 <br />
                            필수 커뮤니티, 커리어리
                        </BottomComment>
                        <JoinBtnsBox style={{ visibility: isLoggedIn ? "hidden" : "visible" }}>
                            <KakaoJoinBtn onClick={handlerClickLogin}>
                                <KakaoImg src="https://careerly.co.kr/_next/static/images/img_symbol-kakao-b1fe6197135e5beead71b1a90f8e2b7d.png" alt="kakao_icon" />
                                <span>카카오로 3초만에 가입하기</span>
                            </KakaoJoinBtn>
                        </JoinBtnsBox>
                    </CommentInner>
                </CommentBox>
            </LandingInner>
        </LandingBox>
    );
}
export default Landing;
