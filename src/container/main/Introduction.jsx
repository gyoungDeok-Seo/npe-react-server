import styled from "styled-components";
import { Link } from "react-router-dom";
const SectionItem = styled.section`
  background-color: #f8fafc;
  width: 100%;
`;
const SectionBox = styled.div`
  color: #0f172a;
  min-width: 1024px;
  width: 100%;
  height: 100%;
`;
const WhiteSection = styled(SectionItem)`
  background-color: #fff;
`;
const SectionInner = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 8rem;
  padding-bottom: 8rem;
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 1280px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
`;
const WidthBox = styled.div`
  width: 8rem;
`;
const SectionLeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  flex: 1 1 0%;
  height: 100%;
`;
const SectionTitle = styled.div`
  flex-wrap: nowrap;
  white-space: pre-line;
  line-height: 48px;
  font-weight: 700;
  font-size: 2.25rem;
`;
const LinkBtnBox = styled.div`
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;
`;
const LinkBtn = styled(Link)`
  color: rgb(51 65 85 / 1);
  font-weight: 700;
  font-size: 1rem;
  padding: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  --tw-bg-opacity: 1;
  background-color: rgb(226 232 240 /1);
  border-radius: 0.3rem;
`;
const SectionRightBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1 1 0%;
  max-height: 576px;
  height: 100%;
`;

function Introduction() {
  return (
    <div>
      <SectionItem style={{ height: "832px" }}>
        <SectionBox>
          <SectionInner>
            <WidthBox />
            <SectionLeftBox>
              <SectionTitle>
                각 분야 TOP 개발자들의
                <br />
                실무 개발 이야기
              </SectionTitle>
              {/* <LinkBtnBox>
                <LinkBtn to="/">개발자 프로필 보러가기</LinkBtn>
              </LinkBtnBox> */}
            </SectionLeftBox>
            <SectionRightBox>
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                }}
              >
                <img
                  alt="Image Alt"
                  sizes="100vw"
                  src="https://careerly.co.kr/_next/image?url=https%3A%2F%2Fpubly-cdn.s3.ap-northeast-2.amazonaws.com%2Fadmin%2Fcareerly%2Flanding-pages%2Fimage%2F6528b5b2362e3cd58e15f5e0_1697426920.png&w=1920&q=75"
                  decoding="async"
                  datanimg="fill"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
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
                    objectFit: "contain",
                  }}
                />
              </span>
            </SectionRightBox>
          </SectionInner>
        </SectionBox>
      </SectionItem>
      <WhiteSection style={{ height: "832px" }}>
        <SectionBox>
          <SectionInner>
            <WidthBox />
            <SectionLeftBox>
              <SectionTitle>
                프로그래밍부터 커리어까지,
                <br />
                한국판 스택오버플로우.
              </SectionTitle>
              <LinkBtnBox>
                <LinkBtn to="/qnas">개발자 Q&A 보러가기</LinkBtn>
              </LinkBtnBox>
            </SectionLeftBox>
            <SectionRightBox>
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                }}
              >
                <img
                  alt="Image Alt"
                  sizes="100vw"
                  src="https://careerly.co.kr/_next/image?url=https%3A%2F%2Fpubly-cdn.s3.ap-northeast-2.amazonaws.com%2Fadmin%2Fcareerly%2Flanding-pages%2Fimage%2F6528b5b2362e3cd58e15f5e0_1697173873.png&w=1920&q=75"
                  decoding="async"
                  datanimg="fill"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
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
                    objectFit: "contain",
                  }}
                />
              </span>
            </SectionRightBox>
          </SectionInner>
        </SectionBox>
      </WhiteSection>
    </div>
  );
}
export default Introduction;
