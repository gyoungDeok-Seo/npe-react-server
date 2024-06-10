import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Search from "./Search";
import ProfileUpdateHeader from "./ProfileUpdateHeader";
import SearchBtnBox from "./MainHeader/SearchBtnBox";
import OnLoginNav from "./MainHeader/OnLoginNav";
import NonLoginNav from "./MainHeader/NonLoginNav";
import LogoLinkBox from "./MainHeader/LogoLinkBox";
import TabBox from "./MainHeader/TabBox";
import CreateQnaHeader from "./CreateQnaHeader";

const HeaderContainer = styled.nav`
  border-width: 0;
  position: sticky;
  top: 0;
  z-index: 5;
  display: flex;
  height: 3.5rem;
  width: 100%;
  flex-wrap: wrap;
  min-width: max-content;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: #cbd5e1;
  background-color: #fff;
`;
const HeaderInner = styled.div`
  margin-right: auto;
  margin-left: auto;
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 1024px;
  max-width: 1280px;
  justify-content: space-between;
  background-color: rgb(255 255 255 / 1);
  padding-left: 1rem;
  padding-right: 1rem;
`;
const LeftBox = styled.div`
  display: flex;
  align-items: center;
`;
const RightBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

function MainHeader({ setAvoidMistakesModal }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [path, setPath] = useState("/");
  const [search, setSearch] = useState(false);

  const isLogin = true;
  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  return (
    <>
      {path.startsWith("/profiles/") ? (
        <ProfileUpdateHeader
          navigate={navigate}
          setAvoidMistakesModal={setAvoidMistakesModal}
        />
      ) : path.includes("/create") ? (
        <CreateQnaHeader
          navigate={navigate}
          setAvoidMistakesModal={setAvoidMistakesModal}
        />
      ) : (
        <>
          <HeaderContainer>
            <HeaderInner>
              <LeftBox>
                <LogoLinkBox />
                <TabBox />
              </LeftBox>
              <RightBox>
                <SearchBtnBox setSearch={setSearch} />
                {isLogin ? <OnLoginNav /> : <NonLoginNav />}
              </RightBox>
            </HeaderInner>
          </HeaderContainer>
          {search && <Search setSearch={setSearch} />}
        </>
      )}
    </>
  );
}

export default MainHeader;
