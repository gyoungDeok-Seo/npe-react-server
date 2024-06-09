import { Link } from "react-router-dom";
import styled from "styled-components";

const SearchResultLink = styled(Link)`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #fff;
  border-bottom: 1px solid #e2e8f0;
  &:last-child {
    border: none;
  }
`;

const ResultQnaTitle = styled.h3`
  color: #0f172a;
  font-weight: 700;
  font-size: 1rem;
  word-break: break-all;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  margin-bottom: 0.25rem;
`;
const ResultQnaQ = styled.span`
  color: #94a3b8;
  margin-right: 0.25rem;
`;
const ResultQnaContent = styled.p`
  color: #0f172a;
  font-size: 0.875rem;
  -webkit-line-clamp: 2;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  font-weight: 500;
`;
const ResultQnaSubContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;
const ResultQnaAnswer = styled.p`
  color: #0f172a;
  font-size: 0.75rem;
`;
const ResultQnaCreateAtAndCount = styled.p`
  color: #64748b;
  font-size: 0.75rem;
  display: flex;
  gap: 0.625rem;
`;

function ResultQna() {
  return (
    <SearchResultLink to="#">
      <ResultQnaTitle>
        <ResultQnaQ>Q. </ResultQnaQ>
        <em>검색</em>에서의 필터링 로직 구현 질문
      </ResultQnaTitle>
      <ResultQnaContent>
        플러터를 통해서 앱을 만들고 있습니다. 현재 백엔드를 통해서 데이터를
        받아오고 있습니다. 다만 이 과정에서 필터링 관련 고민이 하나 있습니다.
        받아와야하는 데이터 셋이 500 ...
      </ResultQnaContent>
      <ResultQnaSubContent>
        <ResultQnaAnswer>
          답변<span>1</span>
        </ResultQnaAnswer>
        <ResultQnaCreateAtAndCount>
          <span>
            조회&nbsp;<span>237</span>
          </span>
          <span>4달 전</span>
        </ResultQnaCreateAtAndCount>
      </ResultQnaSubContent>
    </SearchResultLink>
  );
}
export default ResultQna;
