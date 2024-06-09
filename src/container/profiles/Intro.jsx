import { Link } from "react-router-dom";
import styled from "styled-components";

const ProfileTopBox = styled.div`
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / 1);
`;
const ProfileTopInner = styled.div`
  width: 1024px;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  margin-left: auto;
  margin-right: auto;
  gap: 3rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;
const ProfileTopGirdBox = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: span 8 / span 8;
  grid-column-start: 3;
  gap: 2rem;
`;
const ProfileDescriptionTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const ProfileDescriptionProfileImg = styled.img`
  border-color: rgb(226 232 240 / 1);
  background-color: rgb(255 255 255 / 1);
  border-radius: 9999px;
  -o-object-fit: cover;
  border-width: 1px;
  border-style: solid;
  object-fit: cover;
  flex: none;
  overflow: hidden;
`;
const ProfileTopToolBox = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const ProfileShareBtn = styled.button`
  color: #334155;
  font-weight: 700;
  font-size: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-color: #64748b;
  border-style: solid;
  border-width: 1px;
  border-radius: 0.25rem;
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;
const ProfileShareSvg = styled.svg`
  fill: #334155;
  width: 1.5rem;
  height: 1.5rem;
  display: block;
`;
const ProfileEditBtn = styled(Link)`
  color: #334155;
  font-weight: 700;
  font-size: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-color: #64748b;
  border-style: solid;
  border-width: 1px;
  border-radius: 0.25rem;
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;
const ProfileEditText = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;
const ProfileNameBox = styled.div`
  margin-top: 2rem;
`;
const ProfileName = styled.span`
  color: #0f172a;
  font-weight: 600;
  font-size: 1.875rem;
  display: inline;
  margin-bottom: 0;
`;
const ProfileJob = styled.p`
  color: #334155;
  font-size: 1rem;
`;
const ProfileDescription = styled.p`
  color: #0f172a;
  line-height: 2;
  font-size: 1rem;
  white-space: pre-line;
`;
const ProfileTabBox = styled.div`
  background-color: rgb(255 255 255 /1);
`;
const ProfileTabInner = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  width: 1024px;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  -moz-column-gap: 3rem;
  column-gap: 3rem;
  row-gap: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;
const ProfileTabList = styled.ul`
  display: flex;
  grid-column: span 8 / span 8;
  grid-column-start: 3;
`;
const ProfileTabItem = styled.li`
  position: relative;
  display: inline-block;
  flex: 1 1 0%;
`;
const ProfileTabBtn = styled.button`
  color: ${(props) => (props.tab ? "#0f172a" : "#64748b")};
  font-weight: 700;
  font-size: 0.875rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background-color: #fff;
  width: 100%;
`;
const ProfileTabUnderBar = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 0.125rem;
  width: 100%;
  background-color: #0f172a;
  opacity: ${(props) => (props.tab ? 1 : 0)};
