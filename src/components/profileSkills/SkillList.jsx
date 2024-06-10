import styled from "styled-components";
import { popularSkills } from "../../service/dummyData";
import { useContext } from "react";
import { CreateSkillsContext } from "../../context/CreateSkillsContext";

const CareerSkillModalSkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
const CareerSkillModalSkillBtn = styled.button`
  color: rgb(15 23 42 / 1);
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background-color: ${(props) =>
    props.selected ? "#334155" : "rgb(255 255 255)"};
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
function SkillList() {
  const { datas, setDatas } = useContext(CreateSkillsContext);
  const handleSkillClick = (skill) => {
    setDatas((prevDatas) => ({
      ...prevDatas,
      skills: prevDatas.skills.includes(skill)
        ? prevDatas.skills.filter((s) => s !== skill)
        : [...prevDatas.skills, skill],
    }));
  };

  return (
    <CareerSkillModalSkillList>
      {popularSkills.map((skill) => (
        <CareerSkillModalSkillBtn
          key={skill}
          type="button"
          onClick={() => handleSkillClick(skill)}
          selected={datas.skills.includes(skill)}
        >
          <CareerSkillModalSkillBtnText selected={datas.skills.includes(skill)}>
            {skill}
          </CareerSkillModalSkillBtnText>
        </CareerSkillModalSkillBtn>
      ))}
    </CareerSkillModalSkillList>
  );
}
export default SkillList;
