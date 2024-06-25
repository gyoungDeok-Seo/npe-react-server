import { useSelector } from "react-redux";
import {
  CareerCreateButtonBox,
  CareerCreateButtonSvg,
  CareerCreateButtonText,
  CareerCreateLabel,
  CareerCreateRelativeBox,
  CareerInputBox,
} from "../../pages/CareerCreate";
import CareerSelectedList from "./CareerSelectedList";

const SkillSelect = ({ setCareerSkillModal }) => {
  const createCareer = useSelector((state) => state.createCareer);
  const handleCareerSkillModal = () => {
    setCareerSkillModal(true);
  };

  return (
    <CareerInputBox>
      <div className="part-title-box">
        <CareerCreateLabel>스킬</CareerCreateLabel>
      </div>
      {createCareer.careerSkills?.length === 0 ? (
        <CareerCreateRelativeBox>
          <CareerCreateButtonBox type="button" onClick={handleCareerSkillModal}>
            <CareerCreateButtonText>
              사용한 스킬을 입력해주세요.
            </CareerCreateButtonText>
            <CareerCreateButtonSvg
              width="24"
              height="24"
              strokeWidth="0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <g id="style=outline">
                  <path
                    id="arrowRight"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.5858 12L7.29289 20.2929C6.90237 20.6834 6.90237 21.3166 7.29289 21.7071C7.68342 22.0976 8.31658 22.0976 8.70711 21.7071L17.7071 12.7071C18.0976 12.3166 18.0976 11.6834 17.7071 11.2929L8.70711 2.29289C8.31658 1.90237 7.68342 1.90237 7.29289 2.29289C6.90237 2.68342 6.90237 3.31658 7.29289 3.70711L15.5858 12Z"
                  ></path>
                </g>
              </g>
            </CareerCreateButtonSvg>
          </CareerCreateButtonBox>
        </CareerCreateRelativeBox>
      ) : (
        <CareerSelectedList
          selectedList={createCareer.careerSkills}
          handleModal={handleCareerSkillModal}
        />
      )}
    </CareerInputBox>
  );
};
export default SkillSelect;
