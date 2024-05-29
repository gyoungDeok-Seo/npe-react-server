import Header from "../components/header/Header";
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
          <div className="profile-top-box">
            <div className="profile-top-inner">
              <div className="profile-top-gird-box">
                <div>
                  <div className="profile-description-top">
                    <img
                      width="120"
                      height="120"
                      className="profile-description-profile-img"
                      src="https://publy.imgix.net/static/images/img_profile-dummy.png?w=400&amp;h=400&amp;auto=format&amp;fm=png"
                      alt="프로필 이미지"
                    />
                    <div className="profile-top-tool-box">
                      <button type="button" className="profile-share-btn">
                        <svg
                          width="24"
                          height="24"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="profile-share-svg"
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
                        </svg>
                      </button>
                      <button type="button" className="profile-edit-btn">
                        <span className="profile-edit-text">편집</span>
                      </button>
                    </div>
                  </div>
                  <div className="profile-name-box">
                    <div>
                      <h1
                        className="profile-name"
                        style={{ verticalAlign: "middle" }}
                      >
                        백시현
                      </h1>
                    </div>
                    <p className="profile-job">취준생</p>
                  </div>
                </div>
                <p className="profile-description">
                  프론트엔드 취준생 입니다. 저와 같은 문제를 겪은 분들과 문제를
                  공유하기 위해 커리어리를 시작했습니다. #프론트엔드
                </p>
              </div>
            </div>
          </div>
          <div className="profile-tab-box">
            <div className="profile-tab-inner">
              <ul className="profile-tab-list">
                <li className="profile-tab-item">
                  <button
                    type="button"
                    className="profile-tab-btn profile-select-tab"
                  >
                    프로필
                  </button>
                  <div className="profile-tab-under-bar profile-select-under-bar"></div>
                </li>
                <li className="profile-tab-item">
                  <button type="button" className="profile-tab-btn">
                    게시물 22
                  </button>
                  <div className="profile-tab-under-bar"></div>
                </li>
                <li className="profile-tab-item">
                  <button type="button" className="profile-tab-btn">
                    Q&amp;A 활동 9
                  </button>
                  <div className="profile-tab-under-bar"></div>
                </li>
              </ul>
            </div>
          </div>
          <div className="profile-content-container">
            <div className="profile-content-box">
              <div className="profile-content-inner">
                <div className="profile-profile-box">
                  <div>
                    <div>
                      <div>
                        <div className="profile-profile-inner">
                          <div className="content-box" aria-label="스킬">
                            <div className="content-text-box">
                              <div>
                                <p className="content-text">스킬</p>
                              </div>
                              <button
                                type="button"
                                className="content-update-btn"
                              >
                                <svg
                                  width="20"
                                  height="20"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="content-update-svg"
                                >
                                  <g>
                                    <g id="style=outline">
                                      <path
                                        id="Vector (Stroke)"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M18.5 3.99976C18.1021 3.99976 17.7205 4.15783 17.4391 4.43919L16.6462 5.23209L18.768 7.35387L19.5609 6.56098C19.8423 6.27961 20.0003 5.898 20.0003 5.50009C20.0003 5.10217 19.8423 4.72056 19.5609 4.43919C19.2795 4.15783 18.8979 3.99976 18.5 3.99976ZM20.9751 7.97519C21.6315 7.31875 22.0003 6.42843 22.0003 5.50009C22.0003 4.57174 21.6315 3.68142 20.9751 3.02498C20.3187 2.36854 19.4283 1.99976 18.5 1.99976C17.5717 1.99976 16.6813 2.36854 16.0249 3.02498L2.29289 16.757C2.10536 16.9445 2 17.1989 2 17.4641V21.0361C2 21.5884 2.44772 22.0361 3 22.0361H6.5C6.76522 22.0361 7.01957 21.9307 7.20711 21.7432L20.9751 7.97519ZM17.3538 8.76808L15.232 6.6463L4 17.8783V20.0361H6.08579L17.3538 8.76808Z"
                                      ></path>
                                    </g>
                                  </g>
                                </svg>
                              </button>
                            </div>
                            <div className="skill-list">
                              <div className="skill-item">
                                <h3 className="skill-name">React</h3>
                              </div>
                              <div className="skill-item">
                                <h3 className="skill-name">React Native</h3>
                              </div>
                              <div className="skill-item">
                                <h3 className="skill-name">Github</h3>
                              </div>
                              <div className="skill-item">
                                <h3 className="skill-name">typescript</h3>
                              </div>
                            </div>
                          </div>
                          <div
                            className="content-box"
                            aria-label="경력 ・ 2개월"
                          >
                            <div className="content-text-box">
                              <div>
                                <p className="content-text">경력 ・ 2개월</p>
                              </div>
                              <button
                                type="button"
                                className="content-update-btn"
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="content-update-svg"
                                >
                                  <g>
                                    <g id="style=outline">
                                      <path
                                        id="Vector (Stroke)"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z"
                                      ></path>
                                    </g>
                                  </g>
                                </svg>
                              </button>
                            </div>
                            <div className="content-list">
                              <div className="content-item">
                                <svg
                                  width="24"
                                  height="24"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="content-svg"
                                >
                                  <g>
                                    <g id="style=outline">
                                      <path
                                        id="Vector (Stroke)"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7.8787 1.87868C8.44131 1.31607 9.20437 1 10 1H14C14.7957 1 15.5587 1.31607 16.1213 1.87868C16.6839 2.44129 17 3.20435 17 4V5H19C19.7957 5 20.5587 5.31607 21.1213 5.87868C21.684 6.44129 22 7.20435 22 8V13.2317C22.0004 13.247 22.0004 13.2624 22 13.2776V18C22 18.7957 21.684 19.5587 21.1213 20.1213C20.5587 20.6839 19.7957 21 19 21H5.00002C4.20437 21 3.44131 20.6839 2.8787 20.1213C2.31609 19.5587 2.00002 18.7957 2.00002 18V13.2776C1.99967 13.2623 1.99967 13.247 2.00002 13.2317V8C2.00002 7.20435 2.31609 6.44129 2.8787 5.87868C3.44131 5.31607 4.20437 5 5.00002 5H7.00002V4C7.00002 3.20435 7.31609 2.44129 7.8787 1.87868ZM9.00002 5H15V4C15 3.73478 14.8947 3.48043 14.7071 3.29289C14.5196 3.10536 14.2652 3 14 3H10C9.7348 3 9.48045 3.10536 9.29291 3.29289C9.10538 3.48043 9.00002 3.73478 9.00002 4V5ZM5.00002 7C4.7348 7 4.48045 7.10536 4.29291 7.29289C4.10538 7.48043 4.00002 7.73478 4.00002 8V12.5703C6.49099 13.4944 9.18498 14 12 14L12.0012 14C14.7331 14.0033 17.4418 13.5185 20 12.5701V8C20 7.73478 19.8947 7.48043 19.7071 7.29289C19.5196 7.10536 19.2652 7 19 7H5.00002ZM20 14.6915C17.4255 15.5602 14.7231 16.0033 11.9994 16C9.20278 15.9999 6.51277 15.54 4.00002 14.6918V18C4.00002 18.2652 4.10538 18.5196 4.29291 18.7071C4.48045 18.8946 4.7348 19 5.00002 19H19C19.2652 19 19.5196 18.8946 19.7071 18.7071C19.8947 18.5196 20 18.2652 20 18V14.6915ZM11 12C11 11.4477 11.4477 11 12 11H12.01C12.5623 11 13.01 11.4477 13.01 12C13.01 12.5523 12.5623 13 12.01 13H12C11.4477 13 11 12.5523 11 12Z"
                                      ></path>
                                    </g>
                                  </g>
                                </svg>
                                <div className="content-content">
                                  <div className="content-content-name">
                                    테스트용 회사 - 프론트엔드 개발자
                                  </div>
                                  <p className="content-content-period">
                                    2021.01 ~ 2021.02
                                  </p>
                                  <div>
                                    <p className="content-content-another">
                                      산업 분야: 여행
                                    </p>
                                  </div>
                                  <div>
                                    <p className="content-content-another">
                                      스킬: React, Github, typescript
                                    </p>
                                  </div>
                                  <div>
                                    <p className="content-content-another">
                                      테스트테스트테스트테스트테스트테스트테스트테스트테스트
                                    </p>
                                  </div>
                                  <a
                                    href="https://github.com/team-npe"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="content-content-link"
                                  >
                                    링크 이동
                                  </a>
                                </div>
                                <button
                                  type="button"
                                  className="content-content-edit-btn"
                                >
                                  <svg
                                    width="20"
                                    height="20"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="content-content-edit-svg"
                                  >
                                    <g>
                                      <g id="style=outline">
                                        <path
                                          id="Vector (Stroke)"
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M18.5 3.99976C18.1021 3.99976 17.7205 4.15783 17.4391 4.43919L16.6462 5.23209L18.768 7.35387L19.5609 6.56098C19.8423 6.27961 20.0003 5.898 20.0003 5.50009C20.0003 5.10217 19.8423 4.72056 19.5609 4.43919C19.2795 4.15783 18.8979 3.99976 18.5 3.99976ZM20.9751 7.97519C21.6315 7.31875 22.0003 6.42843 22.0003 5.50009C22.0003 4.57174 21.6315 3.68142 20.9751 3.02498C20.3187 2.36854 19.4283 1.99976 18.5 1.99976C17.5717 1.99976 16.6813 2.36854 16.0249 3.02498L2.29289 16.757C2.10536 16.9445 2 17.1989 2 17.4641V21.0361C2 21.5884 2.44772 22.0361 3 22.0361H6.5C6.76522 22.0361 7.01957 21.9307 7.20711 21.7432L20.9751 7.97519ZM17.3538 8.76808L15.232 6.6463L4 17.8783V20.0361H6.08579L17.3538 8.76808Z"
                                        ></path>
                                      </g>
                                    </g>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="content-box" aria-label="교육">
                            <div className="content-text-box">
                              <div>
                                <p className="content-text">교육</p>
                              </div>
                              <button
                                type="button"
                                className="content-update-btn"
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="content-update-svg"
                                >
                                  <g>
                                    <g id="style=outline">
                                      <path
                                        id="Vector (Stroke)"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z"
                                      ></path>
                                    </g>
                                  </g>
                                </svg>
                              </button>
                            </div>
                            <div className="content-list">
                              <div className="content-item">
                                <svg
                                  width="24"
                                  height="24"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="content-svg"
                                >
                                  <g>
                                    <g id="style=outline">
                                      <g id="Union">
                                        <path d="M12 10C12.5523 10 13 9.55229 13 9C13 8.44771 12.5523 8 12 8C11.4477 8 11 8.44771 11 9C11 9.55229 11.4477 10 12 10Z"></path>
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M11.5939 4.08619C11.8524 3.97127 12.1476 3.97127 12.4061 4.08619L21.4061 8.08619C21.7673 8.24669 22 8.60481 22 9C22 9.39519 21.7673 9.75331 21.4061 9.91381L18.0786 11.3927L18.8968 15.4838C18.9646 15.6515 19 15.824 19 16C19 17.6568 15.866 19 12 19C8.13401 19 5 17.6568 5 16C5 15.824 5.03538 15.6515 5.10325 15.4838L5.92145 11.3927L2.59386 9.91381C2.23273 9.75331 2 9.39519 2 9C2 8.60481 2.23273 8.24669 2.59386 8.08619L11.5939 4.08619ZM12.4061 13.9138L16.2054 12.2252L16.9302 15.8488C16.7869 15.9644 16.542 16.1201 16.1619 16.283C15.1987 16.6958 13.7286 17 12 17C10.2714 17 8.8013 16.6958 7.83809 16.283C7.458 16.1201 7.21313 15.9644 7.06984 15.8488L7.79456 12.2252L11.5939 13.9138C11.8524 14.0287 12.1476 14.0287 12.4061 13.9138ZM5.46221 9L12 11.9057L18.5378 9L12 6.09432L5.46221 9Z"
                                        ></path>
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                                <div className="content-content">
                                  <p className="content-content-name">
                                    코리아 IT 아카데미 강남점 - 웹 개발
                                  </p>
                                  <p className="content-content-period">
                                    2023.12 ~ 2024.05
                                  </p>
                                  <div>
                                    <p className="content-content-another">
                                      프로젝트 제작
                                    </p>
                                  </div>
                                  <a
                                    href="https://github.com/team-npe"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="content-content-link"
                                  >
                                    링크 이동
                                  </a>
                                </div>
                                <button
                                  type="button"
                                  className="ontent-content-edit-btn"
                                >
                                  <svg
                                    width="20"
                                    height="20"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="content-content-edit-svg "
                                  >
                                    <g>
                                      <g id="style=outline">
                                        <path
                                          id="Vector (Stroke)"
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M18.5 3.99976C18.1021 3.99976 17.7205 4.15783 17.4391 4.43919L16.6462 5.23209L18.768 7.35387L19.5609 6.56098C19.8423 6.27961 20.0003 5.898 20.0003 5.50009C20.0003 5.10217 19.8423 4.72056 19.5609 4.43919C19.2795 4.15783 18.8979 3.99976 18.5 3.99976ZM20.9751 7.97519C21.6315 7.31875 22.0003 6.42843 22.0003 5.50009C22.0003 4.57174 21.6315 3.68142 20.9751 3.02498C20.3187 2.36854 19.4283 1.99976 18.5 1.99976C17.5717 1.99976 16.6813 2.36854 16.0249 3.02498L2.29289 16.757C2.10536 16.9445 2 17.1989 2 17.4641V21.0361C2 21.5884 2.44772 22.0361 3 22.0361H6.5C6.76522 22.0361 7.01957 21.9307 7.20711 21.7432L20.9751 7.97519ZM17.3538 8.76808L15.232 6.6463L4 17.8783V20.0361H6.08579L17.3538 8.76808Z"
                                        ></path>
                                      </g>
                                    </g>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="content-box" aria-label="링크">
                            <div className="content-text-box">
                              <div>
                                <p className="content-text">링크</p>
                              </div>
                              <button
                                type="button"
                                className="content-update-btn"
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="content-update-svg"
                                >
                                  <g>
                                    <g id="style=outline">
                                      <path
                                        id="Vector (Stroke)"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z"
                                      ></path>
                                    </g>
                                  </g>
                                </svg>
                              </button>
                            </div>
                            <div className="content-list">
                              <div className="content-item">
                                <svg
                                  width="24"
                                  height="24"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  fill="current"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="content-link-svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.9989 5.72205e-06C5.37328 5.72205e-06 0 5.37257 0 12.0004C0 17.3015 3.43804 21.7996 8.20651 23.3871C8.8069 23.4969 9.02569 23.1263 9.02569 22.8081C9.02569 22.523 9.01538 21.7686 9.00949 20.7675C5.67163 21.4924 4.96738 19.1586 4.96738 19.1586C4.4215 17.7722 3.63474 17.4031 3.63474 17.4031C2.5452 16.6591 3.71725 16.6738 3.71725 16.6738C4.9217 16.7586 5.55524 17.9107 5.55524 17.9107C6.62562 19.7443 8.36417 19.2146 9.0478 18.9074C9.15682 18.1324 9.46696 17.6035 9.80951 17.3037C7.14497 17.0002 4.34342 15.9711 4.34342 11.3728C4.34342 10.0622 4.8112 8.99184 5.57882 8.15277C5.45505 7.84926 5.04325 6.62931 5.69668 4.97696C5.69668 4.97696 6.7037 4.65429 8.99622 6.20646C9.95316 5.94052 10.9801 5.80792 12.0004 5.80276C13.0199 5.80792 14.0461 5.94052 15.0045 6.20646C17.2956 4.65429 18.3011 4.97696 18.3011 4.97696C18.956 6.62931 18.5442 7.84926 18.4212 8.15277C19.1903 8.99184 19.6544 10.0622 19.6544 11.3728C19.6544 15.9828 16.8484 16.9972 14.1758 17.2941C14.606 17.6647 14.9898 18.3969 14.9898 19.5166C14.9898 21.1204 14.975 22.4147 14.975 22.8081C14.975 23.1293 15.1916 23.5028 15.8001 23.3856C20.5649 21.7952 24 17.3007 24 12.0004C24 5.37257 18.6267 5.72205e-06 11.9989 5.72205e-06Z"
                                    fill="inherit"
                                  ></path>
                                </svg>
                                <div className="content-content">
                                  <a
                                    href="https://github.com/baek-si-hyun"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="content-content-name"
                                  >
                                    깃헙
                                  </a>
                                </div>
                                <button
                                  type="button"
                                  className="content-content-edit-btn"
                                >
                                  <svg
                                    width="20"
                                    height="20"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="content-content-edit-svg"
                                  >
                                    <g>
                                      <g id="style=outline">
                                        <path
                                          id="Vector (Stroke)"
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M18.5 3.99976C18.1021 3.99976 17.7205 4.15783 17.4391 4.43919L16.6462 5.23209L18.768 7.35387L19.5609 6.56098C19.8423 6.27961 20.0003 5.898 20.0003 5.50009C20.0003 5.10217 19.8423 4.72056 19.5609 4.43919C19.2795 4.15783 18.8979 3.99976 18.5 3.99976ZM20.9751 7.97519C21.6315 7.31875 22.0003 6.42843 22.0003 5.50009C22.0003 4.57174 21.6315 3.68142 20.9751 3.02498C20.3187 2.36854 19.4283 1.99976 18.5 1.99976C17.5717 1.99976 16.6813 2.36854 16.0249 3.02498L2.29289 16.757C2.10536 16.9445 2 17.1989 2 17.4641V21.0361C2 21.5884 2.44772 22.0361 3 22.0361H6.5C6.76522 22.0361 7.01957 21.9307 7.20711 21.7432L20.9751 7.97519ZM17.3538 8.76808L15.232 6.6463L4 17.8783V20.0361H6.08579L17.3538 8.76808Z"
                                        ></path>
                                      </g>
                                    </g>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
export default Profiles;
