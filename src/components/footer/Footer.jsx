import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  min-width: 1024px;
  border-style: solid;
  border-top-width: 1px;
  border-width: 0;
  border-color: #cbd5e1;
  background-color: #f8fafc;
`;
const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2.25rem;
  padding-top: 2.25rem;
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 48rem;
`;
const FooterTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  row-gap: 0.25rem;
`;
const Terms = styled.span`
  display: block;
  text-underline-offset: 2px;
  text-decoration-line: underline;
  color: #94a3b8;
  font-size: 0.75rem;
`;
const Slate = styled.div`
  width: 1px;
  height: 0.75rem;
  background-color: #cbd5e1;
`;
const Privacy = styled.div`
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  text-underline-offset: 2px;
  text-decoration-line: underline;
  color: #94a3b8;
`;
const FooterMid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  row-gap: 0.25rem;
  font-size: 0.75rem;
  color: #94a3b8;
`;
const FooterBottom = styled.div`
  text-align: center;
  font-size: 0.75rem;
  color: #94a3b8;
`;
const ConsumerResolutionLink = styled.span`
  font-size: 0.75rem;
  color: #94a3b8;
  text-decoration-line: underline;
  text-underline-offset: 2px;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterBox>
        <FooterTop>
          <a target="_blank" href="https://publy.co/content/755">
            <Terms>이용약관</Terms>
          </a>
          <Slate />
          <a target="_blank" href="https://publy.co/content/756">
            <Privacy>개인정보 처리방침</Privacy>
          </a>
        </FooterTop>
        <FooterMid>
          <span>(주) 퍼블리</span>
          <Slate />
          <span>대표이사: 박소령</span>
          <Slate />
          <span>사업자 등록번호: 198-81-00096</span>
          <Slate />
          <span>서울시 강남구 테헤란로 503 하이브로빌딩 10층</span>
          <Slate />
          <span>통신 판매업: 2020-서울강남-02648</span>
          <Slate />
          <span>직업 정보: J1200020230004</span>
          <Slate />
          <span>유료직업소개사업: 제 2024-3220250-14-5-00011호</span>
        </FooterMid>
        <FooterBottom>
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
            <ConsumerResolutionLink>소비자분쟁해결기준</ConsumerResolutionLink>
          </a>
        </FooterBottom>
      </FooterBox>
    </FooterContainer>
  );
}
export default Footer;
