import { Link } from "react-router-dom";

function ClickPrevBTN(e) {
    const prevSvg = e.currentTarget.querySelector(".prev-svg");
    const nextSvg = e.currentTarget.parentElement.querySelector(".next-btn .next-svg");
    const container = e.currentTarget.closest(".best-answer-container") || e.currentTarget.closest(".today-top-ten-container");
    const questionsListTrailer = container.querySelector(".questions-list-trailer");

    if (prevSvg.classList.contains("disabled")) {
        return;
    }

    prevSvg.classList.toggle("disabled");
    nextSvg.classList.toggle("disabled");
    questionsListTrailer.style.transform = "translate3d(0px, 0px, 0px)";
}

function ClickNextBTN(e) {
    const nextSvg = e.currentTarget.querySelector(".next-svg");
    const prevSvg = e.currentTarget.parentElement.querySelector(".prev-btn .prev-svg");
    const container = e.currentTarget.closest(".best-answer-container") || e.currentTarget.closest(".today-top-ten-container");
    const questionsListTrailer = container.querySelector(".questions-list-trailer");

    if (nextSvg.classList.contains("disabled")) {
        return;
    }

    prevSvg.classList.toggle("disabled");
    nextSvg.classList.toggle("disabled");
    questionsListTrailer.style.transform = "translate3d(-744px, 0px, 0px)";
}

