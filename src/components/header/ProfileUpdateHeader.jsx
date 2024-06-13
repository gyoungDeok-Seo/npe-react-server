import styled from "styled-components";
import { CreateSiteContext } from "../../context/CreateSiteContext";
import { useContext, useEffect, useState } from "react";
import { CreateSkillsContext } from "../../context/CreateSkillsContext";
import { ProfileUpdateContext } from "../../context/ProfileUpdateContext";
import { CreateEductaionContext } from "../../context/CreateEductaionContext";
import { CreateCareerContext } from "../../context/CreateCareerContext";
import { useLocation } from "react-router-dom";

const ProfileUpdateHeaderContainer = styled.nav`
  position: fixed;
  z-index: 20;
  display: flex;
  height: 3.5rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-width: 1px;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-style: solid;
  border-color: rgb(203 213 225 / 1);
  background-color: rgb(255 255 255 / 1);
  padding-left: 1rem;
  padding-right: 1rem;
`;
const ExitProfileUpdateBtn = styled.button`
  padding: 0;
`;
const ExitProfileSvg = styled.svg`
  fill: #0f172a;
`;
const ProfileUpdateHeaderCenterSpace = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
`;
const SubmitProfileUpdateBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  border-width: 1px;
  border-style: solid;
  border-color: #334155;
  background-color: #334155;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: #fff;
  &:disabled {
    opacity: 0.7;
  }
`;
const SubmitProfileUpdateBtnText = styled.span`
  -webkit-line-clamp: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const ProfileUpdateHeader = ({ navigate, setAvoidMistakesModal }) => {
  // const { datas: sites } = useContext(CreateSiteContext);
  // const { datas: skills } = useContext(CreateSkillsContext);
  // const { datas: profile } = useContext(ProfileUpdateContext);
  // const { datas: eductaion } = useContext(CreateEductaionContext);
  // const { datas: career } = useContext(CreateCareerContext);

  const location = useLocation();
  const [isDisabled, setIsDisabled] = useState(true);

  // useEffect(() => {
  //   let isValid = false;

  //   if (location.pathname.startsWith("/profiles/update")) {
  //     isValid =
  //       profile.name !== "" && profile.ref !== "" && profile.description !== "";
  //   } else if (location.pathname.startsWith("/profiles/careers/create")) {
  //     isValid =
  //       career.company !== "" &&
  //       career.job !== "" &&
  //       career.startYear !== "" &&
  //       career.startMonth !== "" &&
  //       career.endYear !== "" &&
  //       career.endMonth !== "";
  //   } else if (location.pathname.startsWith("/profiles/educations/create")) {
  //     isValid =
  //       eductaion.institution !== "" &&
  //       eductaion.course !== "" &&
  //       eductaion.startYear !== "" &&
  //       eductaion.startMonth !== "" &&
  //       eductaion.endYear !== "" &&
  //       eductaion.endMonth !== "" &&
  //       eductaion.link !== "" &&
  //       eductaion.description !== "";
  //   } else if (location.pathname.startsWith("/profiles/sites/create")) {
  //     isValid = sites.url !== "" && sites.name !== "";
  //   } else if (location.pathname.startsWith("/profiles/skills")) {
  //     isValid = skills.skills.length > 0;
  //   }

  //   setIsDisabled(!isValid);
  // }, [profile, career, eductaion, sites, skills, location.pathname]);

  const handleUpdateProfile = () => {
    navigate("/profiles");
  };

  const handleAvoidMistakesModal = () => {
    setAvoidMistakesModal(true);
  };

  return (
    <ProfileUpdateHeaderContainer>
      <ExitProfileUpdateBtn type="button" onClick={handleAvoidMistakesModal}>
        <ExitProfileSvg
          width="24"
          height="24"
          strokeWidth="0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g id="style=outline">
              <path
                id="Vector (Stroke)"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.7071 4.2929C11.0976 4.68342 11.0976 5.31659 10.7071 5.70711L5.41423 10.9999H21C21.5523 10.9999 22 11.4477 22 11.9999C22 12.5522 21.5523 12.9999 21 12.9999H5.4142L10.7071 18.2929C11.0976 18.6834 11.0976 19.3166 10.7071 19.7071C10.3166 20.0976 9.68341 20.0976 9.29289 19.7071L2.29289 12.7071C2.10535 12.5195 2 12.2652 2 11.9999C2 11.7347 2.10536 11.4804 2.2929 11.2928L9.2929 4.29289C9.68342 3.90237 10.3166 3.90237 10.7071 4.2929Z"
              ></path>
            </g>
          </g>
        </ExitProfileSvg>
      </ExitProfileUpdateBtn>
      <ProfileUpdateHeaderCenterSpace />
      <SubmitProfileUpdateBtn
        type="button"
        onClick={handleUpdateProfile}
        disabled={isDisabled}
      >
        <SubmitProfileUpdateBtnText>완료</SubmitProfileUpdateBtnText>
      </SubmitProfileUpdateBtn>
    </ProfileUpdateHeaderContainer>
  );
};

export default ProfileUpdateHeader;
