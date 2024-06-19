import { useEffect, useState } from "react";
import styled from "styled-components";
import AvoidMistakesModal from "../components/profiles/Modal/AvoidMistakesModal";
import { useNavigate } from "react-router-dom";
import InstitutionInput from "../components/EducationsCreate/InstitutionInput";
import CourseInput from "../components/EducationsCreate/CourseInput";
import EducationsPeriod from "../components/EducationsCreate/EducationsPeriod";
import LinkInput from "../components/EducationsCreate/LinkInput";
import DescriptionTextarea from "../components/EducationsCreate/DescriptionTextarea";
import MainHeader from "../components/Header/MainHeader";
import { CreateEductaionContext } from "../context/CreateEductaionContext";
import { useSelector } from "react-redux";

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
  const [avoidMistakesModal, setAvoidMistakesModal] = useState(false);
  const [isExit, setIsExit] = useState(false);

  useEffect(() => {
    if (isExit) {
      navigate("/profiles");
    }
  }, [isExit]);
  const createEducation = useSelector((state) => state.createEducation);
  useEffect(() => {
    console.log(createEducation);
  }, [createEducation]);

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
              <LinkInput />
              <DescriptionTextarea />
            </CreateEducationsBox>
          </div>
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
export default EducationsCreate;