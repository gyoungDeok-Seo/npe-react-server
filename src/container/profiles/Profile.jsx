import "./profile.css";

const nonExistent = (partText, part) => {
  return (
    <div className="non-existent-content">
      <p className="non-existent-text">{partText}</p>
      <button type="button" className="non-existent-add-btn">
        <svg
          width="16"
          height="16"
          strokeWidth="0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="non-existent-add-svg"
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
        <span className="non-existent-add-text">{part} 추가</span>
      </button>
    </div>
  );
};

function Profile() {
  const isExistence = false;
  return (
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
                        <button type="button" className="content-update-btn">
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
                    <div className="content-box">
                      <div className="content-text-box">
                        <div>
                          <p className="content-text">
                            {isExistence ? "경력 ・ 2개월" : "경력"}
                          </p>
                        </div>
                        {isExistence && (
                          <button type="button" className="content-update-btn">
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
                        )}
                      </div>
                      {isExistence ? (
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
                      ) : (
                        nonExistent(
                          " 지금 하고 있는 일, 혹은 이전에 한 일을 알려주세요.",
                          "경력"
                        )
                      )}
                    </div>
                    <div className="content-box" aria-label="교육">
                      <div className="content-text-box">
                        <div>
                          <p className="content-text">교육</p>
                        </div>
                        {isExistence && (
                          <button type="button" className="content-update-btn">
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
                        )}
                      </div>
                      {isExistence ? (
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
                      ) : (
                        nonExistent(
                          `현재 혹은 이전에 다녔던 학교, 부트캠프 등<br /> 교육
                      기관을 입력해 주세요.`,
                          "교육"
                        )
                      )}
                    </div>
                    <div className="content-box" aria-label="링크">
                      <div className="content-text-box">
                        <div>
                          <p className="content-text">링크</p>
                        </div>
                        {isExistence && (
                          <button type="button" className="content-update-btn">
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
                        )}
                      </div>
                      {isExistence ? (
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
                      ) : (
                        nonExistent(
                          `블로그, SNS등 다양한 링크로 나를 표현해보세요.`,
                          "링크"
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
