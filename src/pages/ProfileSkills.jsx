import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AvoidMistakesModal from "../components/profiles/Modal/AvoidMistakesModal";
import SkillList from "../components/ProfileSkills/SkillList";
import SelectSkillItem from "../components/ProfileSkills/SelectSkillItem";
import SkillSearchInput from "../components/ProfileSkills/SkillSearchInput";
import MainHeader from "../components/Header/MainHeader";
const CareerSkillModalBox = styled.div`
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
const CareerSkillModalContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-height: 30rem;
  display: flex;
`;
const CareerSkillModalTitle = styled.h4`
  margin-bottom: 0;
  font-size: 1.25rem;
`;
const CareerSkillModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const CareerSkillModalRelativeBox = styled.div`
  position: relative;
  width: 100%;
`;
const CareerSkillModalSubTitle = styled.p`
  font-weight: 700;
  font-size: 0.875rem;
  margin-top: 1rem;
  margin-bottom: 0.75rem;
`;
const CareerSkillModalCraeteItemBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

function ProfileSkills() {
  const navigate = useNavigate(null);
  const [avoidMistakesModal, setAvoidMistakesModal] = useState(false);
  const [isExit, setIsExit] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const popularSkills = [
    "javascript",
    "React",
    "Github",
    "typescript",
    "css",
    "Java",
    "html",
    "Next.js",
    "MySQL",
    "python",
    "html5",
    "Node.js",
    "UI 디자인",
    "SpringBoot",
    "css3",
    "커뮤니케이션",
    "UX 디자인",
    "AWS",
    "Vue.js",
    "c언어",
    "Android",
    "React Query",
    "C++",
    "React Native",
    "Flutter",
    "c#",
    "Kotlin",
    "swift",
    "iOS",
    "Unity",
  ];
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
          <MainHeader setAvoidMistakesModal={setAvoidMistakesModal} />
          <div style={{ height: "3.5rem" }}></div>
          <CareerSkillModalBox>
            <CareerSkillModalContentBox>
              <CareerSkillModalTitle>
                내 스킬을 선택해 주세요.
              </CareerSkillModalTitle>
              {selectedSkills.length !== 0 && (
                <CareerSkillModalCraeteItemBox>
                  <SelectSkillItem
                    setSelectedSkills={setSelectedSkills}
                    selectedSkills={selectedSkills}
                  />
                </CareerSkillModalCraeteItemBox>
              )}
              <CareerSkillModalContent>
                <SkillSearchInput setSelectedSkills={setSelectedSkills} />
                <CareerSkillModalRelativeBox></CareerSkillModalRelativeBox>
                <div>
                  <CareerSkillModalSubTitle>인기 스킬</CareerSkillModalSubTitle>
                  <SkillList
                    setSelectedSkills={setSelectedSkills}
                    selectedSkills={selectedSkills}
                  />
                </div>
              </CareerSkillModalContent>
            </CareerSkillModalContentBox>
          </CareerSkillModalBox>
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
export default ProfileSkills;
