import ResultPost from "../../components/SearchResult/ResultBox/ResultPost";
import {
  SearchResultMainContent,
  SearchResultProfilesBox,
  SearchResultProfilesContentBox,
  SearchResultProfilesFlexBox,
  SearchResultProfilesInner,
  SearchResultProfilesTitle,
  SearchResultProfilesTitleBar,
} from "./ResultBox";
function CategoryPost() {
  return (
    <SearchResultMainContent>
      <SearchResultProfilesBox>
        <SearchResultProfilesInner>
          <SearchResultProfilesFlexBox>
            <SearchResultProfilesTitleBar>
              <SearchResultProfilesTitle>게시물 1,883</SearchResultProfilesTitle>
            </SearchResultProfilesTitleBar>
            <div>
              <SearchResultProfilesContentBox>
                {[1, 2, 3].map(() => (
                  <ResultPost />
                ))}
              </SearchResultProfilesContentBox>
            </div>
          </SearchResultProfilesFlexBox>
        </SearchResultProfilesInner>
      </SearchResultProfilesBox>
    </SearchResultMainContent>
  );
}
export default CategoryPost;
