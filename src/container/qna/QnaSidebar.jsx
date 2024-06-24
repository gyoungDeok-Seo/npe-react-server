import { Link } from "react-router-dom";
import SearchBox from "../../components/Qna/SearchBox";
import CategorySelectBox from "../../components/Qna/CategorySelectBox";
import TapBox from "../../components/Qna/TabBox";
import { styled } from "styled-components";

const QnaSidebarWrap = styled.div`
  grid-column: span 3 / span 3;
`;

const QnaSidebarBox = styled.div`
  position: sticky;
  padding-top: 2rem;
  padding-bottom: 2rem;
  overscroll-behavior: contain;
  overflow: scroll;
  gap: 2rem;
  flex-direction: column;
  height: calc(100vh - 56px);
  display: flex;
  top: 3.5rem;
  scrollbar-width: none;
`;

const SidebarTopBox = styled.div`
  gap: 1rem;
  flex-direction: column;
  display: flex;
`;

const QnaActivityBox = styled.div`
  gap: 1rem;
  flex-direction: column;
  display: flex;
`;

const WriteQnaBtn = styled(Link)`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background-color: #334155;
  border-color: #334155;
  border-style: solid;
  border-width: 1px;
  border-radius: 0.25rem;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;

  &:hover {
    background-color: #1e293b;
    border-color: #1e293b;
  }
`;

const QnaWriteSvg = styled.svg`
  fill: #fff;
  width: 1rem;
  height: 1rem;
`;

const Question = styled.span`
  color: #fff;
  font-weight: 700;
  font-size: 0.875rem;
`;

const MyQnaBtn = styled.button`
  color: rgb(51 65 85 / 1);
  font-weight: 700;
  font-size: 0.875rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  margin: -0.25rem;

  &:hover {
    color: rgb(30 41 59 / 1);
    background-color: #f8fafc;
  }
`;

const MyQna = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  margin-left: 0.125rem;
`;

const RightArrowSvg = styled.svg`
  fill: #334155;
  width: 1rem;
  height: 1rem;
`;

function QnaSidebar() {
  return (
    <QnaSidebarWrap>
      <QnaSidebarBox>
        <SidebarTopBox>
          <CategorySelectBox />
          <SearchBox />
        </SidebarTopBox>
        <TapBox />
        <QnaActivityBox>
          <WriteQnaBtn to="/qna/create">
            <QnaWriteSvg
              width="24"
              height="24"
              strokeWidth="0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
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
            </QnaWriteSvg>
            <Question>질문하기</Question>
          </WriteQnaBtn>
          {/* <Link href="">
                        <MyQnaBtn type="button">
                            <MyQna>내 Q&A 활동</MyQna>
                            <RightArrowSvg width="24" height="24" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <g id="style=outline">
                                        <path id="arrowRight" fillRule="evenodd" clipRule="evenodd" d="M15.5858 12L7.29289 20.2929C6.90237 20.6834 6.90237 21.3166 7.29289 21.7071C7.68342 22.0976 8.31658 22.0976 8.70711 21.7071L17.7071 12.7071C18.0976 12.3166 18.0976 11.6834 17.7071 11.2929L8.70711 2.29289C8.31658 1.90237 7.68342 1.90237 7.29289 2.29289C6.90237 2.68342 6.90237 3.31658 7.29289 3.70711L15.5858 12Z"></path>
                                    </g>
                                </g>
                            </RightArrowSvg>
                        </MyQnaBtn>
                    </Link> */}
        </QnaActivityBox>
      </QnaSidebarBox>
    </QnaSidebarWrap>
  );
}
export default QnaSidebar;
