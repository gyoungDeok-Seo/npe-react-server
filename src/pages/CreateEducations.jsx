import { useEffect, useState } from "react";
import styled from "styled-components";
import AvoidMistakesModal from "../components/profiles/Modal/AvoidMistakesModal";
import { useLocation, useNavigate } from "react-router-dom";
import InstitutionInput from "../components/EducationsCreate/InstitutionInput";
import CourseInput from "../components/EducationsCreate/CourseInput";
import EducationsPeriod from "../components/EducationsCreate/EducationsPeriod";
import DescriptionTextarea from "../components/EducationsCreate/DescriptionTextarea";
import MainHeader from "../components/Header/MainHeader";
import { useDispatch, useSelector } from "react-redux";
import { setEducationReset, setEducationState } from "../redux/createEducation";

const DeleteBtn = styled.button`
    text-decoration-line: underline;
    --tw-text-opacity: 1;
    color: rgb(15 23 42 / var(--tw-text-opacity));
    display: flex;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
`;

const DeleteText = styled.p`
    --tw-text-opacity: 1;
    color: rgb(15 23 42 / var(--tw-text-opacity));
    font-size: 0.875rem;
`;

const CreateEducationsBox = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 3rem;
    @media (min-width: 1024px) {
        & {
            padding-top: 2rem;
        }
    }
    @media (min-width: 1024px) {
        & {
            width: 33rem;
        }
    }
    @media (min-width: 1024px) {
        & {
            margin-left: auto;
            margin-right: auto;
        }
    }
`;
export const EducationsInputBoxTop = styled.div`
    margin-bottom: 1.5rem;
`;
export const EducationsInputBox = styled.div`
    margin-bottom: 1rem;
`;
export const CreateEducationsPartTitleBox = styled.div`
    margin-bottom: 0.5rem;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
`;
export const CreateEducationsLabel = styled.label`
    margin-bottom: 0;
    font-size: 0.875rem;
    font-weight: 700;
    color: #334155;
`;

export const CreateEducationsInputCount = styled.p`
    font-size: 0.875rem;
    color: #64748b;
`;
export const CreateEducationsRelativeBox = styled.div`
    position: relative;
`;
export const CreateEducationsInput = styled.input`
    -moz-appearance: none;
    appearance: none;
    --tw-shadow: 0 0 #0000;
    display: block;
    width: 100%;
    border-radius: 0.25rem;
    border-width: 1px;
    border-style: solid;
    border-color: #e2e8f0;
    background-color: #fff;
    padding: 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #0f172a;
    &:focus {
        border-color: #64748b;
        outline: 1px solid #64748b;
    }
    &::placeholder {
        font-weight: 500;
        color: #9da7b1;
    }
`;
function EducationsCreate() {
    const navigate = useNavigate(null);
    const createEducation = useSelector((state) => state.createEducation);
    const educationList = useSelector((state) => state.educationList);
    const [avoidMistakesModal, setAvoidMistakesModal] = useState(false);
    const [isExit, setIsExit] = useState(false);
    const [member, setMember] = useState(null);
    const { pathname } = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        // 서버에서 세션 정보를 가져와 로그인 상태를 설정합니다.
        const fetchUserSession = async () => {
            const response = await fetch("http://localhost:10000/members/api/session", {
                method: "GET",
                credentials: "include", // 세션 쿠키를 포함하여 요청
            }); // 서버에서 세션 정보를 가져오는 엔드포인트 설정
            const data = await response.json();
            setMember(data.member);
        };
        fetchUserSession();
    }, []);

    useEffect(() => {
        if (isExit && member) {
            navigate(`/profile/${member.id}`);
        }
    }, [isExit, member, navigate]);

    useEffect(() => {
        dispatch(setEducationReset());
        if (pathname.split("/")[3] === "update") {
            if (pathname.split("/")[4]) {
                const data = educationList.educations.filter((item) => item.id === parseInt(pathname.split("/")[4]))[0];
                dispatch(setEducationState(data));
            }
        }
    }, [pathname, educationList]);

    const fetchEducationDelete = async () => {
        const response = await fetch(`http://localhost:10000/members/api/delete-education`, {
            method: "DELETE",
            credentials: "include", // 세션 쿠키를 포함하여 요청
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(createEducation),
        });
        if (response.ok) navigate(`/profile/${member.id}`);
    };

    return (
        <>
            <div>
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
                        <MainHeader setAvoidMistakesModal={setAvoidMistakesModal} />
                        <div style={{ height: "3.5rem" }}></div>
                        <CreateEducationsBox>
                            <InstitutionInput />
                            <CourseInput />
                            <EducationsPeriod />
                            {/* <LinkInput /> */}
                            <DescriptionTextarea />
                            {pathname.split("/")[3] === "update" && (
                                <DeleteBtn onClick={() => fetchEducationDelete()}>
                                    <DeleteText>교육 삭제</DeleteText>
                                </DeleteBtn>
                            )}
                        </CreateEducationsBox>
                    </div>
                </div>
            </div>
            {avoidMistakesModal && <AvoidMistakesModal setAvoidMistakesModal={setAvoidMistakesModal} setIsExit={setIsExit} />}
        </>
    );
}
export default EducationsCreate;
