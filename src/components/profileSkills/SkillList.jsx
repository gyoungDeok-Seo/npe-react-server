import { useState } from "react";
import styled from "styled-components";

const CareerSkillModalSkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
const CareerSkillModalSkillBtn = styled.button`
  --tw-text-opacity: 1;
  color: rgb(15 23 42 / var(--tw-text-opacity));
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  --tw-bg-opacity: 1;
  background-color: ${(props) =>
    props.selected ? "#334155" : "rgb(255 255 255)"};
  --tw-border-opacity: 1;
  border-color: ${(props) => (props.selected ? "#334155" : "rgb(226 232 240)")};
  border-style: solid;
  border-width: 1px;
  border-radius: 9999px;
`;
const CareerSkillModalSkillBtnText = styled.h3`
  color: ${(props) => (props.selected ? "#fff" : "#0f172a")};
  line-height: 1;
  font-weight: 700;
  font-size: 0.875rem;
  margin-top: 0;
  margin-bottom: 0;
`;
function SkillList({setSelectedSkills, selectedSkills}) {

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
  const handleSkillClick = (skill) => {
    setSelectedSkills((prevSelectedSkills) =>
      prevSelectedSkills.includes(skill)
        ? prevSelectedSkills.filter((s) => s !== skill)
        : [...prevSelectedSkills, skill]
    );
  };

  return (
    <CareerSkillModalSkillList>
      {popularSkills.map((skill) => (
        <CareerSkillModalSkillBtn
          key={skill}
          type="button"
          onClick={() => handleSkillClick(skill)}
          selected={selectedSkills.includes(skill)}
        >
          <CareerSkillModalSkillBtnText
            selected={selectedSkills.includes(skill)}
          >
            {skill}
          </CareerSkillModalSkillBtnText>
        </CareerSkillModalSkillBtn>
      ))}
    </CareerSkillModalSkillList>
  );
}
export default SkillList;