`;

function Intro({ tab, setTab }) {
  console.log(tab);
  return (
    <>
      <ProfileTopBox>
        <ProfileTopInner>
          <ProfileTopGirdBox>
            <div>
              <ProfileDescriptionTop>
                <ProfileDescriptionProfileImg
                  width="120"
                  height="120"
                  src="https://publy.imgix.net/static/images/img_profile-dummy.png?w=400&amp;h=400&amp;auto=format&amp;fm=png"
                  alt="프로필 이미지"
                />
                <ProfileTopToolBox>
                  <ProfileShareBtn>
                    <ProfileShareSvg
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
                            d="M16.2093 2.42247C17.1582 1.94792 18.2568 1.86976 19.2633 2.20519C20.2699 2.54062 21.1019 3.26216 21.5765 4.21108C21.8115 4.68093 21.9516 5.19247 21.9889 5.71648C22.0262 6.24049 21.9599 6.76671 21.7938 7.2651C21.6277 7.76349 21.3651 8.22428 21.0209 8.62117C20.6767 9.01807 20.2577 9.34328 19.7879 9.57825C19.318 9.81323 18.8065 9.95335 18.2825 9.99063C17.7585 10.0279 17.2322 9.96161 16.7339 9.79552C16.2355 9.62944 15.7747 9.36681 15.3778 9.02264C15.2363 8.89996 15.104 8.76778 14.9815 8.62718L9.91092 11.1625C9.96868 11.4331 9.9991 11.7135 9.9991 12.0004C9.9991 12.2873 9.96868 12.5677 9.91092 12.8382L14.9815 15.3735C15.4468 14.8389 16.0501 14.4328 16.7339 14.2049C17.2324 14.0387 17.7586 13.9724 18.2827 14.0096C18.8068 14.0469 19.3184 14.187 19.7883 14.4219C20.7374 14.8965 21.4591 15.7286 21.7946 16.7352C22.1301 17.7418 22.0521 18.8405 21.5775 19.7896C21.103 20.7386 20.2709 21.4603 19.2643 21.7959C18.2576 22.1314 17.1589 22.0533 16.2099 21.5788C15.2608 21.1043 14.5391 20.2722 14.2036 19.2655C13.9757 18.5817 13.9386 17.8554 14.087 17.1624L9.01662 14.6272C8.65272 15.045 8.20349 15.3856 7.69493 15.6235C6.87879 16.0053 5.95764 16.1004 5.08073 15.8933C4.20381 15.6862 3.4225 15.1891 2.86335 14.4826C2.30421 13.776 2 12.9014 2 12.0004C2 11.0993 2.30421 10.2247 2.86335 9.51813C3.4225 8.81158 4.20381 8.3145 5.08073 8.10743C5.95764 7.90035 6.87879 7.99541 7.69493 8.37721C8.20349 8.61512 8.65272 8.95568 9.01662 9.37357L14.087 6.83838C13.9386 6.14549 13.9756 5.41933 14.2034 4.73562C14.5389 3.72908 15.2604 2.89701 16.2093 2.42247ZM7.78873 12.895C7.92307 12.6263 7.9991 12.3231 7.9991 12.0004C7.9991 11.6776 7.92307 11.3744 7.78873 11.1057M7.78867 12.8951C7.58714 13.298 7.2555 13.6211 6.84746 13.8119C6.43939 14.0028 5.97882 14.0504 5.54036 13.9468C5.10191 13.8433 4.71125 13.5948 4.43168 13.2415C4.15211 12.8882 4 12.4509 4 12.0004C4 11.5498 4.15211 11.1125 4.43168 10.7592C4.71125 10.406 5.10191 10.1574 5.54036 10.0539C5.97882 9.95036 6.43939 9.99789 6.84746 10.1888C7.2555 10.3797 7.58714 10.7027 7.78867 11.1056M18.631 4.10261C18.1277 3.93488 17.5784 3.97396 17.1039 4.21125C16.6294 4.44855 16.2686 4.86462 16.1009 5.36793C15.9331 5.87125 15.9722 6.42058 16.2095 6.89508C16.327 7.13003 16.4896 7.33953 16.6881 7.51163C16.8865 7.68373 17.117 7.81506 17.3662 7.89811C17.6154 7.98116 17.8785 8.01431 18.1406 7.99567C18.4026 7.97703 18.6584 7.90696 18.8933 7.78947C19.1283 7.67197 19.3378 7.50935 19.5099 7.31088C19.682 7.11242 19.8133 6.882 19.8964 6.63279C19.9794 6.38357 20.0126 6.12044 19.9939 5.85841C19.9753 5.59638 19.9052 5.34059 19.7877 5.10564C19.5504 4.63114 19.1343 4.27034 18.631 4.10261ZM18.1409 16.0046C17.8788 15.986 17.6157 16.0191 17.3664 16.1022C16.863 16.27 16.4468 16.6309 16.2095 17.1056C15.9722 17.5802 15.9332 18.1297 16.101 18.6331C16.2688 19.1365 16.6297 19.5526 17.1043 19.7899C17.5789 20.0272 18.1284 20.0663 18.6318 19.8985C19.1352 19.7307 19.5514 19.3698 19.7887 18.8951C20.026 18.4205 20.065 17.8711 19.8972 17.3677C19.7294 16.8642 19.3685 16.4481 18.8939 16.2108C18.6589 16.0933 18.403 16.0232 18.1409 16.0046Z"
                          ></path>
                        </g>
                      </g>
                    </ProfileShareSvg>
                  </ProfileShareBtn>
                  <ProfileEditBtn to="/profiles/update">
                    <ProfileEditText>편집</ProfileEditText>
                  </ProfileEditBtn>
                </ProfileTopToolBox>
              </ProfileDescriptionTop>
              <ProfileNameBox>
                <div>
                  <ProfileName style={{ verticalAlign: "middle" }}>
                    백시현
                  </ProfileName>
                </div>
                <ProfileJob>취준생</ProfileJob>
              </ProfileNameBox>
            </div>
            <ProfileDescription>
              프론트엔드 취준생 입니다. 저와 같은 문제를 겪은 분들과 문제를
              공유하기 위해 커리어리를 시작했습니다. #프론트엔드
            </ProfileDescription>
          </ProfileTopGirdBox>
        </ProfileTopInner>
      </ProfileTopBox>
      <ProfileTabBox>
        <ProfileTabInner>
          <ProfileTabList>
            <ProfileTabItem>
              <ProfileTabBtn tab={tab === 1} onClick={() => setTab(1)}>
                프로필
              </ProfileTabBtn>
              <ProfileTabUnderBar tab={tab === 1}></ProfileTabUnderBar>
            </ProfileTabItem>
            <ProfileTabItem>
              <ProfileTabBtn tab={tab === 2} onClick={() => setTab(2)}>
                게시물 22
              </ProfileTabBtn>
              <ProfileTabUnderBar tab={tab === 2}></ProfileTabUnderBar>
            </ProfileTabItem>
            <ProfileTabItem>
              <ProfileTabBtn tab={tab === 3} onClick={() => setTab(3)}>
                Q&amp;A 활동 9
              </ProfileTabBtn>
              <ProfileTabUnderBar tab={tab === 3}></ProfileTabUnderBar>
            </ProfileTabItem>
          </ProfileTabList>
        </ProfileTabInner>
      </ProfileTabBox>
    </>
  );
}
export default Intro;
