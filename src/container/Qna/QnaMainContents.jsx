import SlideButtonBox from "../../components/Qna/SlideButtonBox";
import TodayTopTenSlideBox from "../../components/Qna/TodayTopTenSlideBox";
import BestAnswerSlideBox from "../../components/Qna/BestAnswerSlideBox";
import InterestTopicItem from "../../components/Qna/InterestTopicItem";
import QnaMainItem from "../../components/Qna/QnaMainItem";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { tags, topics } from "../../service/dummyData";
import { qnaListApi } from "../../service/qnaApi";

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
  color: #0f172a;
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
  color: #0f172a;
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
  color: #0f172a;
  font-size: 1.125rem;
  padding-top: 0.75rem;
  padding-bottom: 1.5rem;
  margin-bottom: 0;
`;
/*--------------------------------------------*/

const TagFilterWrap = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #fff;
  border-color: #e2e8f0;
  border-style: solid;
  border-width: 1px;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  align-items: center;
  display: flex;
  margin-top: -1rem;
  z-index: 1;
  top: 3.5rem;
  position: sticky;
`;

const TagFilterContainer = styled.div`
  align-items: center;
  width: 100%;
  display: flex;
  position: relative;
`;

const TagFilterBox = styled.div`
  overflow: auto;
  gap: 0.75rem;
  align-items: center;
  display: flex;
  position: relative;
  scrollbar-width: none;
`;

const TagFilterItems = styled.div`
  gap: 0.75rem;
  align-items: center;
  flex-shrink: 0;
  display: flex;
`;

const TagFilterTitle = styled.span`
  color: #334155;
  font-weight: 700;
  font-size: 0.75rem;
`;

const TagsBox = styled.div`
  gap: 0.5rem;
  align-items: center;
  display: flex;
`;

const TagBtn = styled.button`
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  border-style: solid;
  border-width: 1px;
  border-radius: 9999px;
  align-items: center;
  display: flex;
  background-color: ${(props) => (props.selected ? "#475569" : "transparent")};
  border-color: ${(props) => (props.selected ? "#475569" : " #e2e8f0")};
  color: ${(props) => (props.selected ? "#fff" : "#0f172a")};
  &:hover {
    ${(props) => !props.selected && " background-color: #f8fafc;"};
  }
`;

const TagSpan = styled.span`
  font-weight: 700;
  font-size: 0.75rem;
`;

const TagResetContainer = styled.div`
  padding-right: 0.75rem;
  padding-left: 0.5rem;
  background-color: rgb(255 255 255 / 1);
  gap: 0.5rem;
  align-items: center;
  display: flex;
`;

const VerticalDividingLine = styled.div`
  background-color: #e2e8f0;
  align-self: stretch;
  width: 1px;
`;

const TagResetBtn = styled.button`
  padding: 0.25rem;
`;

const TagResetSvg = styled.svg`
  fill: #475569;
  width: 1.5rem;
  height: 1.5rem;
  display: block;
`;

const NoneResultBox = styled.div`
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.25rem;
`;
const NoneResultImg = styled.img`
  width: 72px;
  height: 72px;
`;

const NoneResultText = styled.p`
  color: #64748b;
  text-align: center;
  white-space: pre-line;
`;

