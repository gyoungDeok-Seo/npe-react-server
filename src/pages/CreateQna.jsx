import styled from "styled-components";
import MainHeader from "../components/Header/MainHeader";
import CreateQnaContent from "../container/CreateQna/CreateQnaContent";
import CategoryAndTag from "../container/CreateQna/CategoryAndTag";
import { CreateQnaImgContext } from "../context/CreateQnaImgContext";
import { useEffect, useState } from "react";
import QnaImg from "../container/CreateQna/QnaImg";
import AvoidMistakesModal from "../components/profiles/Modal/AvoidMistakesModal";
import { useNavigate } from "react-router-dom";

export const TopSpaceDiv = styled.div`
  height: 3.5rem;
`;

export const CreateQnaContentBox = styled.div`
  padding-top: 2rem;
  padding-bottom: 10rem;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  width: 1024px;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  -moz-column-gap: 3rem;
  column-gap: 3rem;
  row-gap: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;
export const CreateQnaContentInner = styled.div`
  grid-column: span 8 / span 8;
  grid-column-start: 3;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
function CreateQna() {
  const navigate = useNavigate(null);
  const [showInput, setShowInput] = useState(false);
  const [avoidMistakesModal, setAvoidMistakesModal] = useState(false);
  const [isExit, setIsExit] = useState(false);

  useEffect(() => {
    if (isExit) {
      navigate("/qnas");
    }
  }, [isExit]);

  return (
    <CreateQnaImgContext.Provider value={{ showInput, setShowInput }}>
      <div>
        <div
          style={{
            position: "fixed",
            zIndex: 9999,
            top: 16,
            left: 16,
            right: 16,
            bottom: 16,
            pointerEvents: "none",
          }}
          className="global-toaster"
        />
        <div>
          <MainHeader setAvoidMistakesModal={setAvoidMistakesModal} />
          <TopSpaceDiv />
          <CreateQnaContentBox>
            <CreateQnaContentInner>
              <CreateQnaContent />
              {showInput && <QnaImg />}
              <CategoryAndTag />
            </CreateQnaContentInner>
          </CreateQnaContentBox>
        </div>
      </div>
      {avoidMistakesModal && (
        <AvoidMistakesModal
          setAvoidMistakesModal={setAvoidMistakesModal}
          setIsExit={setIsExit}
        />
      )}
    </CreateQnaImgContext.Provider>
  );
}
export default CreateQna;
