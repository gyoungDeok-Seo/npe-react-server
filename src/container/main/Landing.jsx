import "./landing.css";

function Landing() {
  return (
    <section className="box">
      <div className="inner">
        <span
          style={{
            boxSizing: "border-box",
            display: "block",
            overflow: "hidden",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        >
          <img
            alt="title background"
            sizes="100vw"
            src="https://careerly.co.kr/_next/image?url=https%3A%2F%2Fpubly-cdn.s3.ap-northeast-2.amazonaws.com%2Fadmin%2Fcareerly%2Flanding-pages%2Fimage%2F6528b5b2362e3cd58e15f5e0_1697426536.png&w=1920&q=100"
            decoding="async"
            data-nimg="fill"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              boxSizing: "border-box",
              padding: 0,
              border: "none",
              margin: "auto",
              display: "block",
              width: 0,
              height: 0,
              minWidth: "100%",
              maxWidth: "100%",
              minHeight: "100%",
              maxHeight: "100%",
              objectFit: "cover",
            }}
          />
        </span>
        <div className="comment-box ">
          <div className="comment-inner">
            <div className="top-comment">
              개발 트렌드부터 Q&amp;A, 네트워킹까지
            </div>
            <div className="bottom-comment">
              요즘 개발자들의 <br />
              필수 커뮤니티, 커리어리
            </div>
            <div className="join-btns-box">
              <button type="button" className="kakao-join-btn">
                <img
                  className="kakao-img"
                  src="https://careerly.co.kr/_next/static/images/img_symbol-kakao-b1fe6197135e5beead71b1a90f8e2b7d.png"
                  alt="kakao_icon"
                />
                <span>카카오로 3초만에 가입하기</span>
              </button>
              <button type="button" className="email-join-btn">
                이메일로 가입하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Landing;
