import styled from "styled-components";
import { popularSkills } from "../../service/dummyData";
import { useDispatch, useSelector } from "react-redux";
import { setSkills } from "../../redux/createSkills";
import { useEffect } from "react";

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
const SkillList = () => {
  const createSkills = useSelector((state) => state.createSkills);
  const dispatch = useDispatch();

  const handleSkillClick = (skill) => {
    dispatch(
      setSkills(
        createSkills.skills.includes(skill)
          ? createSkills.skills.filter((s) => s !== skill)
          : [...createSkills.skills, skill]
      )
    );
  };
  useEffect(() => {
    console.log(createSkills);
  }, [createSkills]);

  return (
    <CareerSkillModalSkillList>
      {popularSkills.map((skill) => (
        <CareerSkillModalSkillBtn
          key={skill}
          type="button"
          onClick={() => handleSkillClick(skill)}
          selected={createSkills.skills.includes(skill)}
        >
          <CareerSkillModalSkillBtnText
            selected={createSkills.skills.includes(skill)}
          >
            {skill}
          </CareerSkillModalSkillBtnText>
        </CareerSkillModalSkillBtn>
      ))}
    </CareerSkillModalSkillList>
  );
};

export default SkillList;
