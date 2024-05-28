import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MainContainer from "../container/main/MainContainer";
import "./main.css";
function Main() {
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
      ></div>
      <div>
        <Header />
        <div className="container">
          <MainContainer />
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Main;
