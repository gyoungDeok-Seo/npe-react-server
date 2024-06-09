import { Link } from "react-router-dom";
import styled from "styled-components";

const ProfileMiniModalBox = styled.div`
  display: block;
  position: absolute;
  top: 3.25rem;
  left: auto;
  right: 0;
  z-index: 6;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
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

function ProfileMiniModal({ modalRef }) {
  return (
    <ProfileMiniModalBox ref={modalRef}>
      <ProfileMiniModalBtn to="/profiles">
        <span>내 프로필</span>
      </ProfileMiniModalBtn>
      <ProfileMiniModalBtn to="#">
        <span>저장한 게시물</span>
      </ProfileMiniModalBtn>
      <ProfileMiniModalBtn to="#">
        <span>관심분야 설정</span>
      </ProfileMiniModalBtn>
      <Boundary />
      <ProfileMiniModaLogout to="/">
        <span>로그아웃</span>
      </ProfileMiniModaLogout>
    </ProfileMiniModalBox>
  );
}
export default ProfileMiniModal;
