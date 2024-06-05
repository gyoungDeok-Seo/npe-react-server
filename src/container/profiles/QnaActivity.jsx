import styled from "styled-components";

const QnaActivityContainer = styled.div`
  border-color: #e2e8f0;
  border-style: solid;
  border-width: 0;
  border-top-width: 1px;
`;

const QnaActivityBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  width: 1024px;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  -moz-column-gap: 3rem;
  column-gap: 3rem;
  row-gap: 2rem;
  padding-left: 1.5rem;
  padding-bottom: 5rem;
  padding-right: 1.5rem;
`;
const QnaActivityColSpanBox = styled.div`
  grid-column: span 8 / span 8;
  grid-column-start: 3;
`;

function QnaActivity() {
  return (
    <QnaActivityContainer>
      <QnaActivityBox>
        <QnaActivityColSpanBox>
          <div className="tw-flex tw-flex-col tw-gap-5 tw-mt-5">
            <div className="tw-flex tw-items-center tw-gap-2">
              <button
                type="button"
                className="tw-flex tw-items-center tw-py-2 tw-px-3 tw-rounded-full tw-border tw-border-solid tw-border-color-slate-600 tw-bg-color-slate-600"
              >
                <span className="tw-text-sm tw-font-bold tw-text-color-white">
                  답변 <span>7</span>
                </span>
              </button>
              <button
                type="button"
                className="tw-flex tw-items-center tw-py-2 tw-px-3 tw-rounded-full tw-border tw-border-solid tw-border-color-slate-200 tw-bg-color-white hover hover:tw-bg-color-background-hover"
              >
                <span className="tw-text-sm tw-font-bold tw-text-color-text-bold">
                  질문 <span>2</span>
                </span>
              </button>
            </div>
            <div className="infinite-scroll-component__outerdiv">
              <div
                className="infinite-scroll-component tw-flex tw-flex-col tw-gap-3"
                style={{ height: "auto", overflow: "inherit" }}
              >
                <div className="tw-flex tw-flex-col tw-bg-color-white">
                  <div className="tw-flex tw-flex-col tw-gap-4 tw-p-4">
                    <div className="tw-flex tw-justify-between tw-items-center">
                      <div className="tw-flex tw-gap-3 tw-items-center">
                        <img
                          src="https://publy.imgix.net/static/images/img_profile-dummy.png?w=200&h=200&auto=format&fm=png"
                          alt="백시현님의 프로필 사진"
                          className="tw-profile-image tw-w-10 tw-h-10"
                        />
                        <div className="tw-flex tw-flex-col">
                          <span className="tw-text-sm tw-font-bold tw-text-color-text-bold">
                            백시현
                          </span>
                          <span className="tw-text-xs tw-text-color-text-subtle tw-line-clamp-1 tw-break-all">
                            취준생
                          </span>
                          <span className="tw-text-xs tw-text-color-text-subtler">
                            2023년 05월 05일
                          </span>
                        </div>
                      </div>
                    </div>
                    <div id="qna">
                      <a
                        className="tw-flex tw-flex-col tw-items-start tw-gap-2 tw-p-3 tw-border tw-border-solid tw-rounded tw-border-color-slate-200"
                        rel="noreferrer"
                        href="/qnas/3001"
                      >
                        <div className="tw-flex tw-items-center tw-justify-center tw-w-7 tw-h-7 tw-rounded-lg tw-bg-color-slate-100">
                          <span className="tw-text-sm tw-font-bold tw-text-color-slate-600 tw-leading-none">
                            Q.
                          </span>
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-1">
                          <span className="tw-text-sm tw-font-bold tw-text-color-text-bold tw-line-clamp-2">
                            국비지원교육 커리큘럼 추천
                          </span>
                          <span className="tw-text-sm tw-line-clamp-1 tw-text-color-text-bold tw-line-clamp-1 tw-break-all">
                            안녕하세요 제 소개를 먼저 하자면 지방대 IT융합학부
                            2학년 중퇴 고졸입니다. 개인적인 사정으로 대학교를
                            다닐수 없게 되었고 국비지원교육에 관심이 생겨서 발품
                            팔아 면접보고 알아보던 와중 두군데에 합격하게
                            되었습니다. 한 곳은 자바 기반 풀스택, 한 곳은
                            빅데이터/AI 커리큘럼인데 현실적으로 제 상황에서 어떤
                            커리큘럼을 선택하는것이 좋을까요? 대학교에서는
                            C언어, 웹프로그래밍(HTML, CSS, JavaScript)
                            배웠었는데 비록 지방대지만 성적은 전공 과목 모두 A
                            이상이었고 교육도 성실하게 받을 자신은 있지만 워낙
                            빅데이터,AI 쪽이 어렵다는 소리를 듣기도 했고, 고졸이
                            취업이 잘 될까 하는 걱정도 있어서 그냥 풀스택을
                            배워서 빠르게 취직을 할까 생각중이기도 합니다. 물론
                            취직 후에 학위는 학점은행제나 야간학교를 통해서
                            나중에라도 취득할 생각입니다. 제 상황에서 어떤
                            결정을 해야하는지 선배님들의 의견이 필요합니다.
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="focus:tw-outline-none">
                      <p className="auto-line-break tw-text-slate-900 tw-whitespace-pre-line">
                        저가 작년 인공지능 국비교육과정을 들었는데요, 총 6개월
                        강의중에서 웹개발 5개월배우고 인공지능 1개월
                        배우더라구요. 학원마다 교육과정은 다를수 있지만
                        교육과정을 관리,감독하는것은 정부이기에 크게 다르지는
                        않을거 같네요. 진도 나가기 급하다는 느낌을 많이
                        받았습니다. 웹개발 수업이었다면 좋은 수업이었겠지만
                        정해진 기간안에 기본지식+인공지능 다 가르치려고 하다보니
                        그런거같은데요, 윗분 말씀대로 겉핥기 라는 말이 딱 맞는거
                        같네요. 배우는건 많은데 깊이있게 배우는게 없습니다.
                        그리고 수강생이 20명 초반이었던거 같은데 인공지능
                        빅데이터 쪽으로 취직하시는분 없었고 거의 웹개발로
                        취직하셧습니다.
                      </p>
                    </div>
                  </div>
                  <div className="tw-p-1 tw-pt-0 tw-flex tw-flex-col tw-items-start">
                    <div className="tw-p-3">
                      <button
                        className="tw-flex tw-items-center tw-p-0 tw-underline-offset-2 hover:tw-underline"
                        type="button"
                      >
                        <span className="tw-text-xs tw-text-color-text-subtler">
                          좋아요 <b>5</b>
                        </span>
                      </button>
                    </div>
                    <div className="tw-flex tw-items-center">
                      <button
                        type="button"
                        className="tw-flex tw-items-center tw-gap-1 tw-p-3"
                      >
                        <svg
                          width={20}
                          height={20}
                          strokeWidth={0}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="tw-fill-color-slate-500"
                        >
                          <g>
                            <g id="style=outline">
                              <path
                                id="Union"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M11.7105 2C11.1269 2 10.5626 2.22616 10.1429 2.63603C9.72241 3.04668 9.48168 3.60876 9.48168 4.2V5.081C9.48168 5.8511 9.24202 6.45313 8.70554 7.1517L6.98522 9.3909C6.95407 9.43146 6.92261 9.47208 6.89106 9.51283C6.79113 9.64188 6.69013 9.7723 6.59499 9.90573C6.43439 9.81652 6.2657 9.74167 6.09165 9.6816C5.74159 9.56076 5.37108 9.5 5 9.5C4.62892 9.5 4.25841 9.56076 3.90835 9.6816C3.55835 9.80241 3.23 9.98293 2.9456 10.2199C2.66093 10.4572 2.42331 10.7487 2.25676 11.0838C2.08976 11.4197 2 11.7884 2 12.1667V19.3333C2 20.1055 2.3695 20.7999 2.9456 21.28C3.51639 21.7556 4.25733 21.9999 5 21.9999C5.74267 21.9999 6.48361 21.7556 7.0544 21.28C7.15661 21.1948 7.25231 21.1029 7.3406 21.005C7.52088 21.1423 7.71506 21.2621 7.9205 21.3624L7.98188 21.3923C8.84377 21.813 10.0667 21.9997 10.9236 22H17.24C18.0332 22.0002 18.805 21.7322 19.4237 21.237C20.0423 20.7419 20.4707 20.0491 20.6301 19.2737L20.6306 19.2709L21.931 13.0756L21.932 13.0707C22.0337 12.5742 22.0212 12.0616 21.8956 11.5706C21.7701 11.0796 21.5349 10.6237 21.2088 10.2353C20.8828 9.8469 20.4742 9.53581 20.0134 9.32283C19.5527 9.10988 19.0504 8.99986 18.5426 8.9998H15V5.1998C15 4.19458 14.5473 3.54265 13.9789 2.9875C13.3903 2.41277 12.6958 2 11.7105 2ZM6 18.3179C6 18.3171 6 18.3164 6 18.3156V12.1667C6 12.1072 5.9863 12.0424 5.95228 11.974C5.91781 11.9046 5.86079 11.8287 5.77403 11.7564C5.687 11.6838 5.57439 11.6188 5.43908 11.5721C5.30384 11.5255 5.15421 11.5 5 11.5C4.84579 11.5 4.69616 11.5255 4.56092 11.5721C4.42561 11.6188 4.31301 11.6838 4.22597 11.7564C4.13921 11.8287 4.08219 11.9046 4.04772 11.974C4.0137 12.0424 4 12.1072 4 12.1667V19.3333C4 19.4451 4.05193 19.5985 4.22597 19.7435C4.40533 19.893 4.6818 19.9999 5 19.9999C5.3182 19.9999 5.59467 19.893 5.77403 19.7435C5.94807 19.5985 6 19.4451 6 19.3333V18.3179ZM8 18.3169C8.00012 18.5717 8.07271 18.8235 8.21195 19.0436C8.35158 19.2643 8.55351 19.4458 8.79762 19.5649L8.85912 19.595C9.36087 19.8398 10.256 19.9997 10.9236 20H17.24C17.5835 20.0001 17.9137 19.8839 18.174 19.6755C18.4338 19.4675 18.6074 19.1819 18.6713 18.8699L18.6723 18.865L19.9726 12.6697L19.9731 12.6675C20.0135 12.4684 20.0084 12.2632 19.958 12.0661C19.9073 11.8681 19.812 11.6819 19.6771 11.5212C19.5421 11.3604 19.3707 11.2291 19.1743 11.1383C18.9777 11.0474 18.762 10.9998 18.5426 10.9998H13V5.1998C13 4.93199 12.9348 4.76342 12.5815 4.41839C12.2483 4.09295 12.0287 4 11.7105 4C11.6423 4 11.5814 4.02669 11.5403 4.06691C11.4999 4.10635 11.4817 4.15472 11.4817 4.2V5.081C11.4817 6.38799 11.0314 7.4068 10.2917 8.3699L8.57141 10.6091C8.20951 11.0803 8.12046 11.1967 8.06816 11.318C8.03833 11.3872 8 11.5066 8 12L8 18.3156C8 18.3161 8 18.3165 8 18.3169Z"
                              />
                            </g>
                          </g>
                        </svg>
                        <span className="tw-text-xs tw-font-bold tw-tabular-nums tw-text-color-slate-500">
                          좋아요
                        </span>
                      </button>
                      <a
                        className="tw-flex tw-items-center tw-gap-1 tw-p-3"
                        href="/qnas/3001"
                      >
                        <svg
                          width={20}
                          height={20}
                          strokeWidth={0}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="tw-fill-color-slate-500"
                        >
                          <g>
                            <g id="style=outline">
                              <path
                                id="Vector (Stroke)"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5 5C4.73478 5 4.48043 5.10536 4.29289 5.29289C4.10536 5.48043 4 5.73478 4 6V14C4 14.2652 4.10536 14.5196 4.29289 14.7071C4.48043 14.8946 4.73478 15 5 15H9C9.55228 15 10 15.4477 10 16V18.5858L13.2929 15.2929C13.4804 15.1054 13.7348 15 14 15H19C19.2652 15 19.5196 14.8946 19.7071 14.7071C19.8946 14.5196 20 14.2652 20 14V6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5H5ZM2.87868 3.87868C3.44129 3.31607 4.20435 3 5 3H19C19.7957 3 20.5587 3.31607 21.1213 3.87868C21.6839 4.44129 22 5.20435 22 6V14C22 14.7957 21.6839 15.5587 21.1213 16.1213C20.5587 16.6839 19.7957 17 19 17H14.4142L9.70711 21.7071C9.42111 21.9931 8.99099 22.0787 8.61732 21.9239C8.24364 21.7691 8 21.4045 8 21V17H5C4.20435 17 3.44129 16.6839 2.87868 16.1213C2.31607 15.5587 2 14.7956 2 14V6C2 5.20435 2.31607 4.44129 2.87868 3.87868ZM7 10C7 9.44772 7.44772 9 8 9H8.01C8.56228 9 9.01 9.44772 9.01 10C9.01 10.5523 8.56228 11 8.01 11H8C7.44772 11 7 10.5523 7 10ZM11 10C11 9.44772 11.4477 9 12 9H12.01C12.5623 9 13.01 9.44772 13.01 10C13.01 10.5523 12.5623 11 12.01 11H12C11.4477 11 11 10.5523 11 10ZM15 10C15 9.44772 15.4477 9 16 9H16.01C16.5623 9 17.01 9.44772 17.01 10C17.01 10.5523 16.5623 11 16.01 11H16C15.4477 11 15 10.5523 15 10Z"
                              />
                            </g>
                          </g>
                        </svg>
                        <span className="tw-text-xs tw-font-bold tw-text-color-slate-500 tw-tabular-nums">
                          댓글 0
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <hr className="tw-border-color-slate-200 tw-my-0 tw-w-full" />
                <div className="tw-flex tw-flex-col tw-bg-color-white">
                  <div className="tw-flex tw-flex-col tw-gap-4 tw-p-4">
                    <div className="tw-flex tw-justify-between tw-items-center">
                      <div className="tw-flex tw-gap-3 tw-items-center">
                        <img
                          src="https://publy.imgix.net/static/images/img_profile-dummy.png?w=200&h=200&auto=format&fm=png"
                          alt="백시현님의 프로필 사진"
                          className="tw-profile-image tw-w-10 tw-h-10"
                        />
                        <div className="tw-flex tw-flex-col">
                          <span className="tw-text-sm tw-font-bold tw-text-color-text-bold">
                            백시현
                          </span>
                          <span className="tw-text-xs tw-text-color-text-subtle tw-line-clamp-1 tw-break-all">
                            취준생
                          </span>
                          <span className="tw-text-xs tw-text-color-text-subtler">
                            2023년 05월 02일
                          </span>
                        </div>
                      </div>
                    </div>
                    <div id="qna">
                      <a
                        className="tw-flex tw-flex-col tw-items-start tw-gap-2 tw-p-3 tw-border tw-border-solid tw-rounded tw-border-color-slate-200"
                        rel="noreferrer"
                        href="/qnas/2940"
                      >
                        <div className="tw-flex tw-items-center tw-justify-center tw-w-7 tw-h-7 tw-rounded-lg tw-bg-color-slate-100">
                          <span className="tw-text-sm tw-font-bold tw-text-color-slate-600 tw-leading-none">
                            Q.
                          </span>
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-1">
                          <span className="tw-text-sm tw-font-bold tw-text-color-text-bold tw-line-clamp-2">
                            면접 후 두 회사에서 연락이 왔어요 임베디드 vs JAVA
                          </span>
                          <span className="tw-text-sm tw-line-clamp-1 tw-text-color-text-bold tw-line-clamp-1 tw-break-all">
                            신입이고 여러곳 면접후 맘에 드는곳 두곳 중
                            고민중입니다 임베디드와 자바 중 어떤게 전망이
                            좋을까요?
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      role="button"
                      tabIndex={-1}
                      className="false focus:tw-outline-none"
                    >
                      <p
                        className="auto-line-break tw-text-slate-900 tw-whitespace-pre-line"
                        style={{ overflowWrap: "break-word", display: "block" }}
                      >
                        비슷하면서도 다른 두 업종중 어딜갈지 고민중이시군요.
                        제가 현업에 있는 사람은 아니지만 최근 헤드헌터 일을
                        오래하신분과 비슷한 주제를 이야기했는데요, 선택에 도움이
                        되실지도 모르니 답변 남겨요
                        <span>
                          ...{"{"}" "{"}"}
                          <span className="tw-text-slate-500 tw-cursor-pointer">
                            더 보기
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="tw-p-1 tw-pt-0 tw-flex tw-flex-col tw-items-start">
                    <div className="tw-p-3">
                      <button
                        className="tw-flex tw-items-center tw-p-0 tw-underline-offset-2 hover:tw-underline"
                        type="button"
                      >
                        <span className="tw-text-xs tw-text-color-text-subtler">
                          좋아요 <b>5</b>
                        </span>
                      </button>
                    </div>
                    <div className="tw-flex tw-items-center">
                      <button
                        type="button"
                        className="tw-flex tw-items-center tw-gap-1 tw-p-3"
                      >
                        <svg
                          width={20}
                          height={20}
                          strokeWidth={0}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="tw-fill-color-slate-500"
                        >
                          <g>
                            <g id="style=outline">
                              <path
                                id="Union"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M11.7105 2C11.1269 2 10.5626 2.22616 10.1429 2.63603C9.72241 3.04668 9.48168 3.60876 9.48168 4.2V5.081C9.48168 5.8511 9.24202 6.45313 8.70554 7.1517L6.98522 9.3909C6.95407 9.43146 6.92261 9.47208 6.89106 9.51283C6.79113 9.64188 6.69013 9.7723 6.59499 9.90573C6.43439 9.81652 6.2657 9.74167 6.09165 9.6816C5.74159 9.56076 5.37108 9.5 5 9.5C4.62892 9.5 4.25841 9.56076 3.90835 9.6816C3.55835 9.80241 3.23 9.98293 2.9456 10.2199C2.66093 10.4572 2.42331 10.7487 2.25676 11.0838C2.08976 11.4197 2 11.7884 2 12.1667V19.3333C2 20.1055 2.3695 20.7999 2.9456 21.28C3.51639 21.7556 4.25733 21.9999 5 21.9999C5.74267 21.9999 6.48361 21.7556 7.0544 21.28C7.15661 21.1948 7.25231 21.1029 7.3406 21.005C7.52088 21.1423 7.71506 21.2621 7.9205 21.3624L7.98188 21.3923C8.84377 21.813 10.0667 21.9997 10.9236 22H17.24C18.0332 22.0002 18.805 21.7322 19.4237 21.237C20.0423 20.7419 20.4707 20.0491 20.6301 19.2737L20.6306 19.2709L21.931 13.0756L21.932 13.0707C22.0337 12.5742 22.0212 12.0616 21.8956 11.5706C21.7701 11.0796 21.5349 10.6237 21.2088 10.2353C20.8828 9.8469 20.4742 9.53581 20.0134 9.32283C19.5527 9.10988 19.0504 8.99986 18.5426 8.9998H15V5.1998C15 4.19458 14.5473 3.54265 13.9789 2.9875C13.3903 2.41277 12.6958 2 11.7105 2ZM6 18.3179C6 18.3171 6 18.3164 6 18.3156V12.1667C6 12.1072 5.9863 12.0424 5.95228 11.974C5.91781 11.9046 5.86079 11.8287 5.77403 11.7564C5.687 11.6838 5.57439 11.6188 5.43908 11.5721C5.30384 11.5255 5.15421 11.5 5 11.5C4.84579 11.5 4.69616 11.5255 4.56092 11.5721C4.42561 11.6188 4.31301 11.6838 4.22597 11.7564C4.13921 11.8287 4.08219 11.9046 4.04772 11.974C4.0137 12.0424 4 12.1072 4 12.1667V19.3333C4 19.4451 4.05193 19.5985 4.22597 19.7435C4.40533 19.893 4.6818 19.9999 5 19.9999C5.3182 19.9999 5.59467 19.893 5.77403 19.7435C5.94807 19.5985 6 19.4451 6 19.3333V18.3179ZM8 18.3169C8.00012 18.5717 8.07271 18.8235 8.21195 19.0436C8.35158 19.2643 8.55351 19.4458 8.79762 19.5649L8.85912 19.595C9.36087 19.8398 10.256 19.9997 10.9236 20H17.24C17.5835 20.0001 17.9137 19.8839 18.174 19.6755C18.4338 19.4675 18.6074 19.1819 18.6713 18.8699L18.6723 18.865L19.9726 12.6697L19.9731 12.6675C20.0135 12.4684 20.0084 12.2632 19.958 12.0661C19.9073 11.8681 19.812 11.6819 19.6771 11.5212C19.5421 11.3604 19.3707 11.2291 19.1743 11.1383C18.9777 11.0474 18.762 10.9998 18.5426 10.9998H13V5.1998C13 4.93199 12.9348 4.76342 12.5815 4.41839C12.2483 4.09295 12.0287 4 11.7105 4C11.6423 4 11.5814 4.02669 11.5403 4.06691C11.4999 4.10635 11.4817 4.15472 11.4817 4.2V5.081C11.4817 6.38799 11.0314 7.4068 10.2917 8.3699L8.57141 10.6091C8.20951 11.0803 8.12046 11.1967 8.06816 11.318C8.03833 11.3872 8 11.5066 8 12L8 18.3156C8 18.3161 8 18.3165 8 18.3169Z"
                              />
                            </g>
                          </g>
                        </svg>
                        <span className="tw-text-xs tw-font-bold tw-tabular-nums tw-text-color-slate-500">
                          좋아요
                        </span>
                      </button>
                      <a
                        className="tw-flex tw-items-center tw-gap-1 tw-p-3"
                        href="/qnas/2940"
                      >
                        <svg
                          width={20}
                          height={20}
                          strokeWidth={0}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="tw-fill-color-slate-500"
                        >
                          <g>
                            <g id="style=outline">
                              <path
                                id="Vector (Stroke)"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5 5C4.73478 5 4.48043 5.10536 4.29289 5.29289C4.10536 5.48043 4 5.73478 4 6V14C4 14.2652 4.10536 14.5196 4.29289 14.7071C4.48043 14.8946 4.73478 15 5 15H9C9.55228 15 10 15.4477 10 16V18.5858L13.2929 15.2929C13.4804 15.1054 13.7348 15 14 15H19C19.2652 15 19.5196 14.8946 19.7071 14.7071C19.8946 14.5196 20 14.2652 20 14V6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5H5ZM2.87868 3.87868C3.44129 3.31607 4.20435 3 5 3H19C19.7957 3 20.5587 3.31607 21.1213 3.87868C21.6839 4.44129 22 5.20435 22 6V14C22 14.7957 21.6839 15.5587 21.1213 16.1213C20.5587 16.6839 19.7957 17 19 17H14.4142L9.70711 21.7071C9.42111 21.9931 8.99099 22.0787 8.61732 21.9239C8.24364 21.7691 8 21.4045 8 21V17H5C4.20435 17 3.44129 16.6839 2.87868 16.1213C2.31607 15.5587 2 14.7956 2 14V6C2 5.20435 2.31607 4.44129 2.87868 3.87868ZM7 10C7 9.44772 7.44772 9 8 9H8.01C8.56228 9 9.01 9.44772 9.01 10C9.01 10.5523 8.56228 11 8.01 11H8C7.44772 11 7 10.5523 7 10ZM11 10C11 9.44772 11.4477 9 12 9H12.01C12.5623 9 13.01 9.44772 13.01 10C13.01 10.5523 12.5623 11 12.01 11H12C11.4477 11 11 10.5523 11 10ZM15 10C15 9.44772 15.4477 9 16 9H16.01C16.5623 9 17.01 9.44772 17.01 10C17.01 10.5523 16.5623 11 16.01 11H16C15.4477 11 15 10.5523 15 10Z"
                              />
                            </g>
                          </g>
                        </svg>
                        <span className="tw-text-xs tw-font-bold tw-text-color-slate-500 tw-tabular-nums">
                          댓글 0
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <hr className="tw-border-color-slate-200 tw-my-0 tw-w-full" />
                <div className="tw-flex tw-flex-col tw-bg-color-white">
                  <div className="tw-flex tw-flex-col tw-gap-4 tw-p-4">
                    <div className="tw-flex tw-justify-between tw-items-center">
                      <div className="tw-flex tw-gap-3 tw-items-center">
                        <img
                          src="https://publy.imgix.net/static/images/img_profile-dummy.png?w=200&h=200&auto=format&fm=png"
                          alt="백시현님의 프로필 사진"
                          className="tw-profile-image tw-w-10 tw-h-10"
                        />
                        <div className="tw-flex tw-flex-col">
                          <span className="tw-text-sm tw-font-bold tw-text-color-text-bold">
                            백시현
                          </span>
                          <span className="tw-text-xs tw-text-color-text-subtle tw-line-clamp-1 tw-break-all">
                            취준생
                          </span>
                          <span className="tw-text-xs tw-text-color-text-subtler">
                            2023년 03월 27일
                          </span>
                        </div>
                      </div>
                    </div>
                    <div id="qna">
                      <a
                        className="tw-flex tw-flex-col tw-items-start tw-gap-2 tw-p-3 tw-border tw-border-solid tw-rounded tw-border-color-slate-200"
                        rel="noreferrer"
                        href="/qnas/2449"
                      >
                        <div className="tw-flex tw-items-center tw-justify-center tw-w-7 tw-h-7 tw-rounded-lg tw-bg-color-slate-100">
                          <span className="tw-text-sm tw-font-bold tw-text-color-slate-600 tw-leading-none">
                            Q.
                          </span>
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-1">
                          <span className="tw-text-sm tw-font-bold tw-text-color-text-bold tw-line-clamp-2">
                            CSS 질문이 있습니다!
                          </span>
                          <span className="tw-text-sm tw-line-clamp-1 tw-text-color-text-bold tw-line-clamp-1 tw-break-all">
                            화면을 좌우로 2분할해서 각각 엘레먼트를 하나씩
                            렌더링하려고 하는데요, 이 때 style에 float:left,
                            float: right 속성을 각 엘레먼트에 넣어주면 되나요?
                            적용을 해도 2분할이 안되어서요 ㅠㅠ
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      role="button"
                      tabIndex={-1}
                      className="false focus:tw-outline-none"
                    >
                      <p
                        className="auto-line-break tw-text-slate-900 tw-whitespace-pre-line"
                        style={{ overflowWrap: "break-word", display: "block" }}
                      >
                        요즘 웹사이트들을 보면 float보단 flex나 grid를 많이
                        사용하는거 같아요. 저는 grid를 추천합니다. display:
                        grid;
                        <span>
                          ...{"{"}" "{"}"}
                          <span className="tw-text-slate-500 tw-cursor-pointer">
                            더 보기
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="tw-p-1 tw-pt-0 tw-flex tw-flex-col tw-items-start">
                    <div className="tw-p-3">
                      <button
                        className="tw-flex tw-items-center tw-p-0 tw-underline-offset-2 hover:tw-underline"
                        type="button"
                      >
                        <span className="tw-text-xs tw-text-color-text-subtler">
                          좋아요 <b>6</b>
                        </span>
                      </button>
                    </div>
                    <div className="tw-flex tw-items-center">
                      <button
                        type="button"
                        className="tw-flex tw-items-center tw-gap-1 tw-p-3"
                      >
                        <svg
                          width={20}
                          height={20}
                          strokeWidth={0}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="tw-fill-color-slate-500"
                        >
                          <g>
                            <g id="style=outline">
                              <path
                                id="Union"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M11.7105 2C11.1269 2 10.5626 2.22616 10.1429 2.63603C9.72241 3.04668 9.48168 3.60876 9.48168 4.2V5.081C9.48168 5.8511 9.24202 6.45313 8.70554 7.1517L6.98522 9.3909C6.95407 9.43146 6.92261 9.47208 6.89106 9.51283C6.79113 9.64188 6.69013 9.7723 6.59499 9.90573C6.43439 9.81652 6.2657 9.74167 6.09165 9.6816C5.74159 9.56076 5.37108 9.5 5 9.5C4.62892 9.5 4.25841 9.56076 3.90835 9.6816C3.55835 9.80241 3.23 9.98293 2.9456 10.2199C2.66093 10.4572 2.42331 10.7487 2.25676 11.0838C2.08976 11.4197 2 11.7884 2 12.1667V19.3333C2 20.1055 2.3695 20.7999 2.9456 21.28C3.51639 21.7556 4.25733 21.9999 5 21.9999C5.74267 21.9999 6.48361 21.7556 7.0544 21.28C7.15661 21.1948 7.25231 21.1029 7.3406 21.005C7.52088 21.1423 7.71506 21.2621 7.9205 21.3624L7.98188 21.3923C8.84377 21.813 10.0667 21.9997 10.9236 22H17.24C18.0332 22.0002 18.805 21.7322 19.4237 21.237C20.0423 20.7419 20.4707 20.0491 20.6301 19.2737L20.6306 19.2709L21.931 13.0756L21.932 13.0707C22.0337 12.5742 22.0212 12.0616 21.8956 11.5706C21.7701 11.0796 21.5349 10.6237 21.2088 10.2353C20.8828 9.8469 20.4742 9.53581 20.0134 9.32283C19.5527 9.10988 19.0504 8.99986 18.5426 8.9998H15V5.1998C15 4.19458 14.5473 3.54265 13.9789 2.9875C13.3903 2.41277 12.6958 2 11.7105 2ZM6 18.3179C6 18.3171 6 18.3164 6 18.3156V12.1667C6 12.1072 5.9863 12.0424 5.95228 11.974C5.91781 11.9046 5.86079 11.8287 5.77403 11.7564C5.687 11.6838 5.57439 11.6188 5.43908 11.5721C5.30384 11.5255 5.15421 11.5 5 11.5C4.84579 11.5 4.69616 11.5255 4.56092 11.5721C4.42561 11.6188 4.31301 11.6838 4.22597 11.7564C4.13921 11.8287 4.08219 11.9046 4.04772 11.974C4.0137 12.0424 4 12.1072 4 12.1667V19.3333C4 19.4451 4.05193 19.5985 4.22597 19.7435C4.40533 19.893 4.6818 19.9999 5 19.9999C5.3182 19.9999 5.59467 19.893 5.77403 19.7435C5.94807 19.5985 6 19.4451 6 19.3333V18.3179ZM8 18.3169C8.00012 18.5717 8.07271 18.8235 8.21195 19.0436C8.35158 19.2643 8.55351 19.4458 8.79762 19.5649L8.85912 19.595C9.36087 19.8398 10.256 19.9997 10.9236 20H17.24C17.5835 20.0001 17.9137 19.8839 18.174 19.6755C18.4338 19.4675 18.6074 19.1819 18.6713 18.8699L18.6723 18.865L19.9726 12.6697L19.9731 12.6675C20.0135 12.4684 20.0084 12.2632 19.958 12.0661C19.9073 11.8681 19.812 11.6819 19.6771 11.5212C19.5421 11.3604 19.3707 11.2291 19.1743 11.1383C18.9777 11.0474 18.762 10.9998 18.5426 10.9998H13V5.1998C13 4.93199 12.9348 4.76342 12.5815 4.41839C12.2483 4.09295 12.0287 4 11.7105 4C11.6423 4 11.5814 4.02669 11.5403 4.06691C11.4999 4.10635 11.4817 4.15472 11.4817 4.2V5.081C11.4817 6.38799 11.0314 7.4068 10.2917 8.3699L8.57141 10.6091C8.20951 11.0803 8.12046 11.1967 8.06816 11.318C8.03833 11.3872 8 11.5066 8 12L8 18.3156C8 18.3161 8 18.3165 8 18.3169Z"
                              />
                            </g>
                          </g>
                        </svg>
                        <span className="tw-text-xs tw-font-bold tw-tabular-nums tw-text-color-slate-500">
                          좋아요
                        </span>
                      </button>
                      <a
                        className="tw-flex tw-items-center tw-gap-1 tw-p-3"
                        href="/qnas/2449"
                      >
                        <svg
                          width={20}
                          height={20}
                          strokeWidth={0}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="tw-fill-color-slate-500"
                        >
                          <g>
                            <g id="style=outline">
                              <path
                                id="Vector (Stroke)"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5 5C4.73478 5 4.48043 5.10536 4.29289 5.29289C4.10536 5.48043 4 5.73478 4 6V14C4 14.2652 4.10536 14.5196 4.29289 14.7071C4.48043 14.8946 4.73478 15 5 15H9C9.55228 15 10 15.4477 10 16V18.5858L13.2929 15.2929C13.4804 15.1054 13.7348 15 14 15H19C19.2652 15 19.5196 14.8946 19.7071 14.7071C19.8946 14.5196 20 14.2652 20 14V6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5H5ZM2.87868 3.87868C3.44129 3.31607 4.20435 3 5 3H19C19.7957 3 20.5587 3.31607 21.1213 3.87868C21.6839 4.44129 22 5.20435 22 6V14C22 14.7957 21.6839 15.5587 21.1213 16.1213C20.5587 16.6839 19.7957 17 19 17H14.4142L9.70711 21.7071C9.42111 21.9931 8.99099 22.0787 8.61732 21.9239C8.24364 21.7691 8 21.4045 8 21V17H5C4.20435 17 3.44129 16.6839 2.87868 16.1213C2.31607 15.5587 2 14.7956 2 14V6C2 5.20435 2.31607 4.44129 2.87868 3.87868ZM7 10C7 9.44772 7.44772 9 8 9H8.01C8.56228 9 9.01 9.44772 9.01 10C9.01 10.5523 8.56228 11 8.01 11H8C7.44772 11 7 10.5523 7 10ZM11 10C11 9.44772 11.4477 9 12 9H12.01C12.5623 9 13.01 9.44772 13.01 10C13.01 10.5523 12.5623 11 12.01 11H12C11.4477 11 11 10.5523 11 10ZM15 10C15 9.44772 15.4477 9 16 9H16.01C16.5623 9 17.01 9.44772 17.01 10C17.01 10.5523 16.5623 11 16.01 11H16C15.4477 11 15 10.5523 15 10Z"
                              />
                            </g>
                          </g>
                        </svg>
                        <span className="tw-text-xs tw-font-bold tw-text-color-slate-500 tw-tabular-nums">
                          댓글 0
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <hr className="tw-border-color-slate-200 tw-my-0 tw-w-full" />
                <div className="tw-flex tw-flex-col tw-bg-color-white">
                  <div className="tw-flex tw-flex-col tw-gap-4 tw-p-4">
                    <div className="tw-flex tw-justify-between tw-items-center">
                      <div className="tw-flex tw-gap-3 tw-items-center">
                        <img
                          src="https://publy.imgix.net/static/images/img_profile-dummy.png?w=200&h=200&auto=format&fm=png"
                          alt="백시현님의 프로필 사진"
                          className="tw-profile-image tw-w-10 tw-h-10"
                        />
                        <div className="tw-flex tw-flex-col">
                          <span className="tw-text-sm tw-font-bold tw-text-color-text-bold">
                            백시현
                          </span>
                          <span className="tw-text-xs tw-text-color-text-subtle tw-line-clamp-1 tw-break-all">
                            취준생
                          </span>
                          <span className="tw-text-xs tw-text-color-text-subtler">
                            2023년 03월 16일
                          </span>
                        </div>
                      </div>
                    </div>
                    <div id="qna">
                      <a
                        className="tw-flex tw-flex-col tw-items-start tw-gap-2 tw-p-3 tw-border tw-border-solid tw-rounded tw-border-color-slate-200"
                        rel="noreferrer"
                        href="/qnas/2320"
                      >
                        <div className="tw-flex tw-items-center tw-justify-center tw-w-7 tw-h-7 tw-rounded-lg tw-bg-color-slate-100">
                          <span className="tw-text-sm tw-font-bold tw-text-color-slate-600 tw-leading-none">
                            Q.
                          </span>
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-1">
                          <span className="tw-text-sm tw-font-bold tw-text-color-text-bold tw-line-clamp-2">
                            현재 React 를 배우고 있습니다 !
                          </span>
                          <span className="tw-text-sm tw-line-clamp-1 tw-text-color-text-bold tw-line-clamp-1 tw-break-all">
                            현재 React 를 배우고있는 취준생입니다 ! 강의를 뭘
                            들어야할지 몰라서 여쭤봅니다.. 추천해주실만한 강의가
                            있으실까요 ? 웬만하면..어.. 프로젝트 / 아님 협업에
                            도움이 될만한 강의요 ! 추천 부탁드립니다 ㅠㅠㅠㅠ
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      role="button"
                      tabIndex={-1}
                      className="false focus:tw-outline-none"
                    >
                      <p
                        className="auto-line-break tw-text-slate-900 tw-whitespace-pre-line"
                        style={{ overflowWrap: "break-word", display: "block" }}
                      >
                        저는 노마드코더의 리액트강의를 추천드려요. 이 강의의
                        장점 1.처음에 무료로 리액트 기본강의를 들을수있다는
                        점(무료인데도 좋은 강의라고 생각합니다) 2.강의의 목적이
                        프로젝트 제작에 있다는 점(하나의 프로젝트를 미리
                        정해두고 프로젝트
                        <span>
                          ...{"{"}" "{"}"}
                          <span className="tw-text-slate-500 tw-cursor-pointer">
                            더 보기
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="tw-p-1 tw-pt-0 tw-flex tw-flex-col tw-items-start">
                    <div className="tw-p-3">
                      <button
                        className="tw-flex tw-items-center tw-p-0 tw-underline-offset-2 hover:tw-underline"
                        type="button"
                      >
                        <span className="tw-text-xs tw-text-color-text-subtler">
                          좋아요 <b>9</b>
                        </span>
                      </button>
                    </div>
                    <div className="tw-flex tw-items-center">
                      <button
                        type="button"
                        className="tw-flex tw-items-center tw-gap-1 tw-p-3"
                      >
                        <svg
                          width={20}
                          height={20}
                          strokeWidth={0}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="tw-fill-color-slate-500"
                        >
                          <g>
                            <g id="style=outline">
                              <path
                                id="Union"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M11.7105 2C11.1269 2 10.5626 2.22616 10.1429 2.63603C9.72241 3.04668 9.48168 3.60876 9.48168 4.2V5.081C9.48168 5.8511 9.24202 6.45313 8.70554 7.1517L6.98522 9.3909C6.95407 9.43146 6.92261 9.47208 6.89106 9.51283C6.79113 9.64188 6.69013 9.7723 6.59499 9.90573C6.43439 9.81652 6.2657 9.74167 6.09165 9.6816C5.74159 9.56076 5.37108 9.5 5 9.5C4.62892 9.5 4.25841 9.56076 3.90835 9.6816C3.55835 9.80241 3.23 9.98293 2.9456 10.2199C2.66093 10.4572 2.42331 10.7487 2.25676 11.0838C2.08976 11.4197 2 11.7884 2 12.1667V19.3333C2 20.1055 2.3695 20.7999 2.9456 21.28C3.51639 21.7556 4.25733 21.9999 5 21.9999C5.74267 21.9999 6.48361 21.7556 7.0544 21.28C7.15661 21.1948 7.25231 21.1029 7.3406 21.005C7.52088 21.1423 7.71506 21.2621 7.9205 21.3624L7.98188 21.3923C8.84377 21.813 10.0667 21.9997 10.9236 22H17.24C18.0332 22.0002 18.805 21.7322 19.4237 21.237C20.0423 20.7419 20.4707 20.0491 20.6301 19.2737L20.6306 19.2709L21.931 13.0756L21.932 13.0707C22.0337 12.5742 22.0212 12.0616 21.8956 11.5706C21.7701 11.0796 21.5349 10.6237 21.2088 10.2353C20.8828 9.8469 20.4742 9.53581 20.0134 9.32283C19.5527 9.10988 19.0504 8.99986 18.5426 8.9998H15V5.1998C15 4.19458 14.5473 3.54265 13.9789 2.9875C13.3903 2.41277 12.6958 2 11.7105 2ZM6 18.3179C6 18.3171 6 18.3164 6 18.3156V12.1667C6 12.1072 5.9863 12.0424 5.95228 11.974C5.91781 11.9046 5.86079 11.8287 5.77403 11.7564C5.687 11.6838 5.57439 11.6188 5.43908 11.5721C5.30384 11.5255 5.15421 11.5 5 11.5C4.84579 11.5 4.69616 11.5255 4.56092 11.5721C4.42561 11.6188 4.31301 11.6838 4.22597 11.7564C4.13921 11.8287 4.08219 11.9046 4.04772 11.974C4.0137 12.0424 4 12.1072 4 12.1667V19.3333C4 19.4451 4.05193 19.5985 4.22597 19.7435C4.40533 19.893 4.6818 19.9999 5 19.9999C5.3182 19.9999 5.59467 19.893 5.77403 19.7435C5.94807 19.5985 6 19.4451 6 19.3333V18.3179ZM8 18.3169C8.00012 18.5717 8.07271 18.8235 8.21195 19.0436C8.35158 19.2643 8.55351 19.4458 8.79762 19.5649L8.85912 19.595C9.36087 19.8398 10.256 19.9997 10.9236 20H17.24C17.5835 20.0001 17.9137 19.8839 18.174 19.6755C18.4338 19.4675 18.6074 19.1819 18.6713 18.8699L18.6723 18.865L19.9726 12.6697L19.9731 12.6675C20.0135 12.4684 20.0084 12.2632 19.958 12.0661C19.9073 11.8681 19.812 11.6819 19.6771 11.5212C19.5421 11.3604 19.3707 11.2291 19.1743 11.1383C18.9777 11.0474 18.762 10.9998 18.5426 10.9998H13V5.1998C13 4.93199 12.9348 4.76342 12.5815 4.41839C12.2483 4.09295 12.0287 4 11.7105 4C11.6423 4 11.5814 4.02669 11.5403 4.06691C11.4999 4.10635 11.4817 4.15472 11.4817 4.2V5.081C11.4817 6.38799 11.0314 7.4068 10.2917 8.3699L8.57141 10.6091C8.20951 11.0803 8.12046 11.1967 8.06816 11.318C8.03833 11.3872 8 11.5066 8 12L8 18.3156C8 18.3161 8 18.3165 8 18.3169Z"
                              />
                            </g>
                          </g>
                        </svg>
                        <span className="tw-text-xs tw-font-bold tw-tabular-nums tw-text-color-slate-500">
                          좋아요
                        </span>
                      </button>
                      <a
                        className="tw-flex tw-items-center tw-gap-1 tw-p-3"
                        href="/qnas/2320"
                      >
                        <svg
                          width={20}
                          height={20}
                          strokeWidth={0}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="tw-fill-color-slate-500"
                        >
                          <g>
                            <g id="style=outline">
                              <path
                                id="Vector (Stroke)"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5 5C4.73478 5 4.48043 5.10536 4.29289 5.29289C4.10536 5.48043 4 5.73478 4 6V14C4 14.2652 4.10536 14.5196 4.29289 14.7071C4.48043 14.8946 4.73478 15 5 15H9C9.55228 15 10 15.4477 10 16V18.5858L13.2929 15.2929C13.4804 15.1054 13.7348 15 14 15H19C19.2652 15 19.5196 14.8946 19.7071 14.7071C19.8946 14.5196 20 14.2652 20 14V6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5H5ZM2.87868 3.87868C3.44129 3.31607 4.20435 3 5 3H19C19.7957 3 20.5587 3.31607 21.1213 3.87868C21.6839 4.44129 22 5.20435 22 6V14C22 14.7957 21.6839 15.5587 21.1213 16.1213C20.5587 16.6839 19.7957 17 19 17H14.4142L9.70711 21.7071C9.42111 21.9931 8.99099 22.0787 8.61732 21.9239C8.24364 21.7691 8 21.4045 8 21V17H5C4.20435 17 3.44129 16.6839 2.87868 16.1213C2.31607 15.5587 2 14.7956 2 14V6C2 5.20435 2.31607 4.44129 2.87868 3.87868ZM7 10C7 9.44772 7.44772 9 8 9H8.01C8.56228 9 9.01 9.44772 9.01 10C9.01 10.5523 8.56228 11 8.01 11H8C7.44772 11 7 10.5523 7 10ZM11 10C11 9.44772 11.4477 9 12 9H12.01C12.5623 9 13.01 9.44772 13.01 10C13.01 10.5523 12.5623 11 12.01 11H12C11.4477 11 11 10.5523 11 10ZM15 10C15 9.44772 15.4477 9 16 9H16.01C16.5623 9 17.01 9.44772 17.01 10C17.01 10.5523 16.5623 11 16.01 11H16C15.4477 11 15 10.5523 15 10Z"
                              />
                            </g>
                          </g>
                        </svg>
                        <span className="tw-text-xs tw-font-bold tw-text-color-slate-500 tw-tabular-nums">
                          댓글 0
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <hr className="tw-border-color-slate-200 tw-my-0 tw-w-full" />
                <div className="tw-flex tw-flex-col tw-bg-color-white">
                  <div className="tw-flex tw-flex-col tw-gap-4 tw-p-4">
                    <div className="tw-flex tw-justify-between tw-items-center">
                      <div className="tw-flex tw-gap-3 tw-items-center">
                        <img
                          src="https://publy.imgix.net/static/images/img_profile-dummy.png?w=200&h=200&auto=format&fm=png"
                          alt="백시현님의 프로필 사진"
                          className="tw-profile-image tw-w-10 tw-h-10"
                        />
                        <div className="tw-flex tw-flex-col">
                          <span className="tw-text-sm tw-font-bold tw-text-color-text-bold">
                            백시현
                          </span>
                          <span className="tw-text-xs tw-text-color-text-subtle tw-line-clamp-1 tw-break-all">
                            취준생
                          </span>
                          <span className="tw-text-xs tw-text-color-text-subtler">
                            2023년 03월 12일
                          </span>
                        </div>
                      </div>
                    </div>
                    <div id="qna">
                      <a
                        className="tw-flex tw-flex-col tw-items-start tw-gap-2 tw-p-3 tw-border tw-border-solid tw-rounded tw-border-color-slate-200"
                        rel="noreferrer"
                        href="/qnas/2277"
                      >
                        <div className="tw-flex tw-items-center tw-justify-center tw-w-7 tw-h-7 tw-rounded-lg tw-bg-color-slate-100">
                          <span className="tw-text-sm tw-font-bold tw-text-color-slate-600 tw-leading-none">
                            Q.
                          </span>
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-1">
                          <span className="tw-text-sm tw-font-bold tw-text-color-text-bold tw-line-clamp-2">
                            React에서 setState를 props로 넘겨줄 때 타입을 어떻게
                            지정해서 사용해야 하나요 ?
                          </span>
                          <span className="tw-text-sm tw-line-clamp-1 tw-text-color-text-bold tw-line-clamp-1 tw-break-all">
                            setState를 props로 넘겨줄때 넘겨받은
                            자식컴포넌트에서 처럼 쓰려면 props 타입을 어떻게
                            줘야할까요 ...?
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      role="button"
                      tabIndex={-1}
                      className="false focus:tw-outline-none"
                    >
                      <p
                        className="auto-line-break tw-text-slate-900 tw-whitespace-pre-line"
                        style={{ overflowWrap: "break-word", display: "block" }}
                      >
                        저는 이렇게 해결 했습니다 예시) import{"{"}" "{"}"}
                        {"{"}(Dispatch, SetStateAction){"}"} from "react";
                        <span>
                          ...{"{"}" "{"}"}
                          <span className="tw-text-slate-500 tw-cursor-pointer">
                            더 보기
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="tw-p-1 tw-pt-0 tw-flex tw-flex-col tw-items-start">
                    <div className="tw-p-3">
                      <button
                        className="tw-flex tw-items-center tw-p-0 tw-underline-offset-2 hover:tw-underline"
                        type="button"
                      >
                        <span className="tw-text-xs tw-text-color-text-subtler">
                          좋아요 <b>8</b>
                        </span>
                      </button>
                    </div>
                    <div className="tw-flex tw-items-center">
                      <button
                        type="button"
                        className="tw-flex tw-items-center tw-gap-1 tw-p-3"
                      >
                        <svg
                          width={20}
                          height={20}
                          strokeWidth={0}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="tw-fill-color-slate-500"
                        >
                          <g>
                            <g id="style=outline">
                              <path
                                id="Union"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M11.7105 2C11.1269 2 10.5626 2.22616 10.1429 2.63603C9.72241 3.04668 9.48168 3.60876 9.48168 4.2V5.081C9.48168 5.8511 9.24202 6.45313 8.70554 7.1517L6.98522 9.3909C6.95407 9.43146 6.92261 9.47208 6.89106 9.51283C6.79113 9.64188 6.69013 9.7723 6.59499 9.90573C6.43439 9.81652 6.2657 9.74167 6.09165 9.6816C5.74159 9.56076 5.37108 9.5 5 9.5C4.62892 9.5 4.25841 9.56076 3.90835 9.6816C3.55835 9.80241 3.23 9.98293 2.9456 10.2199C2.66093 10.4572 2.42331 10.7487 2.25676 11.0838C2.08976 11.4197 2 11.7884 2 12.1667V19.3333C2 20.1055 2.3695 20.7999 2.9456 21.28C3.51639 21.7556 4.25733 21.9999 5 21.9999C5.74267 21.9999 6.48361 21.7556 7.0544 21.28C7.15661 21.1948 7.25231 21.1029 7.3406 21.005C7.52088 21.1423 7.71506 21.2621 7.9205 21.3624L7.98188 21.3923C8.84377 21.813 10.0667 21.9997 10.9236 22H17.24C18.0332 22.0002 18.805 21.7322 19.4237 21.237C20.0423 20.7419 20.4707 20.0491 20.6301 19.2737L20.6306 19.2709L21.931 13.0756L21.932 13.0707C22.0337 12.5742 22.0212 12.0616 21.8956 11.5706C21.7701 11.0796 21.5349 10.6237 21.2088 10.2353C20.8828 9.8469 20.4742 9.53581 20.0134 9.32283C19.5527 9.10988 19.0504 8.99986 18.5426 8.9998H15V5.1998C15 4.19458 14.5473 3.54265 13.9789 2.9875C13.3903 2.41277 12.6958 2 11.7105 2ZM6 18.3179C6 18.3171 6 18.3164 6 18.3156V12.1667C6 12.1072 5.9863 12.0424 5.95228 11.974C5.91781 11.9046 5.86079 11.8287 5.77403 11.7564C5.687 11.6838 5.57439 11.6188 5.43908 11.5721C5.30384 11.5255 5.15421 11.5 5 11.5C4.84579 11.5 4.69616 11.5255 4.56092 11.5721C4.42561 11.6188 4.31301 11.6838 4.22597 11.7564C4.13921 11.8287 4.08219 11.9046 4.04772 11.974C4.0137 12.0424 4 12.1072 4 12.1667V19.3333C4 19.4451 4.05193 19.5985 4.22597 19.7435C4.40533 19.893 4.6818 19.9999 5 19.9999C5.3182 19.9999 5.59467 19.893 5.77403 19.7435C5.94807 19.5985 6 19.4451 6 19.3333V18.3179ZM8 18.3169C8.00012 18.5717 8.07271 18.8235 8.21195 19.0436C8.35158 19.2643 8.55351 19.4458 8.79762 19.5649L8.85912 19.595C9.36087 19.8398 10.256 19.9997 10.9236 20H17.24C17.5835 20.0001 17.9137 19.8839 18.174 19.6755C18.4338 19.4675 18.6074 19.1819 18.6713 18.8699L18.6723 18.865L19.9726 12.6697L19.9731 12.6675C20.0135 12.4684 20.0084 12.2632 19.958 12.0661C19.9073 11.8681 19.812 11.6819 19.6771 11.5212C19.5421 11.3604 19.3707 11.2291 19.1743 11.1383C18.9777 11.0474 18.762 10.9998 18.5426 10.9998H13V5.1998C13 4.93199 12.9348 4.76342 12.5815 4.41839C12.2483 4.09295 12.0287 4 11.7105 4C11.6423 4 11.5814 4.02669 11.5403 4.06691C11.4999 4.10635 11.4817 4.15472 11.4817 4.2V5.081C11.4817 6.38799 11.0314 7.4068 10.2917 8.3699L8.57141 10.6091C8.20951 11.0803 8.12046 11.1967 8.06816 11.318C8.03833 11.3872 8 11.5066 8 12L8 18.3156C8 18.3161 8 18.3165 8 18.3169Z"
                              />
                            </g>
                          </g>
                        </svg>
                        <span className="tw-text-xs tw-font-bold tw-tabular-nums tw-text-color-slate-500">
                          좋아요
                        </span>
                      </button>
                      <a
                        className="tw-flex tw-items-center tw-gap-1 tw-p-3"
                        href="/qnas/2277"
                      >
                        <svg
                          width={20}
                          height={20}
                          strokeWidth={0}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="tw-fill-color-slate-500"
                        >
                          <g>
                            <g id="style=outline">
                              <path
                                id="Vector (Stroke)"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5 5C4.73478 5 4.48043 5.10536 4.29289 5.29289C4.10536 5.48043 4 5.73478 4 6V14C4 14.2652 4.10536 14.5196 4.29289 14.7071C4.48043 14.8946 4.73478 15 5 15H9C9.55228 15 10 15.4477 10 16V18.5858L13.2929 15.2929C13.4804 15.1054 13.7348 15 14 15H19C19.2652 15 19.5196 14.8946 19.7071 14.7071C19.8946 14.5196 20 14.2652 20 14V6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5H5ZM2.87868 3.87868C3.44129 3.31607 4.20435 3 5 3H19C19.7957 3 20.5587 3.31607 21.1213 3.87868C21.6839 4.44129 22 5.20435 22 6V14C22 14.7957 21.6839 15.5587 21.1213 16.1213C20.5587 16.6839 19.7957 17 19 17H14.4142L9.70711 21.7071C9.42111 21.9931 8.99099 22.0787 8.61732 21.9239C8.24364 21.7691 8 21.4045 8 21V17H5C4.20435 17 3.44129 16.6839 2.87868 16.1213C2.31607 15.5587 2 14.7956 2 14V6C2 5.20435 2.31607 4.44129 2.87868 3.87868ZM7 10C7 9.44772 7.44772 9 8 9H8.01C8.56228 9 9.01 9.44772 9.01 10C9.01 10.5523 8.56228 11 8.01 11H8C7.44772 11 7 10.5523 7 10ZM11 10C11 9.44772 11.4477 9 12 9H12.01C12.5623 9 13.01 9.44772 13.01 10C13.01 10.5523 12.5623 11 12.01 11H12C11.4477 11 11 10.5523 11 10ZM15 10C15 9.44772 15.4477 9 16 9H16.01C16.5623 9 17.01 9.44772 17.01 10C17.01 10.5523 16.5623 11 16.01 11H16C15.4477 11 15 10.5523 15 10Z"
                              />
                            </g>
                          </g>
                        </svg>
                        <span className="tw-text-xs tw-font-bold tw-text-color-slate-500 tw-tabular-nums">
                          댓글 1
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <hr className="tw-border-color-slate-200 tw-my-0 tw-w-full" />
                <div className="tw-flex tw-flex-col tw-bg-color-white">
                  <div className="tw-flex tw-flex-col tw-gap-4 tw-p-4">
                    <div className="tw-flex tw-justify-between tw-items-center">
                      <div className="tw-flex tw-gap-3 tw-items-center">
                        <img
                          src="https://publy.imgix.net/static/images/img_profile-dummy.png?w=200&h=200&auto=format&fm=png"
                          alt="백시현님의 프로필 사진"
                          className="tw-profile-image tw-w-10 tw-h-10"
                        />
                        <div className="tw-flex tw-flex-col">
                          <span className="tw-text-sm tw-font-bold tw-text-color-text-bold">
                            백시현
                          </span>
                          <span className="tw-text-xs tw-text-color-text-subtle tw-line-clamp-1 tw-break-all">
                            취준생
                          </span>
                          <span className="tw-text-xs tw-text-color-text-subtler">
                            2023년 03월 12일
                          </span>
                        </div>
                      </div>
                    </div>
                    <div id="qna">
                      <a
                        className="tw-flex tw-flex-col tw-items-start tw-gap-2 tw-p-3 tw-border tw-border-solid tw-rounded tw-border-color-slate-200"
                        rel="noreferrer"
                        href="/qnas/2207"
                      >
                        <div className="tw-flex tw-items-center tw-justify-center tw-w-7 tw-h-7 tw-rounded-lg tw-bg-color-slate-100">
                          <span className="tw-text-sm tw-font-bold tw-text-color-slate-600 tw-leading-none">
                            Q.
                          </span>
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-1">
                          <span className="tw-text-sm tw-font-bold tw-text-color-text-bold tw-line-clamp-2">
                            react route css
                          </span>
                          <span className="tw-text-sm tw-line-clamp-1 tw-text-color-text-bold tw-line-clamp-1 tw-break-all">
                            react routes 경로중 특정 경로에만 적용하고 싶은
                            css가 있는 경우 어떻게 해야 하나요?? 현재는
                            index.css에 모든 routes경로의 스타일이 적용되어 있는
                            상태입니다. 특정 경로를 감싸난 css provider가
                            있을까요??
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      role="button"
                      tabIndex={-1}
                      className="false focus:tw-outline-none"
                    >
                      <p
                        className="auto-line-break tw-text-slate-900 tw-whitespace-pre-line"
                        style={{ overflowWrap: "break-word", display: "block" }}
                      >
                        저 같은 경우에는 useLocation을 사용해서 pathname을
                        가져왔습니다.boolean타입 state를 추가하고 원하는
                        pathname이 true인지 false인지 여부에 따라 state를
                        변경하는 함수를 추가했습니다 . 이 함수가 useEffect으로
                        처음과 pathname이 바뀔때마다 실행되게 했습니다. 해당
                        state가 true인지 false인지에 따라 클래스를 추가하셔도
                        되고 스타일컴포넌트 사
                        <span>
                          ...{"{"}" "{"}"}
                          <span className="tw-text-slate-500 tw-cursor-pointer">
                            더 보기
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="tw-p-1 tw-pt-0 tw-flex tw-flex-col tw-items-start">
                    <div className="tw-p-3">
                      <button
                        className="tw-flex tw-items-center tw-p-0 tw-underline-offset-2 hover:tw-underline"
                        type="button"
                      >
                        <span className="tw-text-xs tw-text-color-text-subtler">
                          좋아요 <b>5</b>
                        </span>
                      </button>
                    </div>
                    <div className="tw-flex tw-items-center">
                      <button
                        type="button"
                        className="tw-flex tw-items-center tw-gap-1 tw-p-3"
                      >
                        <svg
                          width={20}
                          height={20}
                          strokeWidth={0}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="tw-fill-color-slate-500"
                        >
                          <g>
                            <g id="style=outline">
                              <path
                                id="Union"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M11.7105 2C11.1269 2 10.5626 2.22616 10.1429 2.63603C9.72241 3.04668 9.48168 3.60876 9.48168 4.2V5.081C9.48168 5.8511 9.24202 6.45313 8.70554 7.1517L6.98522 9.3909C6.95407 9.43146 6.92261 9.47208 6.89106 9.51283C6.79113 9.64188 6.69013 9.7723 6.59499 9.90573C6.43439 9.81652 6.2657 9.74167 6.09165 9.6816C5.74159 9.56076 5.37108 9.5 5 9.5C4.62892 9.5 4.25841 9.56076 3.90835 9.6816C3.55835 9.80241 3.23 9.98293 2.9456 10.2199C2.66093 10.4572 2.42331 10.7487 2.25676 11.0838C2.08976 11.4197 2 11.7884 2 12.1667V19.3333C2 20.1055 2.3695 20.7999 2.9456 21.28C3.51639 21.7556 4.25733 21.9999 5 21.9999C5.74267 21.9999 6.48361 21.7556 7.0544 21.28C7.15661 21.1948 7.25231 21.1029 7.3406 21.005C7.52088 21.1423 7.71506 21.2621 7.9205 21.3624L7.98188 21.3923C8.84377 21.813 10.0667 21.9997 10.9236 22H17.24C18.0332 22.0002 18.805 21.7322 19.4237 21.237C20.0423 20.7419 20.4707 20.0491 20.6301 19.2737L20.6306 19.2709L21.931 13.0756L21.932 13.0707C22.0337 12.5742 22.0212 12.0616 21.8956 11.5706C21.7701 11.0796 21.5349 10.6237 21.2088 10.2353C20.8828 9.8469 20.4742 9.53581 20.0134 9.32283C19.5527 9.10988 19.0504 8.99986 18.5426 8.9998H15V5.1998C15 4.19458 14.5473 3.54265 13.9789 2.9875C13.3903 2.41277 12.6958 2 11.7105 2ZM6 18.3179C6 18.3171 6 18.3164 6 18.3156V12.1667C6 12.1072 5.9863 12.0424 5.95228 11.974C5.91781 11.9046 5.86079 11.8287 5.77403 11.7564C5.687 11.6838 5.57439 11.6188 5.43908 11.5721C5.30384 11.5255 5.15421 11.5 5 11.5C4.84579 11.5 4.69616 11.5255 4.56092 11.5721C4.42561 11.6188 4.31301 11.6838 4.22597 11.7564C4.13921 11.8287 4.08219 11.9046 4.04772 11.974C4.0137 12.0424 4 12.1072 4 12.1667V19.3333C4 19.4451 4.05193 19.5985 4.22597 19.7435C4.40533 19.893 4.6818 19.9999 5 19.9999C5.3182 19.9999 5.59467 19.893 5.77403 19.7435C5.94807 19.5985 6 19.4451 6 19.3333V18.3179ZM8 18.3169C8.00012 18.5717 8.07271 18.8235 8.21195 19.0436C8.35158 19.2643 8.55351 19.4458 8.79762 19.5649L8.85912 19.595C9.36087 19.8398 10.256 19.9997 10.9236 20H17.24C17.5835 20.0001 17.9137 19.8839 18.174 19.6755C18.4338 19.4675 18.6074 19.1819 18.6713 18.8699L18.6723 18.865L19.9726 12.6697L19.9731 12.6675C20.0135 12.4684 20.0084 12.2632 19.958 12.0661C19.9073 11.8681 19.812 11.6819 19.6771 11.5212C19.5421 11.3604 19.3707 11.2291 19.1743 11.1383C18.9777 11.0474 18.762 10.9998 18.5426 10.9998H13V5.1998C13 4.93199 12.9348 4.76342 12.5815 4.41839C12.2483 4.09295 12.0287 4 11.7105 4C11.6423 4 11.5814 4.02669 11.5403 4.06691C11.4999 4.10635 11.4817 4.15472 11.4817 4.2V5.081C11.4817 6.38799 11.0314 7.4068 10.2917 8.3699L8.57141 10.6091C8.20951 11.0803 8.12046 11.1967 8.06816 11.318C8.03833 11.3872 8 11.5066 8 12L8 18.3156C8 18.3161 8 18.3165 8 18.3169Z"
                              />
                            </g>
                          </g>
                        </svg>
                        <span className="tw-text-xs tw-font-bold tw-tabular-nums tw-text-color-slate-500">
                          좋아요
                        </span>
                      </button>
                      <a
                        className="tw-flex tw-items-center tw-gap-1 tw-p-3"
                        href="/qnas/2207"
                      >
                        <svg
                          width={20}
                          height={20}
                          strokeWidth={0}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="tw-fill-color-slate-500"
                        >
                          <g>
                            <g id="style=outline">
                              <path
                                id="Vector (Stroke)"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5 5C4.73478 5 4.48043 5.10536 4.29289 5.29289C4.10536 5.48043 4 5.73478 4 6V14C4 14.2652 4.10536 14.5196 4.29289 14.7071C4.48043 14.8946 4.73478 15 5 15H9C9.55228 15 10 15.4477 10 16V18.5858L13.2929 15.2929C13.4804 15.1054 13.7348 15 14 15H19C19.2652 15 19.5196 14.8946 19.7071 14.7071C19.8946 14.5196 20 14.2652 20 14V6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5H5ZM2.87868 3.87868C3.44129 3.31607 4.20435 3 5 3H19C19.7957 3 20.5587 3.31607 21.1213 3.87868C21.6839 4.44129 22 5.20435 22 6V14C22 14.7957 21.6839 15.5587 21.1213 16.1213C20.5587 16.6839 19.7957 17 19 17H14.4142L9.70711 21.7071C9.42111 21.9931 8.99099 22.0787 8.61732 21.9239C8.24364 21.7691 8 21.4045 8 21V17H5C4.20435 17 3.44129 16.6839 2.87868 16.1213C2.31607 15.5587 2 14.7956 2 14V6C2 5.20435 2.31607 4.44129 2.87868 3.87868ZM7 10C7 9.44772 7.44772 9 8 9H8.01C8.56228 9 9.01 9.44772 9.01 10C9.01 10.5523 8.56228 11 8.01 11H8C7.44772 11 7 10.5523 7 10ZM11 10C11 9.44772 11.4477 9 12 9H12.01C12.5623 9 13.01 9.44772 13.01 10C13.01 10.5523 12.5623 11 12.01 11H12C11.4477 11 11 10.5523 11 10ZM15 10C15 9.44772 15.4477 9 16 9H16.01C16.5623 9 17.01 9.44772 17.01 10C17.01 10.5523 16.5623 11 16.01 11H16C15.4477 11 15 10.5523 15 10Z"
                              />
                            </g>
                          </g>
                        </svg>
                        <span className="tw-text-xs tw-font-bold tw-text-color-slate-500 tw-tabular-nums">
                          댓글 0
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <hr className="tw-border-color-slate-200 tw-my-0 tw-w-full" />
                <div className="tw-flex tw-flex-col tw-bg-color-white">
                  <div className="tw-flex tw-flex-col tw-gap-4 tw-p-4">
                    <div className="tw-flex tw-justify-between tw-items-center">
                      <div className="tw-flex tw-gap-3 tw-items-center">
                        <img
                          src="https://publy.imgix.net/static/images/img_profile-dummy.png?w=200&h=200&auto=format&fm=png"
                          alt="백시현님의 프로필 사진"
                          className="tw-profile-image tw-w-10 tw-h-10"
                        />
                        <div className="tw-flex tw-flex-col">
                          <span className="tw-text-sm tw-font-bold tw-text-color-text-bold">
                            백시현
                          </span>
                          <span className="tw-text-xs tw-text-color-text-subtle tw-line-clamp-1 tw-break-all">
                            취준생
                          </span>
                          <span className="tw-text-xs tw-text-color-text-subtler">
                            2023년 03월 08일
                          </span>
                        </div>
                      </div>
                    </div>
                    <div id="qna">
                      <a
                        className="tw-flex tw-flex-col tw-items-start tw-gap-2 tw-p-3 tw-border tw-border-solid tw-rounded tw-border-color-slate-200"
                        rel="noreferrer"
                        href="/qnas/2221"
                      >
                        <div className="tw-flex tw-items-center tw-justify-center tw-w-7 tw-h-7 tw-rounded-lg tw-bg-color-slate-100">
                          <span className="tw-text-sm tw-font-bold tw-text-color-slate-600 tw-leading-none">
                            Q.
                          </span>
                        </div>
                        <div className="tw-flex tw-flex-col tw-gap-1">
                          <span className="tw-text-sm tw-font-bold tw-text-color-text-bold tw-line-clamp-2">
                            국비지원학원 팀프로젝트가 걱정됩니다.
                          </span>
                          <span className="tw-text-sm tw-line-clamp-1 tw-text-color-text-bold tw-line-clamp-1 tw-break-all">
                            풀스택 웹개발 국비지원학원에 다니는 비전공자
                            취준생입니다. 개발쪽이 적성과 성향이 잘 맞는다는
                            판단 하에 오랜시간 고민하다가 진로를 틀었습니다.
                            집안사정이 많이 안좋은 상황이라 취업을 빨리 해야
                            먹고 살 수 있습니다.ㅠ 학원수업 외에도 따로
                            네트워크,서버 관련 찾아 공부하고 있고 바쁘겠지만
                            정보처리기사 자격증 준비할 생각입니다. 간절해서요.
                            학원은 시작한지 얼마 안되었는데, 강사님께서 며칠
                            수업하다가 팀프로트를 진행할 팀을 짜겠다고 했습니다.
                            팀원이 누가 될지는 아직 모르지만 서로 협력하고 같이
                            머리 쥐어싸매면서 코딩할 생각에 설레고 있었어요.
                            그런데 학원에 지나치게 의욕이 없는 동기분이
                            계십니다. 배운 내용을 어려워하시는것 같길래 실습
                            코딩을 도와주면서 알려줬습니다. 원리를 이해하는게
                            중요하다고 생각해서 전체적인 구조까지 알려드렸는데,
                            변수 선언부터 막히시더라고요. 그래서 다시 변수
                            선언과 값 대입을 알려드렸습니다. int a = 5; 이
                            내용을요. 알려드리고 다른 변수 선언해보라고 했는데
                            잠시 침묵하다가 어떻게 해야하냐고 물어보더라고요...
                            새로 배운 내용을 따라가기 어려운거면 이해가 되는데,
                            한시간 가까이 붙잡고 수차례 설명을 해드려도
                            똑같습니다. 이기적이게 느껴질 수도 있지만 저는
                            이분과 팀원이 되기 싫습니다 ㅠㅜ 저는 취업이
                            간절하고, 취업엔 팀프로젝트가 중요하다고
                            강조되었는데 기초 개념조차 이해하지 못하고 코드를
                            읽지 않으려는 분과는 도저히 못하겠습니다. 강사님께
                            사실대로 말씀드리고 제가 원하는걸 말씀드리고 싶은데,
                            팀이 하기 싫다는 얘기를 해도 될지 망설여져서
                            질문올립니다. 제가 너무 이기적인걸까요? 현실적인
                            조언 부탁드립니다.
                          </span>
                        </div>
                      </a>
                    </div>
                    <div
                      role="button"
                      tabIndex={-1}
                      className="false focus:tw-outline-none"
                    >
                      <p
                        className="auto-line-break tw-text-slate-900 tw-whitespace-pre-line"
                        style={{ overflowWrap: "break-word", display: "block" }}
                      >
                        저도 국비지원학원에서 팀프로젝트를 마무리하며 같은 일을
                        겪었습니다. 팀원이 7명인데 2분이 협조적이지않고 프로젝트
                        끝날때까지 코드한줄 적지않는 상황이었는데도 잘
                        (매우힘들었지만)마무리 했습니다. 질문자분이 이기적이신건
                        절대아닙니다. 어딜가나 그런사람은 있더라구요... 정말
                        싫으시다면 말씀한번 드려보는게 좋을거같아요. 왜냐면 그
                        한사람때문에 팀의 분위
                        <span>
                          ...{"{"}" "{"}"}
                          <span className="tw-text-slate-500 tw-cursor-pointer">
                            더 보기
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="tw-p-1 tw-pt-0 tw-flex tw-flex-col tw-items-start">
                    <div className="tw-p-3">
                      <button
                        className="tw-flex tw-items-center tw-p-0 tw-underline-offset-2 hover:tw-underline"
                        type="button"
                      >
                        <span className="tw-text-xs tw-text-color-text-subtler">
                          좋아요 <b>7</b>
                        </span>
                      </button>
                    </div>
                    <div className="tw-flex tw-items-center">
                      <button
                        type="button"
                        className="tw-flex tw-items-center tw-gap-1 tw-p-3"
                      >
                        <svg
                          width={20}
                          height={20}
                          strokeWidth={0}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="tw-fill-color-teal-600"
                        >
                          <g>
                            <g id="style=solid">
                              <path
                                id="Vector"
                                d="M2.40002 12.5999C2.40002 12.3635 2.44658 12.1295 2.53704 11.9111C2.6275 11.6927 2.76009 11.4943 2.92723 11.3271C3.09438 11.16 3.29281 11.0274 3.51119 10.9369C3.72958 10.8465 3.96365 10.7999 4.20002 10.7999C4.4364 10.7999 4.67047 10.8465 4.88885 10.9369C5.10724 11.0274 5.30567 11.16 5.47282 11.3271C5.63996 11.4943 5.77255 11.6927 5.86301 11.9111C5.95347 12.1295 6.00002 12.3635 6.00002 12.5999V19.7999C6.00002 20.2773 5.81038 20.7351 5.47282 21.0727C5.13525 21.4103 4.67741 21.5999 4.20002 21.5999C3.72263 21.5999 3.2648 21.4103 2.92723 21.0727C2.58967 20.7351 2.40002 20.2773 2.40002 19.7999V12.5999ZM7.20002 12.3995V18.9155C7.19982 19.3615 7.32389 19.7987 7.55832 20.1781C7.79275 20.5576 8.12827 20.8641 8.52722 21.0635L8.58722 21.0935C9.25309 21.4263 9.98723 21.5997 10.7316 21.5999H17.2308C17.7859 21.6001 18.3238 21.408 18.7531 21.0561C19.1824 20.7043 19.4764 20.2146 19.5852 19.6703L21.0252 12.4703C21.0948 12.1221 21.0863 11.7629 21.0003 11.4184C20.9143 11.074 20.7529 10.7529 20.5278 10.4783C20.3027 10.2037 20.0195 9.98254 19.6986 9.83065C19.3777 9.67875 19.0271 9.59994 18.672 9.5999H14.4V4.7999C14.4 4.16338 14.1472 3.55293 13.6971 3.10285C13.247 2.65276 12.6365 2.3999 12 2.3999C11.6818 2.3999 11.3765 2.52633 11.1515 2.75137C10.9265 2.97642 10.8 3.28164 10.8 3.5999V4.4003C10.8 5.43888 10.4632 6.44944 9.84002 7.2803L8.16002 9.5195C7.53688 10.3504 7.20002 11.3609 7.20002 12.3995Z"
                              />
                            </g>
                          </g>
                        </svg>
                        <span className="tw-text-xs tw-font-bold tw-tabular-nums tw-text-color-teal-600">
                          좋아요
                        </span>
                      </button>
                      <a
                        className="tw-flex tw-items-center tw-gap-1 tw-p-3"
                        href="/qnas/2221"
                      >
                        <svg
                          width={20}
                          height={20}
                          strokeWidth={0}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="tw-fill-color-slate-500"
                        >
                          <g>
                            <g id="style=outline">
                              <path
                                id="Vector (Stroke)"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5 5C4.73478 5 4.48043 5.10536 4.29289 5.29289C4.10536 5.48043 4 5.73478 4 6V14C4 14.2652 4.10536 14.5196 4.29289 14.7071C4.48043 14.8946 4.73478 15 5 15H9C9.55228 15 10 15.4477 10 16V18.5858L13.2929 15.2929C13.4804 15.1054 13.7348 15 14 15H19C19.2652 15 19.5196 14.8946 19.7071 14.7071C19.8946 14.5196 20 14.2652 20 14V6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5H5ZM2.87868 3.87868C3.44129 3.31607 4.20435 3 5 3H19C19.7957 3 20.5587 3.31607 21.1213 3.87868C21.6839 4.44129 22 5.20435 22 6V14C22 14.7957 21.6839 15.5587 21.1213 16.1213C20.5587 16.6839 19.7957 17 19 17H14.4142L9.70711 21.7071C9.42111 21.9931 8.99099 22.0787 8.61732 21.9239C8.24364 21.7691 8 21.4045 8 21V17H5C4.20435 17 3.44129 16.6839 2.87868 16.1213C2.31607 15.5587 2 14.7956 2 14V6C2 5.20435 2.31607 4.44129 2.87868 3.87868ZM7 10C7 9.44772 7.44772 9 8 9H8.01C8.56228 9 9.01 9.44772 9.01 10C9.01 10.5523 8.56228 11 8.01 11H8C7.44772 11 7 10.5523 7 10ZM11 10C11 9.44772 11.4477 9 12 9H12.01C12.5623 9 13.01 9.44772 13.01 10C13.01 10.5523 12.5623 11 12.01 11H12C11.4477 11 11 10.5523 11 10ZM15 10C15 9.44772 15.4477 9 16 9H16.01C16.5623 9 17.01 9.44772 17.01 10C17.01 10.5523 16.5623 11 16.01 11H16C15.4477 11 15 10.5523 15 10Z"
                              />
                            </g>
                          </g>
                        </svg>
                        <span className="tw-text-xs tw-font-bold tw-text-color-slate-500 tw-tabular-nums">
                          댓글 0
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <hr className="tw-border-color-slate-200 tw-my-0 tw-w-full" />
              </div>
            </div>
          </div>
        </QnaActivityColSpanBox>
      </QnaActivityBox>
    </QnaActivityContainer>
  );
}
export default QnaActivity;