function QnaMainContents() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get("tab") || "newest";
  const categoryValue = searchParams.get("category") || "java";
  const tagsParams = searchParams.get("tag") || "";
  const [qnaList, setQnaList] = useState([]);
  const [pages, setPages] = useState(1);
  const [topTenTransform, setTopTenTransform] = useState(
    "translate3d(0px, 0px, 0px)"
  );
  const [bestTransform, setBestTransform] = useState(
    "translate3d(0px, 0px, 0px)"
  );

  const [isTopTenDisabled, setIsTopTenDisabled] = useState({
    prev: true,
    next: false,
  });
  const [isBestDisabled, setIsBestDisabled] = useState({
    prev: true,
    next: false,
  });

  useEffect(() => {
    setPages(1);
    window.scrollTo({
      top: 0,
    });
    const fetchQnas = async () => {
      const qnas = await qnaListApi(categoryValue, tagsParams, pages);
      setQnaList(qnas);
    };

    fetchQnas();
  }, [tagsParams, categoryValue, tab]);

  useEffect(() => {
    const fetchQnas = async () => {
      const qnas = await qnaListApi(categoryValue, tagsParams, pages);
      setQnaList((prev) => (prev ? [...prev, ...qnas] : qnas));
    };

    fetchQnas();
  }, [pages]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, offsetHeight } = document.documentElement;
      const innerHeight = window.innerHeight;
      if (innerHeight + scrollTop >= offsetHeight) {
        setPages((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tab, qnaList]);

  const handleTagClick = (selectedTag) => {
    const currentTags = searchParams.get("tag")
      ? searchParams.get("tag").split(",")
      : [];
    const tagIndex = currentTags.indexOf(selectedTag);
    if (tagIndex > -1) {
      currentTags.splice(tagIndex, 1);
    } else {
      currentTags.push(selectedTag);
    }
    const updatedTags = currentTags.join(",");
    if (updatedTags) {
      searchParams.set("tag", updatedTags);
    } else {
      searchParams.delete("tag");
    }
    setSearchParams(searchParams);
  };

  const handleTagReset = () => {
    searchParams.delete("tag");
    setSearchParams(searchParams);
  };

  return (
    <QnaMainWrap>
      {tab === "newest" ? (
        <>
          <TodayTopTenContainer>
            <ContentsHeaderBox>
              <ContentsTitle>오늘의 질문 Top 10</ContentsTitle>
              <SlideButtonBox
                setTransform={setTopTenTransform}
                isDisabled={isTopTenDisabled}
                setIsDisabled={setIsTopTenDisabled}
              />
            </ContentsHeaderBox>
            <TodayTopTenSlideBox transform={topTenTransform} />
          </TodayTopTenContainer>
          <BestAnswerContainer>
            <ContentsHeaderBox>
              <ContentsTitle>답변 베스트</ContentsTitle>
              <SlideButtonBox
                setTransform={setBestTransform}
                isDisabled={isBestDisabled}
                setIsDisabled={setIsBestDisabled}
              />
            </ContentsHeaderBox>
            <BestAnswerSlideBox transform={bestTransform} />
          </BestAnswerContainer>
          <InterestTopicSection>
            <SectionTitleBox>
              <SectionTitleHeadline>관심 주제 찾기</SectionTitleHeadline>
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "24px",
                  height: "24px",
                  background: "none",
                  opacity: 1,
                  border: "0px",
                  margin: "0px",
                  padding: "0px",
                  position: "relative",
                  maxWidth: "100%",
                }}
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "100%",
                    height: "100%",
                    background: "none",
                    opacity: 1,
                    border: "0px",
                    margin: "0px",
                    padding: "0px",
                    maxWidth: "100%",
                  }}
                >
                  <img
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "100%",
                      height: "100%",
                      background: "none",
                      opacity: 1,
                      border: "0px",
                      margin: "0px",
                      padding: "0px",
                    }}
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e"
                    alt=""
                  />
                </span>
                <img
                  style={{
                    position: "absolute",
                    inset: "0px",
                    boxSizing: "border-box",
                    padding: "0px",
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: "24px",
                    height: "24px",
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                  }}
                  src="https://careerly.co.kr/_next/image?url=%2F_next%2Fstatic%2Fimages%2Fimg_magnifying_glass_tilted_left-89cf9762ed7d639dff91f773a8f2ace9.png&w=48&q=75"
                  alt="관심 주제 찾기 옆 돋보기 아이콘"
                />
              </span>
            </SectionTitleBox>
            {/* 태그 목록은 20개 */}
            <InterestTopicList>
              {topics.map((topic, index) => (
                <InterestTopicItem key={index} topic={topic} />
              ))}
            </InterestTopicList>
          </InterestTopicSection>
          <MainContentsHeadline>최신 질문</MainContentsHeadline>
          <QnaMainItem qnaList={qnaList} />
        </>
      ) : (
        <>
          <TagFilterWrap>
            <TagFilterContainer>
              <TagFilterBox>
                <TagFilterItems>
                  <TagFilterTitle>태그 필터</TagFilterTitle>
                  <TagsBox>
                    {tags.map((tag, index) => (
                      <TagBtn
                        key={index}
                        index={index}
                        selected={
                          tagsParams
                            .split(",")
                            .findIndex((item) => item === tag) !== -1
                        }
                        onClick={() => handleTagClick(tag)}
                      >
                        <TagSpan>{tag}</TagSpan>
                      </TagBtn>
                    ))}
                  </TagsBox>
                </TagFilterItems>
              </TagFilterBox>
            </TagFilterContainer>
            {tagsParams && (
              <TagResetContainer>
                <VerticalDividingLine></VerticalDividingLine>
                <TagResetBtn type="button" onClick={handleTagReset}>
                  <TagResetSvg
                    width="24"
                    height="24"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <g id="style=outline">
                        <path
                          id="Vector"
                          d="M11.9502 20.35C9.65022 20.35 7.68355 19.5375 6.05022 17.9125C4.41689 16.2875 3.60022 14.3167 3.60022 12C3.60022 9.7 4.41689 7.72917 6.05022 6.0875C7.68355 4.44583 9.65022 3.625 11.9502 3.625C13.4336 3.625 14.7336 3.925 15.8502 4.525C16.9669 5.125 17.9336 5.95 18.7502 7V4.475C18.7502 4.225 18.8252 4.02083 18.9752 3.8625C19.1252 3.70417 19.3252 3.625 19.5752 3.625C19.8086 3.625 20.0044 3.70417 20.1627 3.8625C20.3211 4.02083 20.4002 4.225 20.4002 4.475V9.525C20.4002 9.80833 20.3044 10.0417 20.1127 10.225C19.9211 10.4083 19.6836 10.5 19.4002 10.5H14.3502C14.1169 10.5 13.9211 10.425 13.7627 10.275C13.6044 10.125 13.5252 9.925 13.5252 9.675C13.5252 9.44167 13.6044 9.24583 13.7627 9.0875C13.9211 8.92917 14.1252 8.85 14.3752 8.85H17.6752C17.0252 7.88333 16.2294 7.10417 15.2877 6.5125C14.3461 5.92083 13.2336 5.625 11.9502 5.625C10.1669 5.625 8.65855 6.24167 7.42522 7.475C6.19189 8.70833 5.57522 10.2167 5.57522 12C5.57522 13.7833 6.19189 15.2917 7.42522 16.525C8.65855 17.7583 10.1669 18.375 11.9502 18.375C13.1836 18.375 14.3252 18.0458 15.3752 17.3875C16.4252 16.7292 17.2169 15.85 17.7502 14.75C17.8502 14.6 17.9919 14.4667 18.1752 14.35C18.3586 14.2333 18.5419 14.175 18.7252 14.175C19.1252 14.175 19.4127 14.3042 19.5877 14.5625C19.7627 14.8208 19.7669 15.1167 19.6002 15.45C18.9336 16.9333 17.9127 18.1208 16.5377 19.0125C15.1627 19.9042 13.6336 20.35 11.9502 20.35Z"
                        ></path>
                      </g>
                    </g>
                  </TagResetSvg>
                </TagResetBtn>
              </TagResetContainer>
            )}
          </TagFilterWrap>
          <div>
            <div
              style={{ minHeight: "100%", width: "100%", position: "relative" }}
            >
              <div
                style={{
                  width: "100%",
                }}
              >
                {qnaList?.length !== 0 ? (
                  <QnaMainItem qnaList={qnaList} />
                ) : (
                  <NoneResultBox>
                    <NoneResultImg
                      src="https://careerly.co.kr/_next/static/images/img_no-comment-6b8dfb6445f9546f6abecab5919622b1.png"
                      alt=""
                    />
                    <NoneResultText>
                      답변을 기다리는 질문이 없어요.
                    </NoneResultText>
                  </NoneResultBox>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </QnaMainWrap>
  );
}
export default QnaMainContents;
