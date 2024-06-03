import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import styled from "styled-components";
import NameInput from "../components/profileUpdate/NameInput";
import ProfileFileInput from "../components/profileUpdate/ProfileFileInput";
import RefInput from "../components/profileUpdate/RefInput";
import DescriptionTextarea from "../components/profileUpdate/DescriptionTextarea";
import AvoidMistakesModal from "../components/profiles/modal/AvoidMistakesModal";
import { useNavigate } from "react-router-dom";

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
  color: var(--color-text-bold, #0f172a);
`;

function ProfileUpdate() {
  const navigate = useNavigate(null);
  const [avoidMistakesModal, setAvoidMistakesModal] = useState(false);
  const [isExit, setIsExit] = useState(false);

  useEffect(() => {
    if (isExit) {
      navigate("/profiles");
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
          <Header />
          <div style={{ height: "3.5rem" }}></div>
          <ProfileUpdateBox>
            <ProfileUpdateInner>
              <ProfileFileInput />
              <NameInput />
              <RefInput />
              <DescriptionTextarea />
            </ProfileUpdateInner>
          </ProfileUpdateBox>
        </div>
      </div>
      {avoidMistakesModal && (
        <AvoidMistakesModal
          setAvoidMistakesModal={setAvoidMistakesModal}
          setIsExit={setIsExit}
        />
      )}
    </>
  );
}
export default ProfileUpdate;
