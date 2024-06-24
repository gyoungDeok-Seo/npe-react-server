import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import NonExistent from "../../components/profiles/Intro/NonExistent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSkills } from "../../redux/createSkills";
import { setCareers } from "../../redux/careerList";
import { setEducations } from "../../redux/educationList";
import NonePost from "../../components/profiles/Post/NonePost";

const ProfileContentContainer = styled.div`
    border-color: #e2e8f0;
    border-width: 0;
    border-style: solid;
    border-top-width: 1px;
`;

const ProfileContentContainerInner = styled.div`
    background-color: rgb(226 232 240 / 1);
    display: flex;
    flex-direction: column;
    gap: 1px;
`;
const ProfileContentBox = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    width: 1024px;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    -moz-column-gap: 3rem;
    column-gap: 3rem;
    row-gap: 2rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 5rem;
`;
const ProfileContentInner = styled.div`
    grid-column: span 8 / span 8;
    grid-column-start: 3;
`;
const ProfileProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-top: 1.25rem;
`;
const ContentBox = styled.div`
    font-size: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    background-color: rgb(255 255 255 / 1);
    width: 100%;
`;
const ContentTextBox = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ContentText = styled.p`
    color: rgb(15 23 42 / 1);
    font-weight: 700;
    font-size: 1.125rem;
    border-width: 0;
`;
const ContentUpdateBtn = styled(Link)`
    border-width: 0;
`;
const ContentUpdateSvg = styled.svg`
    fill: #64748b;
    stroke: #64748b;
`;
const SkillList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    row-gap: 0.75rem;
    margin-top: 1.25rem;
`;
const SkillItem = styled.div`
    border-radius: 9999px;
    border-width: 1px;
    border-style: solid;
    border-color: #e2e8f0;
    background-color: #f1f5f9;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 6px;
    padding-bottom: 6px;
    color: #334155;
`;
const SkillName = styled.h3`
    margin-top: 0;
    margin-bottom: 0;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.5;
    color: #64748b;
`;
const ContentList = styled.div`
    margin-top: 1.25rem;
`;
const ContentItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 0.5rem;
    padding-bottom: 1.25rem;
`;
const ContentSvg = styled.svg`
    flex: none;
    fill: #cbd5e1;
`;
const ContentContent = styled.div`
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
    font-size: 1rem;
`;
const ContentContentName = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.25rem;
    color: #0f172a;
    font-weight: 600;
`;
const ContentContentPeriod = styled.p`
    color: #64748b;
    font-size: 0.875rem;
    font-weight: 600;
`;
const ContentContentAnother = styled.p`
    margin-top: 0.5rem;
    white-space: pre-line;
    font-size: 0.875rem;
    color: #334155;
    font-weight: 500;
`;
const ContentContentLink = styled.div`
    align-self: flex-start;
    margin-top: 0.5rem;
    font-size: 0.875rem;
    padding: 0.25rem;
    color: #334155;
    text-decoration-line: underline;
`;
const ContentContentEditBtn = styled(Link)`
    border-width: 0;
`;
const ContentContentEditSvg = styled.svg`
    fill: #64748b;
    stroke: #64748b;
`;
const ContentLinkSvg = styled.svg`
    fill: #334155;
    flex: none;
