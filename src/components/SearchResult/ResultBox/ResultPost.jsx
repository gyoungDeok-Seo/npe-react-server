import { Link } from "react-router-dom";
import styled from "styled-components";

const SearchResultLink = styled(Link)`
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #fff;
  border-bottom: 1px solid #e2e8f0;
  &:last-child {
    border: none;
  }
`;
const SearchResultBtn = styled.button`
  padding: 0;
  width: 100%;
`;
const SearchResultItem = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
`;
const SearchResultItemContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;
const SearchResultItemContentTitle = styled.h3`
  color: #0f172a;
  font-weight: 700;
  font-size: 1rem;
  text-align: left;
  word-break: break-all;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  margin-bottom: 0.25rem;
`;
const SearchResultItemContentCreaterIntro = styled.span`
  margin-left: 0.25rem;
`;
const SearchResultItemContentText = styled.p`
  color: #0f172a;
  font-size: 0.875rem;
  text-align: left;
  -webkit-line-clamp: 2;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;
const SearchResultItemContentCreater = styled.h3`
  color: #334155;
  font-weight: 400;
  font-size: 0.75rem;
  text-align: left;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  margin-top: 0.5rem;
  margin-bottom: 0;
`;
const SearchResultItemContentCreaterName = styled.span`
  color: #0f172a;
  font-weight: 700;
`;
const SearchResultItemContentImgBox = styled.div`
  -o-object-fit: cover;
  object-fit: cover;
  background-color: rgb(255 255 255 / 1);
  border-color: rgb(226 232 240 / 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 0.25rem;
  overflow: hidden;
  flex: none;
  width: 90px;
  height: 90px;
`;
const SearchResultItemContentImg = styled.img`
  object-fit: cover;
`;

function ResultPost() {
  return (
    <SearchResultLink to="#">
      <SearchResultBtn type="button">
        <SearchResultItem>
          <SearchResultItemContent>
            <SearchResultItemContentTitle>
              개발자를 위한 GPT-4 기반 <em>검색</em> 엔진 Phind
            </SearchResultItemContentTitle>
            <SearchResultItemContentText style={{ overflowWrap: "anywhere" }}>
              ... 이 아닌 실행에 필요한 명령어를 포함하여 단계별로 지침을 생성해
              줍니다. 또한 우측에 <em>검색</em>어와 관련된 웹 사이트와 기술
              문서도 제공함으로써 환각(Hallucination) 현상을 최소화하는 데 ...
            </SearchResultItemContentText>
            <SearchResultItemContentCreater>
              <SearchResultItemContentCreaterName>
                김의중
              </SearchResultItemContentCreaterName>
              <SearchResultItemContentCreaterIntro>
                위대한상상 개발자
              </SearchResultItemContentCreaterIntro>
            </SearchResultItemContentCreater>
          </SearchResultItemContent>
          <SearchResultItemContentImgBox>
            <span
              style={{
                boxSizing: "border-box",
                display: "inline-block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                position: "relative",
                maxWidth: "100%",
              }}
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  maxWidth: "100%",
                }}
              >
                <img
                  alt=""
                  aria-hidden="true"
                  src="https://mblogthumb-phinf.pstatic.net/20140512_191/thinkingbug_1399901578557l2bvg_PNG/%B0%CB%C1%A4.png?type=w420"
                  style={{
                    display: "block",
                    maxWidth: "100%",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                  }}
                />
              </span>
              <SearchResultItemContentImg
                alt="thumbnail"
                src="https://mblogthumb-phinf.pstatic.net/20140512_191/thinkingbug_1399901578557l2bvg_PNG/%B0%CB%C1%A4.png?type=w420"
                decoding="async"
                data-nimg="intrinsic"
                style={{
                  position: "absolute",
                  inset: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: 0,
                  height: 0,
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                  objectFit: "cover",
                }}
              />
            </span>
          </SearchResultItemContentImgBox>
        </SearchResultItem>
      </SearchResultBtn>
    </SearchResultLink>
  );
}
export default ResultPost;
