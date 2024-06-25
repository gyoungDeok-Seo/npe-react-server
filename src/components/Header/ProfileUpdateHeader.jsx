import styled from "styled-components";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSkills } from "../../redux/createSkills";

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
    &:not(:disabled):hover {
        background-color: var(--color-background-button-primary-bold-hover, #1e293b);
    }
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

const ProfileUpdateHeader = ({ member, navigate, setAvoidMistakesModal }) => {
    const profileUpdate = useSelector((state) => state.profileUpdate);
    const createSkills = useSelector((state) => state.createSkills);
    const createCareer = useSelector((state) => state.createCareer);
    const memberCareer = useSelector((state) => state.careerList);
    const createEducation = useSelector((state) => state.createEducation);
    const educationList = useSelector((state) => state.educationList);

    const getMemberSkillsListFetch = async () => {
        const response = await fetch(`http://localhost:10000/members/api/skill?memberId=${member.id}`, {
            method: "GET",
            credentials: "include", // 세션 쿠키를 포함하여 요청
        });

        let data = await response.json();

        data = await data.map((skill) => ({
            id: skill.skillId,
            skillName: skill.skillName,
        }));

        return data;
    };

    const createCareerFetch = async (careerInfo) => {
        const response = await fetch(`http://localhost:10000/members/api/create-career`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(careerInfo),
        });
    };

    const updateCareerFetch = async (createCareer, listInfo) => {
        const response = await fetch(`http://localhost:10000/members/api/update-career`, {
            method: "PATCH",
            credentials: "include",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({ createCareer, listInfo }),
        });

        if (response.ok) {
            navigate(`/profile/${member.id}`);
        }
    };

    const memberSkillListModifyFetch = async (modifyInfo) => {
        const response = await fetch(`http://localhost:10000/members/api/skill`, {
            method: "POST",
            credentials: "include", // 세션 쿠키를 포함하여 요청,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(modifyInfo),
        });
    };

    const memberInfoModify = async () => {
        const modifyInfo = {
            memberName: profileUpdate.name,
            memberPosition: profileUpdate.ref,
            memberIntro: profileUpdate.description,
        };

        const response = await fetch(`http://localhost:10000/members/api/member-info/modify`, {
            method: "PATCH",
            credentials: "include", // 세션 쿠키를 포함하여 요청,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(modifyInfo),
        });
    };

    const createEducationFetch = async () => {
        const response = await fetch(`http://localhost:10000/members/api/create-education`, {
            method: "POST",
            credentials: "include", // 세션 쿠키를 포함하여 요청,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(createEducation),
        });
    };

    const updateEducationFetch = async () => {
        const response = await fetch(`http://localhost:10000/members/api/update-education`, {
            method: "PATCH",
            credentials: "include", // 세션 쿠키를 포함하여 요청,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(createEducation),
        });
    };

    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        let isValid = false;

        if (pathname.startsWith("/profiles/update")) {
            isValid = profileUpdate.name !== "" && profileUpdate.ref !== "";
        } else if (pathname.startsWith("/profiles/careers/create") || pathname.startsWith("/profiles/careers/update")) {
            isValid = createCareer.companyName !== "" && createCareer.memberPosition !== "" && createCareer.careerStart !== "" && createCareer.careerEnd !== "";
        } else if (pathname.startsWith("/profiles/educations/create") || pathname.startsWith("/profiles/educations/update")) {
            isValid = createEducation.educationInstitution !== "" && createEducation.educationStart !== "" && createEducation.educationEnd !== "";
        } else if (pathname.startsWith("/profiles/skills")) {
            isValid = createSkills.skills.length > 0;
        }
        setIsDisabled(!isValid);
    }, [profileUpdate, createSkills, createCareer, createEducation, pathname]);

    const handleUpdateProfile = async () => {
        if (pathname.startsWith("/profiles/update")) {
            await memberInfoModify();
            navigate(`/profile/${member.id}`);
        } else if (pathname.startsWith("/profiles/careers")) {
            if (pathname.includes("/create")) {
                await createCareerFetch(createCareer);
                navigate(`/profile/${member.id}`);
            } else {
                const careerId = parseInt(pathname.split("/")[4]);

                const getDiffLists = (originalList, modifiedList, key) => {
                    const addList = modifiedList.filter((modifiedItem) => !originalList.some((originalItem) => originalItem[key] === modifiedItem[key]));
                    const removeList = originalList.filter((originalItem) => !modifiedList.some((modifiedItem) => modifiedItem[key] === originalItem[key]));

                    return { addList, removeList };
                };

                const { careerIndustries: memberCareerIndustries, careerSkills: memberCareerSkills } = memberCareer.careers.find((item) => item.id === careerId) || {};
                const { careerIndustries: modifyCareerIndustries, careerSkills: modifyCareerSkills } = createCareer;

                const { addList: addIndustryList, removeList: removeIndustryList } = getDiffLists(memberCareerIndustries, modifyCareerIndustries, "industryId");
                const { addList: addSkillList, removeList: removeSkillList } = getDiffLists(memberCareerSkills, modifyCareerSkills, "skillId");

                const mapWithCareerId = (list, key) =>
                    list.map((item) => ({
                        careerId,
                        ...item,
                    }));

                const formattedAddIndustryList = mapWithCareerId(addIndustryList, "industryId");
                const formattedAddSkillList = mapWithCareerId(addSkillList, "skillId");

                const listInfo = {
                    addIndustryList: formattedAddIndustryList,
                    removeIndustryList: removeIndustryList,
                    addSkillList: formattedAddSkillList,
                    removeSkillList: removeSkillList,
                };

                await updateCareerFetch(createCareer, listInfo);
            }
        } else if (pathname.startsWith("/profiles/skills")) {
            const skillList = await getMemberSkillsListFetch();

            const filteredCreateSkills = createSkills.skills.filter((createSkill) => !skillList.some((skill) => skill.id === createSkill.id));
            const filteredRemoveSkills = skillList.filter((skill) => !createSkills.skills.some((createSkill) => createSkill.id === skill.id));

            const modifyInfo = {
                addList: filteredCreateSkills,
                removeList: filteredRemoveSkills,
            };

            await memberSkillListModifyFetch(modifyInfo);

            const updateSkills = [...createSkills.skills.filter((skill) => !filteredRemoveSkills.some((removeSkill) => removeSkill.id === skill.id)), ...filteredCreateSkills];

            dispatch(setSkills(updateSkills));
            navigate(`/profile/${member.id}`);
        } else if (pathname.startsWith("/profiles/educations")) {
            if (pathname.includes("/create")) {
                await createEducationFetch();
                navigate(`/profile/${member.id}`);
            } else {
                await updateEducationFetch();
                navigate(`/profile/${member.id}`);
            }
        }
    };

    const handleAvoidMistakesModal = () => {
        setAvoidMistakesModal(true);
    };

    return (
        <ProfileUpdateHeaderContainer>
            <ExitProfileUpdateBtn type="button" onClick={handleAvoidMistakesModal}>
                <ExitProfileSvg width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <g id="style=outline">
                            <path id="Vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M10.7071 4.2929C11.0976 4.68342 11.0976 5.31659 10.7071 5.70711L5.41423 10.9999H21C21.5523 10.9999 22 11.4477 22 11.9999C22 12.5522 21.5523 12.9999 21 12.9999H5.4142L10.7071 18.2929C11.0976 18.6834 11.0976 19.3166 10.7071 19.7071C10.3166 20.0976 9.68341 20.0976 9.29289 19.7071L2.29289 12.7071C2.10535 12.5195 2 12.2652 2 11.9999C2 11.7347 2.10536 11.4804 2.2929 11.2928L9.2929 4.29289C9.68342 3.90237 10.3166 3.90237 10.7071 4.2929Z"></path>
                        </g>
                    </g>
                </ExitProfileSvg>
            </ExitProfileUpdateBtn>
            <ProfileUpdateHeaderCenterSpace />
            <SubmitProfileUpdateBtn type="button" onClick={handleUpdateProfile} disabled={isDisabled}>
                <SubmitProfileUpdateBtnText>완료</SubmitProfileUpdateBtnText>
            </SubmitProfileUpdateBtn>
        </ProfileUpdateHeaderContainer>
    );
};

export default ProfileUpdateHeader;
