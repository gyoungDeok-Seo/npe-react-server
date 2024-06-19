import { useEffect, useState } from "react";
import styled from "styled-components";
import NameInput from "../components/ProfileUpdate/NameInput";
import ProfileFileInput from "../components/ProfileUpdate/ProfileFileInput";
import RefInput from "../components/ProfileUpdate/RefInput";
import DescriptionTextarea from "../components/ProfileUpdate/DescriptionTextarea";
import AvoidMistakesModal from "../components/profiles/Modal/AvoidMistakesModal";
import { useNavigate } from "react-router-dom";
import MainHeader from "../components/Header/MainHeader";
import { useDispatch } from "react-redux";
import { controlRedux } from "../redux/loginStatus";

const ProfileUpdateBox = styled.div`
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
const ProfileUpdateInner = styled.div`
    padding-top: 2rem;
    padding-bottom: 2rem;
`;
export const ProfileUpdateInputBox = styled.div`
    margin-bottom: 1rem;
`;
export const ProfileUpdateInputInner = styled.div`
    margin-bottom: 0.5rem;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
`;
export const ProfileUpdateLabel = styled.label`
    margin-bottom: 0;
    font-size: 0.875rem;
    font-weight: 700;
    color: #334155;
`;
export const ProfileUpdateLabelSub = styled.span`
    margin-left: 0.25rem;
    font-weight: 400;
    color: #64748b;
`;
export const InputLengthCountText = styled.p`
    font-size: 0.875rem;
    color: #64748b;
`;
export const ProfileUpdateInput = styled.input`
    --tw-shadow: 0 0 #0000;
    -moz-appearance: none;
    appearance: none;
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
`;

function ProfileUpdate() {
    const navigate = useNavigate(null);
    const dispatch = useDispatch();
    const [avoidMistakesModal, setAvoidMistakesModal] = useState(false);
    const [isExit, setIsExit] = useState(false);
    const [member, setMember] = useState();

    useEffect(() => {
        const fetchUserSession = async () => {
            const response = await fetch("http://localhost:10000/members/api/session", {
                method: "GET",
                credentials: "include", // 세션 쿠키를 포함하여 요청
            }); // 서버에서 세션 정보를 가져오는 엔드포인트 설정
            const data = await response.json();
            setMember(data.member);
        };
        fetchUserSession();
        if (isExit) {
            navigate(`/profile/${member.id}`);
        }
    }, [isExit]);
    return (
        <>
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
                    <ProfileUpdateBox>
                        <ProfileUpdateInner>
                            <ProfileFileInput member={member} />
                            <NameInput member={member} />
                            <RefInput member={member} />
                            <DescriptionTextarea member={member} />
                        </ProfileUpdateInner>
                    </ProfileUpdateBox>
                </div>
            </div>
            {avoidMistakesModal && <AvoidMistakesModal setAvoidMistakesModal={setAvoidMistakesModal} setIsExit={setIsExit} />}
        </>
    );
}
export default ProfileUpdate;
