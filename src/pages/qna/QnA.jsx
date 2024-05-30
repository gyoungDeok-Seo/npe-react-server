import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import "./qna.css";

function CloseCategoryList(e) {
    const categoryListBox = document.querySelector(".category-list-box");
    const categoryArrowSvg = document.querySelector(".category-arrow-svg");
    if (!e.target.closest(".category-select-box")) {
        categoryListBox.classList.add("hidden");
        categoryArrowSvg.classList.remove("up-down-reversal");
    }
}

function ClickCategory() {
    const categoryListBox = document.querySelector(".category-list-box");
    const categoryArrowSvg = document.querySelector(".category-arrow-svg");
    categoryListBox.classList.toggle("hidden");
    categoryArrowSvg.classList.toggle("up-down-reversal");
}

function QnA() {
    return (
        // useRef 사용처
        <div className="wrapper" onClick={CloseCategoryList}>
            <div style={{ position: "fixed", zIndex: 9999, top: "16px", left: "16px", right: "16px", bottom: "16px", pointerEvents: "none" }} className="global-toaster"></div>
            <div>
                <Header />
                <div className="qna-container">
                    <div className="qna-sidebar-wrap">
                        <div className="qna-sidebar-box">
                            <div className="sidebar-top-box">
                                <div className="category-select-box">
                                    {/* useRef 사용처 */}
                                    <button type="button" className="category-btn" onClick={ClickCategory}>
                                        <span className="selected-category-name">JAVA</span>
                                        <svg width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="category-arrow-svg">
                                            <g>
                                                <g id="style=outline">
                                                    <path id="arrowDown" fillRule="evenodd" clipRule="evenodd" d="M12 15.5858L20.2929 7.29289C20.6834 6.90237 21.3166 6.90237 21.7071 7.29289C22.0976 7.68342 22.0976 8.31658 21.7071 8.70711L12.7071 17.7071C12.3166 18.0976 11.6834 18.0976 11.2929 17.7071L2.29289 8.70711C1.90237 8.31658 1.90237 7.68342 2.29289 7.29289C2.68342 6.90237 3.31658 6.90237 3.70711 7.29289L12 15.5858Z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </button>
                                    <div className="category-list-box hidden">
                                        <Link className="category-item-link" to="">
                                            <svg width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="selected-svg">
                                                <g>
                                                    <g id="style=outline">
                                                        <path id="Vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M19.669 6.25671C20.0795 6.62617 20.1128 7.25846 19.7433 7.66897L10.7433 17.669C10.5598 17.8729 10.3005 17.9925 10.0263 17.9997C9.75204 18.0069 9.48688 17.9011 9.29289 17.7071L4.29289 12.707C3.90237 12.3165 3.90237 11.6833 4.2929 11.2928C4.68343 10.9023 5.31659 10.9023 5.70711 11.2928L9.96181 15.5476L18.2567 6.33104C18.6262 5.92053 19.2585 5.88726 19.669 6.25671Z"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                            <span className="category-name selected-category">JAVA</span>
                                        </Link>
                                        <Link className="category-item-link" to="">
                                            <span className="category-name">Python</span>
                                        </Link>
                                        <Link className="category-item-link" to="">
                                            <span className="category-name">C언어</span>
                                        </Link>
                                        <Link className="category-item-link" to="">
                                            <span className="category-name">C++</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="qna-search-box">
                                    <svg width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="qna-search-svg">
                                        <g>
                                            <g id="style=outline">
                                                <path id="search" fillRule="evenodd" clipRule="evenodd" d="M15.4551 9.84879C15.4551 12.9451 12.9451 15.4551 9.84879 15.4551C6.75253 15.4551 4.24251 12.9451 4.24251 9.84879C4.24251 6.75253 6.75253 4.24251 9.84879 4.24251C12.9451 4.24251 15.4551 6.75253 15.4551 9.84879ZM16.0841 14.6165C17.0962 13.2948 17.6976 11.642 17.6976 9.84879C17.6976 5.51402 14.1836 2 9.84879 2C5.51402 2 2 5.51402 2 9.84879C2 14.1836 5.51402 17.6976 9.84879 17.6976C11.6421 17.6976 13.295 17.0961 14.6167 16.0839C14.6435 16.119 14.6729 16.1527 14.705 16.1848L20.2269 21.7067C20.6175 22.0972 21.2506 22.0972 21.6412 21.7067L21.7069 21.641C22.0975 21.2504 22.0975 20.6173 21.7069 20.2267L16.185 14.7048C16.1529 14.6727 16.1192 14.6433 16.0841 14.6165Z"></path>
                                            </g>
                                        </g>
                                    </svg>
                                    <input type="search" className="qna-search-input" placeholder="질문 검색" name="" />
                                    {/* useState 사용처 */}
                                    <button type="button" className="qna-search-cancel-btn">
                                        <svg width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="qna-search-cancel-svg">
                                            <g>
                                                <g id="style=solid">
                                                    <path
                                                        id="Vector"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M22 12C22 13.3132 21.7413 14.6136 21.2388 15.8268C20.7362 17.0401 19.9997 18.1425 19.0711 19.0711C18.1425 19.9997 17.0401 20.7362 15.8268 21.2388C14.6136 21.7413 13.3132 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C4.00035 18.1425 3.26375 17.0401 2.7612 15.8268C2.25866 14.6136 2 13.3132 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12ZM9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289Z"
                                                    ></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="qna-tap-box">
                                <Link className="qna-tap" href="">
                                    <span className="qna-tap-name selected-tap">최신 질문</span>
                                </Link>
                                <Link className="qna-tap" href="">
                                    <span className="qna-tap-name">답변을 기다리는 질문</span>
                                </Link>
                            </div>
                            <div className="qna-activity-box">
                                <button type="button" className="write-qna-btn">
                                    <svg width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="qna-write-svg">
                                        <g>
                                            <g id="style=outline">
                                                <path
                                                    id="Vector (Stroke)"
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M19.4032 4.05005C19.2803 3.99977 19.1487 3.97447 19.0159 3.97562C18.8831 3.97678 18.7519 4.00436 18.6299 4.05677C18.5079 4.10918 18.3975 4.18536 18.3053 4.28087L18.2931 4.29327L10 12.5864V14.0002H11.4138L19.7069 5.70706L19.7193 5.69487C19.8148 5.60263 19.891 5.49228 19.9434 5.37028C19.9958 5.24827 20.0234 5.11705 20.0245 4.98428C20.0257 4.8515 20.0004 4.71982 19.9501 4.59692C19.8998 4.47402 19.8256 4.36237 19.7317 4.26848C19.6378 4.17459 19.5261 4.10033 19.4032 4.05005ZM18.9985 1.9757C19.3968 1.97224 19.7919 2.04814 20.1606 2.19899C20.5293 2.34983 20.8642 2.57259 21.1459 2.85427C21.4276 3.13594 21.6503 3.4709 21.8012 3.83959C21.952 4.20827 22.0279 4.60331 22.0245 5.00165C22.021 5.39999 21.9382 5.79365 21.781 6.15966C21.6251 6.52273 21.3989 6.85138 21.1156 7.12676L12.5351 15.7073C12.3476 15.8948 12.0932 16.0002 11.828 16.0002H9C8.44772 16.0002 8 15.5524 8 15.0002V12.1722C8 11.9069 8.10536 11.6526 8.29289 11.4651L16.8734 2.88457C17.1488 2.60126 17.4774 2.37511 17.8405 2.21915C18.2065 2.06192 18.6002 1.97916 18.9985 1.9757ZM3.87868 4.87884C4.44129 4.31623 5.20435 4.00016 6 4.00016H11C11.5523 4.00016 12 4.44788 12 5.00016C12 5.55245 11.5523 6.00016 11 6.00016H6C5.73478 6.00016 5.48043 6.10552 5.29289 6.29306C5.10536 6.48059 5 6.73495 5 7.00016V18.0002C5 18.2654 5.10536 18.5197 5.29289 18.7073C5.48043 18.8948 5.73478 19.0002 6 19.0002H17C17.2652 19.0002 17.5196 18.8948 17.7071 18.7073C17.8946 18.5197 18 18.2654 18 18.0002V13.0002C18 12.4479 18.4477 12.0002 19 12.0002C19.5523 12.0002 20 12.4479 20 13.0002V18.0002C20 18.7958 19.6839 19.5589 19.1213 20.1215C18.5587 20.6841 17.7957 21.0002 17 21.0002H6C5.20435 21.0002 4.44129 20.6841 3.87868 20.1215C3.31607 19.5589 3 18.7958 3 18.0002V7.00016C3 6.20451 3.31607 5.44145 3.87868 4.87884Z"
                                                ></path>
                                            </g>
                                        </g>
                                    </svg>
                                    <span className="question">질문하기</span>
                                </button>
                                <Link href="">
                                    <button type="button" className="my-qna-btn">
                                        <span className="my-qna">내 Q&A 활동</span>
                                        <svg width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="right-arrow-svg">
                                            <g>
                                                <g id="style=outline">
                                                    <path id="arrowRight" fillRule="evenodd" clipRule="evenodd" d="M15.5858 12L7.29289 20.2929C6.90237 20.6834 6.90237 21.3166 7.29289 21.7071C7.68342 22.0976 8.31658 22.0976 8.70711 21.7071L17.7071 12.7071C18.0976 12.3166 18.0976 11.6834 17.7071 11.2929L8.70711 2.29289C8.31658 1.90237 7.68342 1.90237 7.29289 2.29289C6.90237 2.68342 6.90237 3.31658 7.29289 3.70711L15.5858 12Z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="qna-main-wrap">
                        <div></div>
                        <div></div>
                        <section></section>
                        <h3></h3>
                        <Link></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default QnA;
