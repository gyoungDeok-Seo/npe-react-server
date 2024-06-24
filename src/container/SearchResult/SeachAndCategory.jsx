import styled from "styled-components";
import SearchBox from "../../components/SearchResult/SeachAndCategory/SearchBox";
import CategoryBox from "../../components/SearchResult/SeachAndCategory/CategoryBox";

const SearchCategoryBarBox = styled.div`
  z-index: 4;
`;
const SearchCategoryBarInner = styled.div`
  background-color: rgb(255 255 255 / 1);
  width: 100%;
  top: 3.5rem;
`;
function SeachAndCategory({category, setCategory }) {
  return (
    <SearchCategoryBarBox>
      <SearchCategoryBarInner>
        <SearchBox />
        {/* <CategoryBox category={category} setCategory={setCategory}/> */}
      </SearchCategoryBarInner>
    </SearchCategoryBarBox>
  );
}
export default SeachAndCategory;
