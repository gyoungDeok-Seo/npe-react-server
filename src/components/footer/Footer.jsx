import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-box">
        <div className="footer-top">
          <a target="_blank" href="https://publy.co/content/755">
            <span className="terms">이용약관</span>
          </a>
          <div className="slate"></div>
          <a target="_blank" href="https://publy.co/content/756">
            <span className="privacy">개인정보 처리방침</span>
          </a>
        </div>
        <div className="footer-mid">
          <span>(주) 퍼블리</span>
          <div className="slate"></div>
          <span>대표이사: 박소령</span>
          <div className="slate"></div>
          <span>사업자 등록번호: 198-81-00096</span>
          <div className="slate"></div>
          <span>서울시 강남구 테헤란로 503 하이브로빌딩 10층</span>
          <div className="slate"></div>
          <span>통신 판매업: 2020-서울강남-02648</span>
          <div className="slate"></div>
          <span>직업 정보: J1200020230004</span>
          <div className="slate"></div>
          <span>유료직업소개사업: 제 2024-3220250-14-5-00011호</span>
        </div>
        <div className="footer-bottom">
          커리어리 서비스에서 제공하는 상품 정보에 대하여 (주)퍼블리는
          통신판매중개자이며 통신판매의 당사자가 아닙니다.
          <br />
          따라서 (주)퍼블리는 상품, 거래 정보 및 가격에 대하여 어떠한 의무와
          책임도 부담하지 않습니다.&nbsp;
          <a
            href="https://publy.co/content/7268"
            rel="noreferrer"
            target="_blank"
          >
            <span className="consumer-resolution-link">
              소비자분쟁해결기준
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
