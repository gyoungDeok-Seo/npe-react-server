import { Link } from "react-router-dom";
import styled from "styled-components";

const LikeUserModalTItleBox = styled.div`
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  position: sticky;
  top: 0;
`;

const LikeUserModalTitleInner = styled.div`
  display: flex;
  height: 4rem;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e2e8f0;
`;
const LikeUserModalTItle = styled.p`
  --tw-text-opacity: 1;
  color: rgb(15 23 42 / var(--tw-text-opacity));
  font-weight: 700;
  font-size: 1.125rem;
`;

const LikeUserModalCancelBtn = styled.button`
  padding: 0.5rem;
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
`;

const LikeUserModalCancelSvg = styled.svg`
  fill: #64748b;
`;

const LikeUserModalContentBox = styled.div`
  overflow: auto;
  height: 24rem;
`;
const LikeUserModalUserItem = styled.div`
  padding-right: 1rem;
  border-color: #e2e8f0;
  border-style: solid;
  border-width: 0;
  border-bottom-width: 1px;
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

const UserProfileLink = styled(Link)`
  padding-left: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1 1 0%;
`;

const LikeUserProfileImgBox = styled.div`
  width: 3rem;
  height: 3rem;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(226 232 240 / 1);
  background-color: rgb(255 255 255 / 1);
  flex: none;
  overflow: hidden;
  border-radius: 9999px;
  -o-object-fit: cover;
  object-fit: cover;
`;
const LikeUserProfileImg = styled.img`
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 9999px;
  width: 3rem;
  height: 3rem;
  aspect-ratio: 1 / 1;
`;

const LikeUserName = styled.p`
  color: #0f172a;
  font-weight: 700;
  font-size: 0.875rem;
  word-break: break-all;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const LikeUserJob = styled.p`
  color: #334155;
  font-size: 0.75rem;
  word-break: break-all;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

function LikeUserModal({ setLikeUsersModal }) {
  const handelCancel = () => {
    setLikeUsersModal(false);
  };
  return (
    <div>
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          overflow: "auto",
          zIndex: 10,
        }}
      >
        <div
          tabindex="-1"
          role="dialog"
          aria-modal="true"
          style={{
            position: "relative",
            inset: "50% auto auto 50%",
            border: 0,
            background: "white",
            overflow: "hidden",
            borderRadius: 8,
            outline: "none",
            padding: 0,
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            maxWidth: 500,
            width: "100%",
            maxHeight: "calc(100% - 48px)",
          }}
        >
          <LikeUserModalTItleBox>
            <LikeUserModalTitleInner>
              <LikeUserModalTItle>반응</LikeUserModalTItle>
              <LikeUserModalCancelBtn type="button" onClick={handelCancel}>
                <LikeUserModalCancelSvg
                  width="24"
                  height="24"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <g id="style=outline">
                      <path
                        id="Vector (Stroke)"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                      ></path>
                    </g>
                  </g>
                </LikeUserModalCancelSvg>
              </LikeUserModalCancelBtn>
            </LikeUserModalTitleInner>
          </LikeUserModalTItleBox>
          <LikeUserModalContentBox>
            <div>
              <div style={{ height: "auto", overflow: "auto" }}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                  <LikeUserModalUserItem>
                    <UserProfileLink to="#">
                      <LikeUserProfileImgBox>
                        <LikeUserProfileImg
                          src="https://publy.imgix.net/user-uploaded/592419/2024.03/2c45767f073664ae84d963661fc3b80e0b13957827edcf5782650225c27981c1.jpeg?w=200&amp;h=200&amp;auto=format&amp;fm=jpeg"
                          alt="profile picture"
                          title="profile picture"
                        />
                      </LikeUserProfileImgBox>
                      <div>
                        <LikeUserName>민성철</LikeUserName>
                        <LikeUserJob>개빌자</LikeUserJob>
                      </div>
                    </UserProfileLink>
                  </LikeUserModalUserItem>
                ))}
              </div>
            </div>
          </LikeUserModalContentBox>
        </div>
      </div>
    </div>
  );
}
export default LikeUserModal;
