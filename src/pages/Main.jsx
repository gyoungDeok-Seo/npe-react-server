import { useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Search from "../components/header/Search";
import Introduction from "../container/main/Introduction";
import Landing from "../container/main/Landing";
import styled from "styled-components";

const Container = styled.div`
  flex-direction: column;
  min-width: 1024px;
`;

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
        {search && <Search setSearch={setSearch} />}
        <Container>
          <Landing />
          <Introduction />
        </Container>
        <Footer />
      </div>
    </div>
  );
}
export default Main;
