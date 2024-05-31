import Header from "../components/header/Header";
import Intro from "../container/profiles/Intro";
import Profile from "../container/profiles/Profile";
import "./profiles.css";

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
        <div className="myprofile-container">
          <Header />
          <Intro />

          <Profile />
        </div>
      </div>
    </div>
  );
}
export default Profiles;
