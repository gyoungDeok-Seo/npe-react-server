import { useContext, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setSkills } from "../../redux/createSkills";

const CareerSkillModalCreateItemBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: -moz-fit-content;
  width: fit-content;
  color: rgb(255 255 255 / 1);
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background-color: #334155;
  border-color: #334155;
  border-style: solid;
  border-width: 1px;
  border-radius: 9999px;
`;

const CareerSkillModalCreateItemText = styled.h3`
  line-height: 1;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 0.875rem;
  font-weight: 700;
`;

const CareerSkillModalCreateItemSvgBox = styled.div`
  display: block;
  border-width: 0;
  padding: 0;
`;

const CareerSkillModalCreateItemSvg = styled.svg`
  fill: #fff;
  stroke: #fff;
  display: block;
`;

function SelectSkillItem() {
  const createSkills = useSelector((state) => state.createSkills);
  const dispatch = useDispatch();

  const handleSkillClick = (skill) => {
    const skillExists = createSkills.skills.some((item) => item.id === skill.id);

    if (skillExists) {
      const updatedSkills = createSkills.skills.filter((item) => item.id !== skill.id);
      dispatch(setSkills(updatedSkills));
    } else {
      const updatedSkills = [...createSkills.skills, skill];
      dispatch(setSkills(updatedSkills));
    }
  };

  return (
    <>
      {createSkills.skills.map((skill) => (
        <CareerSkillModalCreateItemBtn key={skill.id} type="button">
          <CareerSkillModalCreateItemText>
            {skill.skillName}
          </CareerSkillModalCreateItemText>
          <CareerSkillModalCreateItemSvgBox
            role="presentation"
            onClick={() => handleSkillClick(skill)}
          >
            <CareerSkillModalCreateItemSvg
              width="16"
              height="16"
              strokeWidth="0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <g id="style=solid">
                  <path
                    id="Vector (Stroke)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                  ></path>
                </g>
              </g>
            </CareerSkillModalCreateItemSvg>
          </CareerSkillModalCreateItemSvgBox>
        </CareerSkillModalCreateItemBtn>
      ))}
    </>
  );
}

export default SelectSkillItem;