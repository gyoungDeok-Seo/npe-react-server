import { Link } from "react-router-dom";
import styled from "styled-components";

const SearchResultSideBarLink = styled(Link)``;
const SearchResultSideBarLinkInner = styled.div`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`;
const SearchResultSideBarLinkNumBox = styled.div`
  justify-content: center;
  flex: none;
  width: 1.25rem;
  display: flex;
`;
const SearchResultSideBarLinkNum = styled.div`
  color: #0f172a;
  font-weight: 700;
  font-size: 0.875rem;
`;
const SearchResultSideBarLinkContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;
const SearchResultSideBarCreater = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
`;
const SearchResultSideBarCreaterImgBox = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(226 232 240 / 1);
  background-color: rgb(255 255 255 / 1);
  flex: none;
  overflow: hidden;
  border-radius: 9999px;
  -o-object-fit: cover;
  object-fit: cover;
`;
const SearchResultSideBarCreaterImg = styled.img`
  object-fit: cover;
`;
const SearchResultSideBarCreaterNameBox = styled.div`
  flex: 1 1 0%;
`;
const SearchResultSideBarCreaterNameInner = styled.p`
  color: #334155;
  font-size: 0.75rem;
  word-break: break-all;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;
const SearchResultSideBarCreaterName = styled.span`
  color: #0f172a;
  font-weight: 700;
`;
const SearchResultSideBarLinkTitle = styled.p`
  color: #0f172a;
  font-size: 0.875rem;
  -webkit-line-clamp: 2;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;

function PopularPosts({ item, index }) {
  return (
    <SearchResultSideBarLink to={`/qnas/detail/${item?.id}`}>
      <SearchResultSideBarLinkInner>
        <SearchResultSideBarLinkNumBox>
          <SearchResultSideBarLinkNum>{index + 1}</SearchResultSideBarLinkNum>
        </SearchResultSideBarLinkNumBox>
        <SearchResultSideBarLinkContent>
          <SearchResultSideBarCreater>
            <SearchResultSideBarCreaterImgBox>
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
                    src="https://publy.imgix.net/static/images/img_profile-dummy.png?w=200&h=200&auto=format&fm=png"
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
                <SearchResultSideBarCreaterImg
                  alt=""
                  src={item?.kakaoProfileUrl}
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
                  }}
                />
              </span>
            </SearchResultSideBarCreaterImgBox>
            <SearchResultSideBarCreaterNameBox>
              <SearchResultSideBarCreaterNameInner>
                <SearchResultSideBarCreaterName>
                  {item?.memberName}
                </SearchResultSideBarCreaterName>
                <span> {item?.memberPosition}</span>
              </SearchResultSideBarCreaterNameInner>
            </SearchResultSideBarCreaterNameBox>
          </SearchResultSideBarCreater>
          <SearchResultSideBarLinkTitle>
            {item?.questionTitle}
          </SearchResultSideBarLinkTitle>
        </SearchResultSideBarLinkContent>
      </SearchResultSideBarLinkInner>
    </SearchResultSideBarLink>
  );
}
export default PopularPosts;
