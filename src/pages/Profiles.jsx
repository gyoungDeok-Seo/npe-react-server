import styled from "styled-components";
import Header from "../components/header/Header";
import Intro from "../container/profiles/Intro";
import Profile from "../container/profiles/Profile";

const MyprofileContainer = styled.div`
  position: relative;
  background-color: var(--color-white, #fff);
  min-height: 100vh;
`;

function Profiles() {
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
          <Intro />
          <Profile />
        </MyprofileContainer>
      </div>
    </div>
  );
}
export default Profiles;
