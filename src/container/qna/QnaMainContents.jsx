import SlideButtonBox from "../../components/Qna/SlideButtonBox";
import TodayTopTenSlideBox from "../../components/Qna/TodayTopTenSlideBox";
import BestAnswerSlideBox from "../../components/Qna/BestAnswerSlideBox";
import InterestTopicItem from "../../components/Qna/InterestTopicItem";
import QnaMainItem from "../../components/Qna/QnaMainItem";
import { styled } from "styled-components";

const topics = ["react", "java", "프론트엔드", "백엔드", "취업", "spring", "javascript", "비전공자", "신입", "이직", "python", "next.js", "인공지능", "포트폴리오", "부트캠프", "node.js", "react-native", "ios", "flutter", "연봉"];

const QnaMainWrap = styled.div`
    padding-top: 2rem;
    grid-column: span 9 / span 9;
`;

const TodayTopTenContainer = styled.div`
    padding-bottom: 2rem;
    gap: 0.5rem;
    flex-direction: column;
    display: flex;
`;

const BestAnswerContainer = styled(TodayTopTenContainer)``;

const ContentsHeaderBox = styled.div`
    justify-content: space-between;
    align-items: center;
    display: flex;
`;

const ContentsTitle = styled.h3`
    color: var(--color-text-bold, #0f172a);
    font-size: 1.125rem;
    width: 100%;
    margin-bottom: 0;
`;

const InterestTopicSection = styled.section`
    padding-bottom: 2rem;
    gap: 1.5rem;
    flex-direction: column;
    display: flex;
`;

const SectionTitleBox = styled.div`
    gap: 0.25rem;
    align-items: center;
    display: flex;
`;

const SectionTitleHeadline = styled.h3`
    color: var(--color-text-bold, #0f172a);
    font-weight: 700;
    font-size: 1.125rem;
    margin: 0;
`;

const InterestTopicList = styled.ul`
    gap: 0.5rem;
    flex-wrap: wrap;
    display: flex;
`;

const MainContentsHeadline = styled.h3`
    color: var(--color-text-bold, #0f172a);
    font-size: 1.125rem;
    padding-top: 0.75rem;
    padding-bottom: 1.5rem;
    margin-bottom: 0;
`;

function QnaMainContents() {
    return (
        <QnaMainWrap>
            <TodayTopTenContainer>
                <ContentsHeaderBox>
                    <ContentsTitle>오늘의 질문 Top 10</ContentsTitle>
                    <SlideButtonBox />
                </ContentsHeaderBox>
                <TodayTopTenSlideBox />
            </TodayTopTenContainer>
            <BestAnswerContainer>
                <ContentsHeaderBox>
                    <ContentsTitle>답변 베스트</ContentsTitle>
                    <SlideButtonBox />
                </ContentsHeaderBox>
                <BestAnswerSlideBox />
            </BestAnswerContainer>
            <InterestTopicSection>
                <SectionTitleBox>
                    <SectionTitleHeadline>관심 주제 찾기</SectionTitleHeadline>
                    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "24px", height: "24px", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                        <span style={{ boxSizing: "border-box", display: "block", width: "100%", height: "100%", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                            <img style={{ display: "block", maxWidth: "100%", width: "100%", height: "100%", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e" alt="" />
                        </span>
                        <img style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "24px", height: "24px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} src="https://careerly.co.kr/_next/image?url=%2F_next%2Fstatic%2Fimages%2Fimg_magnifying_glass_tilted_left-89cf9762ed7d639dff91f773a8f2ace9.png&w=48&q=75" alt="관심 주제 찾기 옆 돋보기 아이콘" />
                    </span>
                </SectionTitleBox>
                {/* 태그 목록은 20개 */}
                <InterestTopicList>
                    {topics.map((topic, index) => (
                        <InterestTopicItem key={index} name={topic} />
                    ))}
                </InterestTopicList>
            </InterestTopicSection>
            <MainContentsHeadline>최신 질문</MainContentsHeadline>
            <QnaMainItem />
        </QnaMainWrap>
    );
}
export default QnaMainContents;
