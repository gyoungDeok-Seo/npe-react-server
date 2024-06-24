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
import { setQuestions } from "../redux/memberQuestions";
import { setAnswers } from "../redux/memberAnswers";

const MyProfileContainer = styled.div`
    position: relative;
    background-color: #fff;
    min-height: 100vh;
`;

function Profiles() {
    const memberQuestions = useSelector((state) => state.memberQuestions);
    const memberAnswers = useSelector((state) => state.memberAnswers);
    const memberPosts = useSelector((state) => state.memberPosts);
    const [questionPage, setQuestionPage] = useState(1);
    const [answerPage, setAnswerPage] = useState(1);
    const [postPage, setPostPage] = useState(1);

    const [option, setOption] = useState(1);
    const [tab, setTab] = useState(1);

    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const [member, setMember] = useState(null);
    const [same, setSame] = useState();

    const fetchData = async (page, endpoint, actionCreator, currentState) => {
        const response = await fetch(`http://localhost:10000/members/api/${endpoint}?page=${page}&memberId=${pathname.split("/")[2]}`, {
            method: "GET",
            credentials: "include",
        });

        const data = await response.json();
        const newData = page === 1 ? data : [...currentState, ...data];

        dispatch(actionCreator(newData));
    };

    useEffect(() => {
        // fetchData(postPage, "my-post-list", setPosts, memberPosts.posts);
        fetchData(answerPage, "my-answer-list", setAnswers, memberAnswers.answers);
        fetchData(questionPage, "my-question-list", setQuestions, memberQuestions.questions);
    }, []);

    useEffect(() => {
        // 서버에서 세션 정보를 가져와 로그인 상태를 설정합니다.
        const fetchUserSession = async () => {
            try {
                const response = await fetch(`http://localhost:10000/members/api/session?memberId=${pathname.split("/")[2]}`, {
                    method: "GET",
                    credentials: "include", // 세션 쿠키를 포함하여 요청
                }); // 서버에서 세션 정보를 가져오는 엔드포인트 설정
                const data = await response.json();
                setSame(data.same);
                setMember(data.member);
            } catch (error) {
                console.error("Error fetching session data", error);
                dispatch(controlRedux(false));
            }
        };

        fetchUserSession();
    }, [pathname]);

    useEffect(() => {
        if (tab === 1 || tab === 2) {
            // fetchData(postPage, "my-post-list", setPosts, memberPosts.posts);
        } else if (option === 1) {
            fetchData(answerPage, "my-answer-list", setAnswers, memberAnswers.answers);
        } else {
            fetchData(questionPage, "my-question-list", setQuestions, memberQuestions.questions);
        }
    }, [tab, option, postPage, answerPage, questionPage]);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, offsetHeight } = document.documentElement;
            if (window.innerHeight + scrollTop >= offsetHeight) {
                if (tab === 1 || tab === 2) {
                    setPostPage((prev) => prev + 1);
                } else if (option === 1) {
                    setAnswerPage((prev) => prev + 1);
                } else {
                    setQuestionPage((prev) => prev + 1);
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [tab, option]);

    const renderContent = () => {
        switch (tab) {
            case 1:
                return <Profile same={same} member={member} />;
            case 2:
                return <Post setPostPage={setPostPage} />;
            case 3:
                return <QnaActivity member={member} option={option} setOption={setOption} setPage={{ setAnswerPage, setQuestionPage }} />;
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
                    <Intro setTab={setTab} tab={tab} member={member} same={same} />
                    {renderContent()}
                </MyProfileContainer>
            </div>
        </div>
    );
}
export default Profiles;
