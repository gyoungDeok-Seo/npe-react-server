import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { controlRedux } from "../../../redux/loginStatus";

const ProfileMiniModalBox = styled.div`
    display: block;
    position: absolute;
    top: 3.25rem;
    left: auto;
    right: 0;
    z-index: 6;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
    color: rgb(71 85 105 / 1);
    font-size: 0.875rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: #fff;
    border-color: #cbd5e1;
    border-style: solid;
    border-width: 1px;
    border-radius: 0.25rem;
    width: 12.5rem;
`;
const ProfileMiniModalBtn = styled(Link)`
    color: #0f172a;
    font-size: 0.875rem;
    text-align: left;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
    display: block;
    &:hover {
        background-color: #f8fafc;
    }
`;
const ProfileMiniModaLogout = styled(Link)`
    color: #0f172a;
    font-size: 0.875rem;
    text-align: left;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
    display: block;
    &:hover {
        background-color: #f8fafc;
    }
`;
const Boundary = styled.div`
    background-color: #e2e8f0;
    width: 168px;
    height: 1px;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    margin-left: 1rem;
    margin-right: 1rem;
`;

function ProfileMiniModal({ modalRef, member }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleModal = () => {};

    const handlerClickLogout = async () => {
        try {
            const response = await fetch("http://localhost:10000/members/api/logout", {
                method: "GET",
                credentials: "include", // 세션 쿠키를 포함하여 요청
            }); // 서버에서 세션 정보를 가져오는 엔드포인트 설정
            const data = await response.json();

            dispatch(controlRedux(data.loggedIn));
            if (!data) {
                navigate("/");
            }
        } catch (error) {
            console.error("Error fetching session data", error);
            dispatch(controlRedux(false));
        }
    };
    return (
        <ProfileMiniModalBox ref={modalRef}>
            <ProfileMiniModalBtn to={`/profile/${member?.id}`} onClick={handleModal}>
                <span>내 프로필</span>
            </ProfileMiniModalBtn>
            <ProfileMiniModalBtn to="#" onClick={handleModal}>
                <span>저장한 게시물</span>
            </ProfileMiniModalBtn>
            <ProfileMiniModalBtn to="#" onClick={handleModal}>
                <span>관심분야 설정</span>
            </ProfileMiniModalBtn>
            <Boundary />
            <ProfileMiniModaLogout onClick={handlerClickLogout}>
                <span>로그아웃</span>
            </ProfileMiniModaLogout>
        </ProfileMiniModalBox>
    );
}
export default ProfileMiniModal;
