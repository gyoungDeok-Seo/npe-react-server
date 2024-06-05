import { Link } from "react-router-dom";
import styled from "styled-components";

const PostCreaterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 1rem;
`;

const CreaterProfileLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const CreaterProfileImgBox = styled.div`
  flex: none;
  overflow: hidden;
  border-radius: 9999px;
  -o-object-fit: cover;
  object-fit: cover;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(226 232 240 / 1);
  background-color: rgb(255 255 255 / 1);
  height: 2.5rem;
  width: 2.5rem;
`;
const CreaterContentBox = styled.div`
  flex: 1 1 0%;
`;
const CreaterName = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  color: rgb(15 23 42 / 1);
`;
const CreaterDescription = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  color: rgb(15 23 42 / 1);
`;

const CreaterPostCreateAt = styled.p`
  font-size: 0.75rem;
  color: #64748b;
`;

function CreaterProfile() {
  return (
    <PostCreaterBox>
      <CreaterProfileLink
        aria-label="달레 (블로그 쓰는 개발자 ✍️) 님의 프로필"
        to="/profiles"
      >
        <CreaterProfileImgBox>
          <span
            style={{
              boxSizing: "border-box",
              display: "inline-block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
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
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: "0px",
                margin: "0px",
                padding: "0px",
                maxWidth: "100%",
              }}
            >
              <img
                alt=""
                aria-hidden="true"
                src="https://publy.imgix.net/static/images/img_profile-dummy.png?w=200&amp;h=200&amp;auto=format&amp;fm=png"
                style={{
                  display: "block",
                  maxWidth: "100%",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: "0px",
                  margin: "0px",
                  padding: "0px",
                }}
              />
            </span>
            <img
              alt="달레님의 프로필 사진"
              src="https://publy.imgix.net/static/images/img_profile-dummy.png?w=200&amp;h=200&amp;auto=format&amp;fm=png"
              decoding="async"
              data-nimg="intrinsic"
              class="tw-object-cover"
              style={{
                position: "absolute",
                inset: "0px",
                boxSizing: "border-box",
                padding: "0px",
                border: "none",
                margin: "auto",
                display: "block",
                width: "0px",
                height: "0px",
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
              }}
            />
          </span>
        </CreaterProfileImgBox>
        <CreaterContentBox>
          <CreaterName>달레</CreaterName>
          <CreaterDescription>블로그 쓰는 개발자 ✍️</CreaterDescription>
          <CreaterPostCreateAt>2월 8일</CreaterPostCreateAt>
        </CreaterContentBox>
      </CreaterProfileLink>
    </PostCreaterBox>
  );
}
export default CreaterProfile;
