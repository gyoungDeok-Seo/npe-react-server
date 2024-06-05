import { Link } from "react-router-dom";
import styled from "styled-components";

const ProfilePostSubContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
`;

const ProfilePostSubLikeBox = styled.div`
  display: flex;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  justify-content: space-between;
`;

const ProfilePostSubLikeBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
`;

const ProfilePostSubLikeText = styled.button`
  font-size: 0.75rem;
  text-underline-offset: 2px;
  color: rgb(100 116 139 /1);
  &:hover {
    text-decoration-line: underline;
  }
`;

const ProfilePostSaveAndCheckLink = styled(Link)`
  padding: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const ProfilePostSaveAndCheckText = styled.p`
  font-size: 0.75rem;
  color: rgb(100 116 139 / 1);
`;

function SubContent({ setLikeUsersModal }) {
  const handelModalOpen = () => {
    setLikeUsersModal(true);
  };
  return (
    <ProfilePostSubContentBox>
      <ProfilePostSubLikeBox>
        <ProfilePostSubLikeBtn type="button" onClick={handelModalOpen}>
          <ProfilePostSubLikeText>
            좋아요 <b>7</b>
          </ProfilePostSubLikeText>
        </ProfilePostSubLikeBtn>
      </ProfilePostSubLikeBox>
      <ProfilePostSaveAndCheckLink role="presentation" to="#">
        <ProfilePostSaveAndCheckText>
          저장 <b>6</b> • 조회 <b>3,273</b>
        </ProfilePostSaveAndCheckText>
      </ProfilePostSaveAndCheckLink>
    </ProfilePostSubContentBox>
  );
}
export default SubContent;
