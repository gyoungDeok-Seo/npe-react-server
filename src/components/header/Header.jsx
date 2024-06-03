import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Search from "./Search";
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
  border-color: var(--color-slate-300, #cbd5e1);
  background-color: var(--color-white, #fff);
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
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  padding-left: 1rem;
  padding-right: 1rem;
  --tw-bg-opacity: 1;
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
const LogoLink = styled(Link)`
  background-color: transparent;
  color: #ed6653;
  text-decoration: none;
  margin-right: 0.5rem;
  border-radius: 0.25rem;
  padding: 0.5rem;
`;
const LogoSvg = styled.svg`
  margin-bottom: 0.25rem;
  fill: #cbd5e1;
`;
const TabLink = styled(Link)`
  --tw-text-opacity: 1;
  color: rgb(100 116 139 / var(--tw-text-opacity));
  line-height: 1;
  font-weight: 500;
  font-size: 0.875rem;
  text-align: center;
  padding: 0.5rem;
  gap: 0.25rem;
  align-items: center;
  height: 100%;
  display: flex;
  text-decoration: none;
  background-color: transparent;
`;
const SearchBox = styled.div`
  font-size: 0.875rem;
  padding: 0.5rem;
  cursor: pointer;
  position: relative;
`;
const SearchSvg = styled.svg`
  fill: var(--color-slate-600, #475569);
  display: block;
`;
const LoginBtn = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: var(--color-text-button-primary, #334155);
  font-weight: 700;
  font-size: 0.875rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border-color: var(--color-slate-500, #64748b);
  border-style: solid;
  border-width: 1px;
  border-radius: 0.25rem;
  -webkit-appearance: button;
  &:hover {
    background-color: var(--color-slate-50, #f8fafc);
  }
`;
const LoginBtnText = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const JoinBtn = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: var(--color-white, #fff);
  font-weight: 700;
  font-size: 0.875rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background-color: var(
    --color-background-button-primary-bold-enabled,
    #334155
  );
  border-color: var(--color-slate-700, #334155);
  border-style: solid;
  border-width: 1px;
  border-radius: 0.25rem;

  -webkit-appearance: button;
`;
const JoinBtnText = styled.div`
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;
const ProfileUpdateHeaderContainer = styled.nav`
  position: fixed;
  z-index: 20;
  display: flex;
  height: 3.5rem;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-width: 1px;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-style: solid;
  --tw-border-opacity: 1;
  border-color: rgb(203 213 225 / var(--tw-border-opacity));
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  padding-left: 1rem;
  padding-right: 1rem;
`;
const ExitProfileUpdateBtn = styled.button`
  padding: 0;
`;
const ExitProfileSvg = styled.svg`
  fill: #0f172a;
`;
const ProfileUpdateHeaderCenterSpace = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
`;
const SubmitProfileUpdateBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  border-width: 1px;
  border-style: solid;
  border-color: var(--color-slate-700, #334155);
  background-color: var(
    --color-background-button-primary-bold-enabled,
    #334155
  );
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-white, #fff);
`;
const SubmitProfileUpdateBtnText = styled.span`
  -webkit-line-clamp: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const ProfileUpdateHeader = ({ navigate, setAvoidMistakesModal }) => {
  const handleUpdateProfile = () => {
    navigate("/profiles");
  };

  const handleAvoidMistakesModal = () => {
    setAvoidMistakesModal(true);
  };
  return (
    <ProfileUpdateHeaderContainer>
      <ExitProfileUpdateBtn type="button" onClick={handleAvoidMistakesModal}>
        <ExitProfileSvg
          width="24"
          height="24"
          strokeWidth="0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g id="style=outline">
              <path
                id="Vector (Stroke)"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.7071 4.2929C11.0976 4.68342 11.0976 5.31659 10.7071 5.70711L5.41423 10.9999H21C21.5523 10.9999 22 11.4477 22 11.9999C22 12.5522 21.5523 12.9999 21 12.9999H5.4142L10.7071 18.2929C11.0976 18.6834 11.0976 19.3166 10.7071 19.7071C10.3166 20.0976 9.68341 20.0976 9.29289 19.7071L2.29289 12.7071C2.10535 12.5195 2 12.2652 2 11.9999C2 11.7347 2.10536 11.4804 2.2929 11.2928L9.2929 4.29289C9.68342 3.90237 10.3166 3.90237 10.7071 4.2929Z"
              ></path>
            </g>
          </g>
        </ExitProfileSvg>
      </ExitProfileUpdateBtn>
      <ProfileUpdateHeaderCenterSpace />
      <SubmitProfileUpdateBtn type="button" onClick={handleUpdateProfile}>
        <SubmitProfileUpdateBtnText>완료</SubmitProfileUpdateBtnText>
      </SubmitProfileUpdateBtn>
    </ProfileUpdateHeaderContainer>
  );
};

const NonLoginHeader = ({ setSearch, search }) => {
  const searchOpenHandler = () => {
    setSearch((isOpen) => !isOpen);
  };

  return (
    <>
      <HeaderContainer>
        <HeaderInner>
          <LeftBox>
            <LogoLink to="/">
              <LogoSvg
                width="94"
                height="24"
                strokeWidth="0"
                viewBox="0 0 94 24"
                fill="current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <LogoSvg
                  width="94"
                  height="24"
                  strokeWidth="0"
                  viewBox="0 0 94 24"
                  fill="current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M90.913 5.20388L87.7172 13.5498L84.3495 5.19499C84.2663 4.9883 84.0663 4.85294 83.844 4.85294H81.8815C81.4946 4.85294 81.2309 5.24541 81.3755 5.60502L86.1874 17.5437L83.9944 23.2565C83.8572 23.6148 84.1208 24 84.5036 24H86.4707C86.6966 24 86.8994 23.8605 86.9803 23.649L93.8811 5.59581C94.018 5.23757 93.7543 4.85294 93.3715 4.85294H91.4222C91.1962 4.85294 90.994 4.99249 90.913 5.20388Z"
                    fill="black"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M73.8533 11.3059C73.8533 12.1116 73.2 12.7648 72.3944 12.7648C71.5884 12.7648 70.9356 12.1116 70.9356 11.3059C70.9356 10.5002 71.5884 9.8471 72.3944 9.8471C73.2 9.8471 73.8533 10.5002 73.8533 11.3059Z"
                    fill="#ED6653"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M40.4233 7.29415C39.537 7.29415 38.7648 7.62335 38.0627 8.30056C37.6661 8.68551 37.367 9.11349 37.1632 9.59048C37.1117 9.71111 37.2002 9.84532 37.3315 9.84519L43.6158 9.83908C43.7467 9.83894 43.8356 9.70418 43.7831 9.58401C43.7357 9.4761 43.6838 9.36952 43.6263 9.26412C43.2949 8.64867 42.8481 8.17665 42.2591 7.81801C41.6792 7.4657 41.0788 7.29415 40.4233 7.29415ZM40.4342 18.2354C38.6257 18.2354 37.0629 17.5424 35.7892 16.1756C34.5464 14.8368 33.9178 13.2017 33.9178 11.3137C33.9178 9.28541 34.6294 7.56613 36.034 6.20363C37.2918 4.99025 38.7675 4.37649 40.4233 4.37649C41.6117 4.37649 42.7396 4.69575 43.7754 5.32537C44.8057 5.95248 45.6185 6.81082 46.1934 7.87691C46.7591 8.92134 47.0473 10.0727 47.0473 11.296V12.2069C47.0473 12.5087 46.8024 12.7536 46.5006 12.7539L37.3264 12.7629C37.1965 12.763 37.1076 12.8959 37.1582 13.0158C37.3378 13.4409 37.5927 13.8302 37.9255 14.1887C38.6426 14.9583 39.4408 15.3177 40.4342 15.3177C41.1112 15.3177 41.7143 15.151 42.2778 14.808C42.7141 14.5397 43.0742 14.1983 43.3692 13.7717C43.5265 13.5445 43.831 13.4741 44.0744 13.6046L45.6892 14.47C45.9695 14.6202 46.0653 14.9783 45.893 15.2453C45.3482 16.0888 44.647 16.7768 43.8032 17.2953L43.7991 17.2978C42.7784 17.9199 41.6464 18.2354 40.4342 18.2354Z"
                    fill="black"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M55.194 7.29415C54.3077 7.29415 53.5355 7.62335 52.8334 8.30056C52.4368 8.68551 52.1377 9.11349 51.9339 9.59048C51.8824 9.71111 51.9709 9.84532 52.1022 9.84519L58.3865 9.83908C58.5174 9.83894 58.6063 9.70418 58.5538 9.58401C58.5064 9.4761 58.4545 9.36952 58.397 9.26412C58.0656 8.64867 57.6188 8.17665 57.0298 7.81801C56.4499 7.4657 55.8495 7.29415 55.194 7.29415ZM55.2049 18.2354C53.3964 18.2354 51.8336 17.5424 50.5598 16.1756C49.3171 14.8368 48.6884 13.2017 48.6884 11.3137C48.6884 9.28541 49.4001 7.56613 50.8047 6.20363C52.0624 4.99025 53.5381 4.37649 55.1939 4.37649C56.3824 4.37649 57.5103 4.69575 58.546 5.32537C59.5763 5.95248 60.3892 6.81082 60.964 7.87691C61.5298 8.92134 61.8179 10.0727 61.8179 11.296V12.2069C61.8179 12.5087 61.5731 12.7536 61.2713 12.7539L52.0971 12.7629C51.9672 12.763 51.8783 12.8959 51.9289 13.0158C52.1085 13.4409 52.3633 13.8302 52.6961 14.1887C53.4132 14.9583 54.2115 15.3177 55.2049 15.3177C55.8818 15.3177 56.485 15.151 57.0484 14.808C57.4847 14.5397 57.8449 14.1983 58.1398 13.7717C58.2971 13.5445 58.6016 13.4741 58.8451 13.6046L60.4598 14.47C60.7402 14.6202 60.8359 14.9783 60.6636 15.2453C60.1188 16.0888 59.4177 16.7768 58.5738 17.2953L58.5697 17.2978C57.549 17.9199 56.417 18.2354 55.2049 18.2354Z"
                    fill="black"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.8707 14.7707C15.9602 14.7707 14.4059 13.2164 14.4059 11.3059C14.4059 9.39546 15.9602 7.84122 17.8707 7.84122C19.7811 7.84122 21.3354 9.39546 21.3354 11.3059C21.3354 13.2164 19.7811 14.7707 17.8707 14.7707ZM21.3354 5.47062V5.94528C20.3283 5.293 19.1258 4.91658 17.8349 4.92365C14.3559 4.94275 11.5122 7.78232 11.4884 11.2613C11.4642 14.8067 14.3309 17.6883 17.8707 17.6883C19.148 17.6883 20.3376 17.3129 21.3354 16.6666V17.1413C21.3354 17.4434 21.5803 17.6883 21.8825 17.6883H23.706C24.0081 17.6883 24.253 17.4434 24.253 17.1413V5.47062C24.253 5.1685 24.0081 4.92356 23.706 4.92356H21.8825C21.5803 4.92356 21.3354 5.1685 21.3354 5.47062Z"
                    fill="black"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M78.7768 17.6883H76.9533C76.651 17.6883 76.4062 17.4434 76.4062 17.1413V0.547061C76.4062 0.244947 76.651 0 76.9533 0H78.7768C79.0786 0 79.3239 0.244947 79.3239 0.547061V17.1413C79.3239 17.4434 79.0786 17.6883 78.7768 17.6883Z"
                    fill="black"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M29.5413 5.95203V5.47061C29.5413 5.1685 29.2964 4.92355 28.9942 4.92355H27.1707C26.8686 4.92355 26.6236 5.1685 26.6236 5.47061V17.1413C26.6236 17.4434 26.8686 17.6883 27.1707 17.6883H28.9942C29.2964 17.6883 29.5413 17.4434 29.5413 17.1413V11.3059C29.5413 10.2506 29.931 9.43316 30.7084 8.73611C31.2598 8.24467 31.8598 7.9586 32.5315 7.86888C32.8031 7.83259 33.0062 7.6011 33.0062 7.32706V5.49491C33.0062 5.17342 32.7301 4.92122 32.4099 4.94972C31.3732 5.04185 30.4134 5.37729 29.5413 5.95203Z"
                    fill="black"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M66.7415 5.95203V5.47061C66.7415 5.1685 66.4962 4.92355 66.1944 4.92355H64.3709C64.0686 4.92355 63.8238 5.1685 63.8238 5.47061V17.1413C63.8238 17.4434 64.0686 17.6883 64.3709 17.6883H66.1944C66.4962 17.6883 66.7415 17.4434 66.7415 17.1413V11.3059C66.7415 10.2506 67.1308 9.43316 67.9085 8.73611C68.4597 8.24467 69.0596 7.9586 69.7316 7.86888C70.0033 7.83259 70.2062 7.6011 70.2062 7.32706V5.49491C70.2062 5.17342 69.9299 4.92122 69.6099 4.94972C68.5732 5.04185 67.6136 5.37729 66.7415 5.95203Z"
                    fill="black"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.92941 15.3177C4.66467 15.3177 2.83224 13.4314 2.92069 11.1474C3.00338 9.01165 4.77399 7.30368 6.91136 7.2942C7.74896 7.2905 8.52806 7.54484 9.1736 7.98217C9.5378 8.2289 10.0294 7.97091 10.0294 7.53098V5.45534C10.0294 5.23848 9.90169 5.04126 9.70292 4.95437C8.85375 4.58292 7.91576 4.37654 6.92955 4.37649C3.09894 4.3764 0.00840559 7.45973 1.73224e-05 11.2903C-0.00846213 15.1246 3.0972 18.2354 6.92941 18.2354C7.91618 18.2354 8.85457 18.0288 9.70415 17.657C9.90237 17.5702 10.0294 17.3731 10.0294 17.1567V15.0809C10.0294 14.6409 9.53771 14.3831 9.17341 14.6298C8.53253 15.0639 7.76004 15.3177 6.92941 15.3177Z"
                    fill="black"
                  ></path>
                </LogoSvg>
              </LogoSvg>
            </LogoLink>
            <TabLink to="/">
              <p>커리어리 트렌드</p>
            </TabLink>
            <TabLink to="/">현직자 Q&A</TabLink>
          </LeftBox>
          <RightBox>
            <SearchBox onClick={searchOpenHandler}>
              <SearchSvg
                width="24"
                height="24"
                strokeWidth="0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <g id="style=outline">
                    <path
                      id="search"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.4551 9.84879C15.4551 12.9451 12.9451 15.4551 9.84879 15.4551C6.75253 15.4551 4.24251 12.9451 4.24251 9.84879C4.24251 6.75253 6.75253 4.24251 9.84879 4.24251C12.9451 4.24251 15.4551 6.75253 15.4551 9.84879ZM16.0841 14.6165C17.0962 13.2948 17.6976 11.642 17.6976 9.84879C17.6976 5.51402 14.1836 2 9.84879 2C5.51402 2 2 5.51402 2 9.84879C2 14.1836 5.51402 17.6976 9.84879 17.6976C11.6421 17.6976 13.295 17.0961 14.6167 16.0839C14.6435 16.119 14.6729 16.1527 14.705 16.1848L20.2269 21.7067C20.6175 22.0972 21.2506 22.0972 21.6412 21.7067L21.7069 21.641C22.0975 21.2504 22.0975 20.6173 21.7069 20.2267L16.185 14.7048C16.1529 14.6727 16.1192 14.6433 16.0841 14.6165Z"
                    ></path>
                  </g>
                </g>
              </SearchSvg>
            </SearchBox>
            <div>
              <LoginBtn to="/">
                <LoginBtnText>로그인</LoginBtnText>
              </LoginBtn>
            </div>
            <div>
              <JoinBtn to="/">
                <JoinBtnText>회원가입</JoinBtnText>
              </JoinBtn>
            </div>
          </RightBox>
        </HeaderInner>
      </HeaderContainer>
      {search && <Search setSearch={setSearch} />}
    </>
  );
};

function Header({ setAvoidMistakesModal }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [path, setPath] = useState("/");
  const [search, setSearch] = useState(false);

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
      ) : (
        <NonLoginHeader setSearch={setSearch} search={search} />
      )}
    </>
  );
}

export default Header;
