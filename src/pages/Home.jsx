import MainHeader from "../components/Header/MainHeader";
import "./home.css";

function HomePage() {
    return (
        <div className="wrapper">
            <div>
                <MainHeader />
                <div>
                    <div className="container">
                        <div className="left-content-box">
                            <button type="button" className="post_write-btn" href="">
                                <img className="member-profile-img" src="https://publy-cdn.s3.ap-northeast-2.amazonaws.com/static/images/img_profile-dummy.png" alt="profile picture" title="profile picture" />
                                <span className="write-alt">나누고 싶은 생각이 있으신가요?</span>
                                <svg width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="pen-svg">
                                    <g>
                                        <g id="style=solid">
                                            <g id="Subtract">
                                                <path d="M22.0003 5.49886C22.0003 6.42721 21.6315 7.31753 20.9751 7.97397L20.1822 8.76684L15.232 3.81663L16.0249 3.02376C16.6813 2.36732 17.5717 1.99854 18.5 1.99854C19.4283 1.99854 20.3187 2.36732 20.9751 3.02376C21.6315 3.6802 22.0003 4.57052 22.0003 5.49886Z"></path>
                                                <path d="M13.8178 5.23085L18.768 10.1811L7.20711 21.742C7.01957 21.9295 6.76522 22.0349 6.5 22.0349H3C2.44772 22.0349 2 21.5871 2 21.0349V17.4629C2 17.1976 2.10536 16.9433 2.29289 16.7558L13.8178 5.23085Z"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </button>
                            <div className="post-list-wrap">
                                <div className="post-list-container">
                                    <div>
                                        <div className="post-box">
                                            <div className="writer-info">
                                                <a className="writer-profile-link" href="">
                                                    <div className="writer-profile-box">
                                                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                            <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                                <img style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2780%27%20height=%2780%27/%3e" alt="" />
                                                            </span>
                                                            <img style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} className="writer-profile-img" src="https://careerly.co.kr/_next/image?url=https%3A%2F%2Fpubly-cdn.s3.ap-northeast-2.amazonaws.com%2Fuser-uploaded%2F488438%2F2023.07%2Faa5af5f69c1d42ea1c8598da2951b698f6a90928437873597a8f0aedea03547a.jpeg&w=96&q=75" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="writer-info-box">
                                                        <p className="writer-name">이양일</p>
                                                        <p className="writer-corporation">NaverCloud 백엔드 개발자</p>
                                                        <p className="write-time">하루 전</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="post-items">
                                                <p className="post-title">📊 Rate Limit Algorithm 을 시각화해서 알아보기</p>
                                                <div>
                                                    <div role="button">
                                                        <div className="post-content-box" style={{ overflowWrap: "break-word", display: "block" }}>
                                                            <p>Rate Limit 은 특정 기간 동안 설정된 한도를 초과하는 요청을 차단하여 서비스의 트래픽을 제어</p>
                                                            <span>
                                                                ... <span className="post-content-more">더 보기</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="link-preview-box">
                                                <a href="" target="_blank" rel="origin">
                                                    <div className="link-preview-info">
                                                        <div className="link-preview-content">
                                                            <p className="link-preview-title">rate limiter - smudge.ai blog</p>
                                                            <p className="link-preview-platform">Smudge</p>
                                                        </div>
                                                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", position: "relative", maxWidth: "100%" }}>
                                                            <span style={{ boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px", maxWidth: "100%" }}>
                                                                <img style={{ display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: "0px", margin: "0px", padding: "0px" }} src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27160%27%20height=%27120%27/%3e" alt="" />
                                                            </span>
                                                            <img style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} className="link-preview-img" src="https://careerly.co.kr/_next/image?url=https%3A%2F%2Fpubly-cdn.s3.amazonaws.com%2Farticle-thumbnails%2F2024.05%2Fc6c8970d2ec791839a56ec6febba55c9f813003b2edb901c4b32cd7b3709ca8b.webp&w=256&q=75" alt="" />
                                                        </span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="post-stats-box">
                                                <div className="liker-section">
                                                    <button type="button" className="liker-view-btn">
                                                        <p className="like-count">좋아요 <b>1</b></p>
                                                    </button>
                                                </div>
                                                <a href="#"></a>
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>
                                    <hr className="dividing-line" />
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomePage;
