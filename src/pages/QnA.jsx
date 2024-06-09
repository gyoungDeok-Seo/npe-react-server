import "./qna.css";
import QnaMainContents from "../container/Qna/QnaMainContents";
import QnaSidebar from "../container/Qna/QnaSidebar";
import { styled } from "styled-components";
import { useState } from "react";
import MainHeader from "../components/Header/MainHeader";

const QnaWrapper = styled.div`
  --elevation-shadow-small: 0px 2px 4px 0px rgba(100, 116, 139, 0.1);
  --elevation-shadow-medium: 0px 4px 6px 0px rgba(100, 116, 139, 0.12);
  --elevation-shadow-large: 0px 8px 12px 0px rgba(100, 116, 139, 0.14);
  --elevation-shadow-xlarge: 0px 16px 20px 0px rgba(100, 116, 139, 0.16);
  --elevation-shadow-2xlarge: 0px 25px 50px 0px rgba(100, 116, 139, 0.24);
`;

const QnaContainer = styled.div`
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

function QnA() {
  return (
    // useRef 사용처
    <QnaWrapper>
      <div
        style={{
          position: "fixed",
          zIndex: 9999,
          top: "16px",
          left: "16px",
          right: "16px",
          bottom: "16px",
          pointerEvents: "none",
        }}
        className="global-toaster"
      ></div>
      <div>
        <MainHeader />
        <QnaContainer>
          <QnaSidebar />
          <QnaMainContents />
        </QnaContainer>
      </div>
    </QnaWrapper>
  );
}
export default QnA;
