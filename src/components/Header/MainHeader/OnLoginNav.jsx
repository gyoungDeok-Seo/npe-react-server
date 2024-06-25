import { Link } from "react-router-dom";
import styled from "styled-components";
import ProfileMiniModal from "./ProfileMiniModal";
import WriteMiniModal from "./WriteMiniModal";
import { useState, useEffect, useRef } from "react";

const AlarmSvg = styled.svg`
    fill: #475569;
    display: block;
`;

const AlarmLink = styled(Link)`
    position: relative;
    padding: 0.5rem;
`;

const ProfileImgBtn = styled.button`
    padding: 0;
    border-radius: 9999px;
    display: flex;
    margin: 0.5rem;
`;

const ProfileImg = styled.img`
    width: 2.25rem;
    height: 2.25rem;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(226 232 240 / 1);
    background-color: rgb(255 255 255 / 1);
    flex: none;
    overflow: hidden;
    border-radius: 9999px;
    object-fit: cover;
`;

const WriteOptionBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 700;
    font-size: 0.875rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: #334155;
    border-color: #334155;
    border-style: solid;
    border-width: 1px;
    border-radius: 9999px;
`;

const WriteOptionBtnText = styled.span`
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    margin-right: 0.25rem;
`;

const WriteOptionBtnSvg = styled.svg`
    fill: #fff;
    transform: translate(0, 0) ${(props) => (props.writeModalOpen ? "rotate(180deg)" : "rotate(0deg)")} skewX(0deg) skewY(0deg) scaleX(1) scaleY(1);
`;

function OnLoginNav({ member, setSearch }) {
    const [profileModalOpen, setProfileModalOpen] = useState(false);
    const [writeModalOpen, setWriteModalOpen] = useState(false);
    const profileRef = useRef(null);
    const profileModalRef = useRef(null);
    const writeOptionRef = useRef(null);
    const writeModalRef = useRef(null);

    const handleProfileModal = () => {
        setProfileModalOpen((open) => !open);
        setSearch(false);
    };

    const handleWriteModal = () => {
        setWriteModalOpen((open) => !open);
        setSearch(false);
    };

    const handleClickOutside = (event) => {
        if (profileRef.current && !profileRef.current.contains(event.target) && profileModalRef.current && !profileModalRef.current.contains(event.target)) {
            setProfileModalOpen(false);
        }
        if (writeOptionRef.current && !writeOptionRef.current.contains(event.target) && writeModalRef.current && !writeModalRef.current.contains(event.target)) {
            setWriteModalOpen(false);
        }
    };

    useEffect(() => {
        if (profileModalOpen || writeModalOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [profileModalOpen, writeModalOpen]);

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <AlarmLink aria-label="알림" to="#">
                <AlarmSvg width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <g id="style=outline">
                            <path id="bell" fillRule="evenodd" clipRule="evenodd" d="M10.9958 2C10.9958 1.44772 11.4435 1 11.9958 1C12.548 1 12.9958 1.44772 12.9958 2V3.06494C16.838 3.56772 19.9958 6.9287 19.9958 11V16L20.881 18.5144C21.2395 19.1809 20.7418 20 20.0038 20H14.9958C14.9958 21.6569 13.6526 23 11.9958 23C10.3389 23 8.99576 21.6569 8.99576 20H3.99623C3.25815 20 2.76052 19.1809 3.11897 18.5144L3.99623 16V11C3.99623 6.93164 7.15617 3.57258 10.9958 3.06603V2ZM18.5796 18L17.9958 16.3418V11C17.9958 7.70775 15.1939 5 12 5C8.80352 5 5.99623 7.71031 5.99623 11V16.3389L5.41666 18H18.5796ZM10.9958 20C10.9958 20.5523 11.4435 21 11.9958 21C12.548 21 12.9958 20.5523 12.9958 20H10.9958Z"></path>
                        </g>
                    </g>
                </AlarmSvg>
            </AlarmLink>
            <ProfileImgBtn ref={profileRef} type="button" onClick={handleProfileModal}>
                <ProfileImg src={member && member.kakaoProfileUrl} alt="백시현님의 프로필 사진" />
            </ProfileImgBtn>
            <WriteOptionBtn ref={writeOptionRef} type="button" onClick={handleWriteModal}>
                <WriteOptionBtnText>작성하기</WriteOptionBtnText>
                <WriteOptionBtnSvg width="16" height="16" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" writeModalOpen={writeModalOpen}>
                    <g>
                        <g id="style=outline">
                            <path id="arrowDown" fillRule="evenodd" clipRule="evenodd" d="M12 15.5858L20.2929 7.29289C20.6834 6.90237 21.3166 6.90237 21.7071 7.29289C22.0976 7.68342 22.0976 8.31658 21.7071 8.70711L12.7071 17.7071C12.3166 18.0976 11.6834 18.0976 11.2929 17.7071L2.29289 8.70711C1.90237 8.31658 1.90237 7.68342 2.29289 7.29289C2.68342 6.90237 3.31658 6.90237 3.70711 7.29289L12 15.5858Z"></path>
                        </g>
                    </g>
                </WriteOptionBtnSvg>
            </WriteOptionBtn>
            {profileModalOpen && <ProfileMiniModal member={member} modalRef={profileModalRef} />}
            {writeModalOpen && <WriteMiniModal modalRef={writeModalRef} />}
        </div>
    );
}

export default OnLoginNav;
