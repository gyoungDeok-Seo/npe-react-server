import styled from "styled-components";
import TabBox from "../../components/profiles/Intro/TabBox";
import ToolBox from "../../components/profiles/Intro/ToolBox";

const ProfileTopBox = styled.div`
    background-color: rgb(255 255 255 / 1);
`;
const ProfileTopInner = styled.div`
    width: 1024px;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    margin-left: auto;
    margin-right: auto;
    gap: 3rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
`;
const ProfileTopGirdBox = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: span 8 / span 8;
    grid-column-start: 3;
    gap: 2rem;
`;
const ProfileDescriptionTop = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;
const ProfileDescriptionProfileImg = styled.img`
    border-color: rgb(226 232 240 / 1);
    background-color: rgb(255 255 255 / 1);
    border-radius: 9999px;
    -o-object-fit: cover;
    border-width: 1px;
    border-style: solid;
    object-fit: cover;
    flex: none;
    overflow: hidden;
`;
const ProfileNameBox = styled.div`
    margin-top: 2rem;
`;
const ProfileName = styled.span`
    color: #0f172a;
    font-weight: 600;
    font-size: 1.875rem;
    display: inline;
    margin-bottom: 0;
`;
const ProfileJob = styled.p`
    color: #334155;
    font-size: 1rem;
`;
const ProfileDescription = styled.p`
    color: #0f172a;
    line-height: 2;
    font-size: 1rem;
    white-space: pre-line;
`;

function Intro({ tab, setTab, member, same }) {
    return (
        <>
            <ProfileTopBox>
                <ProfileTopInner>
                    <ProfileTopGirdBox>
                        <div>
                            <ProfileDescriptionTop>
                                <ProfileDescriptionProfileImg width="120" height="120" src={member && member.kakaoProfileUrl} alt="프로필 이미지" />
                                <ToolBox same={same} />
                            </ProfileDescriptionTop>
                            <ProfileNameBox>
                                <div>
                                    <ProfileName style={{ verticalAlign: "middle" }}>{member && member.memberName}</ProfileName>
                                </div>
                                <ProfileJob>{member && member.memberPosition}</ProfileJob>
                            </ProfileNameBox>
                        </div>
                        <ProfileDescription>{member && member.memberIntro}</ProfileDescription>
                    </ProfileTopGirdBox>
                </ProfileTopInner>
            </ProfileTopBox>
            <TabBox tab={tab} setTab={setTab} />
        </>
    );
}
export default Intro;
