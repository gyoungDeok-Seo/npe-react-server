import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import styled from "styled-components";
import IndustryModal from "../components/career_create/IndustryModal";
import CareerSkillModal from "../components/career_create/CareerSkillModal";
import AvoidMistakesModal from "../components/profiles/modal/AvoidMistakesModal";
import { useNavigate } from "react-router-dom";
import CompanyInput from "../components/career_create/CompanyInput";
import TitleInput from "../components/career_create/TitleInput";
import PeriodSelectBox from "../components/career_create/CareerPeriod";
import IndustrySelect from "../components/career_create/IndustrySelect";
import SkillSelect from "../components/career_create/SkillSelect";
import DescriptionTextarea from "../components/career_create/DescriptionTextarea";
import LinkInput from "../components/career_create/LinkInput";

export const CareerCreateBox = styled.div`
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
export const CareerInputBox = styled.div`
  margin-bottom: 1.5rem;
`;
export const CareerSelectBox = styled.div`
  margin-bottom: 1rem;
`;
export const CareerCreatePartTitleBox = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
export const CareerCreateLabel = styled.label`
  margin-bottom: 0;
  font-size: 0.875rem;
  font-weight: 700;
  color: #334155;
`;
export const Pilsu = styled.span`
  margin-left: 0.25rem;
  font-weight: 400;
  color: #64748b;
`;
export const CareerCreateInputCount = styled.p`
  font-size: 0.875rem;
  color: #64748b;
`;
export const CareerCreateRelativeBox = styled.div`
  position: relative;
`;
export const CareerCreateInput = styled.input`
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
export const CareerPeriodSelectBox = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
export const CareerPeriodSelectInner = styled.div`
  display: flex;
  flex: 1 1 0%;
  gap: 0.5rem;
`;
export const CareerPeriodSelect = styled.select`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%239aa8bc' d='m12 15.375l-6-6l1.4-1.4L12 12.55l4.6-4.575l1.4 1.4z'/%3E%3C/svg%3E");
  --tw-shadow: 0 0 #0000;
  appearance: none;
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
  display: block;
  width: 100%;
  border-radius: 0.25rem;
  border-width: 1px;
  border-style: solid;
  background-color: #fff;
  padding: 0.75rem 1.5rem 0.75rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #0f172a;
  width: auto;
  word-wrap: normal;
  text-transform: none;
  flex-grow: 1;
  border-color: #e2e8f0;
  &:disabled {
    background-color: #f1f5f9;
    color: #64748b;
    opacity: 1;
  }
  &:focus {
    border-color: #64748b;
    outline: 1px solid #64748b;
  }

  @media (min-width: 1024px) {
    & {
      width: 100%;
    }
  }
`;
export const CareerCreateCheckboxBox = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;
export const CareerCreateCheckbox = styled.input`
  --tw-shadow: 0 0 #0000;
  color: #334155;
  user-select: none;
  flex-shrink: 0;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  appearance: none;
  height: 1.25rem;
  width: 1.25rem;
  cursor: pointer;
  border-radius: 0.25rem;
  border-width: 2px;
  border-style: solid;
  border-color: #cbd5e1;
  background-color: #fff;
  &:checked {
    border-color: transparent;
    background-color: currentColor;
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
  }
  &:focus {
    border-color: #64748b;
    outline: 1px solid #64748b;
  }
  &::placeholder {
    font-weight: 500;
    color: #9da7b1;
  }
`;
export const CareerCreateButtonBox = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  column-gap: 0.5rem;
  border-radius: 0.25rem;
  border-width: 1px;
  border-style: solid;
  border-color: #e2e8f0;
  padding: 0.75rem;
`;
export const CareerCreateButtonText = styled.span`
  color: #94a3b8;
`;
export const CareerCreateButtonSvg = styled.svg`
  height: 1rem;
  width: 1rem;
  fill: #64748b;
`;
export const CareerPeriodSelectBox2 = styled.div`
  flex: 1 1 0%;
`;
export const CareerPeriodSelectInner2 = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const CareerCreateIsWorking = styled.input`
  display: block;
  width: 100%;
  border-radius: 0.25rem;
  border-width: 1px;
  border-style: solid;
  border-color: #e2e8f0;
  appearance: none;
  padding: 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  &:disabled {
    color: #0f172a;
    background-color: #f1f5f9;
    opacity: 1;
  }
  &:focus {
    border-color: #64748b;
    outline: 1px solid #64748b;
  }
`;

export const PeriodValidationMessage = styled.div`
  color: #be1e08;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

function CareerCreate() {
  const navigate = useNavigate(null);
  const [avoidMistakesModal, setAvoidMistakesModal] = useState(false);
  const [isExit, setIsExit] = useState(false);
  const [industryModal, setIndustryModal] = useState(false);
  const [industry, setIndustry] = useState([]);
  const [careerSkillModal, setCareerSkillModal] = useState(false);
  const [careerSkill, setCareerSkill] = useState([]);

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
          <Header setAvoidMistakesModal={setAvoidMistakesModal} />
          <div style={{ height: "3.5rem" }}></div>
          <CareerCreateBox>
            <CompanyInput />
            <TitleInput />
            <PeriodSelectBox />
            <IndustrySelect
              setIndustryModal={setIndustryModal}
              industry={industry}
            />
            <SkillSelect
              setCareerSkillModal={setCareerSkillModal}
              careerSkill={careerSkill}
            />
            <DescriptionTextarea />
            <LinkInput />
          </CareerCreateBox>
        </div>
      </div>
      {industryModal && (
        <IndustryModal
          setIndustryModal={setIndustryModal}
          setIndustry={setIndustry}
          industry={industry}
        />
      )}
      {careerSkillModal && (
        <CareerSkillModal
          setCareerSkillModal={setCareerSkillModal}
          setCareerSkill={setCareerSkill}
          careerSkill={careerSkill}
        />
      )}
      {avoidMistakesModal && (
        <AvoidMistakesModal
          setAvoidMistakesModal={setAvoidMistakesModal}
          setIsExit={setIsExit}
        />
      )}
    </>
  );
}
export default CareerCreate;
