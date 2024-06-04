import styled from "styled-components";
import Header from "../components/Header/Header";
import Intro from "../container/profiles/Intro";
import Profile from "../container/profiles/Profile";
import { useState } from "react";
import Post from "../container/profiles/Post";

const MyprofileContainer = styled.div`
  position: relative;
  background-color: var(--color-white, #fff);
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
          <Header />
          <Intro setTab={setTab} />
          {renderContent()}
        </MyprofileContainer>
      </div>
    </div>
  );
}
export default Profiles;
