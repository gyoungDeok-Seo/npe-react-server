import { useSelector } from "react-redux";
import styled from "styled-components";

const ProfileTabBox = styled.div`
    background-color: rgb(255 255 255 /1);
`;
const ProfileTabInner = styled.div`
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
`;
const ProfileTabList = styled.ul`
    display: flex;
    grid-column: span 8 / span 8;
    grid-column-start: 3;
`;
const ProfileTabItem = styled.li`
    position: relative;
    display: inline-block;
    flex: 1 1 0%;
`;
const ProfileTabBtn = styled.button`
    color: ${(props) => (props.tab ? "#0f172a" : "#64748b")};
    font-weight: 700;
    font-size: 0.875rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    background-color: #fff;
    width: 100%;
`;
const ProfileTabUnderBar = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0.125rem;
    width: 100%;
    background-color: #0f172a;
    opacity: ${(props) => (props.tab ? 1 : 0)};
`;

function TabBox({ tab, setTab }) {
    const memberQuestions = useSelector((state) => state.memberQuestions);
    const memberAnswers = useSelector((state) => state.memberAnswers);
    console.log(memberQuestions);

    return (
        <ProfileTabBox>
            <ProfileTabInner>
                <ProfileTabList>
                    <ProfileTabItem>
                        <ProfileTabBtn tab={tab === 1} onClick={() => setTab(1)}>
                            프로필
                        </ProfileTabBtn>
                        <ProfileTabUnderBar tab={tab === 1}></ProfileTabUnderBar>
                    </ProfileTabItem>
                    <ProfileTabItem>
                        <ProfileTabBtn tab={tab === 2} onClick={() => setTab(2)}>
                            게시물 0
                        </ProfileTabBtn>
                        <ProfileTabUnderBar tab={tab === 2}></ProfileTabUnderBar>
                    </ProfileTabItem>
                    <ProfileTabItem>
                        <ProfileTabBtn tab={tab === 3} onClick={() => setTab(3)}>
                            Q&amp;A 활동 {(memberQuestions?.questions.length > 0 ? memberQuestions?.questions[0]?.myQuestionTotalCount : 0) + (memberAnswers?.answers.length > 0 ? memberAnswers?.answers[0]?.myAnswerTotalCount : 0)}
                        </ProfileTabBtn>
                        <ProfileTabUnderBar tab={tab === 3}></ProfileTabUnderBar>
                    </ProfileTabItem>
                </ProfileTabList>
            </ProfileTabInner>
        </ProfileTabBox>
    );
}
export default TabBox;
