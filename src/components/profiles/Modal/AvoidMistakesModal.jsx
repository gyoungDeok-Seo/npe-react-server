import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setCareerReset } from "../../../redux/createCareer";
import { setEducationReset } from "../../../redux/createEducation";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { setProfileReset } from "../../../redux/profileUpdate";

const AvoidMistakesModalContainer = styled.div`
  display: flex;
  position: fixed;
  z-index: 1060;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.625em;
  overflow-x: hidden;
  transition: background-color 0.1s;
  -webkit-overflow-scrolling: touch;
  background: rgba(0, 0, 0, 0.4);
  overflow-y: auto;
  -webkit-tap-highlight-color: transparent;
`;

const AvoidMistakesModalBox = styled.div`
  position: relative;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  padding: 1.25em;
  border: none;
  border-radius: 5px;
  background: #fff;
  font-family: inherit;
  font-size: 1rem;
  -webkit-tap-highlight-color: transparent;
`;

const AvoidMistakesModalTitleBox = styled.div`
  padding: 0 !important;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AvoidMistakesModalTitle = styled.h2`
  line-height: 1.5 !important;
  font-size: 1.125rem !important;
  color: #0f172a !important;
  font-weight: 700 !important;
  position: relative;
  max-width: 100%;
  margin: 0 0 0.4em;
  padding: 0;
  color: #595959;
  font-size: 1.875em;
  font-weight: 600;
  text-align: center;
  text-transform: none;
  word-wrap: break-word;
`;

const AvoidMistakesModalBtnBox = styled.div`
  width: 100%;
  padding: 0 !important;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  z-index: 1;
  margin: 1.25em auto 0;
`;

const AvoidMistakesModalCancelBtn = styled.button`
  width: 100%;
  margin-bottom: 0.5rem !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  padding: 0.6875rem 1.4375rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.3rem;
  color: #0f172a;
  background-color: #e2e8f0;
  border-color: #e2e8f0;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
`;

const AvoidMistakesModalExitBtn = styled(AvoidMistakesModalCancelBtn)`
  color: #fff;
  background-color: #ed6653;
  border-color: #ed6653;
`;

function AvoidMistakesModal({ setAvoidMistakesModal, setIsExit }) {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const handleAvoidMistakesModal = () => {
    setAvoidMistakesModal(false);
  };

  const handleIsExit = () => {
    if (pathname.startsWith("/profiles/update")) {
      dispatch(setProfileReset());
    } else if (
      pathname.startsWith("/profiles/careers/create") ||
      pathname.startsWith("/profiles/careers/update")
    ) {
      dispatch(setCareerReset());
    } else if (
      pathname.startsWith("/profiles/educations/create") ||
      pathname.startsWith("/profiles/educations/update")
    ) {
      dispatch(setEducationReset());
    } else if (
      pathname.startsWith("/qnas/create") ||
      pathname.startsWith("/qnas/update")
    ) {
    }
    setIsExit(true);
  };

  return (
    <AvoidMistakesModalContainer style={{ overflowY: "auto" }}>
      <AvoidMistakesModalBox
        tabindex="-1"
        role="dialog"
        aria-live="assertive"
        aria-modal="true"
        style={{ width: "20.5rem", display: "flex" }}
      >
        <AvoidMistakesModalTitleBox>
          <AvoidMistakesModalTitle
            id="swal2-title"
            style={{ display: "block" }}
          >
            이 화면에서 나가면
            <br />
            작성 중이던 내용이 사라져요.
          </AvoidMistakesModalTitle>
        </AvoidMistakesModalTitleBox>
        <AvoidMistakesModalBtnBox>
          <AvoidMistakesModalExitBtn
            type="button"
            style={{ display: "inline-block" }}
            onClick={handleIsExit}
          >
            나가기
          </AvoidMistakesModalExitBtn>
          <AvoidMistakesModalCancelBtn
            type="button"
            style={{ display: "inline-block" }}
            onClick={handleAvoidMistakesModal}
          >
            취소
          </AvoidMistakesModalCancelBtn>
        </AvoidMistakesModalBtnBox>
      </AvoidMistakesModalBox>
    </AvoidMistakesModalContainer>
  );
}
export default AvoidMistakesModal;
