import styled from "styled-components";

const LoginBtn = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    color: #334155;
    font-weight: 700;
    font-size: 0.875rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    background-color: rgb(255 235 0 / 1);
    border-color: rgb(255 235 0 / 1);
    border-style: solid;
    border-width: 1px;
    border-radius: 0.25rem;
    -webkit-appearance: button;
    &:hover {
        opacity: 0.7;
    }
`;
const LoginBtnText = styled.div`
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
`;
const KakaoImg = styled.img`
    width: 1.25rem;
    height: 1.25rem;
`;

function NonLoginNav() {
    const handlerClickLogin = async () => {
        window.location.href = "http://localhost:10000/kakao/login/end-point";
    };

    return (
        <div>
            <LoginBtn onClick={handlerClickLogin}>
                <KakaoImg src="https://careerly.co.kr/_next/static/images/img_symbol-kakao-b1fe6197135e5beead71b1a90f8e2b7d.png" alt="kakao_icon" />
                <LoginBtnText>카카오톡 로그인</LoginBtnText>
            </LoginBtn>
        </div>
    );
}
export default NonLoginNav;
