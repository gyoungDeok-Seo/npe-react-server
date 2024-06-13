import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import MainHeader from "../components/Header/MainHeader";
import Introduction from "../container/Main/Introduction";
import Landing from "../container/Main/Landing";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  flex-direction: column;
  min-width: 1024px;
`;

function Main() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    isLogin && navigate('/home')
  },[isLogin, navigate])

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
        <MainHeader isLogin={isLogin} setIsLogin={setIsLogin} />
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
