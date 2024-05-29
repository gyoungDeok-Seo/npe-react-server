import { useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Search from "../components/header/Search";
import Introduction from "../container/main/Introduction";
import Landing from "../container/main/Landing";
import "./main.css";
function Main() {
  const [search, setSearch] = useState(false);
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
        <Header setSearch={setSearch} />
        {search && <Search setSearch={setSearch}/>}
        <div className="main-container">
          <Landing />
          <Introduction />
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Main;