function QnaMainContents() {
    return (
        <div className="qna-main-wrap">
            <div className="today-top-ten-container">
                <div className="contents-header-box">
                    <h3 className="contents-title">오늘의 질문 Top 10</h3>
                    <div className="contents-page-btn-box">
                        <button type="button" className="prev-btn" onClick={ClickPrevBTN}>
                            <svg width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="prev-svg disabled">
                                <g>
                                    <g id="style=outline">
                                        <path id="Vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M10.7071 4.2929C11.0976 4.68342 11.0976 5.31659 10.7071 5.70711L5.41423 10.9999H21C21.5523 10.9999 22 11.4477 22 11.9999C22 12.5522 21.5523 12.9999 21 12.9999H5.4142L10.7071 18.2929C11.0976 18.6834 11.0976 19.3166 10.7071 19.7071C10.3166 20.0976 9.68341 20.0976 9.29289 19.7071L2.29289 12.7071C2.10535 12.5195 2 12.2652 2 11.9999C2 11.7347 2.10536 11.4804 2.2929 11.2928L9.2929 4.29289C9.68342 3.90237 10.3166 3.90237 10.7071 4.2929Z"></path>
                                    </g>
                                </g>
                            </svg>
                        </button>
                        <button type="button" className="next-btn" onClick={ClickNextBTN}>
                            <svg width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="next-svg">
                                <g>
                                    <g id="style=outline">
                                        <path id="Vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M13.2929 19.7071C12.9024 19.3166 12.9024 18.6834 13.2929 18.2929L18.5858 13L3 13C2.44772 13 2 12.5523 2 12C2 11.4478 2.44772 11 3 11L18.5858 11.0001L13.2929 5.7071C12.9024 5.31658 12.9024 4.68341 13.2929 4.29289C13.6834 3.90237 14.3166 3.90237 14.7071 4.29289L21.7071 11.2929C21.8946 11.4805 22 11.7348 22 12.0001C22 12.2653 21.8946 12.5196 21.7071 12.7072L14.7071 19.7071C14.3166 20.0976 13.6834 20.0976 13.2929 19.7071Z"></path>
                                    </g>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="contents-list-box">
                    <div className="questions-view-box">
                        <div className="questions-list-trailer">
                            <div className="questions-list-slide" style={{ width: "348px", marginRight: "24px" }}>
                                <Link className="question-box" href="">
                                    <div className="ranking-box">
                                        <span className="ranking-number high-ranking-color">1</span>
                                    </div>
                                    <div className="question-content-box">
                                        <span className="question-content">it 시장 언제까지 안좋을련지…</span>
                                        <div className="question-stats-box">
                                            <span className="question-stat">답변 5</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">추천해요 3</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">보충이 필요해요 3</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">조회 1,573</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="question-box" href="">
                                    <div className="ranking-box">
                                        <span className="ranking-number high-ranking-color">2</span>
                                    </div>
                                    <div className="question-content-box">
                                        <span className="question-content">it 시장 언제까지 안좋을련지…</span>
                                        <div className="question-stats-box">
                                            <span className="question-stat">답변 5</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">추천해요 3</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">보충이 필요해요 3</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">조회 1,573</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="question-box" href="">
                                    <div className="ranking-box">
                                        <span className="ranking-number high-ranking-color">3</span>
                                    </div>
                                    <div className="question-content-box">
                                        <span className="question-content">it 시장 언제까지 안좋을련지…</span>
                                        <div className="question-stats-box">
                                            <span className="question-stat">답변 5</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">추천해요 3</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">보충이 필요해요 3</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">조회 1,573</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="questions-list-slide" style={{ width: "348px", marginRight: "24px" }}>
                                <Link className="question-box" href="">
                                    <div className="ranking-box">
                                        <span className="ranking-number low-ranking-color">4</span>
                                    </div>
                                    <div className="question-content-box">
                                        <span className="question-content">it 시장 언제까지 안좋을련지…</span>
                                        <div className="question-stats-box">
                                            <span className="question-stat">답변 5</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">추천해요 3</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">보충이 필요해요 3</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">조회 1,573</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="question-box" href="">
                                    <div className="ranking-box">
                                        <span className="ranking-number low-ranking-color">5</span>
                                    </div>
                                    <div className="question-content-box">
                                        <span className="question-content">it 시장 언제까지 안좋을련지…</span>
                                        <div className="question-stats-box">
                                            <span className="question-stat">답변 5</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">추천해요 3</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">보충이 필요해요 3</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">조회 1,573</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="question-box" href="">
                                    <div className="ranking-box">
                                        <span className="ranking-number low-ranking-color">6</span>
                                    </div>
                                    <div className="question-content-box">
                                        <span className="question-content">it 시장 언제까지 안좋을련지…</span>
                                        <div className="question-stats-box">
                                            <span className="question-stat">답변 5</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">추천해요 3</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">보충이 필요해요 3</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">조회 1,573</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="questions-list-slide" style={{ width: "348px", marginRight: "24px" }}>
                                <Link className="question-box" href="">
                                    <div className="ranking-box">
                                        <span className="ranking-number low-ranking-color">7</span>
                                    </div>
                                    <div className="question-content-box">
                                        <span className="question-content">it 시장 언제까지 안좋을련지…</span>
                                        <div className="question-stats-box">
                                            <span className="question-stat">답변 5</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">추천해요 3</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">보충이 필요해요 3</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">조회 1,573</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="question-box" href="">
                                    <div className="ranking-box">
                                        <span className="ranking-number low-ranking-color">8</span>
                                    </div>
                                    <div className="question-content-box">
                                        <span className="question-content">it 시장 언제까지 안좋을련지…</span>
                                        <div className="question-stats-box">
                                            <span className="question-stat">답변 5</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">추천해요 3</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">보충이 필요해요 3</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">조회 1,573</span>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="question-box" href="">
                                    <div className="ranking-box">
                                        <span className="ranking-number low-ranking-color">9</span>
                                    </div>
                                    <div className="question-content-box">
                                        <span className="question-content">it 시장 언제까지 안좋을련지…</span>
                                        <div className="question-stats-box">
                                            <span className="question-stat">답변 5</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">추천해요 3</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">보충이 필요해요 3</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">조회 1,573</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="questions-list-slide" style={{ width: "348px", marginRight: "24px" }}>
                                <Link className="question-box" href="">
                                    <div className="ranking-box">
                                        <span className="ranking-number low-ranking-color">10</span>
                                    </div>
                                    <div className="question-content-box">
                                        <span className="question-content">it 시장 언제까지 안좋을련지…</span>
                                        <div className="question-stats-box">
                                            <span className="question-stat">답변 5</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">추천해요 3</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">보충이 필요해요 3</span>
                                            <span className="question-stat">•</span>
                                            <span className="question-stat">조회 1,573</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="best-answer-container">
                <div className="contents-header-box">
                    <h3 className="contents-title">답변 베스트</h3>
                    <div className="contents-page-btn-box">
                        <button type="button" className="prev-btn" onClick={ClickPrevBTN}>
                            <svg width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="prev-svg disabled">
                                <g>
                                    <g id="style=outline">
                                        <path id="Vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M10.7071 4.2929C11.0976 4.68342 11.0976 5.31659 10.7071 5.70711L5.41423 10.9999H21C21.5523 10.9999 22 11.4477 22 11.9999C22 12.5522 21.5523 12.9999 21 12.9999H5.4142L10.7071 18.2929C11.0976 18.6834 11.0976 19.3166 10.7071 19.7071C10.3166 20.0976 9.68341 20.0976 9.29289 19.7071L2.29289 12.7071C2.10535 12.5195 2 12.2652 2 11.9999C2 11.7347 2.10536 11.4804 2.2929 11.2928L9.2929 4.29289C9.68342 3.90237 10.3166 3.90237 10.7071 4.2929Z"></path>
                                    </g>
                                </g>
                            </svg>
                        </button>
                        <button type="button" className="next-btn" onClick={ClickNextBTN}>
                            <svg width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="next-svg">
                                <g>
                                    <g id="style=outline">
                                        <path id="Vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M13.2929 19.7071C12.9024 19.3166 12.9024 18.6834 13.2929 18.2929L18.5858 13L3 13C2.44772 13 2 12.5523 2 12C2 11.4478 2.44772 11 3 11L18.5858 11.0001L13.2929 5.7071C12.9024 5.31658 12.9024 4.68341 13.2929 4.29289C13.6834 3.90237 14.3166 3.90237 14.7071 4.29289L21.7071 11.2929C21.8946 11.4805 22 11.7348 22 12.0001C22 12.2653 21.8946 12.5196 21.7071 12.7072L14.7071 19.7071C14.3166 20.0976 13.6834 20.0976 13.2929 19.7071Z"></path>
                                    </g>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="contents-list-box">
                    <div className="questions-view-box">
                        <div className="questions-list-trailer">
                            <div className="questions-list-slide" style={{ width: "348px", marginRight: "24px" }}>
                                <Link className="answer-box" href="">
                                    <span className="answer-question">백엔드 입문 - spring VS django</span>
                                    <div className="answer-content-box">
                                        <span className="question-stat">답변 7</span>
                                        <span className="question-stat">•</span>
                                        <span className="question-stat">답변 좋아요 56</span>
                                    </div>
                                </Link>
                                <Link className="answer-box" href="">
                                    <span className="answer-question">백엔드 입문 - spring VS django</span>
                                    <div className="answer-content-box">
                                        <span className="question-stat">답변 7</span>
                                        <span className="question-stat">•</span>
                                        <span className="question-stat">답변 좋아요 56</span>
                                    </div>
                                </Link>
                                <Link className="answer-box" href="">
                                    <span className="answer-question">백엔드 입문 - spring VS django</span>
                                    <div className="answer-content-box">
                                        <span className="question-stat">답변 7</span>
                                        <span className="question-stat">•</span>
                                        <span className="question-stat">답변 좋아요 56</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="questions-list-slide" style={{ width: "348px", marginRight: "24px" }}>
                                <Link className="answer-box" href="">
                                    <span className="answer-question">백엔드 입문 - spring VS django</span>
                                    <div className="answer-content-box">
                                        <span className="question-stat">답변 7</span>
                                        <span className="question-stat">•</span>
                                        <span className="question-stat">답변 좋아요 56</span>
                                    </div>
                                </Link>
                                <Link className="answer-box" href="">
                                    <span className="answer-question">백엔드 입문 - spring VS django</span>
                                    <div className="answer-content-box">
                                        <span className="question-stat">답변 7</span>
                                        <span className="question-stat">•</span>
                                        <span className="question-stat">답변 좋아요 56</span>
                                    </div>
                                </Link>
                                <Link className="answer-box" href="">
                                    <span className="answer-question">백엔드 입문 - spring VS django</span>
                                    <div className="answer-content-box">
                                        <span className="question-stat">답변 7</span>
                                        <span className="question-stat">•</span>
                                        <span className="question-stat">답변 좋아요 56</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="questions-list-slide" style={{ width: "348px", marginRight: "24px" }}>
                                <Link className="answer-box" href="">
                                    <span className="answer-question">백엔드 입문 - spring VS django</span>
                                    <div className="answer-content-box">
                                        <span className="question-stat">답변 7</span>
                                        <span className="question-stat">•</span>
                                        <span className="question-stat">답변 좋아요 56</span>
                                    </div>
                                </Link>
                                <Link className="answer-box" href="">
                                    <span className="answer-question">백엔드 입문 - spring VS django</span>
                                    <div className="answer-content-box">
                                        <span className="question-stat">답변 7</span>
                                        <span className="question-stat">•</span>
                                        <span className="question-stat">답변 좋아요 56</span>
                                    </div>
                                </Link>
                                <Link className="answer-box" href="">
                                    <span className="answer-question">백엔드 입문 - spring VS django</span>
                                    <div className="answer-content-box">
                                        <span className="question-stat">답변 7</span>
                                        <span className="question-stat">•</span>
                                        <span className="question-stat">답변 좋아요 56</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="questions-list-slide" style={{ width: "348px", marginRight: "24px" }}>
                                <Link className="answer-box" href="">
                                    <span className="answer-question">백엔드 입문 - spring VS django</span>
                                    <div className="answer-content-box">
                                        <span className="question-stat">답변 7</span>
                                        <span className="question-stat">•</span>
                                        <span className="question-stat">답변 좋아요 56</span>
                                    </div>
                                </Link>
                                <Link className="answer-box" href="">
                                    <span className="answer-question">백엔드 입문 - spring VS django</span>
                                    <div className="answer-content-box">
                                        <span className="question-stat">답변 7</span>
                                        <span className="question-stat">•</span>
                                        <span className="question-stat">답변 좋아요 56</span>
                                    </div>
                                </Link>
                                <Link className="answer-box" href="">
                                    <span className="answer-question">백엔드 입문 - spring VS django</span>
                                    <div className="answer-content-box">
                                        <span className="question-stat">답변 7</span>
                                        <span className="question-stat">•</span>
                                        <span className="question-stat">답변 좋아요 56</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="interest-topic-section">
                <div className="section-title-box">
                    <h3 className="section-title-headline">관심 주제 찾기</h3>
                    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "24px", height: "24px", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                        <span style={{ boxSizing: "border-box", display: "block", width: "100%", height: "100%", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                            <img style={{ display: "block", maxWidth: "100%", width: "100%", height: "100%", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2724%27%20height=%2724%27/%3e" alt="" />
                        </span>
                        <img style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "24px", height: "24px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} src="https://careerly.co.kr/_next/image?url=%2F_next%2Fstatic%2Fimages%2Fimg_magnifying_glass_tilted_left-89cf9762ed7d639dff91f773a8f2ace9.png&w=48&q=75" alt="관심 주제 찾기 옆 돋보기 아이콘" />
                    </span>
                </div>
                {/* 태그 목록은 20개 */}
                <ul className="interest-topic_list">
                    <li className="interest-topic-item">
                        <Link className="interest-topic-item-link" href="">
                            <span className="interest-topic-item-name">react</span>
                        </Link>
                    </li>
                    <li className="interest-topic-item">
                        <Link className="interest-topic-item-link" href="">
                            <span className="interest-topic-item-name">java</span>
                        </Link>
                    </li>
                    <li className="interest-topic-item">
                        <Link className="interest-topic-item-link" href="">
                            <span className="interest-topic-item-name">프론트엔드</span>
                        </Link>
                    </li>
                    <li className="interest-topic-item">
                        <Link className="interest-topic-item-link" href="">
                            <span className="interest-topic-item-name">백엔드</span>
                        </Link>
                    </li>
                    <li className="interest-topic-item">
                        <Link className="interest-topic-item-link" href="">
                            <span className="interest-topic-item-name">취업</span>
                        </Link>
                    </li>
                    <li className="interest-topic-item">
                        <Link className="interest-topic-item-link" href="">
                            <span className="interest-topic-item-name">spring</span>
                        </Link>
                    </li>
                    <li className="interest-topic-item">
                        <Link className="interest-topic-item-link" href="">
                            <span className="interest-topic-item-name">javascript</span>
                        </Link>
                    </li>
                    <li className="interest-topic-item">
                        <Link className="interest-topic-item-link" href="">
                            <span className="interest-topic-item-name">비전공자</span>
                        </Link>
                    </li>
                    <li className="interest-topic-item">
                        <Link className="interest-topic-item-link" href="">
                            <span className="interest-topic-item-name">신입</span>
                        </Link>
                    </li>
                    <li className="interest-topic-item">
                        <Link className="interest-topic-item-link" href="">
                            <span className="interest-topic-item-name">이직</span>
                        </Link>
                    </li>
                    <li className="interest-topic-item">
                        <Link className="interest-topic-item-link" href="">
                            <span className="interest-topic-item-name">python</span>
                        </Link>
                    </li>
                    <li className="interest-topic-item">
                        <Link className="interest-topic-item-link" href="">
                            <span className="interest-topic-item-name">next.js</span>
                        </Link>
                    </li>
                    <li className="interest-topic-item">
                        <Link className="interest-topic-item-link" href="">
                            <span className="interest-topic-item-name">인공지능</span>
                        </Link>
                    </li>
                    <li className="interest-topic-item">
                        <Link className="interest-topic-item-link" href="">
                            <span className="interest-topic-item-name">포트폴리오</span>
                        </Link>
                    </li>
                    <li className="interest-topic-item">
                        <Link className="interest-topic-item-link" href="">
                            <span className="interest-topic-item-name">부트캠프</span>
                        </Link>
                    </li>
                    <li className="interest-topic-item">
                        <Link className="interest-topic-item-link" href="">
                            <span className="interest-topic-item-name">node.js</span>
                        </Link>
                    </li>
                    <li className="interest-topic-item">
                        <Link className="interest-topic-item-link" href="">
                            <span className="interest-topic-item-name">react-native</span>
                        </Link>
                    </li>
                    <li className="interest-topic-item">
                        <Link className="interest-topic-item-link" href="">
                            <span className="interest-topic-item-name">ios</span>
                        </Link>
                    </li>
                    <li className="interest-topic-item">
                        <Link className="interest-topic-item-link" href="">
                            <span className="interest-topic-item-name">flutter</span>
                        </Link>
                    </li>
                    <li className="interest-topic-item">
                        <Link className="interest-topic-item-link" href="">
                            <span className="interest-topic-item-name">연봉</span>
                        </Link>
                    </li>
                </ul>
            </section>
            <h3 className="main-contents-headline">최신 질문</h3>
            <Link className="qna-main-item" href="">
                <div className="qna-header">
                    <svg width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="answer-svg">
                        <g>
                            <g id="style=outline">
                                <path
                                    id="Vector (Stroke)"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5 5C4.73478 5 4.48043 5.10536 4.29289 5.29289C4.10536 5.48043 4 5.73478 4 6V14C4 14.2652 4.10536 14.5196 4.29289 14.7071C4.48043 14.8946 4.73478 15 5 15H9C9.55228 15 10 15.4477 10 16V18.5858L13.2929 15.2929C13.4804 15.1054 13.7348 15 14 15H19C19.2652 15 19.5196 14.8946 19.7071 14.7071C19.8946 14.5196 20 14.2652 20 14V6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5H5ZM2.87868 3.87868C3.44129 3.31607 4.20435 3 5 3H19C19.7957 3 20.5587 3.31607 21.1213 3.87868C21.6839 4.44129 22 5.20435 22 6V14C22 14.7957 21.6839 15.5587 21.1213 16.1213C20.5587 16.6839 19.7957 17 19 17H14.4142L9.70711 21.7071C9.42111 21.9931 8.99099 22.0787 8.61732 21.9239C8.24364 21.7691 8 21.4045 8 21V17H5C4.20435 17 3.44129 16.6839 2.87868 16.1213C2.31607 15.5587 2 14.7956 2 14V6C2 5.20435 2.31607 4.44129 2.87868 3.87868ZM7 10C7 9.44772 7.44772 9 8 9H8.01C8.56228 9 9.01 9.44772 9.01 10C9.01 10.5523 8.56228 11 8.01 11H8C7.44772 11 7 10.5523 7 10ZM11 10C11 9.44772 11.4477 9 12 9H12.01C12.5623 9 13.01 9.44772 13.01 10C13.01 10.5523 12.5623 11 12.01 11H12C11.4477 11 11 10.5523 11 10ZM15 10C15 9.44772 15.4477 9 16 9H16.01C16.5623 9 17.01 9.44772 17.01 10C17.01 10.5523 16.5623 11 16.01 11H16C15.4477 11 15 10.5523 15 10Z"
                                ></path>
                            </g>
                        </g>
                    </svg>
                    <p className="time-writer-type">
                        <span>10분 전</span>
                        <span>&nbsp;·&nbsp;</span>
                        <span>백승훈 님의 새로운 답변</span>
                    </p>
                </div>
                <p className="qna-title">
                    <span className="qna-title-inside">상황에 의한 퇴사를 고민중입니다.</span>
                </p>
                <p className="qna-content">
                    안녕하세요, 한 중소기업에서 일하고있는 2년차 웹 개발자입니다. 다름아니라 최근 일련의 한 사건으로 인해 퇴사를 고민중입니다. 저희팀은 팀장 1명에 팀원 3명으로 구성된 팀입니다. 최근 팀장의 기분이 매우 언짢은 주간에 단체로 1:1 면담을 진행하였습니다. 대부분의 내용은 현재 상황에 대한 모두까기식 질책이었습니다. 하지만 그 과정에서 팀 내 특정 인원을 본인이 편애한다고 대놓고 저에게 밝혔습니다. 그 편애하는 대상은 제 동기였습니다. 이전까지는 업무나 회사생활 가운데 편애하는 것 같은 심증만 있었을뿐인데 저에게는 어떻게 보면 팀장을 통해 심증이 물증으로 입증된 시간이었습니다. 면담 이후 부터는 별로 중요하지 않은 곁가지 도는 업무 또는 단순 유지보수 업무만 부여되고 일부 개선 업무를 진행하여도 해당 내용을 확인 후 적용하지도 않고 흐지부지 넘어가는 형국이 여러번 이어졌습니다. 그러나 편애한다는 그 동기에게는 다른 모듈과 협의가 잦고 연계해야하는 것이나 프로젝트에서 비중이 꽤 있는 업무, 팀장과 협업하거나 팀 내에서도 비중이 꽤 있는 업무들이 배정되었습니다. 제가 현재까지 한 업무들을 보면
                    지연이나 크리티컬한 운영 이슈가 발생한 적도 없는데 이런 상황이 지속되면서 동기에 비해 업계에서 소위 말하는 물경력이 되어가는 것은 당연하고 업무관련 채팅을 보내면 답은 늦고 관심이 매우 낮은편인 상황에서 저는 그 면담시간에 들었던 말에 갇혀 하루하루 멘탈이 나가고있는 상황이라 이런 상황이라면 퇴사를 하는 것이 맞을까요? 현실적으로 주변에서는 시기를 버텨내야한다고 얘기하는데 제가 무엇을 시도하려고 한들 지금 팀장 아래에서는 버텨내는 것이 무언가 시간낭비라고 느껴지는데 현실적인 조언 부탁드립니다.
                </p>
                <div className="qna-tag-box">
                    <p className="tag-name">#이직</p>
                    <p className="tag-name">#직장생활</p>
                    <p className="tag-name">#퇴사</p>
                    <p className="tag-name">#번아웃</p>
                    <p className="tag-name">#회사생활</p>
                </div>
                <div className="qna-stat-box">
                    <p className="answer-count">
                        답변 <span>1</span>
                    </p>
                    <p className="reply-count">
                        댓글 <span>0</span>
                    </p>
                    <p className="hits-count">
                        조회 <span>12</span>
                    </p>
                </div>
            </Link>
        </div>
    );
}
export default QnaMainContents;
