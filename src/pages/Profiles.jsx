import styled from "styled-components";
import { useState } from "react";
import Intro from "../container/Profiles/Intro";
import Profile from "../container/Profiles/Profile";
import Post from "../container/Profiles/Post";
import QnaActivity from "../container/Profiles/QnaActivity";
import MainHeader from "../components/Header/MainHeader";

const MyprofileContainer = styled.div`
  position: relative;
  background-color: #fff;
  min-height: 100vh;
`;

function Profiles() {
  const [tab, setTab] = useState(1);

  const renderContent = () => {
    switch (tab) {
      case 1:
        return <Profile />;
      case 2:
        return <Post />;
      case 3:
        return <QnaActivity />;
      default:
        return <Profile />;
    }
  };

  return (
    <div>
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
        <MyprofileContainer>
          <MainHeader />
          <Intro setTab={setTab} tab={tab} />
          {renderContent()}
        </MyprofileContainer>
      </div>
    </div>
  );
}
export default Profiles;
