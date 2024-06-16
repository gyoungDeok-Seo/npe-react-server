import styled from "styled-components";
import { useEffect, useState } from "react";
import Intro from "../container/Profiles/Intro";
import Profile from "../container/Profiles/Profile";
import Post from "../container/Profiles/Post";
import QnaActivity from "../container/Profiles/QnaActivity";
import MainHeader from "../components/Header/MainHeader";
import { useDispatch, useSelector } from "react-redux";
import { controlRedux } from "../redux/loginStatus";
import { useLocation } from "react-router-dom";

const MyProfileContainer = styled.div`
    position: relative;
    background-color: #fff;
    min-height: 100vh;
`;

function Profiles() {
    const [tab, setTab] = useState(1);

    const [path, setPath] = useState("/");
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.loginStatus.status);
    const [member, setMember] = useState(null);

    useEffect(() => {
        setPath(pathname);
        // 서버에서 세션 정보를 가져와 로그인 상태를 설정합니다.
        const fetchUserSession = async () => {
            try {
                const response = await fetch("http://localhost:10000/members/api/session", {
                    method: "GET",
                    credentials: "include", // 세션 쿠키를 포함하여 요청
                }); // 서버에서 세션 정보를 가져오는 엔드포인트 설정
                const data = await response.json();
                dispatch(controlRedux(data.loggedIn));
                setMember(data.member);
            } catch (error) {
                console.error("Error fetching session data", error);
                dispatch(controlRedux(false));
            }
        };
        fetchUserSession();
    }, [pathname]);

    const renderContent = () => {
        switch (tab) {
            case 1:
                return <Profile member={member} />;
            case 2:
                return <Post />;
            case 3:
                return <QnaActivity />;
            default:
                return <Profile />;
        }
    };

    return (
        <div>
            <div
                style={{
                    position: "fixed",
                    zIndex: 9999,
                    top: "16px",
                    left: "16px",
                    right: "16px",
                    bottom: "16px",
                    pointerEvents: "none",
                }}
                className="global-toaster"
            ></div>
            <div>
                <MyProfileContainer>
                    <MainHeader />
                    <Intro setTab={setTab} tab={tab} member={member} />
                    {renderContent()}
                </MyProfileContainer>
            </div>
        </div>
    );
}
export default Profiles;
