import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Introduction from "../container/main/Introduction";
import Landing from "../container/main/Landing";
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
          <Landing />
          <Introduction />
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Main;