`;

function Profile({ member, same }) {
    const isExistence = false;
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const memberSkills = useSelector((state) => state.createSkills);
    const memberCareer = useSelector((state) => state.careerList);
    const memberEducation = useSelector((state) => state.educationList);

    const arraysEqual = (arr1, arr2) => {
        const sortedArr1 = arr1.slice().sort((a, b) => a.id - b.id); // id를 기준으로 정렬
        const sortedArr2 = arr2.slice().sort((a, b) => a.id - b.id); // id를 기준으로 정렬
        return JSON.stringify(sortedArr1) === JSON.stringify(sortedArr2);
    };

    useEffect(() => {
        const fetchMemberSkill = async () => {
            const response = await fetch(`http://localhost:10000/members/api/skill?memberId=${pathname.split("/")[2]}`, {
                method: "GET",
                credentials: "include",
            });
            const data = await response.json();

            const formattedData = data.map((skill) => ({
                id: skill.skillId,
                skillName: skill.skillName,
            }));

            if (!arraysEqual(memberSkills?.skills, formattedData)) {
                dispatch(setSkills(formattedData));
            }
        };

        const fetchMemberCareer = async () => {
            const response = await fetch(`http://localhost:10000/members/api/career-list?memberId=${pathname.split("/")[2]}`, {
                method: "GET",
                credentials: "include",
            });

            let data = await response.json();

            if (!arraysEqual(memberCareer?.careers, data)) {
                dispatch(setCareers(data));
            }
        };

        const fetchMemberEducation = async () => {
            const response = await fetch(`http://localhost:10000/members/api/education-list?memberId=${pathname.split("/")[2]}`, {
                method: "GET",
                credentials: "include",
            });

            let data = await response.json();

            if (!arraysEqual(memberEducation?.educations, data)) {
                dispatch(setEducations(data));
            }
        };

        fetchMemberSkill();
        fetchMemberCareer();
        fetchMemberEducation();
    }, [pathname, memberSkills, memberCareer, memberEducation]);

    const formatDate = (dateString) => {
        if (!dateString) return ""; // dateString이 없는 경우 빈 문자열 반환
        const [year, month] = dateString.split("-");
        return `${year}.${month}`;
    };

    return (
        <ProfileContentContainer>
            <ProfileContentBox>
                <ProfileContentInner>
                    <ProfileProfileBox>
                        <div>
                            <div>
                                <div>
                                    {memberSkills.skills.length != 0 || memberCareer.careers.length != 0 || memberEducation?.educations.length != 0 ? (
                                        <ProfileContentContainerInner>
                                            {!same && memberSkills.skills.length == 0 ? (
                                                <></>
                                            ) : (
                                                <ContentBox>
                                                    <ContentTextBox>
                                                        <div>
                                                            <ContentText>스킬</ContentText>
                                                        </div>
                                                        {same && memberSkills && memberSkills.skills.length > 0 && (
                                                            <ContentUpdateBtn to="/profiles/skills">
                                                                <ContentUpdateSvg width="20" height="20" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                        <g id="style=outline">
                                                                            <path id="Vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M18.5 3.99976C18.1021 3.99976 17.7205 4.15783 17.4391 4.43919L16.6462 5.23209L18.768 7.35387L19.5609 6.56098C19.8423 6.27961 20.0003 5.898 20.0003 5.50009C20.0003 5.10217 19.8423 4.72056 19.5609 4.43919C19.2795 4.15783 18.8979 3.99976 18.5 3.99976ZM20.9751 7.97519C21.6315 7.31875 22.0003 6.42843 22.0003 5.50009C22.0003 4.57174 21.6315 3.68142 20.9751 3.02498C20.3187 2.36854 19.4283 1.99976 18.5 1.99976C17.5717 1.99976 16.6813 2.36854 16.0249 3.02498L2.29289 16.757C2.10536 16.9445 2 17.1989 2 17.4641V21.0361C2 21.5884 2.44772 22.0361 3 22.0361H6.5C6.76522 22.0361 7.01957 21.9307 7.20711 21.7432L20.9751 7.97519ZM17.3538 8.76808L15.232 6.6463L4 17.8783V20.0361H6.08579L17.3538 8.76808Z"></path>
                                                                        </g>
                                                                    </g>
                                                                </ContentUpdateSvg>
                                                            </ContentUpdateBtn>
                                                        )}
                                                    </ContentTextBox>
                                                    {memberSkills && memberSkills.skills.length > 0 ? (
                                                        <SkillList>
                                                            {memberSkills.skills.map((memberSkill, index) => (
                                                                <SkillItem key={index}>
                                                                    <SkillName>{memberSkill.skillName}</SkillName>
                                                                </SkillItem>
                                                            ))}
                                                        </SkillList>
                                                    ) : (
                                                        <NonExistent partText=" 활용할 수 있는 스킬을 알려주세요." part="경력" url="/profiles/skills" />
                                                    )}
                                                </ContentBox>
                                            )}
                                            {!same && memberCareer.careers.length == 0 ? (
                                                <></>
                                            ) : (
                                                <ContentBox>
                                                    <ContentTextBox>
                                                        <div>
                                                            <ContentText>경력</ContentText>
                                                        </div>
                                                        {same && memberCareer && memberCareer.careers.length > 0 && (
                                                            <ContentUpdateBtn to={"/profiles/careers/create"}>
                                                                <ContentUpdateSvg width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                        <g id="style=outline">
                                                                            <path id="Vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z"></path>
                                                                        </g>
                                                                    </g>
                                                                </ContentUpdateSvg>
                                                            </ContentUpdateBtn>
                                                        )}
                                                    </ContentTextBox>
                                                    {memberCareer && memberCareer.careers.length > 0 ? (
                                                        <ContentList>
                                                            {memberCareer.careers.map((career, index) => (
                                                                <ContentItem ket={index}>
                                                                    <ContentSvg width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <g>
                                                                            <g id="style=outline">
                                                                                <path
                                                                                    id="Vector (Stroke)"
                                                                                    fillRule="evenodd"
                                                                                    clipRule="evenodd"
                                                                                    d="M7.8787 1.87868C8.44131 1.31607 9.20437 1 10 1H14C14.7957 1 15.5587 1.31607 16.1213 1.87868C16.6839 2.44129 17 3.20435 17 4V5H19C19.7957 5 20.5587 5.31607 21.1213 5.87868C21.684 6.44129 22 7.20435 22 8V13.2317C22.0004 13.247 22.0004 13.2624 22 13.2776V18C22 18.7957 21.684 19.5587 21.1213 20.1213C20.5587 20.6839 19.7957 21 19 21H5.00002C4.20437 21 3.44131 20.6839 2.8787 20.1213C2.31609 19.5587 2.00002 18.7957 2.00002 18V13.2776C1.99967 13.2623 1.99967 13.247 2.00002 13.2317V8C2.00002 7.20435 2.31609 6.44129 2.8787 5.87868C3.44131 5.31607 4.20437 5 5.00002 5H7.00002V4C7.00002 3.20435 7.31609 2.44129 7.8787 1.87868ZM9.00002 5H15V4C15 3.73478 14.8947 3.48043 14.7071 3.29289C14.5196 3.10536 14.2652 3 14 3H10C9.7348 3 9.48045 3.10536 9.29291 3.29289C9.10538 3.48043 9.00002 3.73478 9.00002 4V5ZM5.00002 7C4.7348 7 4.48045 7.10536 4.29291 7.29289C4.10538 7.48043 4.00002 7.73478 4.00002 8V12.5703C6.49099 13.4944 9.18498 14 12 14L12.0012 14C14.7331 14.0033 17.4418 13.5185 20 12.5701V8C20 7.73478 19.8947 7.48043 19.7071 7.29289C19.5196 7.10536 19.2652 7 19 7H5.00002ZM20 14.6915C17.4255 15.5602 14.7231 16.0033 11.9994 16C9.20278 15.9999 6.51277 15.54 4.00002 14.6918V18C4.00002 18.2652 4.10538 18.5196 4.29291 18.7071C4.48045 18.8946 4.7348 19 5.00002 19H19C19.2652 19 19.5196 18.8946 19.7071 18.7071C19.8947 18.5196 20 18.2652 20 18V14.6915ZM11 12C11 11.4477 11.4477 11 12 11H12.01C12.5623 11 13.01 11.4477 13.01 12C13.01 12.5523 12.5623 13 12.01 13H12C11.4477 13 11 12.5523 11 12Z"
                                                                                ></path>
                                                                            </g>
                                                                        </g>
                                                                    </ContentSvg>
                                                                    <ContentContent>
                                                                        <ContentContentName>
                                                                            {career.companyName} - {career.memberPosition}
                                                                        </ContentContentName>
                                                                        <ContentContentPeriod>
                                                                            {formatDate(career.careerStart)} ~ {career.careerEnd === "1111-11-11" ? "현재" : formatDate(career.careerEnd)}
                                                                        </ContentContentPeriod>
                                                                        {career.careerIndustries.length > 0 ? (
                                                                            <div>
                                                                                <ContentContentAnother>
                                                                                    산업 분야:{" "}
                                                                                    {career.careerIndustries.map((careerIndustry, index) => (
                                                                                        <>
                                                                                            {careerIndustry.industryName}
                                                                                            {index < career.careerIndustries.length - 1 && ", "}
                                                                                        </>
                                                                                    ))}
                                                                                </ContentContentAnother>
                                                                            </div>
                                                                        ) : (
                                                                            <></>
                                                                        )}
                                                                        {career.careerSkills.length > 0 ? (
                                                                            <div>
                                                                                <ContentContentAnother>
                                                                                    스킬:{" "}
                                                                                    {career.careerSkills.map((careerSkill, index) => (
                                                                                        <>
                                                                                            {careerSkill.skillName}
                                                                                            {index < career.careerSkills.length - 1 && ", "}
                                                                                        </>
                                                                                    ))}
                                                                                </ContentContentAnother>
                                                                            </div>
                                                                        ) : (
                                                                            <></>
                                                                        )}
                                                                        {career.description ? (
                                                                            <div>
                                                                                <ContentContentAnother>{career.description}</ContentContentAnother>
                                                                            </div>
                                                                        ) : (
                                                                            <></>
                                                                        )}
                                                                        {/* <ContentContentLink href="https://github.com/team-npe" target="_blank" rel="noreferrer">
                                                                        링크 이동
                                                                        </ContentContentLink> */}
                                                                    </ContentContent>
                                                                    {same && (
                                                                        <ContentContentEditBtn to={`/profiles/careers/update/${career.id}`}>
                                                                            <ContentContentEditSvg width="20" height="20" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                                <g>
                                                                                    <g id="style=outline">
                                                                                        <path id="Vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M18.5 3.99976C18.1021 3.99976 17.7205 4.15783 17.4391 4.43919L16.6462 5.23209L18.768 7.35387L19.5609 6.56098C19.8423 6.27961 20.0003 5.898 20.0003 5.50009C20.0003 5.10217 19.8423 4.72056 19.5609 4.43919C19.2795 4.15783 18.8979 3.99976 18.5 3.99976ZM20.9751 7.97519C21.6315 7.31875 22.0003 6.42843 22.0003 5.50009C22.0003 4.57174 21.6315 3.68142 20.9751 3.02498C20.3187 2.36854 19.4283 1.99976 18.5 1.99976C17.5717 1.99976 16.6813 2.36854 16.0249 3.02498L2.29289 16.757C2.10536 16.9445 2 17.1989 2 17.4641V21.0361C2 21.5884 2.44772 22.0361 3 22.0361H6.5C6.76522 22.0361 7.01957 21.9307 7.20711 21.7432L20.9751 7.97519ZM17.3538 8.76808L15.232 6.6463L4 17.8783V20.0361H6.08579L17.3538 8.76808Z"></path>
                                                                                    </g>
                                                                                </g>
                                                                            </ContentContentEditSvg>
                                                                        </ContentContentEditBtn>
                                                                    )}
                                                                </ContentItem>
                                                            ))}
                                                        </ContentList>
                                                    ) : (
                                                        <NonExistent partText=" 지금 하고 있는 일, 혹은 이전에 한 일을 알려주세요." part="경력" url="/profiles/careers/create" />
                                                    )}
                                                </ContentBox>
                                            )}
                                            {!same && memberEducation?.educations.length == 0 ? (
                                                <></>
                                            ) : (
                                                <ContentBox aria-label="교육">
                                                    <ContentTextBox>
                                                        <div>
                                                            <ContentText>교육</ContentText>
                                                        </div>
                                                        {same && memberEducation && memberEducation?.educations.length > 0 && (
                                                            <ContentUpdateBtn to={"/profiles/educations/create"}>
                                                                <ContentUpdateSvg width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                    <g>
                                                                        <g id="style=outline">
                                                                            <path id="Vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z"></path>
                                                                        </g>
                                                                    </g>
                                                                </ContentUpdateSvg>
                                                            </ContentUpdateBtn>
                                                        )}
                                                    </ContentTextBox>
                                                    {memberEducation && memberEducation?.educations.length > 0 ? (
                                                        <ContentList>
                                                            {memberEducation?.educations.map((education, index) => (
                                                                <ContentItem ket={index}>
                                                                    <ContentSvg width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <g>
                                                                            <g id="style=outline">
                                                                                <g id="Union">
                                                                                    <path d="M12 10C12.5523 10 13 9.55229 13 9C13 8.44771 12.5523 8 12 8C11.4477 8 11 8.44771 11 9C11 9.55229 11.4477 10 12 10Z"></path>
                                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.5939 4.08619C11.8524 3.97127 12.1476 3.97127 12.4061 4.08619L21.4061 8.08619C21.7673 8.24669 22 8.60481 22 9C22 9.39519 21.7673 9.75331 21.4061 9.91381L18.0786 11.3927L18.8968 15.4838C18.9646 15.6515 19 15.824 19 16C19 17.6568 15.866 19 12 19C8.13401 19 5 17.6568 5 16C5 15.824 5.03538 15.6515 5.10325 15.4838L5.92145 11.3927L2.59386 9.91381C2.23273 9.75331 2 9.39519 2 9C2 8.60481 2.23273 8.24669 2.59386 8.08619L11.5939 4.08619ZM12.4061 13.9138L16.2054 12.2252L16.9302 15.8488C16.7869 15.9644 16.542 16.1201 16.1619 16.283C15.1987 16.6958 13.7286 17 12 17C10.2714 17 8.8013 16.6958 7.83809 16.283C7.458 16.1201 7.21313 15.9644 7.06984 15.8488L7.79456 12.2252L11.5939 13.9138C11.8524 14.0287 12.1476 14.0287 12.4061 13.9138ZM5.46221 9L12 11.9057L18.5378 9L12 6.09432L5.46221 9Z"></path>
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </ContentSvg>
                                                                    <ContentContent>
                                                                        <p className="content-content-name">
                                                                            {education.educationInstitution} - {education.educationCourse}
                                                                        </p>
                                                                        <ContentContentPeriod>
                                                                            {formatDate(education.educationStart)} ~ {education.educationEnd === "1111-11-11" ? "현재" : formatDate(education.educationEnd)}
                                                                        </ContentContentPeriod>
                                                                        {education.description ? (
                                                                            <div>
                                                                                <ContentContentAnother>{education.description}</ContentContentAnother>
                                                                            </div>
                                                                        ) : (
                                                                            <></>
                                                                        )}
                                                                        {/* <ContentContentLink href="https://github.com/team-npe" target="_blank" rel="noreferrer">
                                                                        링크 이동
                                                                        </ContentContentLink> */}
                                                                    </ContentContent>
                                                                    {same && (
                                                                        <ContentContentEditBtn to={`/profiles/educations/update/${education.id}`}>
                                                                            <ContentContentEditSvg width="20" height="20" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                                <g>
                                                                                    <g id="style=outline">
                                                                                        <path id="Vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M18.5 3.99976C18.1021 3.99976 17.7205 4.15783 17.4391 4.43919L16.6462 5.23209L18.768 7.35387L19.5609 6.56098C19.8423 6.27961 20.0003 5.898 20.0003 5.50009C20.0003 5.10217 19.8423 4.72056 19.5609 4.43919C19.2795 4.15783 18.8979 3.99976 18.5 3.99976ZM20.9751 7.97519C21.6315 7.31875 22.0003 6.42843 22.0003 5.50009C22.0003 4.57174 21.6315 3.68142 20.9751 3.02498C20.3187 2.36854 19.4283 1.99976 18.5 1.99976C17.5717 1.99976 16.6813 2.36854 16.0249 3.02498L2.29289 16.757C2.10536 16.9445 2 17.1989 2 17.4641V21.0361C2 21.5884 2.44772 22.0361 3 22.0361H6.5C6.76522 22.0361 7.01957 21.9307 7.20711 21.7432L20.9751 7.97519ZM17.3538 8.76808L15.232 6.6463L4 17.8783V20.0361H6.08579L17.3538 8.76808Z"></path>
                                                                                    </g>
                                                                                </g>
                                                                            </ContentContentEditSvg>
                                                                        </ContentContentEditBtn>
                                                                    )}
                                                                </ContentItem>
                                                            ))}
                                                        </ContentList>
                                                    ) : (
                                                        <NonExistent partText="현재 혹은 이전에 다녔던 학교, 부트캠프 등 교육기관을 입력해 주세요." part="교육" url="/profiles/educations/create" />
                                                    )}
                                                </ContentBox>
                                            )}
                                            {/* <ContentBox aria-label="링크">
                                            <ContentTextBox>
                                                <div>
                                                    <ContentText>링크</ContentText>
                                                </div>
                                                {isExistence && (
                                                    <ContentUpdateBtn type="button">
                                                        <ContentUpdateSvg width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <g>
                                                                <g id="style=outline">
                                                                    <path id="Vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z"></path>
                                                                </g>
                                                            </g>
                                                        </ContentUpdateSvg>
                                                    </ContentUpdateBtn>
                                                )}
                                            </ContentTextBox>
                                            {isExistence ? (
                                                <ContentList>
                                                    <ContentItem>
                                                        <ContentLinkSvg width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" fill="current" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M11.9989 5.72205e-06C5.37328 5.72205e-06 0 5.37257 0 12.0004C0 17.3015 3.43804 21.7996 8.20651 23.3871C8.8069 23.4969 9.02569 23.1263 9.02569 22.8081C9.02569 22.523 9.01538 21.7686 9.00949 20.7675C5.67163 21.4924 4.96738 19.1586 4.96738 19.1586C4.4215 17.7722 3.63474 17.4031 3.63474 17.4031C2.5452 16.6591 3.71725 16.6738 3.71725 16.6738C4.9217 16.7586 5.55524 17.9107 5.55524 17.9107C6.62562 19.7443 8.36417 19.2146 9.0478 18.9074C9.15682 18.1324 9.46696 17.6035 9.80951 17.3037C7.14497 17.0002 4.34342 15.9711 4.34342 11.3728C4.34342 10.0622 4.8112 8.99184 5.57882 8.15277C5.45505 7.84926 5.04325 6.62931 5.69668 4.97696C5.69668 4.97696 6.7037 4.65429 8.99622 6.20646C9.95316 5.94052 10.9801 5.80792 12.0004 5.80276C13.0199 5.80792 14.0461 5.94052 15.0045 6.20646C17.2956 4.65429 18.3011 4.97696 18.3011 4.97696C18.956 6.62931 18.5442 7.84926 18.4212 8.15277C19.1903 8.99184 19.6544 10.0622 19.6544 11.3728C19.6544 15.9828 16.8484 16.9972 14.1758 17.2941C14.606 17.6647 14.9898 18.3969 14.9898 19.5166C14.9898 21.1204 14.975 22.4147 14.975 22.8081C14.975 23.1293 15.1916 23.5028 15.8001 23.3856C20.5649 21.7952 24 17.3007 24 12.0004C24 5.37257 18.6267 5.72205e-06 11.9989 5.72205e-06Z"
                                                                fill="inherit"
                                                            ></path>
                                                        </ContentLinkSvg>
                                                        <ContentContent>
                                                            <a href="https://github.com/baek-si-hyun" target="_blank" rel="noreferrer" className="content-content-name">
                                                                깃헙
                                                            </a>
                                                        </ContentContent>
                                                        <ContentContentEditBtn type="button">
                                                            <ContentContentEditSvg width="20" height="20" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <g>
                                                                    <g id="style=outline">
                                                                        <path id="Vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M18.5 3.99976C18.1021 3.99976 17.7205 4.15783 17.4391 4.43919L16.6462 5.23209L18.768 7.35387L19.5609 6.56098C19.8423 6.27961 20.0003 5.898 20.0003 5.50009C20.0003 5.10217 19.8423 4.72056 19.5609 4.43919C19.2795 4.15783 18.8979 3.99976 18.5 3.99976ZM20.9751 7.97519C21.6315 7.31875 22.0003 6.42843 22.0003 5.50009C22.0003 4.57174 21.6315 3.68142 20.9751 3.02498C20.3187 2.36854 19.4283 1.99976 18.5 1.99976C17.5717 1.99976 16.6813 2.36854 16.0249 3.02498L2.29289 16.757C2.10536 16.9445 2 17.1989 2 17.4641V21.0361C2 21.5884 2.44772 22.0361 3 22.0361H6.5C6.76522 22.0361 7.01957 21.9307 7.20711 21.7432L20.9751 7.97519ZM17.3538 8.76808L15.232 6.6463L4 17.8783V20.0361H6.08579L17.3538 8.76808Z"></path>
                                                                    </g>
                                                                </g>
                                                            </ContentContentEditSvg>
                                                        </ContentContentEditBtn>
                                                    </ContentItem>
                                                </ContentList>
                                            ) : (
                                                <NonExistent partText="블로그, SNS등 다양한 링크로 나를 표현해보세요." part="링크" url="/profiles/sites/create" />
                                            )}
                                        </ContentBox> */}
                                        </ProfileContentContainerInner>
                                    ) : (
                                        <NonePost target={"등록된 회원 정보"} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </ProfileProfileBox>
                </ProfileContentInner>
            </ProfileContentBox>
        </ProfileContentContainer>
    );
}
export default Profile;
