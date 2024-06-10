import styled from "styled-components";

const SearchResultCatagoryBox = styled.div`
  background-color: rgb(255 255 255 / 1);
  border-color: #e2e8f0;
  border-width: 0;
  border-style: solid;
  border-bottom-width: 1px;
`;

const SearchResultCatagoryInner = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-color: #e2e8f0;
  border-style: solid;
  border-bottom-width: 0;
  border-bottom-width: 1px;
  border-width: 0;
  overflow-x: auto;
  max-width: 1024px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;
const SearchResultCatagoryBtn = styled.button`
  color: ${(props) => (props.category ? "#0f172a" : "#64748b")};
  font-size: 1rem;
  padding-top: 1.25rem;
  padding-bottom: 1.125rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #fff;
  border-color: ${(props) => (props.category ? "#0f172a" : "transparent")};
  border-style: solid;
  border-bottom-width: 2px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.25rem;
  flex-shrink: 0;
  min-width: 3rem;
`;
const SearchResultCatagoryBtnText = styled.span`
  line-height: 1.5;
  font-weight: 700;
  word-break: break-all;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;
const SearchResultCatagoryBtnContentText = styled.div`
  line-height: 1.5;
  font-weight: 700;
`;

function CategoryBox({ category, setCategory }) {
  return (
    <SearchResultCatagoryBox>
      <SearchResultCatagoryInner>
        <SearchResultCatagoryBtn
          type="button"
          category={category === 1}
          onClick={() => setCategory(1)}
        >
          <SearchResultCatagoryBtnText>전체</SearchResultCatagoryBtnText>
        </SearchResultCatagoryBtn>
        <SearchResultCatagoryBtn
          type="button"
          category={category === 2}
          onClick={() => setCategory(2)}
        >
          <SearchResultCatagoryBtnText>프로필</SearchResultCatagoryBtnText>
          <SearchResultCatagoryBtnContentText>
            64
          </SearchResultCatagoryBtnContentText>
        </SearchResultCatagoryBtn>
        <SearchResultCatagoryBtn
          type="button"
          category={category === 3}
          onClick={() => setCategory(3)}
        >
          <SearchResultCatagoryBtnText>게시물</SearchResultCatagoryBtnText>
          <SearchResultCatagoryBtnContentText>
            999+
          </SearchResultCatagoryBtnContentText>
        </SearchResultCatagoryBtn>
        <SearchResultCatagoryBtn
          type="button"
          category={category === 4}
          onClick={() => setCategory(4)}
        >
          <SearchResultCatagoryBtnText>
            현직자 Q&amp;A
          </SearchResultCatagoryBtnText>
          <SearchResultCatagoryBtnContentText>
            681
          </SearchResultCatagoryBtnContentText>
        </SearchResultCatagoryBtn>
      </SearchResultCatagoryInner>
    </SearchResultCatagoryBox>
  );
}
export default CategoryBox;
